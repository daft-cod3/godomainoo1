'use client';

import { quizzes } from '../data';
import Link from 'next/link';

export default function ReviewHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Review Answered Quizzes
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Select a quiz to review the questions and correct answers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {quizzes.map((quiz) => (
            <div key={quiz.href} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
                <h3 className="text-lg font-bold text-white">{quiz.name}</h3>
              </div>
              <div className="p-4 grid grid-cols-2 gap-3">
                {quiz.subQuizzes.map((subQuiz) => (
                  <Link key={subQuiz.id} href={`/quiz/review/${quiz.href.split('/').pop()}-${subQuiz.id}`} className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white text-center font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                    {subQuiz.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
