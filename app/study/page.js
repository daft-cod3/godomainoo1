"use client";
import Link from "next/link";
import { useLanguage } from "../components/LanguageContext";
import TheoryNotesCard from "../quiz/components/TheoryNotesCard";

export default function StudyPage() {
  const { t } = useLanguage();

  const cards = [
    {
      title: t("roadSigns", "Road Signs"),
      description: t(
        "roadSignsDescription",
        "Learn the meaning of road signs and signals",
      ),
      href: "/road-signs",
      icon: "🚦",
      gradient: "from-blue-500 to-cyan-500",
      hoverGradient: "from-blue-600 to-cyan-600",
      iconBg: "from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900",
    },
    {
      title: t("vehicleParts", "Vehicle Parts"),
      description: t(
        "vehiclePartsDescription",
        "Understand vehicle components and their functions",
      ),
      href: "/vehicle-parts",
      icon: "🚗",
      gradient: "from-purple-500 to-pink-500",
      hoverGradient: "from-purple-600 to-pink-600",
      iconBg:
        "from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900",
    },
    {
      title: t("trafficLights", "Traffic Lights"),
      description: t(
        "trafficLightsDescription",
        "Learn about traffic light signals and their meanings",
      ),
      href: "/traffic-lights",
      icon: "🚦",
      gradient: "from-red-500 to-yellow-500",
      hoverGradient: "from-red-600 to-yellow-600",
      iconBg: "from-red-100 to-yellow-100 dark:from-red-900 dark:to-yellow-900",
    },
    {
      title: t("roadLaws", "Road Laws"),
      description: t(
        "roadLawsDescription",
        "Explore rules and regulations that govern the road",
      ),
      href: "/roadLaws",
      icon: "📋",
      gradient: "from-orange-500 to-red-500",
      hoverGradient: "from-orange-600 to-red-600",
      iconBg: "from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900",
    },
    {
      title: t("safetyTraining", "Safety Training"),
      description: t(
        "safetyTrainingDescription",
        "Complete training designed to keep you safe on the road",
      ),
      href: "/roadLaws/training",
      icon: "🛡️",
      gradient: "from-indigo-500 to-blue-500",
      hoverGradient: "from-indigo-600 to-blue-600",
      iconBg:
        "from-indigo-100 to-blue-100 dark:from-indigo-900 dark:to-blue-900",
    },
    {
      title: t("practiceQuizzes", "Practice Quizzes"),
      description: t(
        "practiceQuizzesDescription",
        "Test your knowledge with interactive quizzes",
      ),
      href: "/quiz",
      icon: "📝",
      gradient: "from-yellow-500 to-orange-500",
      hoverGradient: "from-yellow-600 to-orange-600",
      iconBg:
        "from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-purple-400 to-pink-500 dark:from-purple-900 dark:to-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-br from-blue-400 to-cyan-500 dark:from-blue-900 dark:to-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-linear-to-br from-pink-400 to-rose-500 dark:from-pink-900 dark:to-rose-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="absolute top-20 left-10 text-2xl opacity-50 animate-bounce">
          📚
        </div>
        <div
          className="absolute top-40 right-20 text-xl opacity-50 animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          🎓
        </div>
        <div
          className="absolute bottom-40 left-20 text-lg opacity-50 animate-bounce"
          style={{ animationDelay: "2s" }}
        >
          💡
        </div>
        <div
          className="absolute bottom-20 right-10 text-2xl opacity-50 animate-bounce"
          style={{ animationDelay: "3s" }}
        >
          🏆
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-12 sm:mb-16 animate-fade-in">
          <div className="relative inline-block">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              <span className="relative">
                {t("studyMaterialsTitle")}
                <div className="absolute -inset-2 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 animate-pulse"></div>
              </span>
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x ml-4">
                {t("materialsWord", "Materials")}
              </span>
            </h1>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 leading-relaxed">
            {t("accessComprehensiveResources")}
          </p>
        </div>

        <div
          className="mb-12 sm:mb-16 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <TheoryNotesCard />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <Link
              href={card.href}
              key={card.href}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/40 hover:border-purple-400/50 dark:hover:border-purple-400/50">
                <div
                  className={`absolute inset-0 bg-linear-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-out`}
                ></div>

                <div className="absolute top-2 right-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-all duration-500 ease-out"></div>
                <div
                  className="absolute top-4 right-6 w-0.5 h-0.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-all duration-500 ease-out"
                  style={{ animationDelay: "0.2s" }}
                ></div>

                <div className="relative p-6 sm:p-8 flex flex-col h-full">
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${card.iconBg} rounded-2xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500 ease-out`}
                    ></div>
                    <div
                      className={`relative w-16 h-16 bg-linear-to-br ${card.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out`}
                    >
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-500 ease-out">
                        {card.icon}
                      </span>
                    </div>

                    <div
                      className={`absolute inset-0 bg-linear-to-br ${card.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 ease-out`}
                    ></div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-500 ease-out">
                    {card.title}
                  </h2>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed grow group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-500 ease-out">
                    {card.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:translate-x-2 transition-transform duration-500 ease-out">
                      <span>{t("explore")}</span>
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-500 ease-out"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>

                    <div className="w-8 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-linear-to-r ${card.gradient} w-0 group-hover:w-full transition-all duration-500 ease-out`}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                </div>

                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-400/30 dark:group-hover:border-purple-400/50 transition-all duration-500 ease-out"></div>
              </div>
            </Link>
          ))}
        </div>

        <div
          className="mt-16 sm:mt-20 text-center animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <div className="backdrop-blur-sm bg-white/60 dark:bg-gray-900/60 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {t("readyToStartLearning")}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
              {t("chooseAnyTopic")}
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t("takeAPracticeQuiz")}
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
