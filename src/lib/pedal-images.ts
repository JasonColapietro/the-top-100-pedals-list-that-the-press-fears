// Pedal image resolver — maps a (brand, model) pair to a thumbnail URL.
//
// Resolution order:
//   1. Locally-hosted editorial photos under `frontend/public/pedals/<key>.jpg`
//      — added for the magazine's hot-takes articles (JHS, Chase Bliss,
//      Strymon, Boss Waza Craft, EarthQuaker). Manufacturer source, small
//      enough to ship in the repo.
//   2. Studio catalog at fretpulse.suedeai.ai/pedals/{thumbs|heroes}/<key>.jpg
//      — the same 10-pedal set Studio synthesizes UI from.
//   3. null (caller renders the silhouette/text fallback).
//
// To add a new editorial photo:
//   - drop the file at public/pedals/<key>.jpg (key = slug(brand)-slug(model))
//   - add the key to LOCAL_PEDAL_KEYS below
//   - articles already referencing that brand/model will pick it up
//     automatically via the slug normalizer.

import visuals from './pedal-visuals.json' with { type: 'json' };

type PedalVisualMeta = {
  brand: string;
  model: string;
  family?: string;
  dominant?: string;
  accent?: string;
};

const PEDALS = (visuals as { pedals: Record<string, PedalVisualMeta> }).pedals;
const ALIASES = ((visuals as { aliases?: Record<string, string> }).aliases ?? {});

const STUDIO_ORIGIN = 'https://fretpulse.suedeai.ai';

// Locally-hosted editorial photos. The first 59 cover every pedal in the
// hot-takes articles' best AND worst columns (sourced from each
// manufacturer's product page, with Reverb / Wayback fallbacks for the
// handful of discontinued worst-column entries). A second group of 15
// covers the Canon (1-10), Great (11-20), and Climax (#100) tiers of the
// Suede 100 — sourced from Wikimedia Commons (CC-licensed) and current
// manufacturer pages. All resized to ≤800px JPG quality 85. Worst-column
// tiles get a desaturation + warm-wash treatment at render time (see
// MagazineTake.tsx) so the hierarchy still reads even though every
// pedal has a photo.
const LOCAL_PEDAL_KEYS = new Set<string>([
  'boss-bd-2w-blues-driver',
  'boss-ce-2-chorus',
  'boss-ce-2w-waza-craft-chorus',
  'boss-dc-2w-dimension-c',
  'boss-dm-2w-delay',
  'boss-hm-2w-heavy-metal',
  'boss-mt-2-metal-zone',
  'boss-mt-2w-metal-zone',
  'boss-sd-1w-super-overdrive',
  'boss-tb-2w-tone-bender',
  'boss-tu-3w-tuner',
  'boss-vb-2w-vibrato',
  'chase-bliss-audio-blooper',
  'chase-bliss-audio-brothers',
  'chase-bliss-audio-condor',
  'chase-bliss-audio-cxm-1978',
  'chase-bliss-audio-dark-world',
  'chase-bliss-audio-generation-loss-mkii',
  'chase-bliss-audio-habit',
  'chase-bliss-audio-mood-mkii',
  'chase-bliss-audio-spectre',
  'chase-bliss-audio-tonal-recall-rkm',
  'chase-bliss-audio-warped-vinyl-hifi',
  'chase-bliss-audio-wombtone-mkii',
  'dallas-arbiter-fuzz-face',
  'digitech-whammy-wh-1',
  'earthquaker-devices-avalanche-run-v2',
  'earthquaker-devices-bit-commander-v2',
  'earthquaker-devices-disaster-transport-sr',
  'earthquaker-devices-erupter',
  'earthquaker-devices-hizumitas',
  'earthquaker-devices-levitation',
  'earthquaker-devices-plumes',
  'earthquaker-devices-pyramids',
  'earthquaker-devices-sea-machine-v3',
  'earthquaker-devices-special-cranker',
  'earthquaker-devices-talons',
  'earthquaker-devices-westwood',
  'electro-harmonix-deluxe-memory-man',
  'electro-harmonix-electric-mistress',
  'electro-harmonix-small-clone',
  'fractal-audio-axe-fx-iii',
  'ibanez-ts808-tube-screamer',
  'jhs-pedals-at-andy-timmons',
  'jhs-pedals-bonsai',
  'jhs-pedals-cheese-ball',
  'jhs-pedals-colour-box-v2',
  'jhs-pedals-crayon',
  'jhs-pedals-mini-foot-fuzz',
  'jhs-pedals-morning-glory-v4',
  'jhs-pedals-mute-switch',
  'jhs-pedals-pollinator-v2',
  'jhs-pedals-pulp-n-peel-v4',
  'jhs-pedals-smiley',
  'jhs-pedals-spring-tank-reverb',
  'musitronics-mu-tron-iii',
  'mxr-phase-90-script',
  'paul-cochrane-timmy',
  'sola-sound-tone-bender-mkii',
  'strymon-bigsky',
  'strymon-brigadier',
  'strymon-cloudburst',
  'strymon-compadre',
  'strymon-dig',
  'strymon-el-capistan',
  'strymon-flint',
  'strymon-iridium',
  'strymon-lex',
  'strymon-mobius',
  'strymon-nightsky',
  'strymon-ob-1',
  'strymon-timeline',
  'strymon-volante',
  'univox-uni-vibe',
  'vox-v846-wah',
]);

function slug(s: string): string {
  return s
    .toLowerCase()
    .replace(/[‘’“”'"`]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Resolve a brand+model pair to a canonical pedal key. Checks the
 * locally-hosted set first, then the Studio catalog + aliases. Lookups
 * are case- and punctuation-insensitive.
 */
export function resolvePedalKey(
  brand: string | null | undefined,
  model: string | null | undefined
): string | null {
  if (!brand || !model) return null;
  const direct = `${slug(brand)}-${slug(model)}`;
  if (LOCAL_PEDAL_KEYS.has(direct)) return direct;
  if (PEDALS[direct]) return direct;
  if (ALIASES[direct]) return ALIASES[direct];
  // Some keys may not include the brand prefix in the JSON. Try just
  // the model slug as a fallback.
  const modelOnly = slug(model);
  if (LOCAL_PEDAL_KEYS.has(modelOnly)) return modelOnly;
  if (PEDALS[modelOnly]) return modelOnly;
  if (ALIASES[modelOnly]) return ALIASES[modelOnly];
  return null;
}

/**
 * URL to a pedal image. Resolution order: local public/pedals/ → Studio
 * CDN → null. `size: 'thumbs'` is 512x512; `size: 'heroes'` is 1024x1024
 * (Studio only; local images are a single size).
 */
export function getPedalImageUrl(
  brand: string | null | undefined,
  model: string | null | undefined,
  size: 'thumbs' | 'heroes' = 'thumbs'
): string | null {
  const key = resolvePedalKey(brand, model);
  if (!key) return null;
  if (LOCAL_PEDAL_KEYS.has(key)) {
    return `/pedals/${key}.jpg`;
  }
  return `${STUDIO_ORIGIN}/pedals/${size}/${key}.jpg`;
}

/**
 * The catalog's editorial accent colors for a pedal. Only available for
 * pedals in the Studio catalog (PEDALS metadata). Locally-hosted pedals
 * return null — callers should fall back to neutral styling.
 */
export function getPedalAccent(
  brand: string | null | undefined,
  model: string | null | undefined
): { dominant: string; accent: string } | null {
  const key = resolvePedalKey(brand, model);
  if (!key) return null;
  const meta = PEDALS[key];
  if (!meta?.dominant || !meta?.accent) return null;
  return { dominant: meta.dominant, accent: meta.accent };
}
