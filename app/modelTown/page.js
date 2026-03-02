"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../components/LanguageContext";
import ModelCard from "./components/modelCard";

const ROAD_SIGNS = [
  {
    id: 1,
    title: "Stop sign",
    description: "Come to a complete stop before crossing or joining traffic.",
    image: "/roadSign/regulatory/priority/stopSign.jpeg",
  },
  {
    id: 2,
    title: "Give way",
    description: "Yield to traffic on the main road before entering the lane.",
    image: "/roadSign/regulatory/priority/giveWay.jpeg",
  },
  {
    id: 3,
    title: "Speed limit",
    description: "Maintain the posted limit and avoid sudden acceleration.",
    image: "/roadSign/regulatory/proh/speedLimit.png",
  },
  {
    id: 4,
    title: "No entry",
    description: "Do not enter restricted lane directions on the board.",
    image: "/roadSign/regulatory/proh/noEntry.png",
  },
  {
    id: 5,
    title: "Pedestrian crossing",
    description: "Slow down and give right of way to pedestrians.",
    image: "/roadSign/warning/pedCrossing.jpeg",
  },
  {
    id: 6,
    title: "Road works ahead",
    description: "Expect lane narrowing and controlled movement.",
    image: "/roadSign/warning/roadWork.jpeg",
  },
];

const ZONES = [
  {
    title: "Entry and briefing zone",
    image: "/modelTown/model1.jpeg",
    details:
      "Start point checks mirror practical test expectations: seat position, mirrors, indicators, and controlled move-off.",
  },
  {
    title: "Junction and priority zone",
    image: "/roadSign/informatory/oneway.png",
    details:
      "Focus on lane discipline, mirror-signal-manoeuvre routine, and safe gap judgment at intersections.",
  },
  {
    title: "Pedestrian and hazard zone",
    image: "/roadSign/warning/pedesTrian.jpeg",
    details:
      "Scan early for crossings, reduce speed progressively, and maintain predictable steering input.",
  },
  {
    title: "Parking and finish zone",
    image: "/roadSign/informatory/Parking.png",
    details:
      "Demonstrate flush and angle parking, then finish with controlled exit and final safety checks.",
  },
];

const VIDEO_PLAYLISTS = [
  {
    title: "Model town board walkthrough",
    src: "https://www.youtube.com/embed?listType=search&list=model+town+driving+test+layout",
  },
  {
    title: "Parking technique tutorials",
    src: "https://www.youtube.com/embed?listType=search&list=driving+test+parking+tips+kenya",
  },
];

const TRAFFIC_SECTIONS = [
  {
    title: "One-way traffic setup",
    image: "/roadSign/informatory/oneway.png",
    description:
      "Use a single travel direction. On the board, major roads use 4 lanes and minor roads use 3 lanes to train safe overtaking and lane selection.",
  },
  {
    title: "Two-way traffic setup",
    image: "/roadSign/warning/twoWay.jpeg",
    description:
      "Keep left, maintain lane center, and prepare for opposing traffic at every bend and approach.",
  },
  {
    title: "Flow illustration",
    image: "/traffic/traffic.jpg",
    description:
      "Scan the full board before moving so you can predict merges, exits, and lane transitions early.",
  },
];

const ROAD_LINE_GUIDE = [
  {
    title: "White dotted lines",
    image: "/modelTown/model2.png",
    description:
      "Dashed white lines divide lanes moving in the same direction. You may cross only when it is safe and necessary.",
  },
  {
    title: "White continuous line",
    image: "/modelTown/model1.jpeg",
    description:
      "A solid white line marks a lane boundary you should not cross except where specifically permitted.",
  },
  {
    title: "Exits",
    image: "/roadSign/informatory/exitfromMain.png",
    description:
      "Move to the exit lane early, signal in time, and reduce speed smoothly before leaving the main flow.",
  },
  {
    title: "Pavement",
    image: "/roadSign/informatory/pedestrianonspot.jpeg",
    description:
      "Pavements are for pedestrians. Keep vehicle wheels off pavement edges and watch for people stepping out.",
  },
  {
    title: "Island",
    image: "/roadSign/informatory/hazardDemarcation.png",
    description:
      "Traffic islands guide direction and separate movement. Pass on the instructed side and keep clear space.",
  },
  {
    title: "Yellow painted curbs",
    image: "/roadSign/regulatory/proh/noPark.jpeg",
    description:
      "Yellow curbs indicate restricted stopping or parking. Confirm local board instructions before stopping.",
  },
  {
    title: "Junctions",
    image: "/roadSign/warning/crossRoad.png",
    description:
      "Approach junctions with mirror checks, speed control, and right-of-way awareness before committing.",
  },
  {
    title: "Pedestrian crossing",
    image: "/roadSign/warning/pedCrossing.jpeg",
    description:
      "Slow down, be ready to stop, and allow pedestrians to clear the crossing before continuing.",
  },
  {
    title: "Parking: angle and flush",
    image: "/roadSign/informatory/Parking.png",
    description:
      "Practice both angle and flush parking with full observations, controlled steering, and safe exit checks.",
  },
  {
    title: "Hand signals",
    image: "/roadSign/regulatory/proh/turnLeft.png",
    description:
      "Use clear hand signals when required to communicate turning or stopping intentions to nearby road users.",
  },
];

export default function ModelTownPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 via-sky-50 to-slate-100 py-10 dark:from-gray-950 dark:via-slate-900 dark:to-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300">
                {t("Model town practical preparation")}
              </p>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
                {t("Model Town Board")}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                {t(
                  "Use this page to understand board layout, lane priorities, common signs, and practical-test expectations before entering the real test environment.",
                )}
              </p>
              <div className="mt-6">
                <Link
                  href="/modelTown/parking/flush"
                  className="inline-flex rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
                >
                  {t("Play 3D Driving Simulation")}
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
              <Image
                src="/modelTown/model2.png"
                alt="Model town board full layout"
                className="h-auto w-full rounded-xl object-contain"
                width={1200}
                height={700}
                loading="lazy"
              />
            </div>
          </div>
        </header>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {t("Board infographic")}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {t(
              "A practical readiness snapshot showing what examiners commonly focus on.",
            )}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                {t("Lane discipline")}
              </p>
              <p className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                40%
              </p>
              <div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                <div className="h-2 w-2/5 rounded-full bg-blue-600" />
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                {t("Observation and mirrors")}
              </p>
              <p className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                35%
              </p>
              <div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                <div className="h-2 w-[35%] rounded-full bg-emerald-600" />
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                {t("Speed and control")}
              </p>
              <p className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                25%
              </p>
              <div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                <div className="h-2 w-1/4 rounded-full bg-amber-500" />
              </div>
            </article>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {t("Key board zones")}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {t(
              "Understand each zone before practice so your decisions are early and deliberate.",
            )}
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {ZONES.map((zone) => (
              <article
                key={zone.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <Image
                  src={zone.image}
                  alt={zone.title}
                  className="h-44 w-full object-cover"
                  width={900}
                  height={352}
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {t(zone.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {t(zone.details)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {t("Navigation checklist")}
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Mirror check before lane changes and turns",
              "Signal in good time and cancel after manoeuvre",
              "Yield correctly at give-way and stop points",
              "Keep speed stable in narrow and hazard zones",
              "Use full observations before parking exit",
              "Maintain lane center and avoid cutting corners",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
              >
                {t(item)}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {t("Traffic flow sections")}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {t(
              "Study one-way and two-way layouts first, then practice lane use based on the board design.",
            )}
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {TRAFFIC_SECTIONS.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/70"
              >
                <div className="h-44 bg-slate-100 p-4 dark:bg-slate-900/70">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                    width={720}
                    height={352}
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {t(item.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {t(item.description)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {t("Road lines and markings")}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {t(
              "Use these markings and road features to make correct lane, speed, and priority decisions during board practice.",
            )}
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ROAD_LINE_GUIDE.map((item) => (
              <ModelCard
                key={item.title}
                title={t(item.title)}
                image={item.image}
                description={t(item.description)}
              />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {t("Common road signs on the board")}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ROAD_SIGNS.map((sign) => (
              <ModelCard
                key={sign.id}
                title={t(sign.title)}
                image={sign.image}
                description={t(sign.description)}
              />
            ))}
          </div>
        </section>

        <section className="mt-10 pb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {t("Training videos")}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {t(
              "Watch guided walkthroughs and parking drills before your board practice.",
            )}
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {VIDEO_PLAYLISTS.map((video) => (
              <article
                key={video.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="aspect-video w-full">
                  <iframe
                    src={video.src}
                    title={video.title}
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                    {t(video.title)}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
