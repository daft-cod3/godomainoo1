"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  getTargetLanguageCandidates,
  lookupDictionaryTranslation,
  normalizeLanguage,
} from "./translationLibrary";

const LanguageContext = createContext();
const cache = new Map();
const pendingTranslations = new Map();
const LOCAL_STORAGE_KEY = "language";

function normalizeForComparison(value) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

function isLikelyUntranslated(source, translated) {
  const a = normalizeForComparison(source);
  const b = normalizeForComparison(translated);
  if (!a || !b) return false;
  return a === b;
}

function hasLetters(value) {
  return /\p{L}/u.test(value);
}

function isKeyLike(value) {
  if (!value) return false;
  if (value.includes(" ")) return false;
  if (/[_-]/.test(value)) return true;
  return /[a-z][A-Z]/.test(value);
}

function humanize(value) {
  if (typeof value !== "string") return value;
  const trimmed = value.trim();
  if (!trimmed) return value;
  if (!isKeyLike(trimmed)) return value;

  const withSpaces = trimmed
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2");

  return withSpaces
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

async function fetchTranslation(text, targetLanguage) {
  const requestUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}`;

  const response = await fetch(requestUrl);

  if (!response.ok) {
    throw new Error(
      `Translation request failed with status ${response.status}`,
    );
  }

  const data = await response.json();
  const translated = Array.isArray(data?.[0])
    ? data[0].map((item) => item?.[0] || "").join("")
    : "";

  return translated || text;
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [translationVersion, setTranslationVersion] = useState(0);

  const bumpVersion = useCallback(() => {
    setTranslationVersion((value) => value + 1);
  }, []);

  useEffect(() => {
    const savedLang = normalizeLanguage(
      localStorage.getItem(LOCAL_STORAGE_KEY),
    );
    setLanguage(savedLang);
  }, []);

  useEffect(() => {
    const onStorage = (event) => {
      if (event.key !== LOCAL_STORAGE_KEY) return;
      setLanguage(normalizeLanguage(event.newValue));
    };

    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const resolvedLanguage = useMemo(
    () => normalizeLanguage(language),
    [language],
  );

  const changeLanguage = useCallback(
    (nextLanguage) => {
      const normalized = normalizeLanguage(nextLanguage);
      setLanguage((current) => {
        if (current !== normalized) {
          localStorage.setItem(LOCAL_STORAGE_KEY, normalized);
          bumpVersion();
        }
        return normalized;
      });
    },
    [bumpVersion],
  );

  const translateText = useCallback(
    async (inputText) => {
      if (typeof inputText !== "string") {
        return inputText;
      }

      const text = inputText.trim();
      if (!text || resolvedLanguage === "en") {
        return inputText;
      }

      const cacheKey = `${resolvedLanguage}:${text}`;
      const dictionaryTranslation = lookupDictionaryTranslation(
        resolvedLanguage,
        text,
        text,
      );

      if (dictionaryTranslation) {
        cache.set(cacheKey, dictionaryTranslation);
        return dictionaryTranslation;
      }

      if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
      }

      if (pendingTranslations.has(cacheKey)) {
        return pendingTranslations.get(cacheKey);
      }

      const languageCandidates = getTargetLanguageCandidates(resolvedLanguage);
      const translationPromise = (async () => {
        for (let index = 0; index < languageCandidates.length; index += 1) {
          const targetLanguage = languageCandidates[index];

          try {
            const translated = await fetchTranslation(text, targetLanguage);
            const hasFallback = index < languageCandidates.length - 1;

            if (hasFallback && isLikelyUntranslated(text, translated)) {
              continue;
            }

            cache.set(cacheKey, translated);
            bumpVersion();
            return translated;
          } catch {}
        }

        cache.set(cacheKey, inputText);
        return inputText;
      })();

      pendingTranslations.set(cacheKey, translationPromise);

      try {
        return await translationPromise;
      } finally {
        pendingTranslations.delete(cacheKey);
      }
    },
    [bumpVersion, resolvedLanguage],
  );

  const translateBatch = useCallback(
    async (values) => {
      if (!Array.isArray(values) || values.length === 0) {
        return {};
      }

      const unique = [
        ...new Set(
          values
            .map((value) => (typeof value === "string" ? value.trim() : ""))
            .filter((value) => Boolean(value) && hasLetters(value)),
        ),
      ];

      if (resolvedLanguage === "en") {
        return unique.reduce((acc, value) => {
          acc[value] = value;
          return acc;
        }, {});
      }

      const entries = await Promise.all(
        unique.map(async (value) => [value, await translateText(value)]),
      );

      return entries.reduce((acc, [original, translated]) => {
        acc[original] = translated || original;
        return acc;
      }, {});
    },
    [resolvedLanguage, translateText],
  );

  const t = useCallback(
    (key, fallback = null) => {
      const rawText = typeof fallback === "string" ? fallback : key;
      if (typeof rawText !== "string") {
        return rawText;
      }

      const displayText = humanize(rawText);
      if (resolvedLanguage === "en") {
        return displayText;
      }

      const dictionaryTranslation = lookupDictionaryTranslation(
        resolvedLanguage,
        key,
        displayText,
      );
      if (dictionaryTranslation) {
        return dictionaryTranslation;
      }

      const cacheKey = `${resolvedLanguage}:${displayText}`;
      if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
      }

      if (hasLetters(displayText)) {
        translateText(displayText).catch(() => {});
      }

      return displayText;
    },
    [resolvedLanguage, translateText],
  );

  const contextValue = useMemo(
    () => ({
      changeLanguage,
      language,
      resolvedLanguage,
      translationVersion,
      t,
      translateBatch,
      translateText,
    }),
    [
      changeLanguage,
      language,
      resolvedLanguage,
      t,
      translateBatch,
      translateText,
      translationVersion,
    ],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

// Helper component to render translated text with styling
export function TranslatedText({ children, className = "" }) {
  const { language } = useLanguage();
  return (
    <span
      className={`${language !== "en" ? "font-semibold uppercase tracking-wide" : ""} ${className}`}
    >
      {children}
    </span>
  );
}
