"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MutableVideo({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleMute() {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  }

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={className}
      />
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-4 left-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-teal/30 bg-void/70 text-teal backdrop-blur-sm transition-colors hover:bg-void/90"
      >
        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
    </div>
  );
}
