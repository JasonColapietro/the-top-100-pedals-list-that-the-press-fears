# The Top 100 Pedals List That The Press Fears

> **The Suede 100: The List the Press Will Never Print.**
> Jason Colapietro ranks the 100 most important guitar effects pedals — from the Canon (1–10) through the Great (11–20), the Middle (21–79), the Disasters (80–99), and the single Worst Pedal of All Time at #100.

This is a standalone port of the article that ships on Suede Social. The full editorial version (with cross-links to the catalog and the forum) lives at:

→ **<https://social.suedeai.ai/suede-100/best-and-worst>**

This repo is the article only, as a runnable Next.js app, for archival and portfolio purposes.

## What's in here

- **`src/data/best-and-worst-2026.ts`** — the full 100-entry edition: ranks, blurbs, brand/year metadata, plus community quotes on the disaster tier.
- **`src/components/`** — the React components that render each tier (`CanonEntry`, `GreatEntry`, `MiddleRow`, `DisasterEntry`, `ClimaxBlock`) and the surrounding layout (`SuedeListHero`, `SuedeListNav`, `RevisionNotes`).
- **`src/lib/pedal-images.ts`** — image resolver that maps `(brand, model)` to a thumbnail URL.
- **`public/pedals/`** — 75 editorial photos. Hot-takes set (60) was originally sourced for the Suede Social magazine; the additional 15 (Canon + Great + #100 climax) were sourced for this article from Wikimedia Commons (CC-licensed) and manufacturer pages.

## Running locally

```bash
pnpm install
pnpm dev
# → http://localhost:3000
```

```bash
pnpm build && pnpm start
```

## Image coverage

| Tier | With image | Notes |
|---|---|---|
| Canon (1–10) | 10/10 | Full color |
| Great (11–20) | 10/10 | Full color |
| Middle (21–79) | 15/60 | Text-only render by design — dense list rhythm |
| Disaster (80–99) | 0/19 | Text-only render by design |
| #100 Climax | ✓ | Desaturated for tone |

## Credits

Article and ranking: **Jason Colapietro** (Suede). Editorial format and component library: Suede Social.

Photos:

- **Wikimedia Commons** (CC-licensed): Tube Screamer, Fuzz Face, Phase 90, Uni-Vibe, Tone Bender MKII, Whammy WH-1, Deluxe Memory Man, CE-2 Chorus, Small Clone, Mu-Tron III, MT-2 Metal Zone
- **Manufacturer pages**: Electric Mistress (ehx.com), Axe-Fx III (fractalaudio.com), V846 Wah (voxamps.com), Timmy (Mass Street Music product photo)
- **Hot-takes set (60 pedals)**: manufacturer product pages with Reverb / Wayback fallbacks for discontinued items

All photos resized to ≤800px on the long edge, JPEG quality 85.

## License

The code is MIT. The article text and ranking are © Jason Colapietro / Suede — all rights reserved. If you want to reprint it somewhere, ask first.
