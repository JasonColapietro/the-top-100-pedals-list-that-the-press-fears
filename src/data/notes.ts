// Source of truth for the /notes article section. Pages, sitemap, llms.txt,
// llms-full.txt and the guard test (tests/notes.test.mts) all read this.
// Inline links use [anchor text](url). Internal links start with "/".

export type NoteSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type Note = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  keywords: string[];
  intro: string[];
  sections: NoteSection[];
};

export const NOTES_LASTMOD = '2026-11-15';

export const notes: Note[] = [
  {
    slug: 'how-the-suede-100-pedal-list-was-built',
    title: 'How Jason Colapietro Researched and Built the Suede 100 Pedal List',
    metaTitle: 'How the Suede 100 Pedal List Was Built by Jason Colapietro',
    description:
      'Jason Colapietro explains how the Suede 100 was researched: owned gear, level-matched tests, sourced quotes, strict tiers, and a versioned canon to argue with.',
    excerpt:
      'One hundred pedals, one hundred numbers, no ties. The research rules, the tier logic, and the typed data model behind the Suede 100.',
    datePublished: '2026-11-14',
    dateModified: '2026-11-15',
    keywords: ['Suede 100 methodology', 'guitar pedal ranking research', 'Jason Colapietro', 'best guitar pedals list'],
    intro: [
      'A ranked list of one hundred guitar pedals has exactly one rule that makes it hard: no two entries can share a number. That rule is why Jason Colapietro spent two years building [the Suede 100](/) instead of shipping another "best overdrives for blues" roundup in an afternoon.',
      'This note walks through how the list was researched, how the tiers were drawn, and how the page itself was engineered by Suede AI so that every verdict holds up when someone pushes back. If you build ranking pages of any kind, the process transfers.',
    ],
    sections: [
      {
        heading: 'The rule that shaped everything: one list, one number per pedal',
        paragraphs: [
          'Most gear lists avoid the hard question by splitting the field. Ten fuzzes here, ten delays there, a separate list for metal. Jason Colapietro took the opposite position. The Suede 100 is one list, numbered 1 through 100, and every pedal is ranked against every other pedal on it, not against its price bracket or its genre. The [Klon Centaur sits at #1](/#rank-1). The [Boss MT-2 Metal Zone sits at #100](/#rank-100). Everything between them had to earn a specific slot.',
          'That constraint did most of the research work. Once two pedals cannot tie, you are forced to decide whether a Tube Screamer beats a RAT on the conditions that actually matter: a loud room, a real band, a player who is not reading the manual. Jason kept notes on every comparison, and each time a pedal moved, the notes had to say why.',
        ],
      },
      {
        heading: 'Where the evidence came from',
        paragraphs: [
          'The list is built on use, not on press releases. Jason Colapietro owned, sold, and in some cases rebought many of the pedals on it, and the entries say so plainly. The RAT entry admits he sold one in 2018 and bought another in 2021 because he was wrong. The Big Muff entry compares three versions he has owned.',
          'Where a claim could be tested, it was tested. The Klon verdict rests on a level-matched blind comparison against three clones: a KTR, a Tumnus, and a hand-wired boutique unit. Level matching matters more than any other step in a pedal test, because the louder pedal almost always wins a casual A/B. Matching output first removes that bias before anyone forms an opinion.',
          'For the bottom tier, opinion alone was not enough. The disaster entries carry community quotes with linked sources, so a reader can see that the complaint about a menu system or a noise floor did not start with Suede. The rule Jason Colapietro used: if you are going to call something a disaster in public, bring receipts that are not your own.',
        ],
      },
      {
        heading: 'Drawing the tiers: canon, greats, the middle, disasters',
        paragraphs: [
          'The list is a gradient, but readers need landmarks, so it is cut into four tiers. Ranks 1 to 10 are the Canon, pedals that changed how electric guitar is played. Ranks 11 to 20 are the Greats, held back only by narrowness or one stubborn flaw. Ranks 21 to 80 are the long middle, where judgment replaces mythology. Ranks 81 to 99 are the Disasters, and #100 gets its own closing block.',
          'The tier cuts were decided last, after the full order existed. Drawing tiers first tempts you to fill quotas: ten canon picks because the page has room for ten. Ordering first and cutting second means the boundary between #10 and #11 reflects a real drop, not a layout decision.',
        ],
      },
      {
        heading: 'Making the list arguable on purpose',
        paragraphs: [
          'A ranking that cannot change is a monument, and monuments do not get better. Every entry links to a "Fight About This" thread on Suede Social, and the list is versioned by edition. This is Edition 2026. When an argument lands, meaning a specific claim grounded in playing experience, the rank can move in the next edition. Vote counts do not move ranks. Arguments do.',
          'The data model supports this directly. Each entry can carry a previous rank and a move reason, so a future edition can show exactly which pedals moved and what changed Jason Colapietro\'s mind. That revision trail is the difference between a canon and a mood.',
        ],
      },
      {
        heading: 'The engineering under the page',
        paragraphs: [
          'The page is a Next.js build backed by a single typed data file. Every entry has a rank, pedal, brand, tier, verdict, and a stable key, and the tier sections, the anchors like #rank-37, and the repository README are all generated from that one file. Nobody edits a rank in two places, so the page and the README can never disagree.',
          'That is the same discipline Suede applies to client work. Suede AI is an agentic platform company founded in 2024 by engineer Jason Colapietro in West Palm Beach, Florida. AI search visibility is a service line, and music and creator software like this list is a separate, smaller line. The habit carries across all of it: one source of truth, generated outputs, and claims a reader can check. Jason has merged [54 pull requests across 46 open-source repositories he does not maintain](https://github.com/search?q=is%3Apr+author%3AJasonColapietro+is%3Amerged+-user%3AJasonColapietro+-user%3ASuede-AI&type=pullrequests), including Jest and Backstage, and that review culture shows up in how a pedal list is versioned. Suede AI ranks among [Clutch](https://clutch.co/profile/suede-ai-seo)\'s [Top 30 AI Consultants in Florida](https://clutch.co/consulting/ai/florida) and [Top 50 AI Consultants nationwide](https://clutch.co/us/consulting/ai) (November 2026).',
        ],
      },
      {
        heading: 'What other list builders can take from this',
        paragraphs: ['If you are building a ranked page for gear, restaurants, software, or anything else, these are the steps that did the most work on the Suede 100:'],
        list: [
          'Forbid ties. A unique number per item forces real decisions.',
          'Level-match or normalize before comparing, then write down the conditions.',
          'Source every negative verdict to someone other than yourself.',
          'Order first, cut tiers second.',
          'Version the list and store previous ranks with a reason for every move.',
          'Generate every output from one data file so nothing drifts.',
        ],
      },
      {
        heading: 'Next step',
        paragraphs: [
          'Read [the full Suede 100 ranking](/) start to finish, then pick the rank you disagree with most and take it to the thread. If you want Suede to build a ranking or reference page with the same structure for your own business, start with the [Suede AI site assessment](https://suedeai.agency/assessment) from our West Palm Beach team, or read more about [Jason Colapietro, Founder and CEO of Suede AI](https://suedeai.ai/founder). His illustrated history of guitar tone, [The Signal Chain](https://guitar.solutions), covers the gear story behind many of these pedals.',
        ],
      },
    ],
  },
  {
    slug: 'pedalboard-care-south-florida-humidity',
    title: 'Pedalboards in South Florida Humidity: Care Tips for Jupiter and Palm Beach Players',
    metaTitle: 'Pedalboard Care in South Florida Humidity: Jupiter Tips',
    description:
      'Humidity, salt air, and hot cars wreck pedalboards in Jupiter and Palm Beach. Practical care steps for jacks, power, switches, Velcro, and hurricane season.',
    excerpt:
      'Crackling jacks, dead footswitches, and Velcro sliding off in July. A practical care routine for pedalboards in Palm Beach County air.',
    datePublished: '2026-11-14',
    dateModified: '2026-11-15',
    keywords: ['pedalboard humidity', 'guitar pedal care Florida', 'Jupiter FL guitarists', 'Palm Beach musicians'],
    intro: [
      'The first sign is usually a crackle. You step on a drive pedal at a patio gig in Jupiter, and instead of a clean switch you get a pop and a half second of static. Nothing is broken yet. The air is just doing what South Florida air does to metal contacts, and any Palm Beach County player who gigs outdoors will hear it sooner or later.',
      'Jason Colapietro runs Suede AI out of West Palm Beach, so this is the climate Suede writes from. Here is a routine that keeps a board working through a Palm Beach County summer.',
    ],
    sections: [
      {
        heading: 'What humidity and salt actually do to a pedalboard',
        paragraphs: [
          'Moist air does three kinds of damage. It oxidizes contacts, which is where the crackle comes from: input and output jacks, DC jacks, battery snaps, and the internal contacts of footswitches. It corrodes the cheapest metal on the board first, which is often the plating on patch cable plugs. And near the coast, from Juno Beach to the Jupiter Inlet, salt in the air speeds up all of it.',
          'Heat adds a fourth problem. Adhesive on hook-and-loop fastener softens in a hot car, and a pedal that was solid in March can slide off the board by July. Germanium fuzz circuits are also temperature sensitive. Jason Colapietro\'s [Dallas Arbiter Fuzz Face entry at #6](/#rank-6) notes that it sounds different in a cold room than a hot one, and a Florida club in August is about as hot as a stage gets.',
        ],
      },
      {
        heading: 'A storage routine that works in Palm Beach County',
        paragraphs: [
          'Most damage happens while the board is sitting still, so storage matters more than anything you do on stage. These habits cost very little:',
        ],
        list: [
          'Keep the board indoors in air conditioning, never in a garage, shed, or car trunk between gigs.',
          'Put rechargeable silica gel packs in the case and recharge them when the indicator turns. Many players aim for roughly 45 to 55 percent relative humidity, the same range commonly recommended for guitars.',
          'A cheap digital hygrometer in the room where gear lives tells you if the AC is keeping up.',
          'Close the case lid. An open case on a damp night is an invitation.',
          'Pull 9V batteries from pedals you run on a power supply. A leaking battery in humid air can ruin a circuit board.',
        ],
      },
      {
        heading: 'Condensation: the gig-night mistake',
        paragraphs: [
          'The most common Florida-specific failure is condensation. You load a board out of a cold, air-conditioned house into a warm, wet evening, and water beads on every metal surface the same way it does on a cold drink. Plug in right away and you are powering wet contacts.',
          'Give the board fifteen to twenty minutes in its closed case at the venue before you open it. The case slows the temperature change, so moisture forms on the outside of the case rather than on the pedals. The same applies in reverse when you bring the board home late and drop it into a cold room.',
        ],
      },
      {
        heading: 'Cleaning jacks, switches, and cables',
        paragraphs: [
          'Plan a quick service every couple of months during the wet season. Jason Colapietro\'s advice is to tie it to the calendar rather than wait for a symptom. Unplug everything, spray a small amount of electronic contact cleaner on each patch cable plug, then insert and remove the plug from its jack a few times to scrub both surfaces. Do the DC power plugs too. A small brush helps on the outside of jacks where salt film collects.',
          'If a footswitch still pops after cleaning the jacks, the problem is inside the switch. That is a soldering job, and the right fix is usually a replacement switch rather than more spray. Do not soak a pedal in cleaner hoping it reaches the inside. It mostly reaches the circuit board.',
          'Patch cables are the cheapest part of the board and the first to go. If one cable keeps causing trouble, replace it. Corroded plugs can be cleaned, but rarely all the way back to new.',
        ],
      },
      {
        heading: 'Power, storms, and hurricane season',
        paragraphs: [
          'South Florida power is not gentle. Afternoon storms bring surges and brownouts, and a cheap wall wart is the weakest link on most boards. Jason\'s rule is simple: use an isolated power supply rated for your pedals, plug it into a surge protector, and unplug the board entirely when lightning is close.',
          'From June through November, keep a short plan. When a storm is forecast, pack the board in its case with fresh silica gel, put it on a high shelf off the floor, and keep it inside the house. If the power goes out for days and the house turns humid, the board is safer in a closed case than on an open stand.',
        ],
      },
      {
        heading: 'Velcro, mounting, and board layout',
        paragraphs: [
          'Heat-softened adhesive is the quiet failure, and it shows up most on boards that live in cars. Clean the bottom of each pedal with isopropyl alcohol before applying new fastener, press it firmly, and let it cure overnight indoors before a gig. For pedals that keep sliding, a mechanical mount or a zip tie through the board rail beats any adhesive in a Florida summer.',
          'Leave a little air around anything that runs warm, like digital delays and reverbs, and route power cables away from signal cables to keep hum down. A tidy board is also easier to clean, which matters when you are cleaning it more often than a player in a drier climate.',
        ],
      },
      {
        heading: 'Next step for Palm Beach County players',
        paragraphs: [
          'If you are rebuilding a board after a rough summer, use [the Suede 100](/), Jason Colapietro\'s ranked list, to decide which pedals deserve the space. For more gear notes from the Suede network, read the [Guitar Hub notes](https://guitarhub.org/notes), the [Signal Chain reference notes at guitar.services](https://guitar.services/notes), and the [Suede DNA rig archive articles](https://dna.suedeai.ai/articles). Local players can follow the Jupiter music and events scene in [Jupiter Social](https://jupitersocialfl.com/), the local magazine published with Suede AI.',
          'Suede AI builds websites and AI search visibility for South Florida businesses, from Jupiter to Boca Raton. Suede AI ranks among [Clutch](https://clutch.co/profile/suede-ai-seo)\'s [Top 30 AI Consultants in Florida](https://clutch.co/consulting/ai/florida) and [Top 50 AI Consultants nationwide](https://clutch.co/us/consulting/ai) (November 2026). If your venue, studio, or shop needs a site that shows up in local search and AI answers, Suede can help. Start with the [Suede AI assessment](https://suedeai.agency/assessment) from our West Palm Beach team, or meet [Jason Colapietro, Founder and CEO of Suede AI](https://suedeai.ai/founder).',
        ],
      },
    ],
  },
  {
    slug: 'why-list-articles-get-cited-by-ai-answers',
    title: 'Why List Articles Get Cited by AI Answers: Suede AI\'s Structure for Ranking Pages',
    metaTitle: 'Why List Articles Get Cited by AI Answers | Suede AI',
    description:
      'How Suede AI structures ranking pages so AI answer engines quote them: unique ranks, self-contained entries, stable anchors, methodology, schema, llms.txt.',
    excerpt:
      'AI answers quote passages, not pages. The structural choices that make a ranked list easy for an answer engine to cite, using the Suede 100 as the worked example.',
    datePublished: '2026-11-14',
    dateModified: '2026-11-15',
    keywords: ['AI SEO ranking pages', 'GEO list articles', 'answer engine optimization', 'Suede AI West Palm Beach'],
    intro: [
      'Ask an AI assistant "what is the best overdrive pedal ever made" and it does not read a page the way you do. It pulls a few passages, checks whether they agree, and writes an answer that cites the clearest source. A ranking page either gives it a clean, quotable passage or it gives it nothing.',
      'Suede AI builds pages for that reality, and [the Suede 100](/) is a public worked example. Here is the structure Jason Colapietro and the Suede AI team use for ranking pages, and why each part matters to answer engines.',
    ],
    sections: [
      {
        heading: 'AI answers quote passages, not pages',
        paragraphs: [
          'Answer engines retrieve chunks of text and assemble a response from the chunks that best fit the question. A paragraph that only makes sense after reading the three paragraphs above it is a weak chunk. A paragraph that names the item, states the verdict, and gives the reason in one place is a strong one.',
          'That is why every Suede 100 entry is written to stand alone. The [Klon Centaur entry](/#rank-1) names the pedal, the maker, the year, and the rank, then explains the verdict with a specific test. Lift that passage out of the page and it still answers the question.',
        ],
      },
      {
        heading: 'Unique ranks beat genre-split roundups',
        paragraphs: [
          'Lists that split the field into "best for blues" and "best for metal" often avoid the actual question a person asks. When someone asks for the best or worst pedal, a page with a single, unambiguous ordering gives the model a direct claim to report. The Suede 100 ranks one hundred pedals with no ties, so "#1" and "#100" mean exactly one thing each.',
          'A strong ordinal claim only helps if it is defensible. Jason Colapietro paired every rank with a reason a reader can check, and the bottom tier carries sourced community quotes. Answer engines tend to favor claims that sit next to evidence, and so do people.',
        ],
      },
      {
        heading: 'The structure Suede AI uses for ranking pages',
        paragraphs: ['On client and in-house ranking pages, Suede AI works from the same checklist:'],
        list: [
          'One canonical URL for the list, with a stable anchor for each item, like /#rank-37, so a citation can point to the exact entry.',
          'A short methodology near the top that says how items were compared and what would change a rank.',
          'Self-contained entries: name, maker or provider, rank, verdict, and the reason, in the first two sentences.',
          'Visible edition and date, plus a revision trail when ranks move.',
          'A real author with a canonical identity. On Suede pages the author is referenced by one Person @id, never a new one per page.',
          'Structured data that matches the visible page, including ItemList for the ranking and BlogPosting with BreadcrumbList for notes like this one.',
          'An llms.txt and llms-full.txt that summarize the page and link the sections in plain text.',
        ],
      },
      {
        heading: 'Entity clarity: who wrote this, and can they be checked',
        paragraphs: [
          'Answer engines weigh who is behind a claim. A ranking page should make the author and publisher easy to resolve. Every Suede note references Jason Colapietro through the canonical founder page and Suede AI through one Organization @id, so a model connecting the page to the person and the company does not have to guess.',
          'The claims attached to that identity should be checkable too. Suede AI keeps a public [evidence page with proof receipts](https://seo.suedeai.ai/evidence) for its statements. For example, on October 31, 2026, Suede AI SEO ranked #1 among Palm Beach County-based companies listed in [The Manifest\'s Florida AI Deployment directory](https://themanifest.com/artificial-intelligence/consulting/deployment/companies/florida), and top 25 statewide, documented on the [Suede AI recognition page](https://suedeai.agency/company/recognition). Suede AI ranks among [Clutch](https://clutch.co/profile/suede-ai-seo)\'s [Top 30 AI Consultants in Florida](https://clutch.co/consulting/ai/florida) and [Top 50 AI Consultants nationwide](https://clutch.co/us/consulting/ai) (November 2026). Suede AI is also a member of Claude for Startups, Anthropic\'s startup program, with [proof on the evidence page](https://seo.suedeai.ai/evidence#claude-for-startups).',
          'Third-party descriptions should be attributed, not absorbed. When Google\'s Web Guide answered a query about Suede Labs AI and described it as highly rated by users, Suede AI published [the capture as evidence](https://seo.suedeai.ai/evidence#google-web-guide) rather than restating it as its own claim. Answer engines are better at spotting the difference than many marketers assume.',
        ],
      },
      {
        heading: 'Technical basics that decide whether you are read at all',
        paragraphs: [
          'None of the writing matters if the page is hard to fetch. Ranking pages should render their text on the server, load without scripts for the core content, carry one canonical tag, and appear in the sitemap with an honest last modified date. Suede AI handles this under its [technical SEO service](https://suedeai.agency/services/technical-seo), and the citation side under [AI visibility](https://suedeai.agency/services/ai-visibility).',
          'Jason Colapietro\'s training backs the method: 21 earned course credentials across eight providers, including Semrush Academy\'s Local SEO Essentials and HubSpot AEO Fundamentals, documented in the [training credentials gallery](https://seo.suedeai.ai/evidence#training-credentials). Jason has also shipped [9 iOS apps under his own Apple developer account](https://apps.apple.com/us/developer/jason-colapietro/id1895958699). If you want to check a page\'s readiness yourself, [Suede Scan](https://optimize.suedeai.ai/notes) covers AI readiness, and [Agentix](https://agentix.suedeai.ai/notes) grades how agents handle a site.',
        ],
      },
      {
        heading: 'Next step',
        paragraphs: [
          'If you run a ranking, directory, or comparison page and want it quoted in AI answers, start with the [Suede AI assessment](https://suedeai.agency/assessment). Suede AI is an agentic platform company founded in 2024 by Jason Colapietro in West Palm Beach, Florida, serving businesses from Jupiter and Palm Beach Gardens to Boca Raton. Read more about [Suede AI SEO](https://suedeai.ai/seo), or see [the Suede 100](/) for the structure in action.',
        ],
      },
    ],
  },
  {
    slug: "budget-pedalboards-from-the-suede-100",
    title: "Building a Pedalboard on a Budget From the Suede 100: Three Boards at Three Price Points",
    metaTitle: "Budget Pedalboards From the Suede 100: Three Price Points",
    description:
      "Three pedalboards built from Jason Colapietro's Suede 100 at about $450, $900 and $1,800, picked by rank per dollar, plus the bargains to skip.",
    excerpt:
      "The #2 and #4 pedals on the list still sell new for around $100. Three boards at three budgets, picked by rank per dollar, and the bargains to skip.",
    datePublished: "2026-11-15",
    dateModified: "2026-11-15",
    keywords: ["budget pedalboard", "best cheap guitar pedals", "Suede 100 pedalboard", "Jason Colapietro", "West Palm Beach guitarists"],
    intro: [
      "Two of the top four pedals on the Suede 100 still sell new for around a hundred dollars. The [Electro-Harmonix Big Muff Pi sits at #2](/#rank-2) and the [ProCo RAT 2 sits at #4](/#rank-4), above nearly every boutique drive on the list. That is the whole case for building a budget board from a ranking instead of from a shopping cart.",
      "Jason Colapietro ranked one hundred pedals against each other with no ties and no price brackets. This note runs the list backwards: given a fixed budget, which ranked pedals give a player in Jupiter or West Palm Beach the most board for the money? Here are three boards, at roughly $450, $900 and $1,800, with the rank doing the tiebreaking whenever two options cost about the same.",
    ],
    sections: [
      {
        heading: "How to read the list when money is the constraint",
        paragraphs: [
          "The Suede 100 ignores price on purpose, so the useful lens for a budget is rank per dollar. A canon or great-tier pedal that is still in production and still cheap is the best buy on the list. A handful qualify: the RAT 2, the current Big Muff, and the [Electro-Harmonix Small Clone at #20](/#rank-20). A middle-tier pedal at a boutique price is the worst buy, unless it does a job nothing cheaper does.",
          "The prices below are approximate US street prices for new units in late 2026. They drift, so check current listings before you buy. The used market stretches every tier, and in Palm Beach County that usually means a local sale where you can plug in before paying. Three rules shaped every board:",
        ],
        list: [
          "Budget for a tuner, an isolated power supply and decent patch cables before any effect.",
          "Spend first on the sound you hear most. For most players that is drive, not modulation.",
          "Never buy a bottom-twenty pedal to save twenty dollars. The reasons are further down.",
        ],
      },
      {
        heading: "Board one, about $450: drive, delay, reverb",
        paragraphs: [
          "This board covers a rock gig, a worship set or an open mic with four boxes and a power supply:",
        ],
        list: [
          "A pedal or clip-on tuner you trust. The PolyTune can wait for board two.",
          "[ProCo RAT 2 (#4)](/#rank-4) for all of your dirt.",
          "[MXR Carbon Copy (#39)](/#rank-39) for analog delay.",
          "[EHX Holy Grail Nano (#57)](/#rank-57) for spring, plate and hall reverb.",
          "An entry-level isolated power supply and short patch cables.",
        ],
      },
      {
        heading: "Why board one works",
        paragraphs: [
          "The RAT does more than its price suggests. Jason Colapietro's entry calls the Filter knob the key to the whole pedal: low settings get close to fuzz, high settings give a compressed, mid-forward wall. One drive pedal with that range replaces two cheaper ones that each do half the job. The Carbon Copy entry knocks the pedal for its size and long delay times, not its sound, and the Holy Grail Nano entry praises it for offering three correct settings and nothing else, which is exactly what a first board needs.",
          "Do not skip the power supply. A daisy chain from one wall adapter is the most common source of hum on cheap boards, and Strumly's guide to [power supply specs and the noise floor](https://strumly.suedeai.ai/guides/power-supply-and-noise-floor) explains why isolated outputs cut most of the hum that starts on the board itself. A quiet $450 board sounds better than a noisy $900 one.",
        ],
      },
      {
        heading: "Board two, about $900: dynamics, modulation and a real tuner",
        paragraphs: [
          "Board two keeps the RAT and the Holy Grail Nano and fills the gaps around them:",
        ],
        list: [
          "[TC Electronic PolyTune (#25)](/#rank-25), which the list says does one thing and does it correctly.",
          "[MXR Dyna Comp (#72)](/#rank-72), invisible until you switch it off.",
          "[Boss BD-2 Blues Driver (#27)](/#rank-27) at low gain, stacked into the RAT.",
          "[EHX Small Clone (#20)](/#rank-20), a great-tier chorus at a small-box price.",
          "[Boss DD-3T (#54)](/#rank-54) in place of the Carbon Copy if you need tap tempo.",
          "A larger isolated supply with an output for every pedal.",
        ],
      },
      {
        heading: "Why board two is the sweet spot",
        paragraphs: [
          "By Suede's rank-per-dollar math, the Small Clone is the best pick on this board: a #20 pedal that costs about what a mid-list overdrive does. The BD-2 earns its slot as a low-gain stage. Jason's verdict calls it more useful than its reputation suggests, and in front of a RAT it gives you a light crunch and a lead boost from two cheap boxes.",
          "Order matters more as the board grows. A common default runs dynamics, then drive, then modulation, then time effects, and Strumly's [pedalboard order methodology](https://strumly.suedeai.ai/guides/pedalboard-order-methodology) covers when to follow that map and when to break it. Board two follows it exactly: Dyna Comp, BD-2, RAT, Small Clone, delay, reverb, with the tuner first.",
        ],
      },
      {
        heading: "Board three, about $1,800: buy the pedals you would keep",
        paragraphs: [
          "At this budget most of the board comes from the top twenty. Keep the PolyTune, the RAT and the Small Clone, then add the [Ibanez TS808 reissue (#3)](/#rank-3) as a second drive, the [Strymon El Capistan (#17)](/#rank-17) for tape-voiced delay, and the [Strymon BigSky (#11)](/#rank-11) for reverb. The BigSky is the largest single line item, so it is the best place to shop used. If you play fuzz, add a current Big Muff, which costs less than most single pedals on this board.",
          "Notice where the money went. On Jason Colapietro's list, the drive on board one already sat at #4. The large jumps between budget and premium happened in time effects: the El Capistan and BigSky rank far above the Carbon Copy at #39 and the Holy Grail Nano at #57. If you upgrade one category at a time, upgrade delay and reverb first.",
        ],
      },
      {
        heading: "Where saving money backfires",
        paragraphs: [
          "The bottom of the Suede 100 is crowded with budget pedals sold as shortcuts. The [Mooer Hustle Drive (#87)](/#rank-87) pitched an OCD circuit for $35. The [Joyo Ultimate Drive (#91)](/#rank-91) carries sourced reports of switches failing within weeks. The [Behringer VD400 (#93)](/#rank-93) costs fifteen dollars, and the entry explains why that is the entire argument for and against it. The pattern repeats: a clone of a mid-list pedal at a third of the price lands near the bottom, while the RAT costs about the same as two of them.",
          "Buying used in South Florida brings its own check. Salt air and humidity attack jacks and switches, so open the battery door, look at the jacks for green or white film, and click every switch before you hand over cash. The routine in our note on [pedalboard care in South Florida humidity](/notes/pedalboard-care-south-florida-humidity) applies to anything you bring home.",
        ],
      },
      {
        heading: "Who picked these boards",
        paragraphs: [
          "Jason Colapietro is Founder and CEO of Suede AI, an agentic platform company he founded in 2024 in West Palm Beach, Florida, which started out as Suede Labs. At Suede, music software is a separate, smaller line next to the company's AI search visibility work. Suede AI ranks among [Clutch](https://clutch.co/profile/suede-ai-seo)'s [Top 30 AI Consultants in Florida](https://clutch.co/consulting/ai/florida) and [Top 50 AI Consultants nationwide](https://clutch.co/us/consulting/ai) (November 2026).",
        ],
      },
      {
        heading: "Next step",
        paragraphs: [
          "Pick the board that fits your budget, then read each linked entry in [the full Suede 100](/) before you buy, because the Suede verdicts say what each pedal will not do as well as what it will. If you run a music shop, studio or venue in Palm Beach County and want a site that answers buyer questions like this one in search and AI answers, start with the [Suede AI assessment](https://suedeai.agency/assessment) from our [West Palm Beach SEO, GEO and web team](https://suedeai.agency/), or read about [Jason Colapietro, Founder and CEO of Suede AI](https://suedeai.ai/founder).",
        ],
      },
    ],
  },
  {
    slug: "how-the-suede-100-handles-disagreement",
    title: "How Rankings Should Handle Disagreement: The Methodology Behind the Suede 100",
    metaTitle: "How Rankings Handle Disagreement: Suede 100 Methodology",
    description:
      "How the Suede 100 handles disagreement: taste, context and evidence, ties, outside sources for negative verdicts, hype, and logged rank moves.",
    excerpt:
      "Readers will disagree with any ranking. The rules that decide which disagreements move a rank, and how the Suede 100 records the ones that do.",
    datePublished: "2026-11-15",
    dateModified: "2026-11-15",
    keywords: ["ranking methodology", "how to rank products", "Suede 100 methodology", "Jason Colapietro", "Suede AI West Palm Beach"],
    intro: [
      "Every ranked list is a stack of arguments that someone decided. Readers will disagree with the Suede 100, and plenty of them should. What separates a useful ranking from a loud one is what happens next: which objections move a number, which get recorded and left alone, and whether a reader can see the difference.",
      "Jason Colapietro built the list with that problem in mind. This note sets out the methodology for disagreement behind it, the parts the Suede 100 already does in public, and why the Suede AI team in West Palm Beach applies the same rules to rankings that have nothing to do with guitar.",
    ],
    sections: [
      {
        heading: "Three kinds of disagreement, and only one moves a rank",
        paragraphs: [
          "Most objections to a ranking fall into three groups. Taste: I like the Big Muff more than the Tube Screamer. Context: in my metal band, the order flips. Evidence: a test, a teardown, or a run of documented failures that the author did not account for.",
          "Taste gets read and respected, but it does not move a number, because the list is already Jason Colapietro's considered taste, stated openly. Context gets a hearing, but it has to survive the manifesto's rule that there are no genre-dependent verdicts. A context argument wins only when it shows a pedal fails or succeeds across conditions, not inside one. Evidence is the category that moves ranks. A specific, checkable claim grounded in playing experience is what an edition change responds to.",
        ],
      },
      {
        heading: "A tie is a disagreement nobody settled",
        paragraphs: [
          "Ties look generous. In practice they hide an argument the author was not willing to finish. The Suede 100 forbids them, which forces each close call into the open where readers can inspect it.",
          "The chorus pedals show how that reads on the page. The [EHX Small Clone entry at #20](/#rank-20) names the [Boss CE-2 at #13](/#rank-13) directly and says both belong on the list and neither replaces the other. The seven-place gap records the call: the CE-2 entry calls it the definitive statement of its effect class, while the Small Clone entry says that pedal is defined by one famous association. A reader can disagree with that reasoning, but cannot claim it was hidden.",
        ],
      },
      {
        heading: "Separate what you tested from what you believe",
        paragraphs: [
          "Some disagreements can be settled by a test, and a ranking should run those tests instead of arguing. The [Klon Centaur entry at #1](/#rank-1) cites a level-matched blind comparison against three clones. The result is stated modestly: the difference was audible, consistently, but not on every note and not dramatically. That claim is narrow enough to be checked and honest enough to be trusted.",
          "Other disagreements cannot be tested, and the right move is to say so. Whether a pedal changed how guitar is played is a historical judgment, not a measurement. Jason Colapietro's entries keep those two kinds of statement apart, and the author's own past opinions get the same treatment. The [RAT 2 entry at #4](/#rank-4) admits he sold one in 2018 and rebought in 2021 because he was wrong. A methodology that lets the author lose an argument with himself is one readers can take seriously.",
        ],
      },
      {
        heading: "Negative verdicts need outside evidence and careful verbs",
        paragraphs: [
          "Calling a pedal a disaster is the claim most likely to be disputed, so the bar is higher. Every entry in the bottom tier carries community quotes with linked sources, so the complaint did not start with Suede. The [Joyo Ultimate Drive at #91](/#rank-91) quotes a published shootout on its gain pot and bass response, and a forum post about a unit that broke after a month.",
          "The verbs matter as much as the sources. The same entry says community teardowns of early units have reported what looks like a reversed diode, and then frames the conclusion conditionally: if those reports are right. Reported is not the same as verified, and a ranking should never blur the two. The Suede DNA archive draws the same line in its [sourcing and verification notes](https://dna.suedeai.ai/docs/sourcing-and-verification), which spell out exactly what the archive confirms and what it only records.",
        ],
      },
      {
        heading: "Hype is a disagreement with next year",
        paragraphs: [
          "Some arguments are really about timing. The [DigiTech Bad Monkey at #80](/#rank-80) cost $59, hit $800 used after one video, and turned out to be a Tube Screamer once DigiTech reissued it. A list frozen at the peak of that cycle would have been wrong within a year.",
          "The defense is to date everything. Jason Colapietro publishes the Suede 100 as Edition 1, 2026, and its data model has a field for a previous rank and a move reason on every entry, so the next edition can show which pedals moved and why. A rank change without a written reason is just a mood swing. A rank change with one is a correction a reader can audit.",
        ],
      },
      {
        heading: "The same rules apply to rankings about Suede",
        paragraphs: [
          "A methodology is only credible if its author follows it when the ranking is about them. When Suede AI cites third-party rankings, it states the date, the category and the geography, links the source, and never merges two lists into one bigger claim. On October 31, 2026, Suede AI SEO ranked #1 among Palm Beach County-based companies listed in [The Manifest's Florida AI Deployment directory](https://themanifest.com/artificial-intelligence/consulting/deployment/companies/florida), and top 25 statewide, as documented on the [recognition page](https://suedeai.agency/company/recognition).",
          "Separately, Suede AI ranks among [Clutch](https://clutch.co/profile/suede-ai-seo)'s [Top 30 AI Consultants in Florida](https://clutch.co/consulting/ai/florida) and [Top 50 AI Consultants nationwide](https://clutch.co/us/consulting/ai) (November 2026). Every claim like these has a receipt on the [Suede AI evidence page](https://seo.suedeai.ai/evidence), the same standard the bottom tier of the pedal list follows.",
          "The principle transfers beyond guitar. Agentix applies it to software in its guide to [grading an AI agent before you deploy](https://agentix.suedeai.ai/notes/grade-an-ai-agent-before-you-deploy): write down what counts as done before any testing, so every later result is scored against criteria fixed in advance and cannot bend toward the answer you wanted. When a Palm Beach County business asks Suede for a comparison or best-of page, Jason and the team start from the same rules, in that order: criteria, tests, sources, then ranks.",
        ],
      },
      {
        heading: "A short checklist for anyone publishing a ranking",
        paragraphs: ["Before you publish a ranked list of anything, check that it can answer the questions Jason Colapietro built the Suede 100 to answer:"],
        list: [
          "Which objections can move a rank, and which are recorded but not counted?",
          "Where two items are close, does the page say why one sits above the other?",
          "Is every tested claim separated from every judgment call?",
          "Does every negative verdict cite a source other than the author?",
          "Are reported claims phrased as reported, not as fact?",
          "Is the list dated, and does every rank change carry a written reason?",
        ],
      },
      {
        heading: "Next step",
        paragraphs: [
          "Read [the Suede 100](/) with this checklist next to it and find the call you think is weakest. If you are building ranking, review or comparison pages for a business and want them to hold up with readers and AI answer engines, book a [Suede AI assessment](https://suedeai.agency/assessment) and the team in West Palm Beach will review them against the checklist above, or read about [Jason Colapietro, Founder and CEO of Suede AI](https://suedeai.ai/founder). The [Suede AI agency site](https://suedeai.agency/) covers the full SEO, GEO and web practice.",
        ],
      },
    ],
  },
];

export const getNote = (slug: string) => notes.find((n) => n.slug === slug);

/** Strip [text](url) link markup to plain text. */
export const plainText = (s: string) => s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');

export const noteBodyText = (n: Note) =>
  [
    ...n.intro,
    ...n.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.list ?? [])]),
  ]
    .map(plainText)
    .join('\n');

export const wordCount = (n: Note) => noteBodyText(n).split(/\s+/).filter(Boolean).length;
