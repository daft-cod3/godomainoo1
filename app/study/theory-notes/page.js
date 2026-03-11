import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Theory Notes | Rafiki",
  description:
    "Structured theory notes on vehicle control, steering, gear systems, and manual driving safety for Kenyan learners.",
};

const sources = {
  trafficAct: {
    title: "Traffic Act (Cap. 403, Kenya)",
    url: "https://new.kenyalaw.org/akn/ke/act/1953/39/eng@2024-04-26/source",
  },
  trafficRules: {
    title: "Traffic Rules (GN 1902 of 1953, revised 2022)",
    url: "https://new.kenyalaw.org/akn/ke/act/gn/1953/1902/eng@2022-12-31",
  },
  ntsaPortal: {
    title: "NTSA Service Portal",
    url: "https://serviceportal.ntsa.go.ke",
  },
  drivingClassesA: {
    title: "Rafiki Driving Class A (A1, A2, A3)",
    url: "/driving-classes/a",
  },
  drivingClassesB: {
    title: "Rafiki Driving Class B (B1, B2)",
    url: "/driving-classes/b",
  },
  drivingClassesC: {
    title: "Rafiki Driving Class C (C1, C2)",
    url: "/driving-classes/c",
  },
  drivingClassesD: {
    title: "Rafiki Driving Class D (D1, D2)",
    url: "/driving-classes/d",
  },
  ieaEvOutlook: {
    title: "IEA Global EV Outlook 2025",
    url: "https://www.iea.org/reports/global-ev-outlook-2025",
  },
  ukAutoTrend: {
    title: "Automatic Driving Test Trend (UK, DVSA-cited summary)",
    url: "https://www.driving.org/learning-to-drive/do-you-have-to-learn-manual-before-automatic/",
  },
};

const startupSteps = [
  "Enter safely, check surroundings, and close the door fully.",
  "Adjust seat distance/height/backrest so you can fully press clutch and brake without stretching.",
  "Set mirrors (rear-view, right mirror, left mirror) before movement.",
  "Fasten seat belt and confirm passengers are belted.",
  "Set neutral (manual) or P/N (automatic), then insert key/start button sequence.",
  "Press clutch (manual) or brake (automatic), start engine, and check warning lights.",
  "Look mirrors + blind spot, signal, and move only when the road is clear.",
];

const practicalProcedures = [
  {
    title: "How to Start a Motor Vehicle",
    image: "/theory-notes/steering/steer.jpg",
    imageAlt: "Driver preparing to start vehicle",
    steps: [
      "Seat and mirrors first, then seat belt.",
      "Confirm neutral (manual) or P/N (automatic).",
      "Start engine with clutch down (manual) or brake down (automatic).",
      "Check dashboard warning lights before moving.",
    ],
    byClass: [
      "A1/A2/A3: Confirm side-stand up, neutral lamp, and both brakes functional before move-off.",
      "B1/B2: Full cockpit drill (seat, mirrors, belt, controls) is mandatory before ignition.",
      "C1/C2: Add air/brake pressure and load-security checks before departure.",
      "D1/D2: Include passenger-door, mirror sweep, and interior safety check before moving.",
    ],
  },
  {
    title: "How to Start and Safely Join a Road/Highway",
    image: "/traffic/traffic.jpg",
    imageAlt: "Vehicle joining moving traffic on highway",
    steps: [
      "Use mirror-mirror-blind-spot scan before signaling.",
      "Signal early, then assess traffic speed and safe gap.",
      "Accelerate progressively to match traffic flow.",
      "Cancel signal after lane entry and recheck mirrors.",
    ],
    byClass: [
      "A1/A2/A3: Prioritize visibility and lane position; avoid blind spots of larger vehicles.",
      "B1/B2: Match traffic pace smoothly and keep a safe following gap after merge.",
      "C1/C2: Join gradually with longer acceleration distance due to heavy vehicle mass.",
      "D1/D2: Merge smoothly to protect standing/seated passengers from sudden movement.",
    ],
  },
  {
    title: "How to Stop a Motor Vehicle",
    image: "/roadSign/regulatory/priority/stopSign.jpeg",
    imageAlt: "Stop sign representing safe stopping procedure",
    steps: [
      "Check mirrors first and plan smooth deceleration.",
      "Brake progressively; avoid sudden harsh brake unless emergency.",
      "Manual: clutch down before stall point, then neutral at full stop.",
      "Apply handbrake where required and keep vehicle secure.",
    ],
    byClass: [
      "A1/A2/A3: Use both front and rear brakes with balanced pressure to prevent skidding.",
      "B1/B2: Smooth progressive braking keeps control and comfort in normal traffic stops.",
      "C1/C2: Begin braking earlier because trucks require longer stopping distance.",
      "D1/D2: Early gentle braking reduces passenger instability and onboard injury risk.",
    ],
  },
  {
    title: "Shifting Gears (Manual)",
    image: "/theory-notes/gears/b1Gear.jpg",
    imageAlt: "Manual gear lever shift pattern",
    steps: [
      "Release accelerator slightly, clutch fully down.",
      "Move gear lever cleanly to next ratio.",
      "Release clutch progressively while applying balanced throttle.",
      "Downshift early before hills, overtakes, or low-speed turns.",
    ],
    byClass: [
      "A1/A2/A3: Usually sequential shifting (foot shift), keep revs controlled in traffic.",
      "B1/B2: Standard H-pattern shifting, prioritize smooth clutch release to avoid jerks.",
      "C1/C2: Shift based on load and gradient; avoid late shifts that strain engine.",
      "D1/D2: Select gears early for smooth passenger ride and controlled bus momentum.",
    ],
  },
  {
    title: "Starting on a Hill / Inclined Surface",
    image: "/theory-notes/pedal.jpeg",
    imageAlt: "Manual pedal control for hill start",
    steps: [
      "Hold vehicle with handbrake and clutch at bite point.",
      "Add gentle accelerator to build pull.",
      "Release handbrake as clutch transfers power.",
      "Avoid rollback and avoid over-revving the engine.",
    ],
    byClass: [
      "A1/A2/A3: Use rear brake and clutch/throttle coordination carefully to prevent rollback.",
      "B1/B2: Handbrake hill-start method is the most stable learner technique.",
      "C1/C2: Heavy loads need stronger bite-point control and earlier power build-up.",
      "D1/D2: Maintain extra smoothness to keep passengers stable during hill move-off.",
    ],
  },
  {
    title: "Three-Point Turn",
    image: "/classes/b2.jpg",
    imageAlt: "Vehicle maneuvering during a three-point turn",
    steps: [
      "Check mirrors and both directions; signal and stop safely.",
      "Turn fully and move to opposite side slowly.",
      "Reverse with all-round observation to reposition.",
      "Move forward to original lane direction and continue safely.",
    ],
    byClass: [
      "A1/A2/A3: On narrow roads, use low speed and full head checks before each movement.",
      "B1/B2: Standard learner maneuver with strict observation at each direction change.",
      "C1/C2: Often replaced by wider turning strategy; avoid tight turns where space is limited.",
      "D1/D2: Large PSV vehicles should avoid three-point turns unless space and safety are guaranteed.",
    ],
  },
];

const steeringPoints = [
  "Main function: convert driver input into controlled wheel direction and lane position.",
  "Best hand position for normal driving: 9-o'clock and 3-o'clock.",
  "For tight turns at low speed use push-pull steering; avoid crossing arms aggressively.",
  "Keep both hands available except when changing gear or operating controls.",
  "Steer smoothly; sudden steering increases loss-of-control risk, especially on wet roads.",
];

const manualGearGuide = [
  {
    gear: "1st",
    speed: "0-15 km/h",
    shiftWhen: "After moving off and engine sound rises.",
    howToUse:
      "Use clutch to bite point, add gentle accelerator, release clutch smoothly.",
  },
  {
    gear: "2nd",
    speed: "15-30 km/h",
    shiftWhen: "When 1st becomes noisy or vehicle is stable after launch.",
    howToUse: "Clutch down fully, shift 1->2, release clutch progressively.",
  },
  {
    gear: "3rd",
    speed: "30-50 km/h",
    shiftWhen: "Urban flow improves and engine needs lower rev strain.",
    howToUse: "Shift gently; keep steady throttle to avoid jerk.",
  },
  {
    gear: "4th",
    speed: "50-70 km/h",
    shiftWhen: "Open roads with steady speed and light load.",
    howToUse: "Upshift at stable speed; avoid lugging on steep climbs.",
  },
  {
    gear: "5th",
    speed: "70-100 km/h",
    shiftWhen: "Higher-speed cruising on clear roads/highways.",
    howToUse: "Use for fuel-efficient cruising, downshift early for overtakes.",
  },
  {
    gear: "6th",
    speed: "100+ km/h",
    shiftWhen: "Only where legally and safely appropriate for vehicle/road.",
    howToUse: "Cruise gear; downshift before acceleration demand.",
  },
];

const classTransmissionGuide = [
  {
    drivingClass: "A1, A2, A3 (Motorcycles / 3-wheelers)",
    manualType: "Mostly sequential manual (often 4-6 gears).",
    autoType: "Many scooters use CVT automatic (twist-and-go).",
    usageNote:
      "Manual motorcycles require clutch and foot shifting discipline, especially in traffic.",
  },
  {
    drivingClass: "B1, B2 (Light vehicles)",
    manualType: "Typically 5-speed or 6-speed H-pattern.",
    autoType: "Commonly torque-converter AT, CVT, or DCT.",
    usageNote:
      "Learners should understand both systems because fleet and private cars vary widely.",
  },
  {
    drivingClass: "C1, C2 (Trucks)",
    manualType: "6+ gears, including range/split gears in heavier trucks.",
    autoType: "AMT/automated systems increasingly used in commercial fleets.",
    usageNote:
      "Gear choice must match load, gradient, and braking distance planning.",
  },
  {
    drivingClass: "D1, D2 (PSV/Buses)",
    manualType: "Manual transmissions still in use on some routes/fleets.",
    autoType:
      "More urban buses use automatic/AMT for smoother passenger operation.",
    usageNote:
      "Passenger comfort and safety require smoother shifting and braking style.",
  },
];

const gearPopularityStats = [
  {
    period: "2024 (Global EV trend)",
    stat: "More than 17 million EVs sold; over 20% of new car sales were electric.",
    whyItMatters:
      "EVs are automatic by design, so automatic-style driving share keeps rising.",
    sourceId: "ieaEvOutlook",
  },
  {
    period: "2025 forecast (Global EV trend)",
    stat: "More than 20 million EVs projected, reaching over 25% market share.",
    whyItMatters:
      "Higher EV share generally means stronger long-term growth in automatic drivetrains.",
    sourceId: "ieaEvOutlook",
  },
  {
    period: "2013->2023 (UK learner trend)",
    stat: "Automatic practical tests reached about 324,064 in 2023, reported as +270% over a decade.",
    whyItMatters:
      "Learner demand is shifting toward automatic licensing and training in many markets.",
    sourceId: "ukAutoTrend",
  },
];

const automaticAndOtherTransmissions = [
  {
    type: "Automatic (AT)",
    points: [
      "Main positions: P (Park), R (Reverse), N (Neutral), D (Drive).",
      "Driver controls speed with accelerator/brake; gearbox selects ratios automatically.",
      "Some AT vehicles add S (Sport), L/B (low/engine-brake) modes for hills.",
    ],
  },
  {
    type: "CVT",
    points: [
      "No fixed stepped gears; ratio changes continuously for smoother acceleration.",
      "Common in scooters and many small/medium cars.",
      "Often fuel-efficient in stop-go conditions.",
    ],
  },
  {
    type: "DCT / AMT",
    points: [
      "DCT uses dual clutches for fast shifts; AMT automates manual gear selection.",
      "Found in newer passenger and commercial fleets depending on use case.",
      "Still requires careful throttle control during low-speed maneuvers.",
    ],
  },
];

const clutchFocus = [
  "The clutch disconnects engine power from wheels so gears can be changed safely.",
  "Critical concept: bite point. This is where the clutch starts transferring power.",
  "Moving off: clutch to bite point + slight accelerator -> hold -> release smoothly.",
  "Hill starts: use clutch control + handbrake method to prevent rollback.",
  "Avoid clutch riding (keeping foot half-pressed) because it overheats and wears the clutch.",
  "When slowing to stop in manual: brake first, clutch down before engine stalls, shift to neutral.",
];

function SourcePills({ ids, compact = false }) {
  return (
    <div className="flex flex-wrap gap-2">
      {ids.map((id) => {
        const source = sources[id];
        if (!source) return null;
        const isInternal = source.url.startsWith("/");
        const label = compact ? "Source" : source.title;

        if (isInternal) {
          return (
            <Link
              key={id}
              href={source.url}
              className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800 transition-colors hover:bg-blue-100 dark:border-blue-900/70 dark:bg-blue-950/50 dark:text-blue-200 dark:hover:bg-blue-900/40"
              title={source.title}
            >
              {label}
            </Link>
          );
        }

        return (
          <a
            key={id}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800 transition-colors hover:bg-blue-100 dark:border-blue-900/70 dark:bg-blue-950/50 dark:text-blue-200 dark:hover:bg-blue-900/40"
            title={source.title}
          >
            {label}
          </a>
        );
      })}
    </div>
  );
}

export default function TheoryNotesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 text-gray-900 dark:bg-black dark:text-white sm:py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_1.15fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="mb-3 inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-300">
                Interactive 3D Study
              </p>
              <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
                Mercedes-Benz GLS 580: 3D Familiarization Model
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
                Rotate, zoom, and inspect this model before practical lessons.
                Use it to identify exterior profile, body orientation, and
                vehicle posture from multiple angles.
              </p>
              <a
                href="/theory-notes/mercedes-viewer.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
              >
                Open Full 3D View
              </a>
            </div>

            <div className="min-h-[320px] border-t border-gray-200 lg:min-h-full lg:border-l lg:border-t-0 dark:border-gray-800">
              <iframe
                src="/theory-notes/mercedes-viewer.html"
                title="Interactive 3D Mercedes model"
                loading="lazy"
                className="h-[360px] w-full lg:h-full"
              />
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="mb-3 inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-700 dark:text-green-300">
                Theory Notes: Vehicle Control
              </p>
              <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Motor Vehicle Basics, Steering, Gears, and Manual Pedal Control
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
                This guide is arranged in learning order: what a motor vehicle
                is, how to start safely, steering control, gear systems by
                class, and manual clutch-brake-accelerator coordination.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/study"
                  className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Back to Study Hub
                </Link>
                <a
                  href="#gear-popularity-stats"
                  className="inline-flex items-center rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900"
                >
                  Jump to Gear Statistics
                </a>
              </div>
            </div>
            <div className="relative min-h-[260px] lg:min-h-full">
              <Image
                src="/theory-notes/steering/steer.jpg"
                alt="Driver holding steering wheel"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950 sm:p-6">
          <h2 className="text-2xl font-bold">1. What Is a Motor Vehicle?</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            A motor vehicle is a powered road vehicle used to transport people
            or goods. In learner training, this includes motorcycles (Class A),
            light vehicles (Class B), trucks (Class C), and buses/PSV vehicles
            (Class D). Driving is important because it supports school, work,
            business, emergency response, and national mobility. Safe driving
            matters because one wrong decision can cause injury, legal
            penalties, or loss of life.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            Core safety duty: every trip should begin with legal compliance,
            technical readiness of the vehicle, and defensive road awareness.
          </p>
          <div className="mt-4">
            <SourcePills ids={["trafficAct", "trafficRules", "ntsaPortal"]} />
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950 sm:p-6">
          <h2 className="text-2xl font-bold">
            2. Safe Vehicle Start Procedure
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Follow this sequence every time before moving off:
          </p>
          <ol className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {startupSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950 sm:p-6">
          <h2 className="text-2xl font-bold">
            3. Steering Wheel: Function and Control
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {steeringPoints.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "/theory-notes/steering/steer.jpg",
                alt: "Steering wheel hand position",
                caption: "Recommended steering grip and control posture",
              },
              {
                src: "/theory-notes/steering/saLoon.jpg",
                alt: "Saloon vehicle cockpit",
                caption: "Steering function in saloon/light vehicle setup",
              },
              {
                src: "/theory-notes/steering/motor.jpg",
                alt: "Motorcycle steering control",
                caption: "Steering balance and control for Class A riders",
              },
            ].map((item) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-3 text-xs text-gray-600 dark:text-gray-300">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950 sm:p-6">
          <h2 className="text-2xl font-bold">
            Practical Procedures: Start, Join, Stop, Hills, and Turns
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Use these as repeatable routines during practical lessons and test
            practice.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {practicalProcedures.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="relative mb-3 h-40 w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-base font-bold text-blue-700 dark:text-blue-300">
                  {item.title}
                </h3>
                <ol className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {item.steps.map((step, index) => (
                    <li key={step} className="flex items-start gap-2">
                      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-900/60 dark:bg-blue-950/40">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-700 dark:text-blue-300">
                    By Driving Class
                  </p>
                  <ul className="mt-2 space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                    {item.byClass.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950 sm:p-6">
          <h2 className="text-2xl font-bold">
            4. Gears: Function and Class Differences
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            Gears control how engine power is multiplied and delivered to
            wheels. Lower gears give more pulling power; higher gears reduce
            engine strain at speed. Gear setups vary by driving class and
            vehicle purpose.
          </p>

          <div className="mt-5 space-y-3 md:hidden">
            {classTransmissionGuide.map((item) => (
              <article
                key={item.drivingClass}
                className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs dark:border-gray-800 dark:bg-gray-900"
              >
                <p className="font-bold text-gray-900 dark:text-gray-100">{item.drivingClass}</p>
                <p className="mt-2">
                  <span className="font-semibold">Manual: </span>
                  {item.manualType}
                </p>
                <p className="mt-1">
                  <span className="font-semibold">Automatic: </span>
                  {item.autoType}
                </p>
                <p className="mt-1 text-gray-600 dark:text-gray-300">{item.usageNote}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 hidden overflow-x-auto md:block">
            <table className="min-w-full border border-gray-200 text-sm dark:border-gray-800">
              <thead className="bg-gray-100 dark:bg-gray-900">
                <tr>
                  <th className="border-b border-gray-200 px-3 py-2 text-left font-semibold dark:border-gray-800">
                    Driving Class
                  </th>
                  <th className="border-b border-gray-200 px-3 py-2 text-left font-semibold dark:border-gray-800">
                    Typical Manual
                  </th>
                  <th className="border-b border-gray-200 px-3 py-2 text-left font-semibold dark:border-gray-800">
                    Typical Automatic
                  </th>
                  <th className="border-b border-gray-200 px-3 py-2 text-left font-semibold dark:border-gray-800">
                    Practical Note
                  </th>
                </tr>
              </thead>
              <tbody>
                {classTransmissionGuide.map((item) => (
                  <tr key={item.drivingClass} className="align-top">
                    <td className="border-b border-gray-200 px-3 py-3 font-semibold dark:border-gray-800">
                      {item.drivingClass}
                    </td>
                    <td className="border-b border-gray-200 px-3 py-3 dark:border-gray-800">
                      {item.manualType}
                    </td>
                    <td className="border-b border-gray-200 px-3 py-3 dark:border-gray-800">
                      {item.autoType}
                    </td>
                    <td className="border-b border-gray-200 px-3 py-3 dark:border-gray-800">
                      {item.usageNote}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <SourcePills
              ids={[
                "drivingClassesA",
                "drivingClassesB",
                "drivingClassesC",
                "drivingClassesD",
              ]}
            />
          </div>
        </section>

        <section
          id="gear-popularity-stats"
          className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950 sm:p-6"
        >
          <h2 className="text-2xl font-bold">
            5. Gear Type Popularity Over Time
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Kenya-specific public time-series by transmission type is limited,
            so these official/global trend indicators are used for learner
            context.
          </p>

          <div className="mt-4 space-y-2">
            {gearPopularityStats.map((item) => (
              <article
                key={item.period}
                className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500 dark:text-gray-400">
                      {item.period}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                      {item.stat}
                    </p>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
                      {item.whyItMatters}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <SourcePills ids={[item.sourceId]} compact />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950 sm:p-6">
          <h2 className="text-2xl font-bold">
            6. Manual Gears 1-6: Speed, Shift Timing, and Method
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Typical learner ranges (these vary by engine, load, and
            manufacturer).
          </p>

          <div className="mt-5 space-y-3 md:hidden">
            {manualGearGuide.map((item) => (
              <article
                key={item.gear}
                className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs dark:border-gray-800 dark:bg-gray-900"
              >
                <p className="font-bold text-gray-900 dark:text-gray-100">
                  {item.gear} ({item.speed})
                </p>
                <p className="mt-1">
                  <span className="font-semibold">Shift when: </span>
                  {item.shiftWhen}
                </p>
                <p className="mt-1 text-gray-600 dark:text-gray-300">{item.howToUse}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 hidden overflow-x-auto md:block">
            <table className="min-w-full border border-gray-200 text-sm dark:border-gray-800">
              <thead className="bg-gray-100 dark:bg-gray-900">
                <tr>
                  <th className="border-b border-gray-200 px-3 py-2 text-left font-semibold dark:border-gray-800">
                    Gear
                  </th>
                  <th className="border-b border-gray-200 px-3 py-2 text-left font-semibold dark:border-gray-800">
                    Typical Speed
                  </th>
                  <th className="border-b border-gray-200 px-3 py-2 text-left font-semibold dark:border-gray-800">
                    When to Shift
                  </th>
                  <th className="border-b border-gray-200 px-3 py-2 text-left font-semibold dark:border-gray-800">
                    How to Shift
                  </th>
                </tr>
              </thead>
              <tbody>
                {manualGearGuide.map((item) => (
                  <tr key={item.gear} className="align-top">
                    <td className="border-b border-gray-200 px-3 py-3 font-semibold dark:border-gray-800">
                      {item.gear}
                    </td>
                    <td className="border-b border-gray-200 px-3 py-3 dark:border-gray-800">
                      {item.speed}
                    </td>
                    <td className="border-b border-gray-200 px-3 py-3 dark:border-gray-800">
                      {item.shiftWhen}
                    </td>
                    <td className="border-b border-gray-200 px-3 py-3 dark:border-gray-800">
                      {item.howToUse}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <figure className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
              <div className="relative h-44 w-full">
                <Image
                  src="/theory-notes/gears/b1Gear.jpg"
                  alt="Manual gear shifter example"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="p-3 text-xs text-gray-600 dark:text-gray-300">
                Typical manual H-pattern gear lever (Class B context).
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
              <div className="relative h-44 w-full">
                <Image
                  src="/theory-notes/gears/b2Gear.jpg"
                  alt="Manual gear selector close-up"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="p-3 text-xs text-gray-600 dark:text-gray-300">
                Smooth upshift/downshift depends on full clutch depression and
                timing.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950 sm:p-6">
          <h2 className="text-2xl font-bold">
            7. Automatic and Other Transmission Types
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {automaticAndOtherTransmissions.map((item) => (
              <article
                key={item.type}
                className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900"
              >
                <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300">
                  {item.type}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950 sm:p-6">
          <h2 className="text-2xl font-bold">
            8. Manual Pedals: Accelerator, Brake, and Clutch (Clutch Focus)
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            This section is for manual vehicles only. Right foot handles
            accelerator and brake; left foot controls clutch.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {clutchFocus.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <figure className="mt-5 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
            <div className="relative h-56 w-full">
              <Image
                src="/theory-notes/pedal.jpeg"
                alt="Vehicle pedals for manual driving"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="p-3 text-xs text-gray-600 dark:text-gray-300">
              Manual pedal layout practice: clutch control should be smooth and
              deliberate.
            </figcaption>
          </figure>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950 sm:p-6">
          <h2 className="text-xl font-bold sm:text-2xl">
            Quick Revision Sequence
          </h2>
          <ol className="mt-4 space-y-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            <li>
              1. Define motor vehicle and state why safe driving is a legal
              duty.
            </li>
            <li>
              2. Rehearse the 7-step safe start routine until it becomes
              automatic.
            </li>
            <li>3. Practice steering hand position and push-pull control.</li>
            <li>
              4. Memorize manual gear speed bands and shift logic (1 to 6).
            </li>
            <li>
              5. Compare manual vs automatic operation by your driving class.
            </li>
            <li>
              6. Drill clutch bite-point control before moving to traffic
              practice.
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
