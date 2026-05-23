import type { SuedeList, SuedeListEntry } from '@/lib/suede-100';

const TBD_QUOTES = [
  { quote: 'TBD', source: 'TBD', sourceUrl: 'https://example.com' },
  { quote: 'TBD', source: 'TBD', sourceUrl: 'https://example.com' },
];

function canon(
  rank: number,
  pedal: string,
  brand: string,
  entryKey: string,
  blurb: string,
  year?: number,
  catalogKey?: string,
): SuedeListEntry {
  return { rank, pedal, brand, ...(year !== undefined && { year }), tier: 'canon', blurb, entryKey, ...(catalogKey && { catalogKey }) };
}

function great(
  rank: number,
  pedal: string,
  brand: string,
  entryKey: string,
  blurb: string,
  year?: number,
  catalogKey?: string,
): SuedeListEntry {
  return { rank, pedal, brand, ...(year !== undefined && { year }), tier: 'great', blurb, entryKey, ...(catalogKey && { catalogKey }) };
}

function middle(
  rank: number,
  pedal: string,
  brand: string,
  entryKey: string,
  blurb: string,
  year?: number,
  catalogKey?: string,
): SuedeListEntry {
  return { rank, pedal, brand, ...(year !== undefined && { year }), tier: 'middle', blurb, entryKey, ...(catalogKey && { catalogKey }) };
}

type Quote = { quote: string; source: string; sourceUrl: string };

function disaster(
  rank: number,
  pedal: string,
  brand: string,
  entryKey: string,
  blurb: string,
  communityQuotes: Quote[],
  year?: number,
  catalogKey?: string,
): SuedeListEntry {
  return {
    rank,
    pedal,
    brand,
    ...(year !== undefined && { year }),
    tier: 'disaster',
    blurb,
    entryKey,
    ...(catalogKey && { catalogKey }),
    communityQuotes,
  };
}

export const list: SuedeList = {
  edition: '2026',
  slug: 'best-and-worst',
  title: 'The Suede 100: The List the Press Will Never Print',
  manifesto: `I've been doing this long enough to have owned gear I'm embarrassed about. Pedals I bought because a magazine gave them four-and-a-half stars and a breathless paragraph about "organic saturation." Pedals that sat on boards for two years because I convinced myself I just hadn't found the right setting. Pedals that cost me four hundred dollars and sounded like stepping on a cat. I kept notes. I kept the receipts — financially and sonically. This list is what I did with them.

The Suede 100 is a single ranked list of one hundred guitar effects pedals, numbered 1 through 100. One is the greatest pedal ever made. One hundred is the worst. Every number between them is a considered judgment about where that pedal actually sits relative to everything else — not relative to its price bracket, not relative to its genre, not relative to the wave of forum posts that shipped with it. Relative to every other pedal on the list. Head to head. Full stop.

The structure is a gradient, not a cliff. Somewhere around the top twenty you'll find things I'd put on any board without hesitation — pedals that do what they claim, do it better than anything else, and have earned their place through use rather than mythology. The middle fifty is long and honest and increasingly uncomfortable: pedals that work, but only in narrow circumstances; pedals that almost got it right; pedals that built reputations on timing rather than merit. Below that is where it gets brutal. The bottom twenty should not exist. Some of them don't have a single defensible use case. Some of them represent active mistakes in industrial design. They're on the list because the list is complete, and completion requires honesty about the bottom.

There are no honorable mentions. There are no "genre-dependent" verdicts. If a pedal made the list, it has a rank. If it doesn't have a rank, it's not on the list. Every entry has a verdict.

This is different from what you've been reading. Guitar publications spent thirty years unable to print a number below six out of ten — not because everything was good, but because the companies that made bad pedals also bought the advertising. Reviews became previews. Stars became courtesy. Lists became listicles: "10 Overdrive Pedals for Blues!" versus "10 Overdrive Pedals for Metal!" — genre-segregated to avoid the question of which one actually wins. *The press never printed below a 6/10. So they went extinct. We're the place that doesn't.*

Every entry on this list has a dedicated "Fight About This" thread in the Suede Social forum. I mean that literally — the link is in the entry, the thread is live before the issue publishes. Because here's what I actually believe: the argument is the point. My convictions earn the rank. Your argument earns the next one. If you come into the Klon thread with something I haven't considered — a real claim, sourced in experience, not in forum mythology — I'll read it. If it lands, the rank moves. Not because of vote counts. Not because the post got liked three hundred times. Because the argument was right and I changed my mind.

The list is versioned. This is Edition 1, 2026. Future editions will reflect arguments that landed, not sentiment that accumulated. The difference matters. I'm not running a democracy. I'm running a canon — one that can be revised when revision is earned.

One more thing before you scroll. The Klon Centaur is number one. I know what that does to some of you. Good. The Boss MT-2 is number one hundred. I know what that does to the rest of you. The argument threads are already open.

Start at the top if you want to understand what a great pedal actually does. Start at the bottom if you want to understand how confident mediocrity gets mistaken for character. Read the whole thing if you want to understand why I spent two years building a ranked list instead of writing another "Best Overdrive Pedals" roundup for a platform that would have made me soften every word.

Here's the first edition. Every pedal earned its number. None of them had a choice.`,
  publishedAt: '2026-06-01T12:00:00Z',
  byline: {
    author: 'jason',
  },
  entries: [
    // ── CANON 1-10 ──────────────────────────────────────────────────────────
    canon(
      1, 'Klon Centaur', 'Klon (Bill Finnegan)', 'klon-centaur',
      "The argument over whether it is transparent is itself proof of its transparency. Every other overdrive on this list is being compared to this one, including the ones that were on the market first. I A/B'd a Klon against three clones in a level-matched blind test two summers ago — a KTR, a Tumnus, and a hand-wired boutique piece that cost more than the Klon itself. I could hear the difference. Not on every note, not dramatically, but consistently, in the way the pick attack released into sustain. Bill Finnegan built roughly two thousand of these by hand in his apartment and then stopped. He did not license the circuit. He did not sell the company. He walked away. The boutique overdrive era is downstream of that decision. The clone market is downstream of those clones. The entire conversation about what makes a drive pedal 'musical' starts here. Guitarists who have never touched a real one have opinions about it. That does not happen to pedals that don't matter. The resale price is not hype — or rather, the hype caught up to something real and then overshot it, which is what hype does when the underlying thing is actually this good. None of the replicas are this.",
      1994, 'klon-centaur'
    ),
    canon(
      2, 'Electro-Harmonix Big Muff Pi', 'Electro-Harmonix', 'electro-harmonix-big-muff-pi',
      "Everything that came after it — grunge, doom, fuzz-forward indie, lo-fi bedroom recording — owes this pedal a debt it will never acknowledge. Mike Matthews built the first one in 1969 and the circuit has been revised, reissued, and pirated so many times that 'Big Muff Pi' now describes a family of sounds more than a single circuit. That is a feature, not a bug. I've owned the Russian Civil War version, the Op-Amp version, and a late-70s triangle knob original that I still regret selling. They do not sound the same. The triangle sounds like a cello being played wrong in the best possible way. The Russian sounds like something being destroyed slowly and on purpose. The Op-Amp is the one Smashing Pumpkins used and it sounds enormous and slightly broken, which is correct. The sustain knob can take you somewhere most drives can't reach — past saturation, past compression, into a kind of infinite sustain that stops tracking pitch if you push it far enough. That's not a flaw. That's the point. There is no correct Big Muff. There is only the one that matches what you're trying to ruin.",
      1969, 'electro-harmonix-big-muff-pi'
    ),
    canon(
      3, 'Ibanez TS808 Tube Screamer', 'Ibanez / Maxon', 'ibanez-ts808-tube-screamer',
      "The Tube Screamer's midrange hump is the most consequential EQ decision in the history of guitar effects. Everything people love and hate about it — the warmth, the honk, the way it pushes a tube amp's front end, the way it gets swallowed by everything else in a band mix if you set it wrong — comes from that curve. Ibanez and Maxon have spent forty years trying to explain the relationship between them, and I don't fully trust either account, but the TS808 is the one that Stevie Ray Vaughan used and that matters more than the corporate history. I've had the reissue, a modded version with the original JRC4558D chip swapped in, and a few TS9s. The chip does something — the 808 chip rolls off the highs in a way that reads as 'warm' rather than 'dull.' The controls between noon and three o'clock are where the pedal stops being useful and starts being loud, which is a narrower useful range than people admit. But at the right setting into the right amp, there is nothing else that does exactly this. Blues players discovered it first. Country players have owned it for the past decade. The pedal doesn't care.",
      1979, 'ibanez-ts9-tube-screamer'
    ),
    canon(
      4, 'ProCo RAT 2', 'ProCo Sound', 'proco-rat-2',
      "I sold my original RAT in 2018 because I convinced myself I didn't need it. I bought another one in 2021 because I was wrong. The RAT 2 is not fashionable in the way the Klon is fashionable or the Big Muff is fashionable. It is workmanlike and a little ugly and it does not photograph well. It also sounds better under distortion than almost anything else on this list, meaning it holds its character when you're playing loud in a room with other loud things happening, which is the condition that actually matters. The Filter knob is the key to the whole pedal — it runs backwards from every other tone control you've ever used, cutting highs as you turn it up rather than down, and the useful range is enormous. Low filter settings give you something close to fuzz. High filter settings give you a grinding, compressed wall of mid-forward distortion that cuts through a live mix without having to turn the volume up. The op-amp is the LM308, and people have theorized endlessly about why that chip sounds the way it sounds. The correct answer is: it doesn't matter why. It sounds like that.",
      1988, 'proco-rat-2'
    ),
    canon(
      5, 'Electro-Harmonix Deluxe Memory Man', 'Electro-Harmonix', 'electro-harmonix-deluxe-memory-man',
      "The Deluxe Memory Man is not the warmest analog delay ever made and it is not the most lush chorus ever made, but it does both simultaneously in a way that no dedicated delay or chorus has ever matched. That combination is not an accident — the bucket-brigade chip that drives the delay also colors the wet signal in a way that makes the chorus mode feel organic rather than synthetic. I've run a DMM in parallel with a dedicated chorus pedal before, sending the same signal into both. The standalone chorus wins on smoothness and depth. The DMM wins on character. They do not sound like the same category of effect. The repeats on a Deluxe Memory Man degrade in a specific way — slightly darker, slightly softer, slightly out-of-tune by the time you're four repeats in — that makes the decay feel like a room rather than a plugin. David Gilmour used one. U2's the Edge used one through essentially every album that mattered to people who discovered guitar music between 1980 and 1992. The reissue is close. The original is still worth finding.",
      1980
    ),
    canon(
      6, 'Dallas Arbiter Fuzz Face', 'Dallas Arbiter', 'dallas-arbiter-fuzz-face',
      "Jimi Hendrix used a Dallas Arbiter Fuzz Face and that is simultaneously the most important and least interesting fact about this pedal. The Fuzz Face matters because it is the first great fuzz — not the first fuzz, but the first one that sounded like something a guitarist would actually choose rather than tolerate. The germanium transistor versions are temperature-sensitive, output-level-sensitive, and pickup-impedance-sensitive in ways that should make them unreliable but instead make them reactive. They respond to your picking attack. They clean up when you roll back your volume. They sound different in a cold room than a hot one. None of that is precision engineering — Arbiter was building them cheap and fast, and the variance between units was enormous. What they got right was the circuit topology, which puts the fuzz before the volume control in a way that makes the sweep behave like a second gain stage rather than a simple attenuator. The silicon versions are more consistent and more available and sound harder and colder in a way that suits certain music and ruins others. Roger Mayer's modifications of the originals are what Hendrix actually used on many recordings. That detail matters.",
      1966
    ),
    canon(
      7, 'MXR Phase 90 (Script)', 'MXR', 'mxr-phase-90-script',
      "The script logo Phase 90 is the version that preceded the block logo by a few years, and the difference between them has been debated on forums longer than I have been playing guitar. I've owned both. The block logo is louder, slightly brighter, slightly more intense at the peak of the sweep. The script is more even, more subtle, more musical in a way that I find difficult to describe without falling back on words like 'organic,' which I hate. Eddie Van Halen played one into a cranked Marshall and it became the defining guitar sound of a decade. That is a remarkable thing for a four-knob box with one knob you'll ever actually move. The Speed control is all you get, and the sweet spot is somewhere between nine o'clock and noon depending on the song and the amp. Too slow and it becomes background movement. Too fast and it turns into something that calls attention to itself. The right speed disappears into the guitar sound and makes everything feel slightly wider and slightly alive. That is the correct use of a phaser. Most phasers do not manage this.",
      1974
    ),
    canon(
      8, 'Strymon Timeline', 'Strymon', 'strymon-timeline',
      "The Strymon Timeline arrived in 2011 and made every other delay on the market feel immediately optional. I don't say that lightly — I had a rack of delays before the Timeline, including units that cost more, and I sold most of them within a year. The reason is not that the Timeline does more, though it does. The reason is that it does twelve different things well enough that any one of them justifies the pedal's existence on its own. The tape mode sounds like a tape delay. Not like a digital approximation of tape delay — like tape, with the wow and flutter and the high-frequency rolloff and the way the repeats accumulate a slight noise floor. The reverb tail on the Bloom mode turns a delay into something closer to an ambient instrument than a timing effect. The preset system is deep enough to build a full set around. It is also heavy and expensive and has enough menu-diving to justify a manual, which Strymon actually provides. There are players for whom a simpler delay sounds more musical because it constrains them productively. Those players should use a simpler delay. For everyone else, the Timeline set the ceiling and nobody has hit it since.",
      2011, 'strymon-timeline'
    ),
    canon(
      9, 'DigiTech Whammy (WH-1)', 'DigiTech', 'digitech-whammy-wh1',
      "The DigiTech Whammy WH-1 is the original, and the original sounds different from every version that followed — not better in all situations, but different in the ways that matter. The pitch tracking is slower. The intervals are slightly wobbly at the edges. The harmonized settings have a quality that sits somewhere between a chorus and a pitch shifter in a way the later versions cleaned up and in doing so lost. Tom Morello's entire vocabulary exists because of this pedal. Jonny Greenwood used it to make guitar sounds that guitar had never made before. The WH-1 specifically has an artificiality to its tracking — a slight lag, a slight smear — that later generations tried to eliminate as a flaw. That smear is not a flaw. It is the sound. Every version since the WH-4 tracks faster and more accurately and sounds more like pitch correction software than an instrument. The WH-1 sounds like a machine that is trying to follow you and almost succeeding, and that gap between almost and exactly is where the music is. Working units are increasingly hard to find. Find one anyway.",
      1989
    ),
    canon(
      10, 'Univox Uni-Vibe', 'Shin-ei / Univox', 'univox-uni-vibe',
      "The Univox Uni-Vibe was built by Shin-ei in Japan in 1968 and was designed to simulate the sound of a rotating speaker cabinet for keyboard players who couldn't afford the real thing. It didn't succeed at that. What it made instead was something stranger and more personal — a slow, underwater pulse that becomes almost hallucinatory at low speeds and disorienting at high ones. Jimi Hendrix played one at Woodstock. David Gilmour played one on 'Breathe.' Robin Trower built an entire career on what a Vibe does to a Les Paul through a Marshall. The chorus mode and the vibrato mode are both useful, but the chorus mode at low speed into a slightly dirty amp is the canonical setting — the one that sounds like the track is breathing. Later reproductions have varied wildly. The best of them capture the LFO shape, which is asymmetrical in a way that produces a subtle acceleration at the peak of the cycle. That asymmetry is why the Uni-Vibe sounds like it's alive rather than just moving. Most modulation pedals move at a constant rate. The Uni-Vibe lurches, very slowly, and the lurch is the point.",
      1968
    ),

    // ── GREATS 11-20 ────────────────────────────────────────────────────────
    great(
      11, 'Strymon BigSky', 'Strymon', 'strymon-bigsky',
      "The reverb engine that ended the argument. Before 2013, getting studio-quality reverb on a pedalboard meant compromising somewhere — algorithm, interface, real estate. The BigSky doesn't compromise. It sits at #11 and not higher because reverb is a supporting character; the pedals above it define the sound rather than the space around it. But within its category it has no peer, and I've never once looked at my board and thought that slot was wasted.",
      2013, 'strymon-bigsky'
    ),
    great(
      12, 'Vox V846 Wah', 'Vox / JEN Elettronica', 'vox-v846-wah',
      "The original — not the Classic, not the reissue, the actual JEN-built unit from the Italian factory before Vox handed manufacturing to anyone with a license. The tracking is sloppy in a way that sounds like singing. Every wah released since 1967 is either chasing this or trying to correct it. Sits at #12 rather than higher because a wah, however perfect, is a texture not a foundation. But no texture in the canon earns its keep more reliably than this one.",
      1967
    ),
    great(
      13, 'Boss CE-2 Chorus', 'Boss', 'boss-ce-2-chorus',
      "The CE-2 is the reason chorus sounds like chorus. The stereo units before it, the multi-voice units after it — none of them settled on what the effect actually should be with the clarity that Boss did in 1979 with a single voice and a single depth knob. It sits between the Electric Mistress at #14 and the BigSky at #11 because it is the definitive statement of its effect class, which is the only metric that matters on a list like this.",
      1979, 'boss-ce-2w-waza-craft-chorus'
    ),
    great(
      14, 'Electro-Harmonix Electric Mistress', 'Electro-Harmonix', 'electro-harmonix-electric-mistress',
      "The Electric Mistress is a pedal that shouldn't work and does anyway. The flange on it is unstable, slightly out of tune with itself, impossible to dial to the same spot twice — and that's the entire point. The CE-2 above it is perfect. The Electric Mistress is interesting. Interesting ranks lower, but the gap between #13 and #14 is smaller than most people think, and anyone who's tracked a guitar through a Mistress into tape knows which one they'd pick for the record.",
      1976
    ),
    great(
      15, 'Fractal Audio Axe-FX III', 'Fractal Audio Systems', 'fractal-axe-fx-iii',
      "The Axe-FX III belongs on this list and not in a museum exhibit because it actually changed how professionals think about signal chain, not because it sold units or got endorsed. The argument against it — that it's not a pedal — is technically correct and completely irrelevant to what it did to the ecosystem. Sits at #15 rather than higher because it's a platform, and platforms earn their rank through longevity that 2018 hasn't finished proving yet.",
      2018
    ),
    great(
      16, 'Sola Sound Tone Bender MKII', 'Sola Sound', 'sola-sound-tone-bender-mkii',
      "Jeff Beck, Jimmy Page, and a sound that defined what distortion could be before anyone had agreed on what distortion was. The MKII is not the first fuzz, not the most musical fuzz, not the most stable fuzz — it is the most influential fuzz, and influence at this level of penetration is worth the rank. Sits at #16 rather than higher because the Tone Bender story is incomplete without acknowledging that Sola Sound could never quite replicate their own magic consistently.",
      1966
    ),
    great(
      17, 'Strymon El Capistan', 'Strymon', 'strymon-el-capistan',
      "The El Capistan does one thing — analog-voiced tape delay simulation — and does it so completely that it made the category of tape delay plugins temporarily embarrassing. Every parameter on it makes musical sense. I've had mine since 2012 and I've never touched the internal DIP switches because the top-panel controls are already the right answer. Sits below the BigSky at #11 because BigSky rewired how we think about reverb; the El Capistan perfected a category without redefining it.",
      2011, 'strymon-el-capistan'
    ),
    great(
      18, 'Musitronics Mu-Tron III', 'Musitronics', 'musitronics-mu-tron-iii',
      "Bootsy Collins, Stevie Wonder, Bernard Purdie — you could build a syllabus out of the sessions that ran through a Mu-Tron III, and every lesson in that syllabus would be about dynamics. The envelope follower responds to how hard you play, which means it rewards practice in a way that most effects don't. Sits at #18 because it defined a category that has been widely copied and almost never equaled, which is the only criterion that counts at this rank.",
      1972
    ),
    great(
      19, 'Paul Cochrane Timmy', 'Paul Cochrane', 'paul-cochrane-timmy',
      "Paul Cochrane hand-built these for years before the market caught up to what he understood instinctively: that most overdrives are solving the wrong problem. The Timmy isn't transparent, it's revealing — it shows you your amp's character instead of replacing it. Sits at #19 rather than higher because its influence traveled slowly, through players rather than press, and slow influence is still influence. The four-year wait that defined King of Tone's mythology? The Timmy was doing the same thing with less fanfare first.",
      2005
    ),
    great(
      20, 'Electro-Harmonix Small Clone', 'Electro-Harmonix', 'electro-harmonix-small-clone',
      "Kurt Cobain didn't invent the Small Clone's sound, he just proved it could survive any production context you threw at it. The chorus is thick, slightly woozy, and immediately recognizable — the opposite of the CE-2's precision, which is why both belong on this list and neither replaces the other. Sits at #20 rather than higher because it is defined by one association in a way that the CE-2 is not. That's not a weakness; it just tells you where the rank stops.",
      1979
    ),

    // ── MIDDLE 21-50 (mediocre-but-inoffensive zone) ────────────────────────
    middle(21, 'Roland RE-201 Space Echo', 'Roland', 'roland-re-201-space-echo', "Sounds like every great tape echo you've ever heard, because it basically is. Still the reference.", 1974),
    middle(22, 'Line 6 Helix', 'Line 6', 'line-6-helix', "An amp, a rack, and a computer shrank into a floor unit. Players who use it well use it very well.", 2015),
    middle(23, 'Kemper Profiling Amplifier', 'Kemper Amps', 'kemper-profiling-amplifier', "The best case for profiling: it worked. The worst case for profiling: everyone knows it worked and moved on.", 2011),
    middle(24, 'Maestro FZ-1 Fuzz-Tone', 'Gibson / Maestro', 'maestro-fz-1-fuzz-tone', "Before fuzz was fuzz. The grandfather doesn't need your approval and wasn't asking.", 1962),
    middle(25, 'TC Electronic PolyTune', 'TC Electronic', 'tc-electronic-polytune', "Does one thing. Does it correctly. Has been doing it since 2010 without complaint.", 2010),
    middle(26, 'Boss DD-2', 'Boss', 'boss-dd-2', "Genuinely good. Will not surprise you in either direction. The delay you reach for when you want delay.", 1983),
    middle(27, 'Boss BD-2 Blues Driver', 'Boss', 'boss-bd-2-blues-driver', "More useful than its reputation suggests, less interesting than its fans insist. A reliable workhorse with an identity complex.", 1995, 'boss-bd-2w-blues-driver'),
    middle(28, 'Analogman King of Tone', 'Analogman', 'analogman-king-of-tone', "Two channels, one purpose: sound like the amp you wish you had. Succeeds often enough to justify the waitlist. Barely.", 2003),
    middle(29, 'Fulltone OCD', 'Fulltone', 'fulltone-ocd', "Does what it says, does it cleanly. The second version fixed what nobody complained about in the first.", 2004),
    middle(30, 'Z.Vex Fuzz Factory', 'Z.Vex Effects', 'zvex-fuzz-factory', "Genuinely strange. Not strange in a marketable way — strange in a way that occasionally produces something irreplaceable.", 1995),
    middle(31, 'Strymon Volante', 'Strymon', 'strymon-volante', "The Volante is thoughtful and expensive and half the people who own one have three other delays they use instead.", 2018, 'strymon-volante'),
    middle(32, 'Eventide H9', 'Eventide', 'eventide-h9', "An algorithm store in a box. Some algorithms are great. The interface is a negotiation you will lose at least once per gig.", 2012),
    middle(33, 'EarthQuaker Devices Hizumitas', 'EarthQuaker Devices', 'earthquaker-hizumitas', "A fuzz with a name attached to a specific song, which is either a recommendation or a warning, depending.", 2021, 'earthquaker-devices-hizumitas'),
    middle(34, 'Origin Effects Cali76 Compact Deluxe', 'Origin Effects', 'origin-cali76-compact-deluxe', "A compressor dressed up as a studio unit. Sounds excellent. Costs enough that you'll tell people how much it cost.", 2014),
    middle(35, 'Strymon Iridium', 'Strymon', 'strymon-iridium', "Amp simulation that finally convinced the amp purists to stop arguing. Not because it's perfect — because they're tired.", 2020, 'strymon-iridium'),
    middle(36, 'EarthQuaker Devices Avalanche Run', 'EarthQuaker Devices', 'earthquaker-avalanche-run', "Reverb and delay in one box, which is either efficient or the reason your patch cable bill doubled.", 2015, 'earthquaker-devices-avalanche-run-v2'),
    middle(37, 'EarthQuaker Devices Westwood', 'EarthQuaker Devices', 'earthquaker-westwood', "Smooth overdrive that does nothing offensive and nothing surprising. The third knob is for the spec sheet, not the song.", 2017, 'earthquaker-devices-westwood'),
    middle(38, 'JHS Morning Glory', 'JHS Pedals', 'jhs-morning-glory', "Warm, low-gain, pleasant. Has been described as a 'transparent overdrive' in more magazine columns than any law should allow.", 2009, 'jhs-pedals-morning-glory-v4'),
    middle(39, 'MXR Carbon Copy', 'MXR', 'mxr-carbon-copy', "Half the people who own one could use a shorter delay time and a smaller footprint. Sounds fine, though.", 2008),
    middle(40, 'Strymon NightSky', 'Strymon', 'strymon-nightsky', "A reverb for people who want to explain their reverb. The presets are named things. You know the kind.", 2020, 'strymon-nightsky'),
    middle(41, 'MXR Distortion+', 'MXR', 'mxr-distortion-plus', "Was a secret weapon before it became a punch line. Still punches. The secret is that it never actually left.", 1974),
    middle(42, 'Boss CE-1 Chorus Ensemble', 'Boss / Roland', 'boss-ce-1-chorus-ensemble', "The original chorus that made chorus legal. Everything since has been trying to replicate what this one did accidentally.", 1976),
    middle(43, 'EHX Op-Amp Big Muff Pi', 'Electro-Harmonix', 'ehx-op-amp-big-muff-pi', "Rust and sustain and a mid-scoop that turned a generation of guitarists into a genre. Not a compliment, exactly.", 1977),
    middle(44, 'Boss DS-1 Distortion', 'Boss', 'boss-ds-1-distortion', "Has been on ten thousand boards since 1978 and will be on ten thousand more when we're gone. Fine.", 1978),
    middle(45, 'Chase Bliss Audio CXM 1978', 'Chase Bliss Audio', 'chase-bliss-cxm-1978', "Beautiful hardware, beautiful interface, genuinely lush reverb. A premium price for something you will use as a one-setting unit.", 2020, 'chase-bliss-audio-cxm-1978'),
    middle(46, 'Boss TB-2W Tone Bender Waza Craft', 'Boss', 'boss-tb-2w-tone-bender', "A fuzz you couldn't buy for forty years, now available at a boutique price. The mystique is doing significant work here.", 2022, 'boss-tb-2w-tone-bender'),
    middle(47, 'Dunlop Cry Baby GCB-95', 'Jim Dunlop', 'dunlop-cry-baby-gcb-95', "Every wah sounds like this, which is either because this got it right or because nobody tried anything else. True for both.", 1982),
    middle(48, 'Electro-Harmonix Micro POG', 'Electro-Harmonix', 'ehx-micro-pog', "An octave pedal small enough to forget about until you need it, at which point you need it very badly.", 2005),
    middle(49, 'Strymon blueSky', 'Strymon', 'strymon-bluesky', "A reverb that became a default. Defaults happen for reasons. The reason here is that it sounds like a reverb should.", 2011),
    middle(50, 'Roland SDD-320 Dimension D', 'Roland', 'roland-sdd-320-dimension-d', "Four discreet chorus modes, none of them labeled 'chorus.' Roland understood something about restraint that nobody has quite replicated.", 1979),

    // ── MIDDLE 51-80 (progressively more annoyed zone) ─────────────────────
    middle(51, 'Boss DC-2 Dimension C', 'Boss', 'boss-dc-2-dimension-c', "The Boss version of the Dimension D, which is a polite way of saying: nearly the same, cheaper, slightly less magic.", 1985, 'boss-dc-2w-dimension-c'),
    middle(52, 'EarthQuaker Devices Plumes', 'EarthQuaker Devices', 'earthquaker-plumes', "A transparent overdrive for people who correctly identified that most transparent overdrives are not actually transparent. Gets it right.", 2019, 'earthquaker-devices-plumes'),
    middle(53, 'Wampler Tumnus', 'Wampler Pedals', 'wampler-tumnus', "A Klon derivative that doesn't hide what it is. The honesty is refreshing. The second knob still isn't doing much.", 2016),
    middle(54, 'Boss DD-3T', 'Boss', 'boss-dd-3t', "The DD-3 with a tap tempo. Long overdue. Sounds exactly like the DD-3. That's the review.", 2019),
    middle(55, 'EHX Small Stone', 'Electro-Harmonix', 'ehx-small-stone', "A phase shifter that sounds like a phase shifter, which has been enough for fifty years and remains enough.", 1974),
    middle(56, 'JHS Bonsai', 'JHS Pedals', 'jhs-bonsai', "Nine overdrives in a menu system. Most boards need two. Points for ambition; deductions for the menu.", 2018, 'jhs-pedals-bonsai'),
    middle(57, 'EHX Holy Grail Nano', 'Electro-Harmonix', 'ehx-holy-grail-nano', "Spring, plate, hall — three settings, correct settings, nothing else. The Holy Grail earned its name by not overcomplicating it.", 2000),
    middle(58, 'Boss VB-2W Vibrato', 'Boss', 'boss-vb-2w-vibrato', "A vibrato pedal, which means exactly twelve percent of players will use it correctly and the rest will return it.", 2017),
    middle(59, 'Wren and Cuff Tall Font Russian', 'Wren and Cuff', 'wren-cuff-tall-font-russian', "A Russian Big Muff clone that sounds excellent and exists primarily because the original became too expensive to actually use.", 2012),
    middle(60, 'Chase Bliss Audio Brothers', 'Chase Bliss Audio', 'chase-bliss-brothers', "Two overdrives sharing one enclosure, ostensibly for flexibility. In practice: one side is great, one side is the other side.", 2017, 'chase-bliss-audio-brothers'),
    middle(61, 'EHX Cathedral', 'Electro-Harmonix', 'ehx-cathedral', "Six reverb modes in a box the size of a hardback novel. Why the size. Nobody asked. It's fine.", 2009),
    middle(62, 'TC Electronic Hall of Fame 2', 'TC Electronic', 'tc-hall-of-fame-2', "A reverb with a TonePrint slot, which means you can load someone else's reverb onto your reverb. Progress of a kind.", 2017),
    middle(63, 'Boss DM-2W Delay', 'Boss', 'boss-dm-2w-delay', "An analog delay reissue that sounds warm and does everything the original did, which is both the selling point and the ceiling.", 2015, 'boss-dm-2w-delay'),
    middle(64, 'Chase Bliss Audio Generation Loss MkII', 'Chase Bliss Audio', 'chase-bliss-generation-loss-mkii', "A lo-fi artifact generator that requires reading the manual before you produce something intentional. The manual is not short.", 2021, 'chase-bliss-audio-generation-loss-mkii'),
    middle(65, 'Empress Effects EchoSystem', 'Empress Effects', 'empress-echosystem', "Eight delay modes, four inputs, a soft bypass, and a display. The second mode is the first mode with a longer tail.", 2016),
    middle(66, 'Crowther Audio HotCake', 'Crowther Audio', 'crowther-hotcake', "A New Zealand overdrive that sounds genuinely excellent and gets about one-fifth the press it deserves. This is the press.", 1977),
    middle(67, 'Hermida Audio Zendrive', 'Hermida Audio', 'hermida-zendrive', "Named after a religion, sounds like an amp you can't afford, sits in a mix like it belongs there. Usually does.", 2004),
    middle(68, 'Friedman BE-OD', 'Friedman Amplification', 'friedman-be-od', "British gain, American pedal format, designed for players who want the brown sound without the brown amp budget. Delivers adequately.", 2016),
    middle(69, 'Meris Polymoon', 'Meris', 'meris-polymoon', "Multi-tap modulated delay with an interface that makes sense only after you've used it wrong for a week and a half.", 2017),
    middle(70, 'Meris Mercury7', 'Meris', 'meris-mercury7', "A reverb named after a NASA probe that sounds like outer space, which is either a feature or a description of the problem.", 2017),
    middle(71, 'Chase Bliss Audio Mood MkII', 'Chase Bliss Audio', 'chase-bliss-mood-mkii', "A looper and sample-smasher hybrid with four modes, two clocks, and approximately one correct application per thirty minutes of exploration.", 2020, 'chase-bliss-audio-mood-mkii'),
    middle(72, 'MXR Dyna Comp', 'MXR', 'mxr-dyna-comp', "The compressor that sounds like compression is supposed to sound: invisible until you turn it off, at which point you miss it.", 1972),
    middle(73, 'Death By Audio Supersonic Fuzz Gun', 'Death By Audio', 'death-by-audio-supersonic-fuzz-gun', "A fuzz designed to be wrong, which it accomplishes. If you bought this, you have a story. Nobody asked to hear it.", 2010),
    middle(74, 'Z.Vex Super Hard On (SHO)', 'Z.Vex Effects', 'zvex-super-hard-on', "A clean boost so simple it almost isn't there — which is exactly the point. One knob. You either need it or you don't.", 1999),
    middle(75, 'Chase Bliss Audio Habit', 'Chase Bliss Audio', 'chase-bliss-habit', "A looper that remembers things you didn't ask it to remember. The manual calls this a feature. Your setlist calls it something else.", 2021, 'chase-bliss-audio-habit'),
    middle(76, 'Boss OC-2 Octaver', 'Boss', 'boss-oc-2-octaver', "An octave pedal from 1982 that sounds like 1982, which is either a feature or a reason to buy the newer one.", 1982),
    middle(77, 'MXR Flanger (M117)', 'MXR', 'mxr-flanger-m117', "A flanger that achieves maximum flanger: if you want that sound, this is that sound. If you don't, nothing here for you.", 1976),
    middle(78, 'TC Electronic Ditto Looper', 'TC Electronic', 'tc-ditto-looper', "A looper with one button and one purpose, which is admirable, until the one button stops registering and the purpose disappears.", 2012),
    middle(79, 'EarthQuaker Devices Disaster Transport SR', 'EarthQuaker Devices', 'earthquaker-disaster-transport-sr', "A delay and reverb combined in one unit that does both adequately and neither memorably. The story of a certain kind of efficiency.", 2013, 'earthquaker-devices-disaster-transport-sr'),
    middle(80, 'DigiTech Bad Monkey', 'DigiTech', 'digitech-bad-monkey', "Cost $59. Hit $800 used after one YouTube video. DigiTech reissued it. Everyone discovered it was a Tube Screamer all along.", 2004),

    // ── DISASTERS 81-100 (ascending into catastrophe; #100 = worst pedal ever) ──
    disaster(
      81, 'Headrush Gigboard', 'Headrush', 'headrush-gigboard',
      `The Headrush Gigboard arrived in 2018 carrying a giant touchscreen like it was the discovery of fire — as if the ability to drag amp blocks around with your finger was the thing standing between you and tone. I played one at a dealer demo day, built a rig from scratch, ran it into a PA, and what I heard was the sonic equivalent of a highly competent assistant: organized, efficient, and completely devoid of soul. The thing sounds compressed at rest. Not compressed-in-a-good-way, compressed like the signal spent the night inside a very small box and hasn't quite recovered. Tones are clinically uniform across dynamics, every picking nuance leveled out by whatever algorithm is smoothing behind the glass. The factory presets are the kind of thing that should be classified as a war crime against first impressions — every one of them sounds like it was designed to demo the unit at a trade show and actively sabotage any rational evaluation thereafter. Worse: the amp models were ported wholesale from Avid's Eleven Rack hardware, which was already showing its age when it shipped. They rebuilt the architecture from the ground up and brought the same aging sims along for the ride, which is the gear equivalent of remodeling your kitchen and keeping the 2007 refrigerator. The Gigboard isn't a catastrophe — it's worse than that. It's almost good enough to keep.`,
      [
        { quote: "The distortions I'm just not loving, they're all incredibly gritty and have a kind of high pitched fuzziness about them.", source: "TheFretBoard", sourceUrl: "https://www.thefretboard.co.uk/discussion/185232/quick-headrush-gigboard-question" },
        { quote: "I've heard a few people suggest the Headrush isn't that great so maybe send it back and try a POD Go.", source: "TheFretBoard", sourceUrl: "https://www.thefretboard.co.uk/discussion/185232/quick-headrush-gigboard-question" },
        { quote: "Sometimes I turn it on, but the presets don't sound. It happened to me playing live a couple of times.", source: "CMUSE", sourceUrl: "https://www.cmuse.org/headrush-pedalboard-problems/" },
      ],
      2018
    ),
    disaster(
      82, 'Line 6 DL4 (original)', 'Line 6', 'line-6-dl4-original',
      `In 1999, the DL4 landed like a bomb. Twenty-eight delay models, a looper, four footswitches, and a green enclosure the size of a small country — all for a price that made you feel like you were getting away with something. And for a while, you were. The DL4 was the first floor-based delay modeler that actually worked, that actually had everything, that made every other delay pedal on the market look like it was built for children. U2 used it. Radiohead used it. Your cool older cousin used it. If you played guitar in the early 2000s and you were serious about it, you either had one or you wanted one. Then the switches started dying. Not all at once — that would have been merciful. Line 6 installed tactile footswitches that made direct contact with the PCB underneath them, so every stomp transferred force directly into the circuit board, grinding the contact pads down one gig at a time. By 2005, "DL4 footswitch repair" had become its own genre of YouTube video. The modifier community was so busy fixing the DL4 that an entire economy of replacement kits, DIY tutorials, and "did I just wreck my board?" forum posts emerged to sustain it. The irony is brutal: the pedal that changed everything about how guitarists thought about delay was also quietly demanding that guitarists learn basic PCB repair just to keep using it. Line 6 finally fixed the footswitches in the MkII in 2022. Twenty-three years later. That's not a patch. That's a confession.`,
      [
        { quote: "The 1st footswitch stopped working, so I bought replacement switches and since they came in a bag of 5, I replaced all four of them.", source: "Metalwarfare Forum", sourceUrl: "https://forum.metalwarfare.com/index.php?topic=1027.0" },
        { quote: "Basically spring switches making direct contact to switch pad on the circuit board. Seems like problems could crop up with this.", source: "Effects Bay", sourceUrl: "https://www.effectsbay.com/2011/06/line-6-footswitch-modificationreplacement-tutorial/" },
        { quote: "I dread to think how many of these might have been thrown away when they could have been so easily saved.", source: "marcushamblett.co.uk", sourceUrl: "https://www.marcushamblett.co.uk/really-quick-and-easy-repair-for-line-6-dl4-pedal/2020/08/30/" },
      ],
      1999
    ),
    disaster(
      83, 'Boss PS-5 Super Shifter', 'Boss', 'boss-ps-5-super-shifter',
      `Here is a pedal that does six things and nails exactly one of them, and that one thing is the T-Arm function — a glorified whammy simulator that requires no pitch discrimination whatsoever. Congratulations, Boss. You have built the most expensive way to wobble a note up and down on the market. The PS-5 Super Shifter shipped in 2001 with a menu of promises: intelligent harmonies, octave effects, a 12-string simulation, pitch shift up to two octaves. What the box neglected to mention is that the harmonizer tracks fast and wrong simultaneously — a remarkable engineering achievement. It finds the pitch the way a drunk finds their keys: urgently, confidently, and in the wrong pocket. The wet signal arrives about 45 cents sharp of where it was supposed to go, which is not vintage character, it is just a mistake that shipped in a yellow enclosure. The 12-string mode is its own category of failure. Every pitch shifter ad copy has ever promised a convincing 12-string effect, and every pitch shifter has delivered instead a chorus pedal with ambitions above its station. The PS-5 is no exception. It sounds like a 6-string played in a tiled bathroom while someone hums nearby. The octave-down is muffled in that specific way that makes you check your amp twice before you realize the pedal is just eating your low end for unclear reasons. And yet: the T-Arm is fine. People mention this. I don't know what to do with that information except note that "the expression-pedal whammy works" is a low bar to clear and still somehow the highlight reel.`,
      [
        { quote: "When I try recommended boss manual settings like the '12 string setting' it just sounds badly out of tune.", source: "ilovefuzz.com", sourceUrl: "https://ilovefuzz.com/viewtopic.php?f=149&t=52465" },
        { quote: "It's crap at doing +24 semitones though, really really crap, it randomly decides to do +23 or +22 instead.", source: "ilovefuzz.com", sourceUrl: "https://ilovefuzz.com/viewtopic.php?f=149&t=52465" },
      ],
      2001
    ),
    disaster(
      84, 'Boss RV-3', 'Boss', 'boss-rv-3',
      `The Boss RV-3 is what happens when a product roadmap meeting overrules the engineering team. It is 1994. Boss has a perfectly functional reverb line and a perfectly functional delay line. Someone in a conference room asks why they cannot live in the same enclosure. No one has a good answer. The RV-3 ships. The delay modes are not the DD-series. The reverb modes are not the RV-5. The combination modes are not greater than either sum — they are, in the precise mathematical sense, less. What you get is a reverb tail that cannot breathe freely because it is sharing a DSP chip with a delay that sounds like it learned the concept of echo from a pamphlet. The result is effects that are individually compromised and mutually suspicious of each other, like two coworkers who were forced to share a desk after a reorg. I understand the appeal in theory. One pedal. Two effects. Smaller board. Done. But the RV-3 delivers on that premise the way a gas station burrito delivers on the promise of Mexican food: technically present, fundamentally sad. What makes the RV-3 genuinely fascinating is its collector afterlife. The pedal commands real secondary-market money, which tells you less about what it sounds like than about what owning a discontinued Boss unit does for a certain kind of person's self-image. Discontinuation is the most reliable path to perceived greatness. The RV-3 is not a great pedal that got overlooked. It is a compromise that got discontinued, and the market has spent thirty years confusing those two things.`,
      [
        { quote: "Both the delays and reverbs are sub standard on that pedal in my opinion.", source: "Seymour Duncan Forum (RV-series discussion)", sourceUrl: "https://forum.seymourduncan.com/threads/boss-rv-5-reverb-pedal.120347/" },
        { quote: "The digital delay is pretty generic. A stompbox with only four reverb modes can feel pretty restrictive.", source: "Var Guitar", sourceUrl: "https://varguitar.com/reviews/pedals/boss-rv-3-digital-reverb-delay/" },
      ],
      1994
    ),
    disaster(
      85, 'TC Electronic MojoMojo', 'TC Electronic', 'tc-mojomojo',
      `TC Electronic would like you to know that the MojoMojo Overdrive runs its internal voltage to three or four times what your typical drive pedal uses. What TC Electronic would prefer you not think too hard about is that the whole circuit still runs at 9V — same as every other pedal on your board — and the marketing copy appears to describe, at best, some doubled clipping diodes doing a polite bit of attenuation work before the gain stage. Not a voltage tripler. Not headroom architecture. Marketing. The real tell is the level knob. On a pedal built around the premise of extraordinary headroom, you'd expect the volume control to sit near unity at noon, maybe nine o'clock — confirming all that lush overhead. Instead, unity gain on the MojoMojo lands at roughly three o'clock. That is not a feature. That is the control layout confessing in plain sight that the headroom story went the wrong direction entirely. The pedal isn't sitting quietly beneath your signal with room to breathe — it's struggling to match it. What you actually get is a mid-forward, slightly compressed overdrive with a tendency to mud up when the gain climbs past noon and a bass control that seems to have made peace with being decorative. The voice switch toggles between two almost-identical shades of "fine, I guess." Players who needed something amp-like and transparent put it back in the box. The MojoMojo is not a disaster of sound — it's a disaster of honesty, which is somehow worse.`,
      [
        { quote: "It was generic, bland, didn't control low well, not very transparent. The MojoMojo lacked just that, Mojo.", source: "The Ugly Guitar Truth", sourceUrl: "https://theuglyguitartruth.blogspot.com/2015/06/the-ugly-truth-about-tc-electronic.html" },
        { quote: "Unable to come out of the mix, even increasing the volume! Value for money: to shit!", source: "Audiofanzine", sourceUrl: "https://en.audiofanzine.com/overdrive-pedal/tc-electronic/mojomojo-overdrive/user_reviews/" },
      ],
      2013
    ),
    disaster(
      86, 'Boss GT-1000', 'Boss', 'boss-gt-1000',
      `Boss built the GT-1000 the way a very smart engineer would build a Rubik's Cube and call it a guitar pedal. The AIRD modeling is genuinely impressive — adaptive resonance, real impedance response, the kind of amp simulation that can make a Line 6 user feel a complicated emotion. Under the hood, this thing is a small miracle. On top of the hood is a monochrome screen the size of a fortune cookie and a navigation scheme that appears to have been designed by someone who once heard that musicians exist. Finding anything requires commitment. Want to add a modulation delay? Navigate the signal chain block by block, left to right, through every slot whether you're using it or not — a scrolling horrorshow that only gets worse when you need to touch the assignment page. Assignments live across three separate menus. There is no overview. There is no mercy. The factory presets are the unit's full-page billboard ad for confusion: every patch is a maximalist showcase tuned for a guitarist who performs in airports. Dial one up, get a wall of chorus-drenched ambient shimmer. Dial up the next, get that same wall with reverb. The GT-1000 doesn't want you to dial anything up. It wants you to read the manual. Both manuals. The parameter guide is 244 pages. I am not making that up. Boss shipped a $999 floor unit with a 244-page parameter guide and apparently felt fine about it. The hardware deserves better software. The software deserves a different hardware team. The GT-1000 is what happens when capability and usability refuse to be in the same room.`,
      [
        { quote: "I've never been in such a scrolling horrorshow. Really, for a unit released in 2018, all things UI are astonishingly bad.", source: "The Gear Forum", sourceUrl: "https://thegearforum.com/threads/boss-gt-1000-question.6814/" },
        { quote: "Having to scroll through every slot in the signal chain on the monochrome screen to get from input to output is a bit of a pain.", source: "Sound On Sound", sourceUrl: "https://www.soundonsound.com/reviews/boss-gt-1000" },
        { quote: "The lack of any means of instantly and reliably identifying the actual functions assigned to each switch or pedal in a patch.", source: "Sound On Sound", sourceUrl: "https://www.soundonsound.com/reviews/boss-gt-1000" },
      ],
      2018
    ),
    disaster(
      87, 'Mooer Hustle Drive', 'Mooer', 'mooer-hustle-drive',
      `The pitch writes itself: OCD circuit, $35, the size of a deck of cards. Mooer's Hustle Drive arrived in 2012 as the sensible person's shortcut to Fulltone's most beloved overdrive, and for a few years it almost pulled it off. The circuit is close enough that side-by-side demos on YouTube become philosophical exercises in whether 85% of something great is, in practice, great. The answer is: no, and the gap lives exactly where it matters. The Hustle Drive compresses where the OCD breathes. It gets darker where the OCD gets present. The headroom that makes the original respond to your pick attack like a nervous animal is simply not there — what you get instead is a polite, slightly squashed approximation that sounds fine until you've played the real thing, at which point it sounds like a memory of the real thing. The housing is all-metal and genuinely solid for what it costs — reviewers who've gigged it without complaint are not lying. The plastic knobs undercut the confidence a little, and the mini-format means the controls are black-on-black in dim stage light, which is a design choice that could generously be called minimalist and accurately be called unusable. But the real anxiety is existential, not cosmetic. This thing is mass-produced and costs less than a bar tab. Every show you plug it in, some part of you knows the footswitch could just decide it's done. The Hustle Drive is the pedal equivalent of a beater car that's never broken down — you don't trust it because it's reliable, you trust it because you haven't been let down yet. When the OCD you were saving for finally shows up on Reverb for $90, you will sell this in under an hour and feel nothing.`,
      [
        { quote: "The pedal is solid, but attention still together. To 3 times less expensive than nine OCD, this is a great pedal for those who do not have a big budget.", source: "Audiofanzine", sourceUrl: "https://en.audiofanzine.com/guitar-distortion-overdrive-fuzz/mooer/micro-series-hustle-drive/user_reviews/r.107190.html" },
        { quote: "The large white drive knob does kind of feel like a cheap plastic, but as long as it lasts, it should be fine.", source: "Thomann UK", sourceUrl: "https://www.thomann.co.uk/mooer_hustle_drive.htm" },
        { quote: "The Hustle Drive seems to compress more. And thus, it sounds slightly darker. The OCD seems to have a lot more headroom and dynamic in sound.", source: "Guitar Pick Zone", sourceUrl: "https://guitarpickzone.com/mooer-clone-list-and-pedals-review/" },
      ],
      2012
    ),
    disaster(
      88, 'DigiTech DigiDelay', 'DigiTech', 'digitech-digidelay',
      `DigiTech looked at the delay pedal market in 2005 and asked a question nobody was asking: what if we gave you seven delay modes in one enclosure, and none of them were good enough to justify skipping the other six? The DigiDelay arrived in blue — a color choice that now reads as prophetic, because blue is how your tone feels after running through it. There's digital, tape, modulated, reverse, lo-fi, echo, and a looper — a curriculum so comprehensive it functions as its own refutation. The tape mode doesn't sound like tape. The lo-fi mode doesn't sound like lo-fi. What they both sound like is a fax machine attempting to replicate whatever you just played, minus the low end, which the pedal quietly pockets for itself like a bouncer skimming the door. If you play bass through a DigiDelay, you will discover new frequencies of absence. The expression pedal input is a particular achievement. Plug one in and you've unlocked a mode DigiTech did not document, budget for, or appear to be aware of — a kind of pitching, lurching, semi-tonal smear that sits somewhere between a malfunctioning Leslie and a guitar left too close to a CRT television. It is genuinely experimental. It was not the advertised experiment. One reviewer sent the unit back the same day it arrived. That's not a complaint. That's editorial judgment delivered at shipping speed. The DigiDelay sold on price, which is the one argument that has always been airtight. You got seven modes for thirty dollars. The math checks out. The music did not.`,
      [
        { quote: "I never heard a delay so cold, I get goose bumps. The sound reminds me of delays from 80-90s tech hits: unusable with a guitar.", source: "Audiofanzine", sourceUrl: "https://en.audiofanzine.com/guitar-delay-echo-phrase-sampler/digitech/Digital-Delay/user_reviews/" },
        { quote: "I rarely, if at all, use the delays; I find them a little too digital.", source: "GearBug", sourceUrl: "https://www.gearbug.com/product_info/digitech_digidelay" },
        { quote: "The mode button slips between modes and sometimes drops out. It's kind of like a bad, buggy version of the Boss delays.", source: "GearBug", sourceUrl: "https://www.gearbug.com/product_info/digitech_digidelay" },
      ],
      2005
    ),
    disaster(
      89, 'Boss PS-2 Pitch Shifter / Delay', 'Boss', 'boss-ps-2-pitch-shifter-delay',
      `In 1987, Boss looked at the state of digital pitch tracking — which was, charitably, a technology still figuring out what pitch was — and decided to put it in a compact pedal alongside a delay section that has nothing interesting to say. The result is the PS-2, a pedal that will confirm, in real time, what physics already knew: early digital pitch shifting applied to a full guitar signal produces an artifact that sounds less like music and more like a small bird being processed by a fax machine. The tracking does not so much follow your note as chase it at a distance, arrive slightly late, and then add a digital plastic shimmer as an apology. The octave-up mode in particular achieves a chipmunk-adjacent voicing that no amount of downstream compression can fully rehabilitate. The delay, which you might hope would redeem this transaction, is fine — fine the way a rest stop bathroom is fine when you have no other option. There is no useful combination of pitch shift and delay because the pedal cannot do both at once, which is the kind of design constraint you eventually just have to respect as honest. The only genuine argument for owning a PS-2 is that one will cost you thirty dollars on Reverb, and for thirty dollars you are entitled to find out for yourself. Everyone deserves the right to buy their own education. This one ships in a gray Boss enclosure.`,
      [
        { quote: "This is a digital pitch shifter and I never heard a nice pitch shifter ever. Also this one does have that digital plastic chipmunk sound.", source: "GearBug", sourceUrl: "https://www.gearbug.com/product_info/boss_digital_pitch_shifterdelay_ps2" },
        { quote: "Octave up sounds awful if not put through something else.", source: "GearBug", sourceUrl: "https://www.gearbug.com/product_info/boss_digital_pitch_shifterdelay_ps2" },
      ],
      1987
    ),
    disaster(
      90, "Pigtronix Philosopher's Tone", 'Pigtronix', 'pigtronix-philosophers-tone',
      `The Pigtronix Philosopher's Tone is named after a sustained note. It is categorized as a compressor. It is described on its own product page as famous for "noiseless clean sustain." So far so dignified — until you discover that the Grit knob, Pigtronix's name for the always-present overdrive circuit married to the compressor, does not go to zero. It goes to "less." That is not the same thing. You cannot un-marry it. The Philosopher's Tone ships pre-coupled, and you are not invited to the divorce proceedings. The architecture is the joke: a compressor that raises the floor of every signal it touches, welded to a distortion you cannot switch off, producing a sound one community builder described as thin and fizzy and underwhelming at best. Of course it is. Compression amplifies everything, including the grit you did not ask for, which is now louder and more present than it was before you engaged the pedal meant to clean things up. The sustain is real. The thing will hold a note past the point of social acceptability. What it will not do is hold that note without a fine dusting of transistor static underneath it, like a photograph left too long on a fax machine. Pigtronix eventually released the Philosopher's Tone 2, which added footswitchable grit modes — a tacit acknowledgment that the original's central design decision was something you needed to escape from. A compressor famous for what you cannot turn off is not a compressor. It is a subscription you forgot to cancel.`,
      [
        { quote: "The overdrive sounds are thin and fizzy and underwhelming at best.", source: "PedalPCB Community Forum", sourceUrl: "https://forum.pedalpcb.com/threads/aionfx-polyphemus-pigtronix-philosophers-tone-demo-added.18144/" },
        { quote: "The Grit knob dials in some light distortion that was a bit too trebly for my tastes. I personally didn't like the sound of the Grit control.", source: "Live Musician Central", sourceUrl: "https://livemusiciancentral.com/3816/pigtronix-philosophers-tone-guitar-compressorsustainer-review/" },
        { quote: "I actually bought a Pigtronics pedal many years ago, just that it was spectacularly awful.", source: "PedalPCB Community Forum", sourceUrl: "https://forum.pedalpcb.com/threads/aionfx-polyphemus-pigtronix-philosophers-tone-demo-added.18144/" },
      ],
      2008
    ),
    disaster(
      91, 'Joyo Ultimate Drive', 'Joyo', 'joyo-ultimate-drive',
      `The Joyo Ultimate Drive is, on paper, an OCD clone. On paper. In practice it is a different kind of pedal entirely: one that markets itself as the affordable answer to Fulltone's crown jewel and then quietly hands you something else when you open the box. The gain pot starts cranking before your fingers even finish touching it — the usable range lives somewhere between "barely breathing" and "full panic" with nothing sensible in between. The bass response is so heavy it sounds less like an overdrive and more like someone stuffed a subwoofer behind your cab. Community teardowns of early units have reported what looks like a reversed germanium diode in the circuit, which would mean some 2010 production runs were not, at the component level, configured to clone the thing they were supposed to clone. If those reports are accurate, that fact alone is kind of beautiful. Reliability reports are the part that really tie it together. Multiple players documented switch failures within weeks of purchase — not years, weeks — which is an impressive achievement for a pedal that retails in the ballpark of a nice dinner out. The "built like a tank" claims in the marketing feel aspirational given the evidence. But here is the thing: it sold everywhere. It sold to beginners who had never touched an OCD and wouldn't know the difference. It sold to working musicians who needed something at the gig tonight and could eat the loss if it died. The Joyo Ultimate Drive did not succeed despite its problems. It succeeded because the price point makes every problem negotiable. That's not a clone strategy. That's a business model.`,
      [
        { quote: "The over-sensitivity of the gain pot in particular means that setting up a moderately overdriven tone is particularly hard to do.", source: "adamharkus.com", sourceUrl: "https://adamharkus.com/guitar-overdrive-pedal-shootout-joyo-ultimate-drive-review/" },
        { quote: "The Joyo Ultimate Drive, in my setup at least, is just far too bass heavy.", source: "adamharkus.com", sourceUrl: "https://adamharkus.com/guitar-overdrive-pedal-shootout-joyo-ultimate-drive-review/" },
        { quote: "Had one of these, but it broke after a month.", source: "Rig-Talk Forum", sourceUrl: "https://www.rig-talk.com/forum/threads/npd-joyo-ultimate-drive-ocd-clone.169092/" },
      ],
      2010
    ),
    disaster(
      92, 'DOD Death Metal', 'DOD', 'dod-death-metal',
      `The DOD Death Metal has no gain knob. That is not a design oversight. That is a confession. I owned one of these at fourteen, which tells you everything you need to know about both the pedal and me at fourteen. I plugged it in, turned the knob labeled "Pain" somewhere toward the middle, and was immediately confronted not with distortion but with the sound of a telecommunications infrastructure failing mid-collapse. DOD had solved the problem of "how much gain is the right amount" by eliminating the question entirely. The answer was: all of it. The answer was always all of it. The FX86 runs at 100% gain from the moment you engage it. There is no "a little." There is no "dialing back." There is only the fully open aperture of a pedal that looked at note definition and decided that was someone else's problem. By the time you've touched the volume on your amp, the noise floor has already filed a noise complaint against itself. This is the pedal that taught an entire generation of bedroom metalheads a lesson DOD never intended to teach: that gain and distortion are not the same variable, and that past a certain threshold you are not playing guitar anymore, you are operating industrial equipment with poor safety standards. The cruelest part is the marketing. "Death Metal." It's right there. Authoritative. Promising. Thousands of teenagers spent their lawn-mowing money on a pedal named after a genre, brought it home, plugged in, and learned that the genre did not sound like this. The genre had notes. This had the spiritual content of a fax machine dreaming.`,
      [
        { quote: "It's REALLY noisy, the gain is 100% at all times and it sucks batteries like crazy.", source: "HomeRecording.com", sourceUrl: "https://homerecording.com/bbs/threads/dod-death-metal-distortion.103248/" },
        { quote: "This pedal sounds like someone put a microphone in a blender and turned it on 'frappe'. It is so noisy!", source: "Audiofanzine", sourceUrl: "https://en.audiofanzine.com/guitar-distortion-overdrive-fuzz/dod/FX86-B-Death-Metal-Distortion/user_reviews/" },
      ],
      1990
    ),
    disaster(
      93, 'Behringer VD400 Vintage Delay', 'Behringer', 'behringer-vd400',
      `The Behringer VD400 costs fifteen dollars. I want to get that out of the way immediately, because fifteen dollars is the entire argument for and against this pedal, and once you understand that, the rest of the review becomes a formality. It is technically a bucket-brigade analog delay. The MN3205 chip inside is real. The repeats do, in fact, repeat. By every objective measure this is a delay pedal in the same way that a Xerox of a Xerox of a Xerox of a Polaroid is technically a photograph. What Behringer has achieved here is the miracle of minimum viable delay. The enclosure is plastic — not retro-charming plastic, not rugged matte plastic, but the kind of plastic that communicates, wordlessly and with confidence, that it will crack if you look at it sideways during a load-in. The repeats trail off into something warm if you run the Echo knob high enough, though at moderate settings a background hiss arrives to remind you of the price. There is clock noise somewhere in the 5-8kHz range that the more charitable reviewers describe as "character" and that I would describe as "audible arithmetic." It is not ungiggable. It has been declared ungiggable by people who have gigged it. And yet. The bucket-brigade is real. Fifteen dollars. I cannot keep typing that phrase and expecting you not to be moved by it, because fifteen dollars is less than a Subway footlong, and this pedal will outlast the footlong by at least several months, assuming no one kicks it. The VD400 is not a good pedal. It is a monument to the audacity of the price point — proof that "delay pedal" can be achieved at a cost that makes everyone uncomfortable, including the delay.`,
      [
        { quote: "Behringer delay developed a really noisy intermittent fault after a short time. Very noisy switching too. Too unreliable, ungiggable.", source: "TheFretBoard", sourceUrl: "https://www.thefretboard.co.uk/discussion/11006/behringer-vintage-delay-vd400-looks-like-a-no-brainer-for-that-price-opinions" },
        { quote: "As long as you don't have to switch it at all ever, or subject it to even the mildest of contact with anything else, it might be ok.", source: "TheFretBoard", sourceUrl: "https://www.thefretboard.co.uk/discussion/11006/behringer-vintage-delay-vd400-looks-like-a-no-brainer-for-that-price-opinions" },
        { quote: "Sound quality is pretty good but where they tend to fall short is on build quality.", source: "TheFretBoard", sourceUrl: "https://www.thefretboard.co.uk/discussion/11006/behringer-vintage-delay-vd400-looks-like-a-no-brainer-for-that-price-opinions" },
      ],
      2004
    ),
    disaster(
      94, 'Zoom G1X Four', 'Zoom', 'zoom-g1x-four',
      `The Zoom G1X Four comes loaded with 70-plus effects, which sounds impressive until you realize that none of them sound like the thing they're named after. The "Vintage Chorus" sounds like a phase shifter drowning in a bucket. The "Boutique Fuzz" sounds like a dying lawnmower. The "Clean Boost" — and I want to be clear about this — does not boost, and is not clean. It is a remarkable achievement in nomenclature decoupled entirely from acoustics. The chassis is a slab of plastic that telegraphs its own impermanence. You look at it and understand, on a cellular level, that this thing was not built to be loved. The factory presets arrive dialed to a taste profile best described as "sounds someone was going for in a YouTube tutorial thumbnail." Every patch just has so much distortion you can't seem to fix it and get those clean tones — and that's the first-year guitarist's entire Tuesday night gone. The expression pedal, that proud treadle bolted to the front, works technically. It also wobbles in a way that makes you question every decision that led to this moment. What the G1X Four actually does well is very specific: it convinces a beginner they have bought a tool for serious music-making. Then it spends the next four months sounding boomy and farty, lacking any sort of definition, until the beginner concludes the problem is themselves. They hang the guitar on the wall. They take up running. Zoom has, inadvertently, done more for the cardiovascular health of the general population than any fitness app.`,
      [
        { quote: "Distortion patches became boomy and farty, lacking any sort of definition in the higher frequencies.", source: "ToneLib Forums", sourceUrl: "https://tonelib.net/forums/threads/zoom-g1x-four-boomy-sound.11604/" },
        { quote: "Every patch just has so much distortion I can't seem to fix it and get those clean tunes.", source: "ToneLib Forums", sourceUrl: "https://tonelib.net/forums/threads/distortion-on-every-effect.11653/" },
        { quote: "The sounds didn't seem as good to my ears as the MS50G. They sounded 'cheap.' I'm done with Zoom products.", source: "Steel Guitar Forum", sourceUrl: "https://bb.steelguitarforum.com/viewtopic.php?t=397034" },
      ],
      2018
    ),
    disaster(
      95, 'Behringer UC200 Ultra Chorus', 'Behringer', 'behringer-uc200',
      `The Behringer UC200 Ultra Chorus costs about twelve dollars, which sounds like a deal until you engage the stereo mode and discover that your amp has gone on a diet. Not a subtle, photogenic diet — a sudden, confusing, make-the-sound-guy-reach-for-the-master diet. Volume noticeably drops when the effect kicks in. The pedal you bought to add shimmer to your signal has decided to take some of that signal home with it. The marketing copy promises "super-thick chorused tone" and "an unbelievably rich Stereo effect." What you get is one output that does chorus and one output that sends dry signal to your second amp like a hostage situation where both parties are equally confused. It's a plastic CE-2 clone in the way that a crayon drawing is a Rembrandt clone — the reference is technically there, the execution makes you question the exercise. I've had students plug this in with genuine hope in their eyes. Then the effect engages. Then the room gets quieter. Then they look at me. I have learned to prepare a face that says "yes, that is what it does" without collapsing into existential despair about the state of budget manufacturing. The UC200 is the pedal equivalent of ordering a burger and receiving a photograph of a burger. The photograph is formatted correctly, features the expected components, and costs seven dollars less than the problem it creates. When the only fix is "don't use the stereo mode on your stereo pedal," you have to admire the commitment to the bit. Behringer built a stereo chorus that punishes stereo. The CE-2 is somewhere in a pawn shop window, and it has not heard about this, and that is for the best.`,
      [
        { quote: "Output B doesn't actually output a chorused sound so it's not really a stereo chorus.", source: "Long & McQuade", sourceUrl: "https://www.long-mcquade.com/6341/Guitars/Guitar-Effects/Behringer/Ultra-Chorus.htm" },
        { quote: "The stereo option doesn't work, or seems to cancel itself out — when activated it drops the volume output significantly.", source: "Sweetwater", sourceUrl: "https://www.sweetwater.com/store/detail/UC200--behringer-uc200-ultra-chorus-pedal/reviews" },
      ],
      2004
    ),
    disaster(
      96, 'Behringer FX600 Multi-Effects', 'Behringer', 'behringer-fx600',
      `The FX600 is the answer to a question nobody asked: what if you took six guitar effects, stripped out everything that made each one sound like itself, and crammed the husks into a plastic box the color of a parking ticket? Behringer's 2006 multi-effects unit ships with chorus, flanger, phaser, pitch shifter, tremolo, and something called Metalizer — six modes, zero of which are guilty of sounding like the effect printed above the knob. The chorus has the warmth of a hospital PA system. The flanger sounds, per one forum veteran, like someone jammed your amp inside a tin can and sealed the lid. The phaser is so synthetic it might as well be a patch from a Casio keyboard circa 1987 — present in the mix the way a ghost is present in a room, which is to say you're mostly imagining it. The pitch shifter tracks your playing with a slight lag that makes every note feel like it arrived by mail. Tremolo? Sure, if you set it to a crawl; at any useful speed it pulses like a dying refrigerator light. And the Metalizer — a mode that promises distorted, industrial chaos — delivers something closer to a buzzing fluorescent tube at closing time. The best multi-effects unit is one where each effect is at least trying. The FX600 isn't trying. The FX600 is six effects doing a collective impression of effects, and the impressions are bad. It is, in the fullest possible sense, a caricature of a guitar pedal.`,
      [
        { quote: "None of them really sounds good, it's a bit of a caricature effects.", source: "Audiofanzine", sourceUrl: "https://en.audiofanzine.com/electric-guitar-multi-effects/behringer/digital-multi-fx-fx600/user_reviews/" },
        { quote: "When the flanger is switched on, it was soon felt putting his amp in a tin.", source: "Audiofanzine", sourceUrl: "https://en.audiofanzine.com/electric-guitar-multi-effects/behringer/digital-multi-fx-fx600/user_reviews/" },
        { quote: "The phaser sounds rather synthetic, which sounds very artificial. The sound quality is rather poor in general.", source: "Audiofanzine", sourceUrl: "https://en.audiofanzine.com/electric-guitar-multi-effects/behringer/digital-multi-fx-fx600/user_reviews/" },
      ],
      2006
    ),
    disaster(
      97, 'DOD Gonkulator Ring Modulator', 'DOD', 'dod-gonkulator',
      `Here is the design brief DOD handed their engineers in 1996: take the Grunge distortion pedal — already a monument to the proposition that more gain is always the answer — and fuse it with a ring modulator whose oscillator frequency cannot be adjusted by the player. No knob. No trimpot you're meant to touch. Just one pitch, forever, somewhere in the neighborhood of B-flat, humming its single note at your strings like a broken refrigerator that has decided to get into music. The word "GRUNGE" is silkscreened directly onto the enclosure. It was 1996 and someone thought that was a selling point. The controls are labeled SUCK, SMEAR, GUNK, and HEAVE — names that, in context, function less as parameter descriptions and more as the pedal's autobiography. What you are left with is a device that combines the versatility of a ring modulator with the tuning flexibility of a smoke alarm. You can play in B-flat. You can also not play in B-flat, in which case the Gonkulator will let you know, loudly, that it disagrees with every note you've chosen. A ring modulator with a fixed carrier frequency is a conceptual paradox, the guitar-pedal equivalent of a wah that cannot rock. The entire appeal of ring modulation is the interval relationship between your signal and the oscillator — slide that frequency and you get alien harmonics, shortwave radio, Daleks. Lock it in place and you get one sound. The original units sold out of a catalog for $19.95 because, per the historical record, nobody wanted one. They are now collectible. This is what happens when scarcity is mistaken for quality. The Gonkulator did not get better. The market just ran out of people who remembered why they passed.`,
      [
        { quote: "Ring modulators are great for noise but this one can't be tuned, so you can't do the shortwave radio sounds. You can only play in one key.", source: "GearBug", sourceUrl: "https://www.gearbug.com/product_info/dod_gonkulator_fx13" },
        { quote: "Those damn things being a ton of cash on eBay now considering that when they were still being made CG was blowing them out because NOBODY wanted one!", source: "Seymour Duncan Forum", sourceUrl: "https://forum.seymourduncan.com/threads/ring-modulation.76658/" },
        { quote: "You can not tweak the ring mod sound. One trick pony.", source: "GearBug", sourceUrl: "https://www.gearbug.com/product_info/dod_gonkulator_fx13" },
      ],
      1996
    ),
    disaster(
      98, 'Behringer SF300 Super Fuzz', 'Behringer', 'behringer-sf300',
      `The SF300 has three modes. Two of them sound like a tube amp having a medical emergency. The third one sounds like a fuzz pedal, which is the bare minimum we should expect from something called a Super Fuzz. Fuzz 1 is the mode Behringer wants you to use on the back of the box. It is usable in the same way that a tent is shelter. Fuzz 2 enters the room and evacuates it. Something happens to note definition in Fuzz 2 that cannot be fully explained by electronics — it's closer to a philosophical position on whether your guitar should communicate at all. Boost mode, the third pillar of this triumvirate, turns the Level knob decorative. According to people who measured it, the level control "almost does not work" in Boost. Behringer did not correct this before shipping thirty-dollar pedals to every Guitar Center in America. The enclosure is hard plastic in the specific shade of plastic that communicates "this was purchased at a gas station." Pick it up and the weight tells you everything: this is a pedal that contains mostly air and one medium-quality circuit. It rattles in the way that things rattle when they were designed to survive one drop test at headquarters and then never be thought about again. And yet. The SF300 persists. Guitarists keep buying it because thirty dollars is thirty dollars, and because there's a secret between-modes position that allegedly produces a blended tone people compare to Electric Wizard. That's the gear equivalent of finding out a Denny's has one item that's actually good. Yes. But also: this is a Denny's. Behringer's contribution to fuzz history is proving, empirically, that some things should cost more than thirty dollars.`,
      [
        { quote: "This sounds like a really bad fuzz pedal.", source: "SG Guitars Forum", sourceUrl: "https://everythingsg.com/threads/behringer-sf300-super-fuzz-mini-review.20745/" },
        { quote: "There's an overall 'cheapness' to the tone that's hard to dial out. Many of them are not workable.", source: "Guitar Chalk", sourceUrl: "https://www.guitarchalk.com/behringer-sf300-review/" },
      ],
      2010
    ),
    disaster(
      99, 'Danelectro Cool Cat Distortion DCD-1', 'Danelectro', 'danelectro-cool-cat-distortion',
      `There is a specific kind of failure that only Danelectro can engineer: a pedal that sounds genuinely fine and is physically unusable by a human being. The Cool Cat Distortion DCD-1 is that pedal. For roughly thirty-five bucks you got a stacked dual-concentric knob — two functions sharing one shaft — that one published review noted "can be fiddly to adjust as the outer and inner rings tend to move as one." Danelectro's official solution, per the manual, was to turn both knobs simultaneously until the outer one gets where you want it, then carefully reposition the inner one without disturbing the outer, a process that requires two hands, focused concentration, and apparently zero awareness that guitar players perform in dark clubs. The enclosure itself edges the knobs under a small overhanging lip — a design choice that ensures you cannot reach them at all with your foot, and can barely reach them with your fingers unless you are willing to stop, crouch, and perform minor surgery mid-set. The battery latch is plastic, by the way. The plastic controls, as one reviewer noted, "feel cheap in comparison" to the otherwise passable metal shell. Danelectro's instinct was to put the budget where it shows — the housing looks substantial enough in a photo — and then recover costs on every single thing you actually touch. The sound is not the crime. There are sounds in here. The distortion sweep is legitimate. The price is genuinely good. The crime is designing an interface that treats adjustment as a puzzle rather than a feature, then shipping it to a world full of sweaty, impatient guitar players with big fingers and no toothpick.`,
      [
        { quote: "The dual-concentric controls add versatility, but can be fiddly to adjust as the outer and inner rings tend to move as one.", source: "MusicRadar", sourceUrl: "https://www.musicradar.com/tuition/danelectro-cool-cat-pedals-274585" },
        { quote: "The plastic controls let the side down however, and feel cheap in comparison.", source: "adamharkus.com", sourceUrl: "https://adamharkus.com/danelectro-cool-cat-transparent-overdrive-v2-review/" },
        { quote: "While it may look pleasing, the control knobs are horrible. Sure they are meant to be 'set and forget', but that set once part is killing me.", source: "mirosol.kapsi.fi", sourceUrl: "https://mirosol.kapsi.fi/2014/09/danelectro-cm-1-metal/" },
      ],
      2002
    ),
    disaster(
      100, 'Boss MT-2 Metal Zone', 'Boss', 'boss-mt-2-metal-zone',
      `Let's end this where it began: in a Guitar Center, 1994, under fluorescent lights, some thirteen-year-old in a Metallica shirt cranking every knob on a pedal he just pulled off the wall, filling the entire store with a sound that can only be described as a hornet's nest being fed through a paper shredder. You know this moment. You lived near this moment. You may have been this moment, and if so, we're not judging you — we're just asking you to sit with what you did.

The Boss MT-2 Metal Zone came out in 1991 and has never stopped. Not once. Boss has never paused production, never reconsidered, never looked at the sales figures and thought: maybe too many. Over a million units moved. It is, by any commercial measure, a runaway success. It has outlasted every pedal you actually respect. It will outlast you. When archaeologists dig up the ruins of Guitar Center in 2340, they will find seventeen MT-2s and no context clues, and they will assume it was some kind of currency.

The sound itself is specific. It is not "distortion" in the way that Jimi Hendrix played distortion or even the way a decent $40 fuzz pedal plays distortion. It is its own category — a compressed, mid-scooped, high-fizz texture that sounds like a swarm of bees compressed through a payphone speaker, then EQ'd by someone who has only ever seen a guitar and never heard one. The gain knob is not a gain knob. It is a suffering dial. Turn it past noon and you have crossed from "aggressive" into "actively hurting the room." The mid controls, generously appointed, do technically allow you to shape the sound — the way you can technically arrange deck chairs on a ship that is currently underwater.

And yet. And yet. A million teenagers bought this pedal, and a million teenagers felt, for at least one Tuesday afternoon, exactly as metal as they had hoped. It delivered that feeling. It doesn't matter that the feeling was based on a lie. Rock and roll has always been based on lies. The MT-2 just told the lie louder than anything else on the market, at a price point their parents would agree to, in a package that fit inside a backpack.

Every pedal on this list failed in some specific way — too expensive, too fragile, too dishonest about what it was. The Metal Zone never failed at anything except sounding good. It succeeded massively at everything else: availability, durability, price, ubiquity, cultural footprint. It is the most argued-about pedal in guitar history not because people disagree about the sound, but because people genuinely cannot decide whether the sound matters when everything else worked so well.

It does matter. The sound matters. We have to believe the sound matters, or none of this was worth writing.

The Metal Zone is number one hundred on this list because it is the distillation of everything the list is about: the gap between what gear promises and what gear delivers, between the kid in the store and the player he hoped to become, between the noise and the music it almost was. Every entry before this one was a mistake someone made. The MT-2 is a mistake a million people made, simultaneously, joyfully, loudly — and it still sounds exactly like that.

You know what you had. You know what it sounded like. We're done here.`,
      [
        { quote: "It don't matter what guitar you plug in, the result always sounds the same: swarm of bees approaching.", source: "Seymour Duncan Forum", sourceUrl: "https://forum.seymourduncan.com/threads/boss-metal-zone-mt-2-pedal.53152/" },
        { quote: "I always saw modding a MT-2 as trying to polish a terd. It's the worst sounding pedal I've ever owned.", source: "Seymour Duncan Forum", sourceUrl: "https://forum.seymourduncan.com/threads/boss-mt-2-metal-zone-mods-boutique-and-diy.54075/" },
      ],
      1991
    ),
  ],
};
