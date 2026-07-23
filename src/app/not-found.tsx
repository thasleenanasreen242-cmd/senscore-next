import Link from "next/link";
import GlowButton from "@/components/GlowButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-teal">
        Signal lost
      </span>
      <h1 className="mt-4 font-display text-6xl font-semibold text-ink sm:text-8xl">
        404
      </h1>
      <p className="mt-4 max-w-sm text-mute">
        This node isn&apos;t on the network. It may have moved or never existed.
      </p>
      <div className="mt-8">
        <GlowButton href="/">Return to base</GlowButton>
      </div>
    </section>
  );
}
