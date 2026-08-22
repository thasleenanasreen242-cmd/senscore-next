import HUDBackground from "@/components/HUDBackground";
import Reveal from "@/components/Reveal";

const uploadedKnowledgeCentreTitles = new Set([
  "Flow Measurement",
  "Level Measurement",
  "Pressure and Temperature Measurement",
  "Process Analysis",
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
  const showKnowledgePlaceholder = eyebrow === "Knowledge Centre" && !uploadedKnowledgeCentreTitles.has(title);

  return (
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
        {showKnowledgePlaceholder && (
          <Reveal delay={0.24}>
            <div className="mx-auto mt-8 flex aspect-[16/9] w-full max-w-4xl items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-teal/60 bg-surface/90 shadow-[0_0_40px_rgba(20,184,166,0.08)]">
              <div className="text-center">
                <div className="font-mono text-sm uppercase tracking-[0.2em] text-teal">IMAGE PLACEHOLDER</div>
                <p className="mt-3 text-sm text-mute">Industrial photography will be added here</p>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
