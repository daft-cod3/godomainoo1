'use client';

import Link from 'next/link';
import { useLanguage } from '../../components/LanguageContext';

export default function PlaceholderQuizPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-slate-900 dark:to-black flex flex-col justify-center items-center text-center p-4 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl animate-bounce">
          <span className="text-5xl">🚧</span>
        </div>
        
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6 animate-fade-in">
          <span className="block mb-2">Quiz Coming Soon!</span>
          <span className="block text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Model Town Board
          </span>
        </h1>
        
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-2xl mb-8 transform hover:scale-105 transition-all duration-300">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            This quiz category is under development. Check back later!
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-200"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse animation-delay-400"></div>
          </div>
        </div>
        
        <Link href="/quiz" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <span>←</span>
          {t('backToQuizzes','Back to Quizzes')}
        </Link>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob { animation: blob 7s infinite ease-in-out; }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
}
