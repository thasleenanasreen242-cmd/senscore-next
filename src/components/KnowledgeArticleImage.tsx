"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const IMAGES: Record<string, { src: string; alt: string }> = {
  "flow-measurement": { src: "/images/knowledge-centre/Flow Measurement.png", alt: "Industrial flow measurement instrumentation" },
  "level-measurement": { src: "/images/knowledge-centre/Level measurement.png", alt: "Industrial level measurement instrumentation" },
  "pressure-temperature": { src: "/images/knowledge-centre/Pressure and Temperature Measurement.png", alt: "Industrial pressure and temperature measurement instrumentation" },
  "process-analysis": { src: "/images/knowledge-centre/Process Analysis.png", alt: "Industrial process analysis instrumentation" },
  "valves-flow-control": { src: "/images/knowledge-centre/Valves and Flow Control.png", alt: "Industrial valves and flow control equipment" },
  "pumps-dosing": { src: "/images/knowledge-centre/Pumps and Dosing.png", alt: "Industrial pumps and dosing equipment" },
  "compressed-air-energy-efficiency": { src: "/images/knowledge-centre/Compressed Air and Energy Efficiency.png", alt: "Compressed air and industrial energy efficiency" },
  "engineering-practice": { src: "/images/knowledge-centre/Engineering Practice and Industrial Applications.png", alt: "Engineering practice and industrial applications" },
};

export default function KnowledgeArticleImage() {
  const pathname = usePathname();

  useEffect(() => {
    const slug = pathname?.split("/").filter(Boolean).pop();
    if (!slug || slug === "knowledge-centre") return;

    const main = document.querySelector("main");
    if (!main || main.querySelector("[data-knowledge-article-image]")) return;

    const backLink = main.querySelector('a[href="/knowledge-centre"]');
    if (!backLink?.parentElement) return;

    const wrapper = document.createElement("div");
    wrapper.setAttribute("data-knowledge-article-image", "true");
    wrapper.className = "mt-8 w-full overflow-hidden rounded-2xl border border-line bg-surface";

    const image = IMAGES[slug];
    if (image) {
      const img = document.createElement("img");
      img.src = encodeURI(image.src);
      img.alt = image.alt;
      img.width = 1800;
      img.height = 1000;
      img.loading = "eager";
      img.decoding = "async";
      img.className = "block aspect-[16/9] h-auto w-full object-cover";
      wrapper.appendChild(img);
    } else {
      wrapper.className += " aspect-[16/9]";
      wrapper.innerHTML = '<div class="flex h-full min-h-[260px] w-full items-center justify-center px-6"><div class="text-center"><div class="font-mono text-sm uppercase tracking-[0.2em] text-teal">IMAGE PLACEHOLDER</div><p class="mt-3 text-sm leading-6 text-mute">Industrial photography will be added here</p></div></div>';
    }

    backLink.parentElement.insertAdjacentElement("afterend", wrapper);
  }, [pathname]);

  return null;
}
