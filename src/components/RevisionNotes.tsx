export function RevisionNotes({ notes }: { notes: string | undefined }) {
  if (!notes) return null;
  return (
    <section className="border-y border-[#d7b36a]/30 bg-[#101116] px-5 py-8 text-[#f8efe2] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 font-mono text-[12px] uppercase tracking-[0.24em] text-[#39d6dc]">
          What Moved
        </h2>
        <div className="whitespace-pre-wrap text-[15px] leading-7 text-[#d8c8ae]">{notes}</div>
      </div>
    </section>
  );
}
