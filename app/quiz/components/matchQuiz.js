"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const DEFAULT_MIN_PAIRS = 7;

function shuffleArray(values) {
  const next = [...values];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }
  return next;
}

function normalizeMatchItems(items) {
  if (!Array.isArray(items)) return [];

  const seenLabels = new Set();
  const seenImages = new Set();
  const normalized = [];

  for (let index = 0; index < items.length; index += 1) {
    const item = items[index];
    const image =
      typeof item?.image === "string" && item.image.trim()
        ? item.image.trim()
        : "";
    const rawLabel =
      typeof item?.label === "string" && item.label.trim()
        ? item.label.trim()
        : "";
    const label =
      rawLabel.length > 86 ? `${rawLabel.slice(0, 83)}...` : rawLabel;

    if (!image || !label) continue;

    const labelKey = label.toLowerCase();
    if (seenLabels.has(labelKey) || seenImages.has(image)) continue;

    seenLabels.add(labelKey);
    seenImages.add(image);

    normalized.push({
      id:
        typeof item?.id === "string" && item.id.trim()
          ? item.id.trim()
          : `match-item-${index}`,
      image,
      label,
    });
  }

  return normalized;
}

function formatTime(totalSeconds) {
  const safeSeconds = Math.max(totalSeconds, 0);
  const minutes = String(Math.floor(safeSeconds / 60)).padStart(2, "0");
  const seconds = String(safeSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export default function MatchQuiz({
  title = "Match The Signs",
  subtitle = "Tap an image, then tap its correct meaning on the right.",
  items = [],
  minPairs = DEFAULT_MIN_PAIRS,
  soundEnabled = true,
  onComplete,
  onSkip,
}) {
  const normalizedItems = useMemo(() => normalizeMatchItems(items), [items]);
  const canRenderQuiz = normalizedItems.length >= minPairs;

  const [labelOptions, setLabelOptions] = useState([]);
  const [matchedMap, setMatchedMap] = useState({});
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [selectedLabelId, setSelectedLabelId] = useState(null);
  const [feedbackState, setFeedbackState] = useState(null);
  const [hintState, setHintState] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [incorrectAttempts, setIncorrectAttempts] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  const completionNotifiedRef = useRef(false);
  const feedbackResetTimeoutRef = useRef(null);
  const hintResetTimeoutRef = useRef(null);
  const timerRef = useRef(null);
  const correctAudioRef = useRef(null);
  const incorrectAudioRef = useRef(null);

  const totalPairs = normalizedItems.length;
  const matchedCount = Object.keys(matchedMap).length;
  const remainingCount = Math.max(totalPairs - matchedCount, 0);
  const correctAttempts = Math.max(attempts - incorrectAttempts, 0);
  const accuracy = attempts ? Math.round((correctAttempts / attempts) * 100) : 100;
  const progressPercent = totalPairs ? (matchedCount / totalPairs) * 100 : 0;

  const matchedLabelIds = useMemo(
    () => new Set(Object.values(matchedMap)),
    [matchedMap],
  );

  const resetRound = () => {
    setLabelOptions(
      shuffleArray(normalizedItems.map(({ id, label }) => ({ id, label }))),
    );
    setMatchedMap({});
    setSelectedImageId(null);
    setSelectedLabelId(null);
    setFeedbackState(null);
    setHintState(null);
    setAttempts(0);
    setIncorrectAttempts(0);
    setStreak(0);
    setBestStreak(0);
    setHintsUsed(0);
    setSecondsElapsed(0);
    completionNotifiedRef.current = false;
  };

  useEffect(() => {
    correctAudioRef.current = new Audio("/audio/correct.mp3");
    incorrectAudioRef.current = new Audio("/audio/incorrect.mp3");
    correctAudioRef.current.volume = 0.6;
    incorrectAudioRef.current.volume = 0.6;

    return () => {
      if (feedbackResetTimeoutRef.current) {
        clearTimeout(feedbackResetTimeoutRef.current);
      }
      if (hintResetTimeoutRef.current) {
        clearTimeout(hintResetTimeoutRef.current);
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (correctAudioRef.current) correctAudioRef.current.pause();
      if (incorrectAudioRef.current) incorrectAudioRef.current.pause();
    };
  }, []);

  useEffect(() => {
    resetRound();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [normalizedItems]);

  useEffect(() => {
    if (!canRenderQuiz) return;
    if (matchedCount >= totalPairs) return;

    timerRef.current = setInterval(() => {
      setSecondsElapsed((value) => value + 1);
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [canRenderQuiz, matchedCount, totalPairs]);

  const playFeedbackSound = (isCorrect) => {
    if (!soundEnabled) return;
    const audio = isCorrect
      ? correctAudioRef.current
      : incorrectAudioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch((error) => {
      console.warn("Match quiz audio playback failed:", error);
    });
  };

  const clearFeedbackSoon = () => {
    if (feedbackResetTimeoutRef.current) {
      clearTimeout(feedbackResetTimeoutRef.current);
    }
    feedbackResetTimeoutRef.current = setTimeout(() => {
      setFeedbackState(null);
    }, 420);
  };

  const resolveAttempt = (imageId, labelId) => {
    if (matchedMap[imageId] || matchedLabelIds.has(labelId)) return;

    setAttempts((value) => value + 1);
    const isCorrect = imageId === labelId;

    if (isCorrect) {
      playFeedbackSound(true);
      setMatchedMap((current) => ({ ...current, [imageId]: labelId }));
      setStreak((current) => {
        const next = current + 1;
        setBestStreak((best) => Math.max(best, next));
        return next;
      });
      setFeedbackState({ type: "correct", imageId, labelId });
      clearFeedbackSoon();
    } else {
      playFeedbackSound(false);
      setIncorrectAttempts((value) => value + 1);
      setStreak(0);
      setFeedbackState({ type: "incorrect", imageId, labelId });
      clearFeedbackSoon();
    }

    setSelectedImageId(null);
    setSelectedLabelId(null);
    setHintState(null);
  };

  const handleImageSelect = (imageId) => {
    if (!canRenderQuiz || matchedMap[imageId]) return;
    if (selectedLabelId && !matchedLabelIds.has(selectedLabelId)) {
      resolveAttempt(imageId, selectedLabelId);
      return;
    }
    setSelectedImageId((current) => (current === imageId ? null : imageId));
  };

  const handleLabelSelect = (labelId) => {
    if (!canRenderQuiz || matchedLabelIds.has(labelId)) return;
    if (selectedImageId && !matchedMap[selectedImageId]) {
      resolveAttempt(selectedImageId, labelId);
      return;
    }
    setSelectedLabelId((current) => (current === labelId ? null : labelId));
  };

  const handleHint = () => {
    const unmatchedItems = normalizedItems.filter((item) => !matchedMap[item.id]);
    if (!unmatchedItems.length) return;
    const nextHint = unmatchedItems[Math.floor(Math.random() * unmatchedItems.length)];
    setHintsUsed((value) => value + 1);
    setSelectedImageId(nextHint.id);
    setHintState({ imageId: nextHint.id, labelId: nextHint.id });
    if (hintResetTimeoutRef.current) {
      clearTimeout(hintResetTimeoutRef.current);
    }
    hintResetTimeoutRef.current = setTimeout(() => {
      setHintState(null);
    }, 2500);
  };

  const handleShuffleLabels = () => {
    setLabelOptions((current) => shuffleArray(current));
    setSelectedLabelId(null);
    setHintState(null);
  };

  useEffect(() => {
    if (!canRenderQuiz || completionNotifiedRef.current) return;
    if (matchedCount !== totalPairs) return;

    completionNotifiedRef.current = true;
    onComplete?.({
      matched: matchedCount,
      totalPairs,
      attempts,
      incorrectAttempts,
      secondsElapsed,
      hintsUsed,
      accuracy,
      bestStreak,
    });
  }, [
    accuracy,
    attempts,
    bestStreak,
    canRenderQuiz,
    hintsUsed,
    incorrectAttempts,
    matchedCount,
    onComplete,
    secondsElapsed,
    totalPairs,
  ]);

  if (!canRenderQuiz) {
    return (
      <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-900 dark:border-amber-700/60 dark:bg-amber-900/20 dark:text-amber-200">
        <h3 className="text-lg font-bold">Match quiz setup is incomplete</h3>
        <p className="mt-2 text-sm">
          This matching round needs at least {minPairs} images and {minPairs}{" "}
          labels.
        </p>
        {typeof onSkip === "function" && (
          <button
            type="button"
            onClick={onSkip}
            className="mt-4 rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-700"
          >
            Continue with question quiz
          </button>
        )}
      </div>
    );
  }

  return (
    <section className="rounded-3xl border border-gray-200 bg-linear-to-br from-white to-slate-50 p-5 shadow-2xl dark:border-gray-800 dark:from-gray-900 dark:to-slate-900 sm:p-6 transform hover:scale-[1.01] transition-all duration-300">
      <div className="mb-5 rounded-2xl border border-indigo-200/60 bg-linear-to-r from-indigo-50 to-sky-50 p-4 shadow-lg dark:border-indigo-900/50 dark:from-indigo-950/40 dark:to-slate-900">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl flex items-center gap-2">
              <span className="text-2xl animate-bounce">🎯</span>
              {title}
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full bg-white px-3 py-1 text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-200 animate-fade-in">
              🎯 Matched: {matchedCount}/{totalPairs}
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-200 animate-fade-in">
              🎯 Accuracy: {accuracy}%
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-200 animate-fade-in">
              ⏱️ Time: {formatTime(secondsElapsed)}
            </span>
          </div>
        </div>

        <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-white/80 shadow-inner dark:bg-gray-800">
          <div
            className="h-full bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-500 transition-all duration-500 ease-out shadow-lg"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleHint}
            disabled={!remainingCount}
            className="rounded-xl border border-indigo-300 px-4 py-2 text-xs font-semibold text-indigo-700 transition-all duration-300 hover:scale-105 hover:bg-indigo-100 hover:shadow-md disabled:opacity-50 dark:border-indigo-800 dark:text-indigo-300 dark:hover:bg-indigo-900/30"
          >
            💡 Hint
          </button>
          <button
            type="button"
            onClick={handleShuffleLabels}
            className="rounded-xl border border-gray-300 px-4 py-2 text-xs font-semibold text-gray-700 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-md dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            🔀 Shuffle Labels
          </button>
          <button
            type="button"
            onClick={resetRound}
            className="rounded-xl border border-gray-300 px-4 py-2 text-xs font-semibold text-gray-700 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-md dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            🔄 Reset Round
          </button>
          {typeof onSkip === "function" && (
            <button
              type="button"
              onClick={onSkip}
              className="rounded-xl border border-gray-300 px-4 py-2 text-xs font-semibold text-gray-700 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-md dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              ⏩ Skip Matching
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400 flex items-center gap-2">
            <span>🖼️</span> Images
          </h3>
          <div className="space-y-3">
            {normalizedItems.map((item, index) => {
              const isMatched = Boolean(matchedMap[item.id]);
              const isSelected = selectedImageId === item.id;
              const isIncorrect =
                feedbackState?.type === "incorrect" &&
                feedbackState?.imageId === item.id;
              const isHinted = hintState?.imageId === item.id;

              let cardClass =
                "group w-full h-24 overflow-hidden rounded-2xl border-2 p-2 text-left transition-all duration-300";

              if (isMatched) {
                cardClass +=
                  " border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg shadow-green-500/20 dark:from-green-900/20 dark:to-emerald-900/20 scale-[0.98]";
              } else if (isIncorrect) {
                cardClass +=
                  " border-red-500 bg-gradient-to-br from-red-50 to-pink-50 text-red-700 shadow-lg shadow-red-500/20 dark:from-red-900/20 dark:to-pink-900/20 dark:text-red-200 animate-shake";
              } else if (isSelected) {
                cardClass +=
                  " border-indigo-500 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-xl shadow-indigo-500/30 dark:from-indigo-900/25 dark:to-purple-900/25 scale-105";
              } else if (isHinted) {
                cardClass +=
                  " border-cyan-500 bg-gradient-to-br from-cyan-50 to-blue-50 shadow-xl shadow-cyan-500/30 dark:from-cyan-900/20 dark:to-blue-900/20 animate-pulse";
              } else {
                cardClass +=
                  " border-gray-200 bg-gradient-to-br from-gray-50 to-white hover:border-indigo-300 hover:shadow-lg hover:scale-105 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900 dark:hover:border-indigo-500";
              }

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleImageSelect(item.id)}
                  disabled={isMatched}
                  className={cardClass}
                >
                  <div className="flex items-center gap-3 h-full">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-300 text-xs font-bold text-gray-700 bg-white shadow-sm dark:border-gray-600 dark:text-gray-200 dark:bg-gray-800">
                      {index + 1}
                    </span>
                    <div className="relative h-full flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-inner dark:border-gray-700 dark:bg-gray-900 group-hover:shadow-lg transition-shadow">
                      <Image
                        src={item.image}
                        alt={`Match item ${index + 1}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-contain p-1.5 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400 flex items-center gap-2">
            <span>🏷️</span> Labels
          </h3>
          <div className="space-y-3">
            {labelOptions.map((item, index) => {
              const isMatched = matchedLabelIds.has(item.id);
              const isSelected = selectedLabelId === item.id;
              const isIncorrect =
                feedbackState?.type === "incorrect" &&
                feedbackState?.labelId === item.id;
              const isHinted = hintState?.labelId === item.id;

              let labelClass =
                "w-full h-24 rounded-2xl border-2 px-4 py-3 text-left text-sm font-medium transition-all duration-300 flex items-center";

              if (isMatched) {
                labelClass +=
                  " border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 shadow-lg dark:from-green-900/20 dark:to-emerald-900/20 dark:text-green-200 scale-[0.98]";
              } else if (isIncorrect) {
                labelClass +=
                  " border-red-500 bg-gradient-to-r from-red-50 to-pink-50 text-red-700 shadow-lg dark:from-red-900/20 dark:to-pink-900/20 dark:text-red-200 animate-shake";
              } else if (isSelected) {
                labelClass +=
                  " border-indigo-500 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 shadow-xl dark:from-indigo-900/25 dark:to-purple-900/25 dark:text-indigo-200 scale-105";
              } else if (isHinted) {
                labelClass +=
                  " border-cyan-500 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-800 shadow-xl dark:from-cyan-900/20 dark:to-blue-900/20 dark:text-cyan-200 animate-pulse";
              } else {
                labelClass +=
                  " border-gray-200 bg-gradient-to-r from-gray-50 to-white text-gray-800 hover:border-indigo-300 hover:shadow-lg hover:scale-105 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900 dark:text-gray-100 dark:hover:border-indigo-500";
              }

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleLabelSelect(item.id)}
                  disabled={isMatched}
                  className={labelClass}
                >
                  <span className="mr-2 text-xs font-bold text-gray-500 dark:text-gray-400">
                    {index + 1}.
                  </span>
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 text-xs text-gray-600 dark:text-gray-300 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-linear-to-br from-gray-50 to-white px-4 py-3 shadow-sm dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
          🎯 Attempts: <span className="font-semibold">{attempts}</span>
        </div>
        <div className="rounded-xl border border-gray-200 bg-linear-to-br from-gray-50 to-white px-4 py-3 shadow-sm dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
          ❌ Incorrect: <span className="font-semibold text-red-600 dark:text-red-300">{incorrectAttempts}</span>
        </div>
        <div className="rounded-xl border border-gray-200 bg-linear-to-br from-gray-50 to-white px-4 py-3 shadow-sm dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
          🔥 Streak: <span className="font-semibold">{streak}</span> (Best {bestStreak})
        </div>
        <div className="rounded-xl border border-gray-200 bg-linear-to-br from-gray-50 to-white px-4 py-3 shadow-sm dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
          💡 Hints Used: <span className="font-semibold">{hintsUsed}</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-shake { animation: shake 0.3s ease-in-out; }
        .animate-fade-in { animation: fade-in 0.4s ease-out; }
      `}</style>
    </section>
  );
}
