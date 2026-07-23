import HUDBackground from "@/components/HUDBackground";
import Reveal from "@/components/Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
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
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-ink sm:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
