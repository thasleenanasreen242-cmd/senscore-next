import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GlowButton from "@/components/GlowButton";

export const metadata: Metadata = {
  title: "Compressed Air Audit UAE | Energy Efficiency and Flow Measurement | SensCore",
  description: "Technical guidance on compressed air audits, compressor efficiency, air flow measurement, network monitoring and energy efficiency for industrial facilities across the UAE.",
  alternates: { canonical: "https://www.senscoretech.com/knowledge-centre/compressed-air-energy-efficiency" },
};

const auditPoints = [
  "Compressor air output",
  "Electrical power consumption",
  "Free Air Delivery",
  "Main header air flow",
  "Department or machine consumption",
  "System pressure",
  "Operating hours",
  "Loaded and unloaded compressor behaviour",
  "Background consumption",
  "Production related demand patterns",
];

const faqs = [
  ["What is a compressed air audit?", "A compressed air audit evaluates how compressed air is generated, distributed and consumed within an industrial facility. Measurements can include flow, pressure, electrical power and operating patterns."],
  ["What is Free Air Delivery?", "Free Air Delivery represents the quantity of air delivered by a compressor referenced to defined inlet conditions. Comparing actual air output with electrical power consumption can help assess compressor performance."],
  ["How can compressed air leaks be identified?", "Flow monitoring can indicate unexplained background consumption, while a dedicated leakage survey is used to locate individual leak points within the system."],
  ["Why measure compressed air flow at individual production areas?", "Area or machine level measurement shows where compressed air is actually consumed and can help identify abnormal demand, inefficient equipment or opportunities for better cost allocation."],
  ["Is a temporary audit enough?", "A temporary audit provides useful performance information during the measurement period. Permanent monitoring can provide additional value where continuous visibility, trend analysis or ongoing energy management is required."],
];

const sections = [
  ["Compressed Air Flow Measurement", ["Flow measurement provides the foundation for understanding compressed air consumption.", "By measuring air flow at the compressor outlet, main distribution lines, production areas or individual equipment, engineers can establish consumption patterns and identify changes in system demand.", "Thermal mass flowmeters are widely used for compressed air because they measure gas mass flow directly. Differential pressure and insertion technologies can also be considered depending on pipe size, air condition and installation requirements.", "Comate provides thermal mass and differential pressure flow technologies specifically used for compressed air measurement and auditing applications."]],
  ["Compressor Efficiency Analysis", ["Knowing how much air a compressor produces is only part of the picture.", "Compressor efficiency analysis compares the useful compressed air output against the electrical energy required to produce it.", "One important measurement is Free Air Delivery, commonly referred to as FAD. This represents the amount of compressed air delivered by the compressor under defined reference conditions.", "Measuring actual air output together with electrical power allows engineers to evaluate compressor performance and compare operating conditions.", "Comate provides dedicated compressor efficiency analysis systems designed to collect and analyse compressed air performance data."]],
  ["Compressed Air Network Auditing", ["A complete compressed air audit looks beyond the compressor room. The distribution network should also be assessed to understand how air moves through the facility and where significant consumption occurs.", "Measurement points can be established at main headers, production areas, machines or process sections to create a clearer picture of demand."]],
  ["Identifying Compressed Air Losses", ["Compressed air losses may occur through leaking fittings, valves, hoses, connectors, drain systems and other components. Not every loss is immediately visible.", "Monitoring air flow during periods when production equipment is stopped can help establish whether significant background consumption remains within the network.", "Flow measurement does not identify the physical location of every leak by itself, but it can help quantify unexplained consumption and identify areas that require further investigation. A structured leakage survey can then be used to locate individual leak points."]],
  ["Measuring Air Consumption by Department or Machine", ["Plant wide compressor data may indicate overall system performance, but it does not explain where the air is being used.", "Installing measurement at individual production areas or major consumers can provide greater visibility and support department-level consumption monitoring, machine-level air usage, production efficiency analysis, cost allocation, maintenance planning, detection of abnormal consumption and expansion planning.", "Measurement can therefore turn compressed air from an unmeasured utility into a visible operating parameter."]],
  ["Continuous Compressed Air Monitoring", ["A temporary compressed air audit provides a valuable snapshot, while permanent monitoring allows performance to be tracked continuously.", "Flow, pressure and other operating data can be transmitted to local monitoring systems, PLCs, SCADA platforms or online data systems.", "Comate provides connected monitoring solutions that can combine flow information with communication technologies and online data collection for ongoing compressed air analysis.", "Continuous monitoring can help operators identify gradual changes that may not be visible during a short survey."]],
  ["Improving Compressed Air Energy Efficiency", ["Measurement should lead to engineering decisions.", "Potential improvement opportunities may include repairing leaks, reviewing compressor sequencing, reducing unnecessary air consumption, improving distribution, correcting pressure settings and identifying equipment using more air than expected.", "The objective of an audit is not simply to generate data. It is to establish where energy is being converted into useful compressed air and where avoidable losses may exist."]],
  ["Typical Industrial Applications", ["Compressed air measurement and efficiency analysis can be applied across manufacturing, food and beverage, automotive, pharmaceuticals, electronics, chemical processing, power generation and other industries where compressed air represents a significant plant utility.", "Comate specifically positions its measurement and auditing systems for compressor performance, industrial air networks and energy management applications."]],
  ["Compressed Air Audits Across the UAE", ["SensCore supports compressed air flow measurement, compressor efficiency analysis and network auditing across Abu Dhabi, Dubai, Sharjah, Ajman, Ras Al Khaimah (RAK), Fujairah and Umm Al Quwain (UAQ).", "Support can include onsite flow measurement, compressor performance assessment, compressed air network auditing, leakage testing and identification of opportunities for improved system efficiency."]],
] as const;

export default function CompressedAirPage() {
  return (
    <>
      <PageHero eyebrow="Knowledge Centre" title="Compressed Air and Energy Efficiency" description="Technical guidance on compressed air audits, compressor efficiency, air flow measurement, network monitoring and energy efficiency for industrial facilities across the UAE." />
      <main className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal><Link href="/knowledge-centre" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-teal hover:text-ink"><ArrowLeft size={14} /> Back to Knowledge Centre</Link></Reveal>
          <div className="mt-10 space-y-7">
            <Reveal><section className="rounded-2xl border border-line bg-surface p-7 sm:p-9"><h2 className="font-display text-2xl font-semibold text-ink">Compressed Air and Energy Efficiency</h2><div className="mt-5 space-y-4 text-sm leading-8 text-mute"><p>Compressed air is an essential industrial utility, but its performance cannot be managed effectively without reliable measurement.</p><p>A compressed air system may operate continuously while still experiencing excessive consumption, leakage, pressure losses, inefficient compressor loading or poor distribution across the plant.</p><p>SensCore supports compressed air measurement, compressor efficiency analysis, network auditing and energy monitoring to help industrial facilities understand where compressed air is generated, distributed and consumed.</p></div></section></Reveal>
            {sections.map(([title, paragraphs], index) => <Reveal key={title}><section className="rounded-2xl border border-line bg-surface p-7 sm:p-9"><h2 className="font-display text-2xl font-semibold text-ink">{title}</h2><div className="mt-5 space-y-4 text-sm leading-8 text-mute">{paragraphs.map((p) => <p key={p}>{p}</p>)}</div>{title === "Compressed Air Network Auditing" && <div className="mt-7 grid gap-3 sm:grid-cols-2">{["Unexpected air consumption", "Changes in demand during non-production periods", "Pressure related inefficiencies", "High consumption areas", "Possible leakage or uncontrolled usage", "Mismatch between compressor output and plant demand"].map((item) => <div key={item} className="flex items-start gap-2 rounded-xl border border-line bg-void/30 p-4 text-sm text-mute"><CheckCircle2 className="mt-0.5 shrink-0 text-teal" size={17} />{item}</div>)}</div>}</section></Reveal>)}
            <Reveal><section className="rounded-2xl border border-line bg-surface p-7 sm:p-9"><h2 className="font-display text-2xl font-semibold text-ink">What Should Be Measured During a Compressed Air Audit?</h2><p className="mt-5 text-sm leading-8 text-mute">The exact measurement plan depends on the objective and plant configuration. Typical parameters can include:</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{auditPoints.map((item) => <div key={item} className="flex items-start gap-2 rounded-xl border border-line bg-void/30 p-4 text-sm text-mute"><CheckCircle2 className="mt-0.5 shrink-0 text-teal" size={17} />{item}</div>)}</div><p className="mt-7 text-sm leading-8 text-mute">Collecting these parameters together provides significantly more useful information than evaluating compressor nameplate data alone.</p></section></Reveal>
            <Reveal><section className="rounded-2xl border border-line bg-surface p-7 sm:p-9"><h2 className="font-display text-2xl font-semibold text-ink">Frequently Asked Questions</h2><div className="mt-6 space-y-4">{faqs.map(([question, answer], index) => <div key={question} className="rounded-xl border border-line bg-void/30 p-5"><div className="flex items-start gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-teal/30 bg-teal/10 font-mono text-[10px] font-semibold text-teal">{String(index + 1).padStart(2, "0")}</span><div><h3 className="font-display text-base font-semibold leading-7 text-ink">{question}</h3><p className="mt-2 text-sm leading-7 text-mute">{answer}</p></div></div></div>)}</div></section></Reveal>
            <Reveal><section className="rounded-2xl border border-line bg-surface p-7 sm:p-9"><h2 className="font-display text-2xl font-semibold text-ink">Need Help with a Compressed Air Efficiency Assessment?</h2><p className="mt-5 text-sm leading-8 text-mute">SensCore can review your compressor room, distribution network and compressed air consumption to establish a suitable measurement and auditing approach for industrial facilities across the UAE.</p><div className="mt-7 flex flex-col gap-4 sm:flex-row"><GlowButton href="/contact">Request an Assessment</GlowButton><Link href="/knowledge-centre" className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition hover:border-teal/50 hover:text-teal">More Knowledge Centre <ArrowRight size={16} /></Link></div></section></Reveal>
          </div>
        </div>
      </main>
    </>
  );
}
