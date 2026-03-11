'use client';

import React, { useState } from 'react';
import { vehicleWarningLights, vehicleLights } from './data';
import Image from 'next/image';
import { useLanguage } from '../components/LanguageContext';
import { vehiclePartsResearch } from '../study/researchContent';

export default function VehiclePartsPage() {
  const { t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState(null);

  if (selectedItem) {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <button
            onClick={() => setSelectedItem(null)}
            className="mb-6 sm:mb-8 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('backToAll')}
          </button>

          <div className="backdrop-blur-sm bg-gray-900/80 rounded-2xl border border-gray-800 p-6 sm:p-8">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
              <div className="md:w-1/2 bg-linear-to-br from-gray-800 to-gray-900 rounded-xl p-6 sm:p-8 flex items-center justify-center">
                {selectedItem.image ? (
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    width={250}
                    height={250}
                    className="object-contain"
                  />
                ) : selectedItem.icon ? (
                  <span className="text-6xl sm:text-7xl md:text-8xl">{selectedItem.icon}</span>
                ) : null}
              </div>

              <div className="md:w-1/2">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{selectedItem.title}</h1>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">{selectedItem.description}</p>

                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h3 className="text-blue-400 font-semibold mb-2 text-sm sm:text-base">{t('whatToDo','What to Do')}:</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      {selectedItem.action || t('followManufacturer','Follow manufacturer guidelines and consult your vehicle manual for specific instructions.')}
                    </p>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h3 className="text-purple-400 font-semibold mb-2 text-sm sm:text-base">{t('importantNotes','Important Notes')}:</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      {selectedItem.notes || t('addressWarnings','Always address warning lights promptly to ensure vehicle safety and prevent potential damage.')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <header className="mb-12 sm:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {t('vehiclePartsSymbols','Vehicle Parts & Dashboard Symbols')}
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            {t('understandVehicleWarnings','Understand your vehicle\'s warning lights and indicators to ensure safe operation.')}
          </p>
        </header>

        <section className="mb-12 sm:mb-16">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
              {t('dashboardIndicators','Dashboard Indicators')}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              {t('exploreWarningLights','Explore all warning lights and indicators')}
            </p>
          </div>
          <div className="flex flex-row gap-4 sm:gap-6 overflow-x-auto pb-2 hide-scrollbar">
            {vehicleWarningLights.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedItem(item)}
                className="min-w-65 max-w-xs w-full text-left -shrink-0"
              >
                <div className="h-full backdrop-blur-sm bg-gray-900/80 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
                  <div className="relative h-56 sm:h-64 w-full bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center rounded-t-2xl">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={180}
                        height={180}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                    <div className="mt-3 sm:mt-4 text-blue-400 text-xs sm:text-sm font-medium flex items-center">
                      Learn More
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">
              Exterior & Interior Lights
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Explore all vehicle lights
            </p>
          </div>
          <div className="flex flex-row gap-4 sm:gap-6 overflow-x-auto pb-2 hide-scrollbar">
            {vehicleLights.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedItem(item)}
                className="min-w-65 max-w-xs w-full text-left shrink-0"
              >
                <div className="h-full backdrop-blur-sm bg-gray-900/80 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer">
                  <div className="relative h-40 sm:h-48 w-full bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4 rounded-t-2xl">
                    {item.icon && (
                      <span className="text-4xl sm:text-5xl">{item.icon}</span>
                    )}
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                    <div className="mt-3 sm:mt-4 text-purple-400 text-xs sm:text-sm font-medium flex items-center">
                      Learn More
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="mb-12 sm:mb-16">
          <div className="backdrop-blur-sm bg-gray-900/80 rounded-2xl border border-gray-800 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-3">
              3D Mercedes Model
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mb-6">
              View and inspect the Mercedes-Benz GLS 580 in 3D.
            </p>

            <div className="rounded-xl overflow-hidden border border-gray-700 bg-black">
              <iframe
                src="/theory-notes/mercedes-viewer.html"
                title="Mercedes-Benz GLS 580 3D model"
                loading="lazy"
                className="w-full h-[320px] sm:h-[460px] lg:h-[560px]"
              />
            </div>

            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href="/theory-notes/mercedes-viewer.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-cyan-700"
              >
                Open Full Viewer
              </a>
              <p className="text-xs sm:text-sm text-gray-400 self-center">
                Drag to rotate and scroll to zoom.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 sm:mb-16">
          <div className="backdrop-blur-sm bg-gray-900/80 rounded-2xl border border-gray-800 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {vehiclePartsResearch.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mb-6">
              {vehiclePartsResearch.subtitle}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {vehiclePartsResearch.modules.map((module, index) => (
                <div
                  key={`${module.title}-${index}`}
                  className="rounded-xl border border-gray-700 bg-gray-800/60 p-5"
                >
                  <h3 className="text-lg font-semibold text-blue-300 mb-3">{module.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                    {module.points.map((point, pointIndex) => (
                      <li key={`${point.slice(0, 20)}-${pointIndex}`}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Reference Sources</p>
              <ul className="space-y-1 text-sm">
                {vehiclePartsResearch.sources.map((source) => (
                  <li key={source.id}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-300 hover:underline"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
