export default function KnowledgeCentreImagePlaceholder() {
  return (
    <div className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border-2 border-dashed border-teal/60 bg-surface">
      <div className="flex h-full min-h-[260px] w-full items-center justify-center px-6">
        <div className="text-center">
          <div className="font-mono text-sm uppercase tracking-[0.2em] text-teal">IMAGE PLACEHOLDER</div>
          <p className="mt-3 text-sm leading-6 text-mute">Industrial photography will be added here</p>
        </div>
      </div>
    </div>
  );
}
