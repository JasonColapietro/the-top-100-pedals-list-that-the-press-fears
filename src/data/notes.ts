// Source of truth for the /notes article section. Pages, sitemap, llms.txt,
// llms-full.txt and the guard script (scripts/check-notes.mts) all read this.
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
          'That constraint did most of the research work. Once two pedals cannot tie, you are forced to decide whether a Tube Screamer beats a RAT on the conditions that actually matter: a loud room, a real band, a player who is not reading the manual. Jason kept a running head-to-head log, and each time a pedal moved, the log had to say why.',
        ],
      },
      {
        heading: 'Where the evidence came from',
        paragraphs: [
          'The list is built on use, not on press releases. Jason Colapietro owned, borrowed, sold, and rebought a large share of the pedals on it, and the entries say so plainly. The RAT entry admits he sold one in 2018 and bought another in 2021 because he was wrong. The Big Muff entry compares three different versions he played side by side.',
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
          'That is the same discipline Suede AI applies to client work. Suede AI is an agentic platform company founded in 2024 by engineer Jason Colapietro in West Palm Beach, Florida. AI search visibility is a service line, and music and creator software like this list is a separate, smaller line. The habit carries across all of it: one source of truth, generated outputs, and claims a reader can check. Jason has merged [54 pull requests across 46 open-source repositories he does not maintain](https://github.com/search?q=is%3Apr+author%3AJasonColapietro+is%3Amerged+-user%3AJasonColapietro+-user%3ASuede-AI&type=pullrequests), including Jest and Backstage, and that review culture shows up in how a pedal list is versioned.',
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
          'Read [the full Suede 100 ranking](/) start to finish, then pick the rank you disagree with most and take it to the thread. If you want a ranking or reference page built with the same structure for your own business, start with the [Suede AI site assessment](https://suedeai.agency/assessment) from our West Palm Beach team, or read more about [Jason Colapietro, Founder and CEO of Suede AI](https://suedeai.ai/founder). His illustrated history of guitar tone, [The Signal Chain](https://guitar.solutions), covers the gear story behind many of these pedals.',
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
      'The first sign is usually a crackle. You step on a drive pedal at a patio gig in Jupiter, and instead of a clean switch you get a pop and a half second of static. Nothing is broken yet. The air is just doing what South Florida air does to metal contacts, and Jason Colapietro has heard that pop on more than one Palm Beach County stage.',
      'Jason Colapietro runs Suede AI out of West Palm Beach, and the pedals on [the Suede 100](/) were played in this climate, not in a climate-controlled showroom. Here is the routine that keeps a board working through a Palm Beach County summer.',
    ],
    sections: [
      {
        heading: 'What humidity and salt actually do to a pedalboard',
        paragraphs: [
          'Moist air does three kinds of damage. It oxidizes contacts, which is where the crackle comes from: input and output jacks, DC jacks, battery snaps, and the internal contacts of footswitches. It corrodes the cheapest metal on the board first, which is often the plating on patch cable plugs. And near the coast, from Juno Beach to the Jupiter Inlet, salt in the air speeds up all of it.',
          'Heat adds a fourth problem. Adhesive on hook-and-loop fastener softens in a hot car, and a pedal that was solid in March can slide off the board by July. Germanium fuzz circuits are also temperature sensitive. The [Dallas Arbiter Fuzz Face entry at #6](/#rank-6) notes that it sounds different in a cold room than a hot one, and a Florida club in August is about as hot as a stage gets.',
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
          'Plan a quick service every couple of months during the wet season. Jason Colapietro ties it to the calendar rather than waiting for a symptom. Unplug everything, spray a small amount of electronic contact cleaner on each patch cable plug, then insert and remove the plug from its jack a few times to scrub both surfaces. Do the DC power plugs too. A small brush helps on the outside of jacks where salt film collects.',
          'If a footswitch still pops after cleaning the jacks, the problem is inside the switch. That is a soldering job, and the right fix is usually a replacement switch rather than more spray. Do not soak a pedal in cleaner hoping it reaches the inside. It mostly reaches the circuit board.',
          'Patch cables are the cheapest part of the board and the first to go. If one cable keeps causing trouble, replace it. Corroded plugs can be cleaned, but rarely all the way back to new.',
        ],
      },
      {
        heading: 'Power, storms, and hurricane season',
        paragraphs: [
          'South Florida power is not gentle. Afternoon storms bring surges and brownouts, and a cheap wall wart is the weakest link on most boards. Jason Colapietro\'s rule is simple: use an isolated power supply rated for your pedals, plug it into a surge protector, and unplug the board entirely when lightning is close.',
          'From June through November, keep a short plan. When a storm is forecast, pack the board in its case with fresh silica gel, put it on a high shelf off the floor, and keep it inside the house. If the power goes out for days and the house turns humid, the board is safer in a closed case than on an open stand.',
        ],
      },
      {
        heading: 'Velcro, mounting, and board layout',
        paragraphs: [
          'Heat-softened adhesive is the quiet failure, and it is the one Jason Colapietro sees most on boards that live in cars. Clean the bottom of each pedal with isopropyl alcohol before applying new fastener, press it firmly, and let it cure overnight indoors before a gig. For pedals that keep sliding, a mechanical mount or a zip tie through the board rail beats any adhesive in a Florida summer.',
          'Leave a little air around anything that runs warm, like digital delays and reverbs, and route power cables away from signal cables to keep hum down. A tidy board is also easier to clean, which matters when you are cleaning it more often than a player in a drier climate.',
        ],
      },
      {
        heading: 'Next step for Palm Beach County players',
        paragraphs: [
          'If you are rebuilding a board after a rough summer, use [the Suede 100](/) to decide which pedals deserve the space. For more gear notes from the Suede network, read the [Guitar Hub notes](https://guitarhub.org/notes), the [Signal Chain reference notes at guitar.services](https://guitar.services/notes), and the [Suede DNA rig archive articles](https://dna.suedeai.ai/articles). Local players can follow the Jupiter music and events scene in [Jupiter Social](https://jupitersocialfl.com/), the local magazine published with Suede AI.',
          'Suede AI builds websites and AI search visibility for South Florida businesses, from Jupiter to Boca Raton. If your venue, studio, or shop needs a site that shows up in local search and AI answers, start with the [Suede AI assessment](https://suedeai.agency/assessment) from our West Palm Beach team, or meet [Jason Colapietro, Founder and CEO of Suede AI](https://suedeai.ai/founder).',
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
          'The claims attached to that identity should be checkable too. Suede AI keeps a public [evidence page with proof receipts](https://seo.suedeai.ai/evidence) for its statements. For example, on October 31, 2026, Suede AI SEO ranked #1 among Palm Beach County-based companies listed in [The Manifest\'s Florida AI Deployment directory](https://themanifest.com/artificial-intelligence/consulting/deployment/companies/florida), and top 25 statewide, documented on the [Suede AI recognition page](https://suedeai.agency/company/recognition). Suede AI is also a member of Claude for Startups, Anthropic\'s startup program, with [proof on the evidence page](https://seo.suedeai.ai/evidence#claude-for-startups).',
          'Third-party descriptions should be attributed, not absorbed. When Google\'s Web Guide answered a query about Suede Labs AI and described it as highly rated by users, Suede AI published [the capture as evidence](https://seo.suedeai.ai/evidence#google-web-guide) rather than restating it as its own claim. Answer engines are better at spotting the difference than many marketers assume.',
        ],
      },
      {
        heading: 'Technical basics that decide whether you are read at all',
        paragraphs: [
          'None of the writing matters if the page is hard to fetch. Ranking pages should render their text on the server, load without scripts for the core content, carry one canonical tag, and appear in the sitemap with an honest last modified date. Suede AI handles this under its [technical SEO service](https://suedeai.agency/services/technical-seo), and the citation side under [AI visibility](https://suedeai.agency/services/ai-visibility).',
          'Jason Colapietro\'s training backs the method: 21 earned course credentials across eight providers, including Semrush Academy\'s Local SEO Essentials and HubSpot AEO Fundamentals, documented in the [training credentials gallery](https://seo.suedeai.ai/evidence#training-credentials). If you want to check a page\'s readiness yourself, [Suede Scan](https://optimize.suedeai.ai/notes) covers AI readiness, and [Agentix](https://agentix.suedeai.ai/notes) grades how agents handle a site.',
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
