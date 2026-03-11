"use client";

import { useRouter } from "next/navigation";
import DrivingClassCard from "./components/DrivingClassCard";
import { useLanguage } from "./components/LanguageContext";

const STATS = [
  { number: "50,000+", label: "Students trained" },
  { number: "95%", label: "Average pass rate" },
  { number: "320+", label: "Practice questions" },
  { number: "22", label: "Supported languages" },
];

const FEATURES = [
  {
    title: "NTSA-aligned content",
    description:
      "Structured lessons and quizzes built around the current driving curriculum.",
  },
  {
    title: "Local-language support",
    description:
      "Learners can read guidance in multiple local and regional languages.",
  },
  {
    title: "Study + quiz workflow",
    description:
      "Move from concepts to assessment with instant feedback on answers.",
  },
  {
    title: "Model town preparation",
    description:
      "Learn board navigation rules, parking methods, and practical test flow.",
  },
  {
    title: "Progress visibility",
    description:
      "Track completion and revisit weak topics before your practical exam.",
  },
  {
    title: "Mobile-ready learning",
    description:
      "Study from phone or desktop with consistent performance and layout.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Recent graduate",
    text: "I passed on my first attempt after practicing here daily for two weeks.",
  },
  {
    name: "John K.",
    role: "Driving instructor",
    text: "The content flow is easy for learners to follow and matches what we teach.",
  },
  {
    name: "Mary W.",
    role: "Student",
    text: "The model town explanations helped me understand lane choices quickly.",
  },
];

export default function Home() {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-slate-900 dark:to-black">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 animate-pulse"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 shadow-sm dark:border-emerald-700 dark:bg-emerald-950/40 animate-fade-in">
                <span className="text-xl">🇰🇪</span>
                <span className="text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                  {t("Official NTSA aligned learning")}
                </span>
                <span className="text-emerald-600 dark:text-emerald-400">✓</span>
              </div>
              
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl animate-slide-up">
                <span className="block mb-2">{t("Master Your")}</span>
                <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t("Driving Journey")}
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed animate-fade-in">
                {t("Kenya's most trusted digital driving school. Learn with modern technology, practice with real NTSA questions, and pass your test with confidence.")}
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row animate-fade-in">
                <button
                  type="button"
                  onClick={() => router.push("/study")}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-xl group-hover:scale-110 transition-transform">🚀</span>
                    {t("Start Learning Free")}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </button>
                
                <button
                  type="button"
                  onClick={() => router.push("/quiz")}
                  className="group rounded-xl border-2 border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-all duration-300 hover:scale-105 hover:border-green-400 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-green-500"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xl group-hover:scale-110 transition-transform">📊</span>
                    {t("Take Practice Test")}
                  </span>
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900/80 transform hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {t("At a glance")}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-slate-700 dark:from-slate-800 dark:to-slate-900"
                    style={{animationDelay: `${i * 0.1}s`}}
                  >
                    <p className="text-3xl font-extrabold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                      {stat.number}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {t(stat.label)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t("Why learners choose Rafiki")}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {t("Focused content, consistent practice, and practical guidance for Kenyan roads.")}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, i) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-green-300 dark:border-slate-800 dark:from-slate-900 dark:to-slate-800 dark:hover:border-green-600"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {t(feature.title)}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t(feature.description)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t("Choose your driving class")}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {t("Pick a category and begin with the right materials.")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <DrivingClassCard
              category="A"
              title="Motorcycles and three-wheelers"
              icon="🏍️"
              students="12,000+"
              link="/driving-classes?cat=a"
              color="green"
            />
            <DrivingClassCard
              category="B"
              title="Light vehicles"
              icon="🚗"
              students="25,000+"
              link="/driving-classes?cat=b"
              color="blue"
            />
            <DrivingClassCard
              category="C"
              title="Commercial vehicles"
              icon="🚚"
              students="8,000+"
              link="/driving-classes?cat=c"
              color="yellow"
            />
            <DrivingClassCard
              category="D"
              title="PSV and buses"
              icon="🚌"
              students="5,000+"
              link="/driving-classes?cat=d"
              color="purple"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t("Student feedback")}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {t("Experiences from learners and instructors.")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((item, i) => (
              <article
                key={item.name}
                className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-slate-800 dark:from-slate-900 dark:to-slate-800"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200 italic mb-4">
                  "{t(item.text)}"
                </p>
                <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t(item.role)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob { animation: blob 7s infinite ease-in-out; }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </main>
  );
}
