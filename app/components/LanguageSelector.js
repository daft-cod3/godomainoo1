"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";

const languages = [
  { code: "en", name: "English", flag: "EN" },
  { code: "sw", name: "Kiswahili", flag: "SW" },
  { code: "luo", name: "Luo", flag: "LUO" },
  { code: "ki", name: "Kikuyu", flag: "KI" },
  { code: "ka", name: "Kamba", flag: "KA" },
  { code: "kae", name: "Kalenjin", flag: "KLJ" },
  { code: "lu", name: "Luhya", flag: "LU" },
];

export default function LanguageSelector() {
  const { resolvedLanguage, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const selectedLanguage =
    languages.find((item) => item.code === resolvedLanguage) || languages[0];

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const onEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-linear-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 transition-colors"
      >
        <span className="text-lg">{selectedLanguage.flag}</span>
        <span className="text-sm font-medium">{selectedLanguage.name}</span>
        <svg
          aria-hidden="true"
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        role="listbox"
        aria-label="Languages"
        className={`${open ? "opacity-100 visible" : "opacity-0 invisible"} absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 z-50`}
      >
        {languages.map((lang) => (
          <button
            type="button"
            key={lang.code}
            role="option"
            aria-selected={resolvedLanguage === lang.code}
            onClick={() => {
              changeLanguage(lang.code);
              setOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
              resolvedLanguage === lang.code
                ? "bg-linear-to-r from-green-100 to-blue-100 dark:from-green-800/20 dark:to-blue-900/20 text-green-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="text-sm font-medium whitespace-nowrap">
              {lang.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
