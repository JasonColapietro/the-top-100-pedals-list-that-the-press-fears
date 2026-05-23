export function RevisionNotes({ notes }: { notes: string | undefined }) {
  if (!notes) return null;
  return (
    <section className="border-y border-[#9f101a] py-8 px-6 max-w-3xl mx-auto bg-[rgba(159,16,26,0.04)]">
      <h2 className="font-mono text-[12px] uppercase tracking-[0.24em] text-[#9f101a] mb-4">
        What Moved
      </h2>
      <div className="prose text-[#0a1224] whitespace-pre-wrap">{notes}</div>
    </section>
  );
}
