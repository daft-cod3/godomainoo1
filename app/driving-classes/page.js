"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { CLASS_GROUPS, RESOURCE_LINKS } from "./classData";

function DrivingClassesContent() {
  const searchParams = useSearchParams();
  const cat = searchParams.get("cat") || "a";
  const data = CLASS_GROUPS[cat] || CLASS_GROUPS.a;

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${data.bg} px-4 py-16 dark:from-gray-900 dark:to-gray-950`}
    >
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-gray-900 transition-all hover:gap-3 dark:text-white"
        >
          <span>&larr;</span> Back to Home
        </Link>

        <div className="mb-12 text-center">
          <div className="mb-4 text-6xl font-black text-indigo-700 dark:text-indigo-300">
            {data.icon}
          </div>
          <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
            {data.title}
          </h1>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Open an individual class card for detailed requirements and resource
            links.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {Object.keys(CLASS_GROUPS).map((key) => (
            <Link
              key={key}
              href={`/driving-classes?cat=${key}`}
              className={`rounded-2xl border-2 p-6 transition-all ${
                cat === key
                  ? "border-green-500 bg-white dark:bg-gray-800"
                  : "border-gray-200 bg-white/50 hover:border-green-300 dark:border-gray-700 dark:bg-gray-800/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200">
                  {CLASS_GROUPS[key].icon}
                </div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {CLASS_GROUPS[key].title}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="space-y-6">
          {data.classes.map((cls) => (
            <div
              key={cls.id}
              className="overflow-hidden rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800"
            >
              <div className="mb-6 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
                <div>
                  <div className="mb-4 flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200">
                      {cls.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {cls.name}
                    </h2>
                  </div>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    {cls.desc}
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {cls.reqs.map((req) => (
                      <li key={req} className="flex items-start gap-2">
                        <span className="text-green-600">+</span> {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
                  <Image
                    src={cls.image}
                    alt={`${cls.name} class`}
                    width={720}
                    height={420}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/driving-classes/${cls.id}`}
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  View individual class details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-indigo-200 bg-white/90 p-6 dark:border-indigo-800 dark:bg-gray-900/80">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Quick resources for class planning
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {RESOURCE_LINKS.map((resource) => (
              <a
                key={resource.id}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-indigo-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-indigo-500"
              >
                <p className="text-xs uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
                  {resource.stat}
                </p>
                <p className="mt-1 text-base font-bold text-gray-900 dark:text-white">
                  {resource.title}
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {resource.description}
                </p>
                <p className="mt-3 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                  {resource.cta} &rarr;
                </p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default function DrivingClassesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-white text-sm text-gray-700 dark:bg-gray-950 dark:text-gray-200">
          Loading driving classes...
        </div>
      }
    >
      <DrivingClassesContent />
    </Suspense>
  );
}
