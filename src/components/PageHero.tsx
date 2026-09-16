import HUDBackground from "@/components/HUDBackground";
import Reveal from "@/components/Reveal";

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
  return (
    <section className="relative overflow-hidden border-b border-line pb-16 pt-32 sm:pb-20 sm:pt-48">
      <HUDBackground density={4} />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-10">
        <Reveal>
          <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-teal/30 bg-teal/5 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-teal sm:px-4 sm:text-[11px] sm:tracking-[0.2em]">
            {eyebrow}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] text-ink sm:mt-6 sm:text-6xl">{title}</h1>
        </Reveal>
        {subheading && (
          <Reveal delay={0.14}>
            <h2 className="mx-auto mt-4 max-w-xl font-display text-lg font-bold leading-tight text-ink sm:text-xl">{subheading}</h2>
          </Reveal>
        )}
        <Reveal delay={subheading ? 0.2 : 0.16}>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mute sm:text-lg">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
