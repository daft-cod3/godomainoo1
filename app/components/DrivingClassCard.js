"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export default function DrivingClassCard({
  category,
  title,
  icon,
  students,
  link,
  color = "green",
}) {
  const { t } = useLanguage();
  const colorClasses = {
    green:
      "hover:border-green-500 dark:hover:border-green-400 hover:shadow-green-200 dark:hover:shadow-green-900",
    blue: "hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-blue-200 dark:hover:shadow-blue-900",
    yellow:
      "hover:border-yellow-500 dark:hover:border-yellow-400 hover:shadow-yellow-200 dark:hover:shadow-yellow-900",
    purple:
      "hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-purple-200 dark:hover:shadow-purple-900",
  };

  return (
    <Link href={link} className="group block">
      <div
        className={`relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-gray-200 dark:border-gray-700 ${colorClasses[color]} transition-all duration-300 transform hover:scale-105 hover:-translate-y-2`}
      >
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          {category}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
          {t(title, title)}
        </p>
        <div className="text-sm text-green-600 dark:text-green-400 font-medium">
          {students} {t("students", "students")}
        </div>
        <div className="absolute top-4 right-4 text-gray-400 group-hover:text-green-500 dark:group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300">
          →
        </div>
      </div>
    </Link>
  );
}
