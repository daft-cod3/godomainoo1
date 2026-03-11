'use client';

import Link from 'next/link';
import { useLanguage } from '../../components/LanguageContext';

export default function VehiclePartsPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-slate-900 dark:to-black py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl mb-6 animate-bounce">
            <span className="text-4xl">🚗</span>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            <span className="block mb-2">Vehicle Parts</span>
            <span className="block text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learn Vehicle Components
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Master the essential parts of a vehicle
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span>⚙️</span> Key Vehicle Parts
            </h3>
            <ul className="space-y-3">
              {['Engine', 'Transmission', 'Brakes', 'Suspension', 'Steering', 'Exhaust', 'Battery', 'Radiator', 'Alternator', 'Fuel System'].map((part, i) => (
                <li key={part} className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all" style={{animationDelay: `${i * 0.1}s`}}>
                  <span className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">{i + 1}</span>
                  <span className="font-semibold text-lg text-gray-900 dark:text-white">{part}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-3xl border border-amber-200 dark:border-amber-800 p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-200 mb-4 flex items-center gap-2">
              <span>🚧</span> Quiz Coming Soon!
            </h3>
            <p className="text-lg text-amber-800 dark:text-amber-300 mb-4">
              Interactive vehicle parts quiz is under development. Check back later!
            </p>
            <div className="flex items-center gap-2 text-sm text-amber-700 dark:text-amber-400">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse animation-delay-200"></div>
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse animation-delay-400"></div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/quiz" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <span>←</span>
            {t('backToQuizzes','Back to Quizzes')}
          </Link>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
}
