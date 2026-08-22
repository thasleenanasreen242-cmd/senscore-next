import HUDBackground from "@/components/HUDBackground";
import Reveal from "@/components/Reveal";

const uploadedKnowledgeCentreTitles = new Set([
  "Flow Measurement",
  "Level Measurement",
  "Pressure and Temperature Measurement",
  "Process Analysis",
  "Valves and Flow Control",
  "Pumps and Dosing",
  "Compressed Air and Energy Efficiency",
  "Engineering Practice and Industrial Applications",
]);

export default function PageHero({
  eyebrow,
  title,
  subheading,
  description,
}: {
  eyebrow: string;
  title: string;
  subheading?: string;
  description: string;
}) {
  const isKnowledgeCentre = eyebrow === "Knowledge Centre";
  const showKnowledgePlaceholder = isKnowledgeCentre && !uploadedKnowledgeCentreTitles.has(title);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line pb-20 pt-40 sm:pt-48">
        <HUDBackground density={4} />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
              {eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-ink sm:text-6xl">{title}</h1>
          </Reveal>
          {subheading && (
            <Reveal delay={0.14}>
              <h2 className="mx-auto mt-4 max-w-xl font-display text-lg font-bold leading-tight text-ink sm:text-xl">{subheading}</h2>
            </Reveal>
          )}
          <Reveal delay={subheading ? 0.2 : 0.16}>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-mute sm:text-lg">{description}</p>
          </Reveal>
        </div>
      </section>

      {showKnowledgePlaceholder && (
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-10">
          <Reveal delay={0.2}>
            <div className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border-2 border-dashed border-teal/60 bg-surface">
              <div className="flex h-full min-h-[260px] w-full items-center justify-center px-6">
                <div className="text-center">
                  <div className="font-mono text-sm uppercase tracking-[0.2em] text-teal">IMAGE PLACEHOLDER</div>
                  <p className="mt-3 text-sm leading-6 text-mute">Industrial photography will be added here</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      )}
    </>
  );
}
