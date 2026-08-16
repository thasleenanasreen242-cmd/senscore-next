import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GlowButton from "@/components/GlowButton";

export const metadata: Metadata = {
  title: "Process Analysis UAE | Water Quality Analysers | SensCore",
  description:
    "Technical guidance on process analysis, water quality analysers, pH, conductivity, dissolved oxygen, turbidity, chlorine, COD and related monitoring across the UAE.",
  alternates: { canonical: "https://www.senscoretech.com/knowledge-centre/process-analysis" },
};

const sections = [
  {
    heading: "Process Analysis and Water Quality Monitoring",
    paragraphs: [
      "Process analysis provides continuous or periodic information about the chemical and physical condition of water and industrial process fluids.",
      "Unlike conventional process measurements such as pressure or flow, analytical measurement often depends on sensor condition, sample characteristics, calibration, installation and the interaction between the measurement principle and the process medium.",
      "SensCore supports water quality and process analysis for drinking water, wastewater, industrial process water, utilities and environmental monitoring applications using continuous, multi parameter and portable measurement technologies. Probest solutions referenced within our portfolio cover these application areas and a broad range of analytical parameters.",
    ],
  },
  {
    heading: "Key Process Analysis Parameters",
    paragraphs: [],
    bullets: [
      ["pH and ORP Measurement", "pH indicates the acidic or alkaline condition of an aqueous solution and is one of the most widely monitored parameters in water treatment and industrial processes. ORP measures oxidation reduction potential and can provide useful information about the oxidising or reducing condition of a process. Typical applications include water treatment, wastewater treatment, chemical processes and industrial water monitoring. Probest provides pH and ORP sensors for both continuous and portable measurement."],
      ["Conductivity Measurement", "Conductivity indicates the ability of water to conduct electrical current and is influenced by the concentration of dissolved ions. It is commonly monitored in water treatment, industrial process water, utilities and applications where changes in dissolved ionic content are significant. Sensor selection should consider the expected conductivity range, process chemistry, temperature and possible sensor fouling. Probest offers conductivity measurement within both individual and multi parameter water monitoring systems."],
      ["Dissolved Oxygen Measurement", "Dissolved oxygen measurement determines the concentration of oxygen present in water. It is particularly important in wastewater treatment, aeration processes, surface water monitoring and other biological or environmental applications. Optical fluorescence sensors provide one approach to dissolved oxygen measurement. Probest uses this principle in its digital dissolved oxygen sensors for applications including wastewater, surface water and industrial process water."],
      ["Turbidity and Suspended Solids", "Turbidity indicates the optical effect of suspended material in water, while suspended solids measurement provides information about the concentration of solid material present. These measurements are important in water treatment, wastewater treatment, clarification processes and industrial effluent monitoring. The measurement location should be selected carefully because bubbles, fouling, solids distribution and process conditions can affect representative measurement. Probest provides both turbidity and suspended solids sensors for continuous and portable applications."],
      ["Residual and Total Chlorine", "Chlorine measurement is important where disinfection performance or residual disinfectant concentration must be monitored. Applications can include drinking water treatment, water distribution and other water treatment processes. Different measurement principles may be used depending on the required parameter and application. Probest includes residual and total chlorine analysers using the DPD colorimetric method within its current water analysis range."],
      ["COD, BOD and Organic Load Monitoring", "COD and BOD are widely used indicators of organic pollution and treatment performance in wastewater and industrial effluent applications. Continuous optical measurement can also be used to monitor changes in organic load. Probest offers UV based sensors that use absorption at 254 nm and can derive COD or BOD related values under defined conditions. The measurement method and correlation should therefore be understood when comparing continuous sensor readings with laboratory reference methods."],
      ["Ammonia, Nitrate and Other Ions", "Ammonia nitrogen and nitrate measurement can support wastewater treatment, environmental monitoring and nutrient management. Ion selective electrode technology is one approach used for these parameters. Probest currently offers sensors for ammonia nitrogen, nitrate and other ions within its water monitoring portfolio."],
    ],
  },
  {
    heading: "Multi Parameter Water Quality Monitoring",
    paragraphs: [
      "A single application may require several measurements rather than one analytical parameter.",
      "Multi parameter systems can combine measurements such as pH, ORP, conductivity, dissolved oxygen, turbidity, suspended solids, ammonia, nitrate and organic load within one monitoring arrangement.",
      "Probest currently offers integrated systems capable of connecting multiple sensors for applications including wastewater, drinking water, surface water and industrial water monitoring.",
    ],
  },
  {
    heading: "Portable Water Quality Analysis",
    paragraphs: [
      "Permanent continuous monitoring is not required at every measurement point.",
      "Portable analysers can support field inspection, troubleshooting, surveys, commissioning checks and measurements at locations without permanent instrumentation.",
      "Probest's portable platform currently supports sensors for parameters including pH, ORP, conductivity, dissolved oxygen, turbidity, ammonia, nitrate, suspended solids and COD.",
    ],
  },
  {
    heading: "Selecting a Process Analyser",
    paragraphs: [
      "Selection should begin with the required parameter and the purpose of the measurement.",
      "Engineers should also consider the expected measurement range, process temperature, sample condition, installation method, calibration requirements, sensor cleaning, fouling potential, response time, communication requirements and maintenance access.",
      "For analytical instruments, long term measurement reliability depends not only on the analyser itself but also on correct installation, calibration and maintenance.",
    ],
  },
  {
    heading: "Typical Process Analysis Applications",
    paragraphs: [
      "Process and water quality analysers are used in drinking water treatment, wastewater treatment, industrial effluent, process water, surface water and environmental monitoring. Probest identifies these among the primary application areas for its analytical instruments.",
      "For SensCore, these technologies can support applications across utilities, manufacturing, chemical processing, food and beverage, water treatment and other industrial facilities.",
    ],
  },
  {
    heading: "Process Analysis Support Across the UAE",
    paragraphs: [
      "SensCore supports process analysis and water quality monitoring requirements across Abu Dhabi, Dubai, Sharjah, Ajman, Ras Al Khaimah (RAK), Fujairah and Umm Al Quwain (UAQ).",
      "Our approach considers the measurement objective, water or process characteristics, installation conditions, required parameters and control system requirements before selecting an analytical solution.",
    ],
  },
];

const faqs = [
  ["Which parameters are commonly measured in industrial water quality analysis?", "Common parameters include pH, ORP, conductivity, dissolved oxygen, turbidity, suspended solids, chlorine, COD, ammonia and nitrate. The required combination depends on the process and monitoring objective."],
  ["What is the difference between an analyser and a sensor?", "The sensor interacts with the measured medium and detects the relevant parameter. The analyser or transmitter processes the sensor signal and provides indication, outputs, communication or control functions."],
  ["Can several water quality parameters be measured in one system?", "Yes. Multi parameter systems can integrate several compatible sensors into a common monitoring platform."],
  ["When should a portable water quality analyser be used?", "Portable instruments are useful for field testing, temporary measurements, verification, troubleshooting and locations where permanent monitoring is unnecessary."],
  ["What information is required to select a water quality analyser?", "The required parameter, measurement range, water or process type, temperature, installation location, continuous or portable requirement, communication interface and maintenance conditions should be defined before selection."],
];

export default function ProcessAnalysisPage() {
  return (
    <>
      <PageHero eyebrow="Knowledge Centre" title="Process Analysis" description="Technical guidance on process analysis, water quality analysers, pH, conductivity, dissolved oxygen, turbidity, chlorine, COD and related monitoring across the UAE." />
      <main className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <Link href="/knowledge-centre" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-teal hover:text-ink"><ArrowLeft size={14} /> Back to Knowledge Centre</Link>
          </Reveal>

          <div className="mt-10 space-y-7">
            {sections.map((section, index) => (
              <Reveal key={section.heading} delay={index * 0.03}>
                <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                  <h2 className="font-display text-2xl font-semibold text-ink">{section.heading}</h2>
                  <div className="mt-5 space-y-4 text-sm leading-8 text-mute">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {section.bullets ? (
                    <div className="mt-8 space-y-5">
                      {section.bullets.map(([title, text], bulletIndex) => (
                        <article key={title} className="group relative overflow-hidden rounded-2xl border border-line bg-void/35 p-6 transition-all duration-300 hover:border-[#4f9cff]/40 hover:bg-[#08121f]/90 sm:p-7">
                          <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#2f80ff]/5 blur-3xl transition-opacity duration-300 group-hover:bg-[#2f80ff]/10" />
                          <div className="relative flex gap-5">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#4f9cff]/30 bg-[#0a1727] font-mono text-[10px] tracking-[0.15em] text-[#6da8ff]">{String(bulletIndex + 1).padStart(2, "0")}</div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-3"><span className="h-px w-7 shrink-0 bg-[#4f9cff]" /><h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">{title}</h3></div>
                              <p className="mt-4 text-sm leading-7 text-[#91a9c4] sm:text-[15px] sm:leading-8">{text}</p>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  ) : null}
                </section>
              </Reveal>
            ))}

            <Reveal>
              <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-ink">Frequently Asked Questions</h2>
                <div className="mt-6 space-y-4">
                  {faqs.map(([question, answer], index) => (
                    <div key={question} className="rounded-xl border border-line bg-void/30 p-5 sm:p-6">
                      <div className="flex items-start gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-teal/30 bg-teal/10 font-mono text-[10px] font-semibold text-teal">{String(index + 1).padStart(2, "0")}</span>
                        <div><h3 className="font-display text-base font-semibold leading-7 text-ink sm:text-lg">{question}</h3><p className="mt-2 text-sm leading-7 text-mute">{answer}</p></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <div className="mt-3 flex flex-col gap-4 rounded-2xl border border-line bg-surface p-7 sm:flex-row sm:items-center sm:justify-between">
                <div><div className="font-display text-lg font-medium text-ink">Need Help with a Process Analysis Application?</div><p className="mt-1 text-sm leading-7 text-mute">SensCore can review your water quality or process monitoring requirement and help identify suitable analytical parameters, sensing technologies and monitoring configurations for industrial applications across the UAE.</p></div>
                <GlowButton href="/contact">Talk to an Engineer</GlowButton>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
}
