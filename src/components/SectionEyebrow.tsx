export default function SectionEyebrow({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-teal">
      <span className="h-px w-8 bg-teal/60" />
      <span>{index}</span>
      <span className="text-mute">/</span>
      <span className="text-mute">{label}</span>
    </div>
  );
}
