const SUPPORTED_LANGUAGES = new Set([
  "en",
  "sw",
  "luo",
  "ki",
  "ka",
  "kae",
  "lu",
]);

const LANGUAGE_FALLBACKS = {
  luo: "sw",
  ki: "sw",
  ka: "sw",
  kae: "sw",
  lu: "sw",
};

const SW_TRANSLATIONS = {
  home: "Nyumbani",
  studyMaterials: "Nyenzo za Kujifunzia",
  modelTown: "Mji wa Mfano",
  modelTownBoard: "Bodi ya Mji wa Mfano",
  safetyTraining: "Mafunzo ya Usalama",
  siteName: "Rafiki Driving School",
  hello: "Habari",
  profile: "Wasifu",
  openMainMenu: "Fungua menyu kuu",
  quickLinks: "Viungo vya Haraka",
  legal: "Kisheria",
  privacyPolicy: "Sera ya Faragha",
  termsOfService: "Masharti ya Huduma",
  ntsaMaster: "Rafiki Driving School",
  makingKenyanRoadsSafer: "Kufanya barabara za Kenya kuwa salama zaidi.",
  builtForKenya: "Imejengwa kwa ajili ya Kenya.",
  "Official NTSA aligned learning": "Mafunzo yanayoendana rasmi na NTSA",
  "Learn driving theory with clarity and confidence":
    "Jifunze nadharia ya udereva kwa uwazi na kujiamini",
  "Start learning": "Anza kujifunza",
  "Take a practice test": "Fanya mtihani wa mazoezi",
  "At a glance": "Kwa muhtasari",
  "Why learners choose Rafiki": "Kwa nini wanafunzi huchagua Rafiki",
  "Choose your driving class": "Chagua darasa lako la udereva",
  "Student feedback": "Maoni ya wanafunzi",
  "Model town practical preparation": "Maandalizi ya vitendo ya mji wa mfano",
  "Model Town Board": "Bodi ya Mji wa Mfano",
  "Board infographic": "Muhtasari wa picha wa bodi",
  "Key board zones": "Maeneo muhimu ya bodi",
  "Navigation checklist": "Orodha ya ukaguzi wa uelekezaji",
  "Common road signs on the board":
    "Alama za kawaida za barabarani kwenye bodi",
  "Training videos": "Video za mafunzo",
  "Practice flush parking": "Fanya mazoezi ya maegesho ya sambamba",
  "Practice angle parking": "Fanya mazoezi ya maegesho ya pembe",
  "Theory Notes: Vehicle Control": "Nukuu za Nadharia: Udhibiti wa Gari",
  "Back to Study Hub": "Rudi kwenye Kituo cha Masomo",
  "Jump to Gear Statistics": "Nenda kwenye Takwimu za Gia",
  "Gear Type Popularity Over Time": "Umaarufu wa Aina za Gia kwa Muda",
  "Global EV trend": "Mwelekeo wa EV duniani",
  "What Is a Motor Vehicle?": "Gari la Injini ni nini?",
  "Safe Vehicle Start Procedure": "Utaratibu Salama wa Kuwasha Gari",
  "Steering Wheel: Function and Control": "Usukani: Kazi na Udhibiti",
  "Practical Procedures: Start, Join, Stop, Hills, and Turns":
    "Taratibu za Vitendo: Kuwasha, Kujiunga, Kusimama, Milima na Kugeuka",
  "Gears: Function and Class Differences": "Gia: Kazi na Tofauti za Madarasa",
  "Automatic and Other Transmission Types":
    "Automatic na Aina Nyingine za Transmission",
  "Manual Pedals: Accelerator, Brake, and Clutch (Clutch Focus)":
    "Pedali za Manual: Accelerator, Brake na Clutch (Msisitizo wa Clutch)",
  "Quick Revision Sequence": "Mpangilio wa Haraka wa Marudio",
  "Students trained": "Wanafunzi waliofundishwa",
  "Average pass rate": "Wastani wa ufaulu",
  "Practice questions": "Maswali ya mazoezi",
  "Supported languages": "Lugha zinazotumika",
  "Road Signs": "Alama za Barabarani",
  "Practice Quiz": "Jaribio la Mazoezi",
  "Model Town": "Mji wa Mfano",
  "Start Learning Now": "Anza Kujifunza Sasa",
  "Current Language:": "Lugha ya Sasa:",
  English: "Kiingereza",
  Swahili: "Kiswahili",
  switchToLightMode: "Badili hadi hali ya mwanga",
  switchToDarkMode: "Badili hadi hali ya giza",
  lightMode: "Hali ya Mwanga",
  darkMode: "Hali ya Giza",
  closeMainMenu: "Funga menyu kuu",
  profileSaved: "Wasifu umehifadhiwa.",
  settingsSaved: "Mipangilio imehifadhiwa.",
  feedbackRequired: "Tafadhali andika maoni kabla ya kutuma.",
  feedbackSaved: "Maoni yamehifadhiwa. Unaweza pia kutuma kwa barua pepe.",
  quizzesCompleted: "Mitihani Iliyokamilika",
  learningStreak: "Mfululizo wa Kujifunza",
  joined: "Umejiunga",
  overview: "Muhtasari",
  settings: "Mipangilio",
  feedback: "Maoni",
  overviewDescription:
    "Endelea kujifunza, kagua mitihani yako, na tuma maoni moja kwa moja kutoka kwenye wasifu wako.",
  takeQuiz: "Fanya Mtihani",
  reviewedQuizzes: "Mitihani Iliyopitiwa",
  profileDetails: "Maelezo ya Wasifu",
  fullName: "Jina Kamili",
  email: "Barua Pepe",
  phone: "Simu",
  county: "Kaunti",
  drivingSchool: "Shule ya Udereva",
  saveProfile: "Hifadhi Wasifu",
  preferences: "Mapendeleo",
  themePreferenceDescription:
    "Chagua hali unayopendelea kwa mwonekano wa programu.",
  sendDirectFeedback: "Tuma Maoni Moja kwa Moja",
  feedbackDescription:
    "Shiriki hitilafu, maombi ya vipengele, na maoni ya ubora wa mitihani moja kwa moja kutoka kwenye wasifu wako.",
  topic: "Mada",
  platformExperience: "Uzoefu wa jukwaa",
  quizQuality: "Ubora wa mtihani",
  studyContent: "Maudhui ya masomo",
  bugReport: "Ripoti ya hitilafu",
  featureRequest: "Ombi la kipengele",
  contactEmail: "Barua Pepe ya Mawasiliano",
  rating: "Ukadiriaji",
  feedbackMessage: "Ujumbe wa Maoni",
  feedbackPlaceholder: "Andika maoni yako hapa...",
  allowFollowUpContact: "Ruhusu mawasiliano ya ufuatiliaji",
  saveFeedback: "Hifadhi Maoni",
  sendViaEmailApp: "Tuma kwa Programu ya Barua Pepe",
  recentFeedback: "Maoni ya Hivi Karibuni",
  reviewMode: "Hali ya Mapitio",
  review: "Mapitio",
  reviewDescription:
    "Kila swali linaonyesha jibu sahihi na picha inayohusiana kwa marudio.",
  backToReviewHome: "Rudi kwenye ukurasa wa mapitio",
  viewAllReviewQuizzes: "Tazama mapitio yote ya mitihani",
  question: "Swali",
  correct: "Sahihi",
  questionImage: "Picha ya swali",
  quizNotFound: "Mtihani haujapatikana",
  quizNotFoundDescription: "Mtihani wa mapitio uliotakiwa haukupatikana.",
};

const MAIN_PAGE_SW_TRANSLATIONS = {
  profileHub: "Kitovu cha Wasifu",
  visitProfile: "Tembelea Kitovu cha Wasifu",
  students: "wanafunzi",
  roadSigns: "Alama za Barabarani",
  roadSignsDescription: "Jifunze maana ya alama na ishara za barabarani",
  vehicleParts: "Sehemu za Gari",
  vehiclePartsDescription: "Elewa sehemu za gari na kazi zake",
  trafficLights: "Taa za Barabarani",
  trafficLightsDescription: "Jifunze ishara za taa za barabarani na maana zake",
  roadLaws: "Sheria za Barabarani",
  roadLawsDescription: "Chunguza sheria na kanuni zinazosimamia barabara",
  safetyTrainingDescription:
    "Kamilisha mafunzo yaliyoundwa kukuweka salama barabarani",
  practiceQuizzes: "Mitihani ya Mazoezi",
  practiceQuizzesDescription: "Pima uelewa wako kwa mitihani shirikishi",
  studyMaterialsTitle: "Nyenzo za Kujifunzia",
  accessComprehensiveResources:
    "Pata nyenzo kamili za kukusaidia kujifunza, kufanya mazoezi, na kupita mtihani wako wa udereva.",
  explore: "Chunguza",
  readyToStartLearning: "Uko tayari kuanza kujifunza?",
  chooseAnyTopic: "Chagua mada yoyote hapo juu na uanze safari yako leo.",
  takeAPracticeQuiz: "Fanya Mtihani wa Mazoezi",
  materialsWord: "Nyenzo",
  "Master Your": "Boresha",
  "Driving Journey": "Safari yako ya Udereva",
  "Kenya's most trusted digital driving school. Learn with modern technology, practice with real NTSA questions, and pass your test with confidence.":
    "Shule ya udereva ya kidijitali inayoaminika zaidi Kenya. Jifunze kwa teknolojia ya kisasa, fanya mazoezi kwa maswali halisi ya NTSA, na ufaulu mtihani wako kwa kujiamini.",
  "Start Learning Free": "Anza Kujifunza Bure",
  "Take Practice Test": "Fanya Mtihani wa Mazoezi",
  "Focused content, consistent practice, and practical guidance for Kenyan roads.":
    "Maudhui lengwa, mazoezi endelevu, na mwongozo wa vitendo kwa barabara za Kenya.",
  "NTSA-aligned content": "Maudhui yanayolingana na NTSA",
  "Structured lessons and quizzes built around the current driving curriculum.":
    "Masomo na mitihani iliyopangwa kulingana na mtaala wa sasa wa udereva.",
  "Local-language support": "Msaada wa lugha za ndani",
  "Learners can read guidance in multiple local and regional languages.":
    "Wanafunzi wanaweza kusoma mwongozo katika lugha mbalimbali za ndani na za kikanda.",
  "Study + quiz workflow": "Mtiririko wa kujifunza + mtihani",
  "Move from concepts to assessment with instant feedback on answers.":
    "Sogea kutoka dhana hadi tathmini ukiwa na mrejesho wa papo hapo kwenye majibu.",
  "Model town preparation": "Maandalizi ya mji wa mfano",
  "Learn board navigation rules, parking methods, and practical test flow.":
    "Jifunze sheria za uelekezaji wa bodi, mbinu za maegesho, na mtiririko wa mtihani wa vitendo.",
  "Progress visibility": "Mwonekano wa maendeleo",
  "Track completion and revisit weak topics before your practical exam.":
    "Fuatilia kukamilika na urudie mada dhaifu kabla ya mtihani wako wa vitendo.",
  "Mobile-ready learning": "Kujifunza rafiki kwa simu",
  "Study from phone or desktop with consistent performance and layout.":
    "Jifunze kwa simu au kompyuta kwa utendaji na mwonekano thabiti.",
  "Pick a category and begin with the right materials.":
    "Chagua kundi na anza na nyenzo sahihi.",
  "Experiences from learners and instructors.":
    "Uzoefu kutoka kwa wanafunzi na wakufunzi.",
  "I passed on my first attempt after practicing here daily for two weeks.":
    "Nilifaulu jaribio la kwanza baada ya kufanya mazoezi hapa kila siku kwa wiki mbili.",
  "The content flow is easy for learners to follow and matches what we teach.":
    "Mtiririko wa maudhui ni rahisi kwa wanafunzi kufuata na unaendana na tunachofundisha.",
  "The model town explanations helped me understand lane choices quickly.":
    "Maelezo ya mji wa mfano yalinisaidia kuelewa uchaguzi wa njia kwa haraka.",
  "Recent graduate": "Aliyehitimu hivi karibuni",
  "Driving instructor": "Mkufunzi wa udereva",
  "Motorcycles and three-wheelers": "Pikipiki na magurudumu matatu",
  "Light vehicles": "Magari mepesi",
  "Commercial vehicles": "Magari ya biashara",
  "PSV and buses": "PSV na mabasi",
  "Use this page to understand board layout, lane priorities, common signs, and practical-test expectations before entering the real test environment.":
    "Tumia ukurasa huu kuelewa mpangilio wa bodi, vipaumbele vya njia, alama za kawaida, na matarajio ya mtihani wa vitendo kabla ya kuingia mazingira halisi ya mtihani.",
  "Play 3D Driving Simulation": "Cheza Uigaji wa Udereva wa 3D",
  "A practical readiness snapshot showing what examiners commonly focus on.":
    "Muhtasari wa utayari wa vitendo unaoonyesha maeneo ambayo wakaguzi huzingatia mara nyingi.",
  "Lane discipline": "Nidhamu ya njia",
  "Observation and mirrors": "Uchunguzi na vioo",
  "Speed and control": "Kasi na udhibiti",
  "Understand each zone before practice so your decisions are early and deliberate.":
    "Elewa kila eneo kabla ya mazoezi ili maamuzi yako yawe ya mapema na makusudi.",
  "Entry and briefing zone": "Eneo la kuingia na maelekezo",
  "Start point checks mirror practical test expectations: seat position, mirrors, indicators, and controlled move-off.":
    "Ukaguzi wa mwanzo unaendana na matarajio ya mtihani wa vitendo: mkao wa kiti, vioo, viashirio na kuondoka kwa udhibiti.",
  "Junction and priority zone": "Eneo la makutano na vipaumbele",
  "Focus on lane discipline, mirror-signal-manoeuvre routine, and safe gap judgment at intersections.":
    "Lenga nidhamu ya njia, utaratibu wa kioo-ishara-mwendo, na tathmini salama ya mianya kwenye makutano.",
  "Pedestrian and hazard zone": "Eneo la watembea kwa miguu na hatari",
  "Scan early for crossings, reduce speed progressively, and maintain predictable steering input.":
    "Chunguza mapema vivuko, punguza kasi hatua kwa hatua, na dhibiti usukani kwa uthabiti.",
  "Parking and finish zone": "Eneo la maegesho na mwisho",
  "Demonstrate flush and angle parking, then finish with controlled exit and final safety checks.":
    "Onyesha maegesho ya flush na ya pembe, kisha malizia kwa kutoka kwa udhibiti na ukaguzi wa mwisho wa usalama.",
  "Mirror check before lane changes and turns":
    "Kagua vioo kabla ya kubadili njia au kugeuka",
  "Signal in good time and cancel after manoeuvre":
    "Washa ishara mapema na izime baada ya mwendo",
  "Yield correctly at give-way and stop points":
    "Toa njia ipasavyo kwenye maeneo ya Give Way na Stop",
  "Keep speed stable in narrow and hazard zones":
    "Dumisha kasi tulivu katika maeneo membamba na ya hatari",
  "Use full observations before parking exit":
    "Fanya uchunguzi kamili kabla ya kutoka maegeshoni",
  "Maintain lane center and avoid cutting corners":
    "Dumisha katikati ya njia na epuka kukata kona",
  "Traffic flow sections": "Sehemu za mtiririko wa trafiki",
  "Study one-way and two-way layouts first, then practice lane use based on the board design.":
    "Jifunze kwanza mpangilio wa njia moja na mbili, kisha fanya mazoezi ya matumizi ya njia kulingana na muundo wa bodi.",
  "One-way traffic setup": "Mpangilio wa trafiki ya njia moja",
  "Use a single travel direction. On the board, major roads use 4 lanes and minor roads use 3 lanes to train safe overtaking and lane selection.":
    "Tumia mwelekeo mmoja wa safari. Kwenye bodi, barabara kuu hutumia njia 4 na ndogo hutumia njia 3 kufundisha kupita kwa usalama na uchaguzi wa njia.",
  "Two-way traffic setup": "Mpangilio wa trafiki ya njia mbili",
  "Keep left, maintain lane center, and prepare for opposing traffic at every bend and approach.":
    "Kaa kushoto, dumisha katikati ya njia, na jiandae kwa trafiki inayokuja kwenye kila kona na mwendelezo.",
  "Flow illustration": "Mchoro wa mtiririko",
  "Scan the full board before moving so you can predict merges, exits, and lane transitions early.":
    "Chunguza bodi nzima kabla ya kuanza ili kutabiri mapema muunganiko, njia za kutoka, na mabadiliko ya njia.",
  "Road lines and markings": "Mistari na alama za barabarani",
  "Use these markings and road features to make correct lane, speed, and priority decisions during board practice.":
    "Tumia alama hizi na vipengele vya barabara kufanya maamuzi sahihi ya njia, kasi, na kipaumbele wakati wa mazoezi ya bodi.",
  "White dotted lines": "Mistari meupe ya nukta",
  "Dashed white lines divide lanes moving in the same direction. You may cross only when it is safe and necessary.":
    "Mistari meupe iliyokatika hugawa njia zinazoenda mwelekeo mmoja. Unaweza kuvuka tu pale ni salama na lazima.",
  "White continuous line": "Mstari mweupe endelevu",
  "A solid white line marks a lane boundary you should not cross except where specifically permitted.":
    "Mstari mweupe usiokatika huonyesha mpaka wa njia ambao hupaswi kuvuka isipokuwa unapewa ruhusa maalumu.",
  Exits: "Njia za kutoka",
  "Move to the exit lane early, signal in time, and reduce speed smoothly before leaving the main flow.":
    "Hamia njia ya kutoka mapema, toa ishara kwa wakati, na punguza kasi kwa utulivu kabla ya kuondoka kwenye mtiririko mkuu.",
  Pavement: "Njia ya watembea kwa miguu",
  "Pavements are for pedestrians. Keep vehicle wheels off pavement edges and watch for people stepping out.":
    "Pavement ni ya watembea kwa miguu. Weka magurudumu mbali na kingo za pavement na angalia watu wanaovuka.",
  Island: "Kisiwa cha trafiki",
  "Traffic islands guide direction and separate movement. Pass on the instructed side and keep clear space.":
    "Visiwa vya trafiki huongoza mwelekeo na kutenganisha mwendo. Pita upande ulioelekezwa na acha nafasi salama.",
  "Yellow painted curbs": "Kingo zilizopakwa rangi ya manjano",
  "Yellow curbs indicate restricted stopping or parking. Confirm local board instructions before stopping.":
    "Kingo za manjano zinaonyesha vizuizi vya kusimama au kuegesha. Thibitisha maelekezo ya eneo kabla ya kusimama.",
  Junctions: "Makutano",
  "Approach junctions with mirror checks, speed control, and right-of-way awareness before committing.":
    "Karibia makutano kwa ukaguzi wa vioo, udhibiti wa kasi, na uelewa wa haki ya njia kabla ya kuingia.",
  "Parking: angle and flush": "Maegesho: pembe na flush",
  "Practice both angle and flush parking with full observations, controlled steering, and safe exit checks.":
    "Fanya mazoezi ya maegesho ya pembe na flush kwa uchunguzi kamili, udhibiti wa usukani, na ukaguzi salama wa kutoka.",
  "Hand signals": "Ishara za mkono",
  "Use clear hand signals when required to communicate turning or stopping intentions to nearby road users.":
    "Tumia ishara za mkono zilizo wazi inapohitajika kuwasilisha nia ya kugeuka au kusimama kwa watumiaji wengine wa barabara.",
  "Stop sign": "Alama ya Simama",
  "Come to a complete stop before crossing or joining traffic.":
    "Simama kabisa kabla ya kuvuka au kujiunga na trafiki.",
  "Give way": "Toa Njia",
  "Yield to traffic on the main road before entering the lane.":
    "Toa nafasi kwa trafiki ya barabara kuu kabla ya kuingia kwenye njia.",
  "Speed limit": "Kikomo cha Kasi",
  "Maintain the posted limit and avoid sudden acceleration.":
    "Dumisha kikomo kilichoonyeshwa na epuka kuongeza kasi ghafla.",
  "No entry": "Hairuhusiwi Kuingia",
  "Do not enter restricted lane directions on the board.":
    "Usiingie kwenye mwelekeo wa njia uliozuiliwa kwenye bodi.",
  "Road works ahead": "Kazi za barabarani mbele",
  "Expect lane narrowing and controlled movement.":
    "Tarajia njia kubana na mwendo wa udhibiti.",
  "Watch guided walkthroughs and parking drills before your board practice.":
    "Tazama mwongozo wa hatua kwa hatua na mazoezi ya maegesho kabla ya mazoezi yako ya bodi.",
  "Model town board walkthrough": "Mwongozo wa bodi ya mji wa mfano",
  "Parking technique tutorials": "Mafunzo ya mbinu za maegesho",
  testYourKnowledge: "Pima Uelewa Wako",
  knowledge: "Uelewa",
  quizDescription: "Jibu maswali ili uhakiki ulichojifunza.",
  questions: "Maswali",
  passRate: "Kiwango cha ufaulu",
  available: "Inapatikana",
  reviewProgress: "Kagua Maendeleo Yako",
  analyzePerformance:
    "Changanua utendaji wako wa mitihani, kagua majibu sahihi, na tambua maeneo ya kuboresha.",
  startReviewing: "Anza Mapitio",
  quizCategories: "Makundi ya Mitihani",
  selectCategory:
    "Chagua kundi na kiwango cha mtihani ili kuanza kupima uelewa wako.",
  whyTakeQuizzes: "Kwa nini ufanye mitihani?",
  instantFeedback: "Mrejesho wa papo hapo",
  instantFeedbackDesc: "Pata matokeo ya haraka baada ya kila jibu.",
  trackProgress: "Fuatilia maendeleo",
  trackProgressDesc:
    "Angalia maendeleo yako kwa muda na boresha maeneo dhaifu.",
  learnEffectively: "Jifunze kwa ufanisi",
  learnEffectivelyDesc: "Tumia mazoezi kulenga mada muhimu kwa mtihani.",
  referenceSources: "Vyanzo vya Marejeo",
  kenyanTrafficLawsPenalties: "Sheria za Trafiki za Kenya na Adhabu",
  understandingTrafficLawsIntro:
    "Kuelewa sheria hizi ni muhimu ili kuepuka adhabu na kuhakikisha usalama.",
  speedingOffense: "Kuendesha kwa kasi kupita kiasi",
  speedingPenalty: "Faini kuanzia KSh 500 hadi KSh 10,000",
  speedingSource: "Kifungu cha 42 cha Sheria ya Trafiki",
  duiOffense: "Kuendesha ukiwa umelewa (DUI)",
  duiPenalty: "Faini hadi KSh 100,000 au kifungo hadi miaka 2",
  duiSource: "Kifungu cha 44 cha Sheria ya Trafiki",
  phoneDrivingOffense: "Kutumia simu ukiendesha",
  phoneDrivingPenalty: "Faini ya KSh 2,000",
  phoneDrivingSource: "Traffic (Amendment) Act, 2012",
  penaltyLabel: "Adhabu",
  sourceLabel: "Chanzo",
  citizensPedestrianRights: "Haki za Raia na Watembea kwa Miguu",
  yourRightsOnRoad: "Haki Zako Barabarani",
  rightCourtesyOfficers: "Haki ya kutendewa kwa heshima na maafisa wa trafiki",
  rightSeeOfficerId: "Haki ya kuona kitambulisho cha afisa",
  rightInformedOffense: "Haki ya kuelezwa kosa mahsusi",
  rightFairHearing: "Haki ya kusikilizwa kwa haki mahakamani",
  pedestrianRights: "Haki za Watembea kwa Miguu",
  pedestrianRightOfWay: "Haki ya njia kwenye vivuko na makutano yaliyoainishwa",
  driversYieldPedestrians:
    "Madereva lazima watoe nafasi kwa watembea kwa miguu wanapogeuka",
  illegalParkWalkways: "Ni kosa kuegesha kwenye njia za watembea kwa miguu",
};

const BUILTIN_TRANSLATIONS = {
  sw: { ...SW_TRANSLATIONS, ...MAIN_PAGE_SW_TRANSLATIONS },
  luo: {},
  ki: {},
  ka: {},
  kae: {},
  lu: {},
};

export function normalizeLanguage(value) {
  if (typeof value !== "string") return "en";
  const normalized = value.trim().toLowerCase();
  if (!normalized) return "en";
  return SUPPORTED_LANGUAGES.has(normalized) ? normalized : "en";
}

export function getTargetLanguageCandidates(language) {
  const normalized = normalizeLanguage(language);
  if (normalized === "en") return ["en"];

  const fallback = LANGUAGE_FALLBACKS[normalized];
  const candidates = [normalized];

  if (fallback && fallback !== normalized) {
    candidates.push(fallback);
  }

  if (!candidates.includes("sw")) {
    candidates.push("sw");
  }

  return candidates;
}

export function lookupDictionaryTranslation(language, key, fallbackText = "") {
  const normalized = normalizeLanguage(language);
  if (normalized === "en") return null;

  const variants = [key, fallbackText]
    .filter((value) => typeof value === "string")
    .map((value) => value.trim())
    .filter(Boolean);

  if (variants.length === 0) return null;

  const languagesToCheck = getTargetLanguageCandidates(normalized);

  for (const languageCode of languagesToCheck) {
    const dictionary = BUILTIN_TRANSLATIONS[languageCode];
    if (!dictionary) continue;

    for (const variant of variants) {
      if (dictionary[variant]) {
        return dictionary[variant];
      }
    }
  }

  return null;
}
