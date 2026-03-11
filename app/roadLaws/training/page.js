"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../components/LanguageContext";
import { safetyTrainingResearch } from "../../study/researchContent";

const RoadSafetyTrainingPage = () => {
  const { t } = useLanguage();

  const getContentKey = (sectionId, item) => {
    if (item.type === "text") {
      return `${sectionId}-${item.value?.slice(0, 40) || "text"}`;
    }

    if (Array.isArray(item.items) && item.items.length > 0) {
      return `${sectionId}-${item.items.map((entry) => entry.title).join("-")}`;
    }

    return `${sectionId}-${item.type || "content"}`;
  };

  const sections = [
    {
      id: "accident-causes",
      title: t("majorCausesOfRoadAccidents", "Major Causes of Road Accidents"),
      icon: "🚨",
      color: "orange",
      content: [
        {
          type: "text",
          value: t(
            "accidentCausesIntro",
            "Understanding the primary causes of road accidents is crucial for prevention. Most accidents result from a combination of human error, vehicle issues, and environmental factors.",
          ),
        },
        {
          type: "list",
          items: [
            {
              title: t("humanError", "Human Error"),
              desc: t(
                "humanErrorDesc",
                "Speeding, reckless driving, distracted driving, and driving under the influence.",
              ),
            },
            {
              title: t("vehicleDefects", "Vehicle Defects"),
              desc: t(
                "vehicleDefectsDesc",
                "Faulty brakes, worn-out tires, poor lighting, or mechanical failures.",
              ),
            },
            {
              title: t("roadConditions", "Road Conditions"),
              desc: t(
                "roadConditionsDesc",
                "Potholes, poor signage, inadequate lighting, or poorly maintained roads.",
              ),
            },
            {
              title: t("weatherConditions", "Weather Conditions"),
              desc: t(
                "weatherConditionsDesc",
                "Rain, fog, or poor visibility reducing driver awareness.",
              ),
            },
            {
              title: t("overloading", "Overloading"),
              desc: t(
                "overloadingDesc",
                "Carrying too many passengers or cargo beyond vehicle capacity.",
              ),
            },
          ],
        },
      ],
    },
    {
      id: "driving-etiquette",
      title: t("drivingEtiquette", "Driving Etiquette"),
      icon: "🤝",
      color: "teal",
      content: [
        {
          type: "text",
          value: t(
            "drivingEtiquetteIntro",
            "Good driving etiquette promotes safety, courtesy, and harmony on the roads.",
          ),
        },
        {
          type: "list",
          items: [
            {
              title: t("useTurnSignals", "Use Turn Signals"),
              desc: t(
                "useTurnSignalsDesc",
                "Always indicate your intentions well in advance.",
              ),
            },
            {
              title: t("maintainSafeDistances", "Maintain Safe Distances"),
              desc: t(
                "maintainSafeDistancesDesc",
                "Keep at least a two-second gap from the vehicle in front.",
              ),
            },
            {
              title: t("yieldCourteously", "Yield Courteously"),
              desc: t(
                "yieldCourteouslyDesc",
                "Allow merging vehicles to enter traffic smoothly.",
              ),
            },
            {
              title: t("avoidHonking", "Avoid Unnecessary Honking"),
              desc: t(
                "avoidHonkingDesc",
                "Use the horn only to alert others of danger.",
              ),
            },
            {
              title: t("bePatientWithLearners", "Be Patient with Learners"),
              desc: t(
                "bePatientWithLearnersDesc",
                "Give space to new drivers and avoid aggressive maneuvers.",
              ),
            },
          ],
        },
      ],
    },
    {
      id: "defensive-driving",
      title: t("defensiveDriving", "Defensive Driving"),
      icon: "🛡️",
      color: "green",
      content: [
        {
          type: "text",
          value: t(
            "defensiveDrivingIntro",
            "Drive in a way that anticipates and avoids potential hazards from other road users.",
          ),
        },
        {
          type: "list",
          items: [
            {
              title: t("anticipateActions", "Anticipate Other Drivers"),
              desc: t(
                "anticipateActionsDesc",
                "Watch for unpredictable behavior and be prepared to react.",
              ),
            },
            {
              title: t("maintainDistance", "Maintain Safe Distance"),
              desc: t(
                "maintainDistanceDesc",
                "Keep extra space between you and the vehicle ahead.",
              ),
            },
            {
              title: t("scanForHazards", "Scan for Hazards"),
              desc: t(
                "scanForHazardsDesc",
                "Continuously look ahead, to the sides and mirrors for obstacles.",
              ),
            },
          ],
        },
      ],
    },
    {
      id: "urban-rural-driving",
      title: t("urbanRuralDriving", "Urban & Rural Driving"),
      icon: "🏙️🌾",
      color: "purple",
      content: [
        {
          type: "text",
          value: t(
            "urbanRuralIntro",
            "Adjust your driving style depending on whether you are in busy cities or quiet countryside.",
          ),
        },
        {
          type: "list",
          items: [
            {
              title: t("adjustSpeed", "Adjust Speed"),
              desc: t(
                "adjustSpeedDesc",
                "Drive slower in urban areas with heavy traffic and pedestrians, and watch for potholes in rural areas.",
              ),
            },
            {
              title: t("watchForOthers", "Watch for Pedestrians/Animals"),
              desc: t(
                "watchForOthersDesc",
                "Be alert for people, cyclists, livestock or wildlife on rural roads.",
              ),
            },
            {
              title: t("visibility", "Manage Visibility"),
              desc: t(
                "visibilityDesc",
                "Use headlights and be cautious with narrow or unlit roads.",
              ),
            },
          ],
        },
      ],
    },
    {
      id: "traffic-awareness",
      title: t("trafficAwareness", "Traffic Awareness"),
      icon: "🚦",
      color: "orange",
      content: [
        {
          type: "text",
          value: t(
            "trafficAwarenessIntro",
            "Understand traffic patterns and how to move safely within them.",
          ),
        },
        {
          type: "list",
          items: [
            {
              title: t("peakHours", "Peak Hours"),
              desc: t(
                "peakHoursDesc",
                "Know when congestion is worst and plan accordingly.",
              ),
            },
            {
              title: t("laneDiscipline", "Lane Discipline"),
              desc: t(
                "laneDisciplineDesc",
                "Stay in your lane and avoid weaving.",
              ),
            },
            {
              title: t("yieldEmergency", "Yield to Emergency Vehicles"),
              desc: t(
                "yieldEmergencyDesc",
                "Give way immediately and clear the path.",
              ),
            },
          ],
        },
      ],
    },
    {
      id: "first-aid",
      title: t("firstAidEmergency", "First Aid & Emergency Response"),
      icon: "🚑",
      color: "blue",
      content: [
        {
          type: "text",
          value: t(
            "firstAidIntro",
            "Knowing how to respond in the first few minutes after an accident can save lives.",
          ),
        },
        {
          type: "list",
          items: [
            {
              title: t("assessScene", "Assess the Scene"),
              desc: t(
                "assessSceneDesc",
                "Ensure your own safety first. Look for hazards like oncoming traffic or fire.",
              ),
            },
            {
              title: t("callForHelp", "Call for Help"),
              desc: t(
                "callForHelpDesc",
                "Dial emergency services (999, 112) and provide your location.",
              ),
            },
            {
              title: t("careForInjured", "Care for the Injured"),
              desc: t(
                "careForInjuredDesc",
                "Provide first aid if safe. Do not move someone with suspected neck/back injury.",
              ),
            },
            {
              title: t("controlBleeding", "Control Bleeding"),
              desc: t(
                "controlBleedingDesc",
                "Apply firm, direct pressure to wounds with a clean cloth.",
              ),
            },
            {
              title: t("performCPR", "Perform CPR"),
              desc: t(
                "performCPRDesc",
                "If someone is unresponsive and not breathing, begin CPR if trained.",
              ),
            },
            {
              title: t("firstAidKit", "First Aid Kit in Vehicles"),
              desc: t(
                "firstAidKitDesc",
                "Keep a well‑stocked kit with bandages, antiseptic, gloves, scissors, torch and blanket; check expiry dates regularly.",
              ),
            },
          ],
        },
      ],
    },
    {
      id: "after-accident",
      title: t("afterAccidentTitle", "What to Do After an Accident"),
      icon: "📋",
      color: "red",
      content: [
        {
          type: "text",
          value: t(
            "afterAccidentIntro",
            "Stay calm and follow these essential actions to ensure safety and proper procedures.",
          ),
        },
        {
          type: "list",
          items: [
            {
              title: t("ensureSafetyFirst", "Ensure Safety First"),
              desc: t(
                "ensureSafetyFirstDesc",
                "Turn on hazard lights, move vehicles off the road if safe, set up warning triangles.",
              ),
            },
            {
              title: t("checkForInjuries", "Check for Injuries"),
              desc: t(
                "checkForInjuriesDesc",
                "Assess yourself and others. Do not move seriously injured people unless in immediate danger.",
              ),
            },
            {
              title: t("callEmergencyServices", "Call Emergency Services"),
              desc: t(
                "callEmergencyServicesDesc",
                "Dial 999 or 112 immediately. Provide exact location and situation details.",
              ),
            },
            {
              title: t("exchangeInformation", "Exchange Information"),
              desc: t(
                "exchangeInformationDesc",
                "Collect names, phone numbers, addresses, vehicle registration, and insurance details.",
              ),
            },
            {
              title: t("documentScene", "Document the Scene"),
              desc: t(
                "documentSceneDesc",
                "Take photos of accident scene, vehicle damage, injuries, and road conditions.",
              ),
            },
            {
              title: t("reportAuthorities", "Report to Authorities"),
              desc: t(
                "reportAuthoritiesDesc",
                "File a police report (AF 150 form) within 24 hours.",
              ),
            },
            {
              title: t("contactInsurance", "Contact Insurance"),
              desc: t(
                "contactInsuranceDesc",
                "Notify your insurance company as soon as possible.",
              ),
            },
            {
              title: t("seekMedicalAttention", "Seek Medical Attention"),
              desc: t(
                "seekMedicalAttentionDesc",
                "Get checked by a medical professional even if you feel fine.",
              ),
            },
          ],
        },
      ],
    },
  ];

  const colorMap = {
    orange: {
      from: "from-orange-500",
      to: "to-orange-600",
      text: "text-orange-600",
      bg: "bg-orange-50",
      darkBg: "dark:bg-orange-950/20",
      border: "border-orange-200",
      darkBorder: "dark:border-orange-800",
    },
    teal: {
      from: "from-teal-500",
      to: "to-teal-600",
      text: "text-teal-600",
      bg: "bg-teal-50",
      darkBg: "dark:bg-teal-950/20",
      border: "border-teal-200",
      darkBorder: "dark:border-teal-800",
    },
    blue: {
      from: "from-blue-500",
      to: "to-blue-600",
      text: "text-blue-600",
      bg: "bg-blue-50",
      darkBg: "dark:bg-blue-950/20",
      border: "border-blue-200",
      darkBorder: "dark:border-blue-800",
    },
    red: {
      from: "from-red-500",
      to: "to-red-600",
      text: "text-red-600",
      bg: "bg-red-50",
      darkBg: "dark:bg-red-950/20",
      border: "border-red-200",
      darkBorder: "dark:border-red-800",
    },
    purple: {
      from: "from-purple-500",
      to: "to-purple-600",
      text: "text-purple-600",
      bg: "bg-purple-50",
      darkBg: "dark:bg-purple-950/20",
      border: "border-purple-200",
      darkBorder: "dark:border-purple-800",
    },
    green: {
      from: "from-green-500",
      to: "to-green-600",
      text: "text-green-600",
      bg: "bg-green-50",
      darkBg: "dark:bg-green-950/20",
      border: "border-green-200",
      darkBorder: "dark:border-green-800",
    },
    indigo: {
      from: "from-indigo-500",
      to: "to-indigo-600",
      text: "text-indigo-600",
      bg: "bg-indigo-50",
      darkBg: "dark:bg-indigo-950/20",
      border: "border-indigo-200",
      darkBorder: "dark:border-indigo-800",
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-slate-950 dark:to-black">
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-indigo-600 to-blue-600 dark:from-indigo-900 dark:to-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">
              {t("roadSafetyTraining", "Road Safety Training")}
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
              {t(
                "comprehensiveGuide",
                "Comprehensive guide to road safety, traffic laws, and emergency response procedures",
              )}
            </p>
            <Link
              href="/study"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 hover:scale-105"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              {t("backToStudyMaterials", "Back to Study Materials")}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {sections.map((section, idx) => {
            const colors = colorMap[section.color];
            return (
              <motion.section
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div
                  className={`bg-linear-to-r ${colors.from} ${colors.to} p-8`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{section.icon}</span>
                    <h2 className="text-3xl font-bold text-white">
                      {section.title}
                    </h2>
                  </div>
                </div>
                <div className="p-8 sm:p-12 space-y-8">
                  {section.content.map((item) => (
                    <div key={getContentKey(section.id, item)}>
                      {item.type === "text" && (
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                          {item.value}
                        </p>
                      )}
                      {item.type === "list" && (
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          {item.items.map((listItem) => (
                            <div
                              key={`${listItem.title}-${listItem.desc?.slice(0, 24) || "item"}`}
                              className={`${colors.bg} ${colors.darkBg} border ${colors.border} ${colors.darkBorder} rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg`}
                            >
                              <h3
                                className={`text-lg font-bold ${colors.text} dark:${colors.text} mb-2`}
                              >
                                {listItem.title}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {listItem.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.section>
            );
          })}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden shadow-xl"
          >
            <div className="bg-linear-to-r from-cyan-500 to-blue-600 p-8">
              <div className="flex items-center gap-4">
                <span className="text-5xl">📘</span>
                <h2 className="text-3xl font-bold text-white">
                  {safetyTrainingResearch.title}
                </h2>
              </div>
            </div>
            <div className="p-8 sm:p-12">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                {safetyTrainingResearch.subtitle}
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {safetyTrainingResearch.modules.map((module, index) => (
                  <div
                    key={`${module.title}-${index}`}
                    className="bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-bold text-cyan-700 dark:text-cyan-300 mb-3">
                      {module.title}
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      {module.points.map((point, pointIndex) => (
                        <li key={`${point.slice(0, 24)}-${pointIndex}`}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
                  {t("referenceSources", "Reference Sources")}
                </p>
                <ul className="space-y-1 text-sm">
                  {safetyTrainingResearch.sources.map((source) => (
                    <li key={source.id}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-700 dark:text-cyan-300 hover:underline"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Traffic Laws Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden shadow-xl"
          >
            <div className="bg-linear-to-r from-indigo-500 to-indigo-600 p-8">
              <div className="flex items-center gap-4">
                <span className="text-5xl">⚖️</span>
                <h2 className="text-3xl font-bold text-white">
                  {t(
                    "kenyanTrafficLawsPenalties",
                    "Kenyan Traffic Laws & Penalties",
                  )}
                </h2>
              </div>
            </div>
            <div className="p-8 sm:p-12">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                {t(
                  "understandingTrafficLawsIntro",
                  "Understanding these laws is essential to avoid penalties and ensure safety.",
                )}
              </p>
              <div className="space-y-4">
                {[
                  {
                    id: "speeding",
                    title: t("speedingOffense", "Speeding"),
                    penalty: t(
                      "speedingPenalty",
                      "Fines ranging from Ksh 500 to Ksh 10,000",
                    ),
                    source: t(
                      "speedingSource",
                      "Section 42 of the Traffic Act",
                    ),
                  },
                  {
                    id: "dui",
                    title: t("duiOffense", "Driving Under the Influence (DUI)"),
                    penalty: t(
                      "duiPenalty",
                      "Fine up to Ksh 100,000 or imprisonment up to 2 years",
                    ),
                    source: t("duiSource", "Section 44 of the Traffic Act"),
                  },
                  {
                    id: "phone-driving",
                    title: t(
                      "phoneDrivingOffense",
                      "Using Mobile Phone While Driving",
                    ),
                    penalty: t("phoneDrivingPenalty", "Fine of Ksh 2,000"),
                    source: t(
                      "phoneDrivingSource",
                      "Traffic (Amendment) Act, 2012",
                    ),
                  },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  >
                    <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                      <strong>{t("penaltyLabel", "Penalty")}:</strong>{" "}
                      {item.penalty}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      <strong>{t("sourceLabel", "Source")}:</strong>{" "}
                      {item.source}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Rights Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden shadow-xl"
          >
            <div className="bg-linear-to-r from-purple-500 to-purple-600 p-8">
              <div className="flex items-center gap-4">
                <span className="text-5xl">👥</span>
                <h2 className="text-3xl font-bold text-white">
                  {t(
                    "citizensPedestrianRights",
                    "Rights of Citizens & Pedestrians",
                  )}
                </h2>
              </div>
            </div>
            <div className="p-8 sm:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                    {t("yourRightsOnRoad", "Your Rights on the Road")}
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      {t(
                        "rightCourtesyOfficers",
                        "Right to be treated with courtesy by traffic officers",
                      )}
                    </li>
                    <li>
                      {t(
                        "rightSeeOfficerId",
                        "Right to see the officer's identification",
                      )}
                    </li>
                    <li>
                      {t(
                        "rightInformedOffense",
                        "Right to be informed of the specific offense",
                      )}
                    </li>
                    <li>
                      {t(
                        "rightFairHearing",
                        "Right to a fair hearing in court",
                      )}
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                    {t("pedestrianRights", "Pedestrian Rights")}
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      {t(
                        "pedestrianRightOfWay",
                        "Right of way at marked crossings and intersections",
                      )}
                    </li>
                    <li>
                      {t(
                        "driversYieldPedestrians",
                        "Drivers must yield to pedestrians when turning",
                      )}
                    </li>
                    <li>
                      {t(
                        "illegalParkWalkways",
                        "Illegal to park on pedestrian walkways",
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default RoadSafetyTrainingPage;
