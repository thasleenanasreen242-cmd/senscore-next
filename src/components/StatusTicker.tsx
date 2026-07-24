"use client";

const STATUS_ITEMS = [
  "SENSOR-042 ONLINE",
  "FLOW RATE NOMINAL",
  "PLATFORM UPTIME 99.4%",
  "4,200+ SENSORS DEPLOYED",
  "AI DECISION LAYER ACTIVE",
  "PREDICTIVE MODEL SYNCED",
  "NETWORK LATENCY 12MS",
  "ALL SYSTEMS NOMINAL",
  "60+ MANUFACTURER BRANDS LINKED",
  "LAST ANOMALY 0 DAYS AGO",
];

export default function StatusTicker() {
  const loopItems = [...STATUS_ITEMS, ...STATUS_ITEMS];

  return (
    <div className="relative z-40 overflow-hidden border-b border-line bg-surface/60 backdrop-blur-sm">
      <div className="flex w-max animate-marquee items-center gap-10 py-2">
        {loopItems.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-mute"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulseGlow" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
