// Minden szöveg és tartalom egy helyen. Cseréld le a valódi adataidra.

export type PricingFixed = {
  type: "fixed";
  price: string;
  unit?: string;
  note?: string;
};

export type PricingTiered = {
  type: "tiered";
  items: { name: string; price: string; note?: string }[];
};

export type Service = {
  icon: string; // inline SVG path (24x24 viewBox)
  title: string;
  tagline: string;
  bullets: string[];
  pricing: PricingFixed | PricingTiered;
  // Hosszabb leírás a "Részletek" felugró ablakhoz
  details: {
    intro: string;
    sections: { heading: string; body: string }[];
  };
};

export const site = {
  name: "Vezetéknév Keresztnév",
  role: "Sport • Karrier • Business Coach",
  // Háttérkép a hero szekcióhoz (cseréld le sajátra a /public mappában vagy URL-re)
  heroImage:
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2000&q=80",
  portrait:
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",

  nav: [
    { label: "Rólam", href: "#rolam" },
    { label: "Szolgáltatások", href: "#szolgaltatasok" },
    { label: "Kapcsolat", href: "#kapcsolat" },
  ],
  cta: { label: "Időpont foglalás", href: "#kapcsolat" },

  // Hero alatti szolgáltatás-címkék
  heroTags: ["Sport Coaching", "Karrier Coaching", "Business Coaching"],

  about: {
    heading: "A teljesítmény összeköt minket.",
    shortBio:
      "Sport-, karrier- és business coachként emberekkel dolgozom célokon, irányokon és eredményeken. Hiszek a tiszta célokban, a fókuszált kérdésekben és a konkrét lépésekben.",
    longBio: [
      "A teljesítmény világa mindig közel állt hozzám. Megtanultam rendszerekben gondolkodni, felelősséget vállalni és stratégiai döntéseket hozni. A coachingban azt találtam meg, ami igazán motivál: emberekkel együtt dolgozni célokon és eredményeken.",
      "Számomra a közös munka olyan, mint egy stratégiai játszma – minden lépés számít, de a valódi eredményt nem egyetlen döntés, hanem a tudatosan felépített folyamat hozza meg.",
      "A brief coaching módszerben hiszek: tisztán megfogalmazott célok, fókuszált kérdések, konkrét lépések. Legyen szó sportról, karrierről vagy üzleti döntésekről, a cél mindig ugyanaz: irányt adni a teljesítménynek.",
    ],
  },

  services: [
    {
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
      title: "Coaching",
      tagline: "Célok, irány, eredmény.",
      bullets: [
        "Cél- és iránymeghatározás",
        "Elakadások feloldása",
        "Döntéshelyzetek tisztázása",
        "Tudatos fejlődési terv",
      ],
      pricing: {
        type: "tiered",
        items: [
          { name: "Konzultáció", price: "18 000 Ft", note: "egyszeri alkalom" },
          { name: "Fókusz csomag", price: "75 000 Ft", note: "5 alkalom" },
          { name: "Teljes program", price: "140 000 Ft", note: "10 alkalom" },
        ],
      },
      details: {
        intro:
          "A coaching egy strukturált, célorientált együttműködés, amelyben nem tanácsot adok, hanem segítek neked tisztábban látni, jobb döntéseket hozni és valóban lépni. Nem terápia és nem tréning: a jelenből indulunk ki, és arra fókuszálunk, ami előre visz. Te vagy a szakértője a saját életednek – én a folyamatot tartom keretben, kérdezek, tükrözök, és gondoskodom róla, hogy a felismerésekből konkrét cselekvés legyen.",
        sections: [
          {
            heading: "Kinek ajánlott?",
            body: "Vezetőknek, szakembereknek, vállalkozóknak és sportolóknak, akik tudatosabban szeretnék alakítani az útjukat. Akkor is hasznos, ha épp jól mennek a dolgok, de érzed, hogy a következő szintre lépnél, vagy ha sok a lehetőség, és nehéz priorizálni.",
          },
          {
            heading: "Mikor érdemes jönni?",
            body: "Ha elakadtál egy döntésben, ha váltás vagy új felelősség előtt állsz, ha visszatérő minták akadályoznak, vagy ha egyszerűen túl sok a zaj a fejedben és rendet szeretnél tenni a céljaid között. Minél konkrétabb a kérdés, annál gyorsabb az eredmény.",
          },
          {
            heading: "Hogyan zajlik?",
            body: "Az első ülésen tisztázzuk, hová szeretnél eljutni, és miről ismered majd fel, hogy sikerült. Ezután fókuszált kérdésekkel és gyakorlatokkal haladunk, ülésről ülésre konkrét lépésekkel. Egy alkalom jellemzően 60 perc, általában heti vagy kétheti ritmusban.",
          },
          {
            heading: "Mit viszel haza?",
            body: "Átláthatóbb gondolkodást, egy világos cselekvési tervet és magabiztosabb döntéseket. A cél nem a függőség, hanem hogy a végén magadtól is tudd tartani az irányt – stabilan, akár nyomás alatt is.",
          },
        ],
      },
    },
    {
      icon: "M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a3 3 0 10-3-3",
      title: "Mediáció",
      tagline: "Megoldás konfliktus helyett.",
      bullets: [
        "Pártatlan, semleges közvetítés",
        "Munkahelyi és üzleti viták",
        "Családi és párkapcsolati ügyek",
        "Bizalmas, önkéntes folyamat",
      ],
      pricing: {
        type: "fixed",
        price: "25 000 Ft",
        unit: "/ alkalom",
        note: "90 perces ülés",
      },
      details: {
        intro:
          "A mediáció egy önkéntes és bizalmas folyamat, amelyben semleges, pártatlan közvetítőként segítek a feleknek úgy beszélni egymással, hogy az tényleg előre vigyen. Nem bíráskodom és nem döntök helyettetek: a feszültség mögötti valódi érdekeket tárjuk fel, és közösen építünk olyan megoldást, amelyet mindkét fél magáénak érez. A cél nem az, hogy valaki „nyerjen”, hanem hogy a kapcsolat és a működés helyreálljon.",
        sections: [
          {
            heading: "Mikor segít?",
            body: "Munkahelyi és üzleti vitáknál (társak, csapatok, ügyfelek között), valamint családi és párkapcsolati helyzetekben, ahol a kommunikáció elakadt, de mindkét fél nyitott arra, hogy megoldást keressen a sérelmek hangoztatása helyett.",
          },
          {
            heading: "Mikor érdemes jönni?",
            body: "Lehetőleg minél előbb – már akkor, amikor a feszültség visszatérő, de még nem mérgesedett el teljesen. Akkor is jó választás, ha hosszabb pereskedés helyett gyors, méltányos és kapcsolatkímélő lezárást szeretnétek.",
          },
          {
            heading: "Hogyan zajlik?",
            body: "Strukturált beszélgetések során először külön-külön, majd közösen tisztázzuk a helyzetet és az érdekeket. Lépésről lépésre haladunk a közös pontok felé, és a végén írásban is rögzítjük a megállapodást. Mindez ítélkezés, nyomás és sietség nélkül, biztonságos keretben történik.",
          },
          {
            heading: "Miért éri meg?",
            body: "Gyorsabb és általában jóval olcsóbb, mint a jogi út, ráadásul kíméli az érintett kapcsolatokat. A felek maguk alakítják a megoldást, így az tartósabb is – nem egy kívülről rájuk kényszerített döntés.",
          },
        ],
      },
    },
  ] as Service[],

  contact: {
    heading: "Kérdésed van? Írj nekem.",
    address: "1023 Budapest, Példa utca 12.",
    email: "hello@example.com",
    // Térkép középpont (Budapest, példa koordináta)
    map: { lat: 47.5188, lng: 19.0408, zoom: 15 },
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
    ],
  },
};

export type Site = typeof site;
