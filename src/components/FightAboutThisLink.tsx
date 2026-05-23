// Stub for the standalone repo — the original lived inside Suede Social
// and linked to a discussion forum at /forum/suede-100/<edition>/<rank>-<key>.
// This standalone port omits the forum surface; the component renders
// nothing so the article reads as pure prose.

type Props = {
  edition: string;
  rank: number;
  entryKey: string;
  enabled?: boolean;
  compact?: boolean;
};

export function FightAboutThisLink(_props: Props) {
  return null;
}
