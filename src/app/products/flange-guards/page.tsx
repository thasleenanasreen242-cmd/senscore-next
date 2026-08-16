import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionEyebrow from "@/components/SectionEyebrow";
import GlowButton from "@/components/GlowButton";

export const metadata: Metadata = {
  title: "Flange Guards UAE | Industrial Flange Protection | SensCore",
  description:
    "Technical guidance on flange guards, spray protection, chemical flange safety, leak containment and industrial flange protection for applications across the UAE.",
  alternates: { canonical: "https://www.senscoretech.com/products/flange-guards" },
};

const selectionPoints = [
  "Chemical compatibility",
  "Required material of construction",
  "Visual inspection requirement",
  "Drainage requirement",
  "Indoor or outdoor installation",
  "ATEX requirements",
  "Accessibility for maintenance",
  "Existing flange condition",
];

export default function FlangeGuardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Flange Protection & Sealing"
        title="Industrial Flange Guards and Leak Protection"
        description="Secondary protection and engineered sealing solutions for hazardous, corrosive, hot and demanding industrial piping applications across the UAE."
      />

      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <p className="text-lg leading-relaxed text-mute sm:text-xl">
              Flanged connections are common throughout industrial piping systems, but a gasket failure or loss of joint integrity can release process fluid under pressure. Where the medium is corrosive, hazardous, hot or flammable, a pressurised spray can create risks for personnel, equipment and the surrounding area.
            </p>
            <p className="mt-6 text-base leading-relaxed text-mute">
              Flange guards provide secondary protection around flanged joints by helping contain, control or redirect an unexpected release. They do not replace correct gasket selection, flange assembly or maintenance.
            </p>
            <p className="mt-6 text-base leading-relaxed text-mute">
              SensCore supports industrial flange protection through application review, flange surveys, mapping, customised flange guards and installation across industrial facilities in the UAE.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <SectionEyebrow index="01" label="UNDERSTAND" />
              <h2 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">What Is a Flange Guard?</h2>
              <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">A flange guard is a protective cover installed around a flange connection. If leakage occurs, the guard helps prevent an uncontrolled lateral spray from travelling directly into surrounding areas.</p>
              <p className="mt-5 text-base leading-relaxed text-mute">Different constructions are available depending on the process medium, temperature, pressure and operating environment. ARTEMA manufactures flange guards for aggressive chemicals, hydrocarbons, LNG and other demanding industrial applications.</p>
              <p className="mt-5 text-base leading-relaxed text-mute">The correct guard should therefore be selected according to the actual service rather than using one material for every flange.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-line bg-surface p-8 sm:p-10">
                <SectionEyebrow index="02" label="APPLICATIONS" />
                <h2 className="mt-5 font-display text-2xl font-semibold text-ink">Chemical Flange Guards</h2>
                <p className="mt-4 text-sm leading-relaxed text-mute sm:text-base">Chemical processing facilities may handle acids, alkalis, solvents and other fluids that can create significant exposure risk if released from a pressurised joint.</p>
                <p className="mt-4 text-sm leading-relaxed text-mute sm:text-base">Chemical flange guards are available using materials such as PTFE and PTFE coated technical fabrics, depending on the required chemical resistance and operating conditions.</p>
                <p className="mt-4 text-sm leading-relaxed text-mute sm:text-base">ARTEMA also provides guards with transparent inspection areas that allow operators to inspect the enclosed flange and identify signs of leakage without removing the protection.</p>
                <p className="mt-4 text-sm leading-relaxed text-mute sm:text-base">Typical applications include chemical transfer lines, dosing systems, storage areas, process piping and water treatment systems handling aggressive chemicals.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><SectionEyebrow index="03" label="CONSTRUCTIONS" /><h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold text-ink sm:text-4xl">Flange Guard Materials and Configurations</h2></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["PTFE Flange Guards", "PTFE flange guards are particularly relevant where chemical resistance is a primary requirement. ARTEMA offers safety flange covers manufactured from 100 percent PTFE for aggressive chemical applications. Selection must still consider the specific fluid, concentration, operating temperature and pressure. PTFE based guards can be considered for chemical lines where compatibility with the process medium is more important than mechanical strength alone."],
              ["Fabric Flange Guards", "Technical fabric flange guards provide a lightweight approach to spray protection. Depending on the construction, materials can include PTFE coated glass fabric and other engineered fabrics selected according to chemical and operating requirements. Some configurations incorporate a transparent central section to support visual inspection while the guard remains installed."],
              ["Metallic Flange Guards", "Metallic flange guards can be considered for demanding industrial applications involving hydrocarbons, elevated temperature, higher pressure or environments where a more robust mechanical construction is required. ARTEMA manufactures stainless steel safety flange guards and specialised metallic designs for oil and gas applications."],
              ["Flange Guards for ATEX Areas", "Some industrial environments require consideration of electrostatic charge and ignition risk. ARTEMA provides antistatic flange guard constructions intended for ATEX environments. These products use electrically conductive materials designed to dissipate electrostatic charges while providing chemical spray protection. ATEX suitability should always be verified for the exact guard configuration and application before specification."],
              ["Drainage and Leak Collection", "In some applications, containing the initial spray is only part of the requirement. A flange protection system can also be configured to direct leaking fluid towards a controlled collection point. Drain connections, stainless steel hoses or collection arrangements can help transfer released fluid away from personnel and surrounding equipment."],
              ["Valve Covers and Related Protection", "Pressurised leakage is not limited to flange joints. Valves can also contain several potential release points. ARTEMA provides safety valve covers using PTFE, technical fabrics, antistatic materials and stainless-steel constructions for different chemical and operating conditions."],
            ].map(([title, text]) => (
              <Reveal key={title}>
                <article className="h-full rounded-2xl border border-line bg-void/30 p-7">
                  <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-mute">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 max-w-4xl text-sm leading-relaxed text-mute">SensCore can support flange protection requirements involving measurement, mapping, customised guards, drainage arrangements and installation.</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <SectionEyebrow index="04" label="SELECTION" />
              <h2 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">Selecting the Right Flange Guard</h2>
              <p className="mt-5 text-base leading-relaxed text-mute">Selection should begin with the actual process conditions. Engineers should consider the process fluid, chemical concentration, flange size, flange type, operating pressure, temperature, surrounding environment and potential consequences of leakage.</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {selectionPoints.map((point) => <li key={point} className="flex items-start gap-2 text-sm text-mute"><CheckCircle2 className="mt-0.5 shrink-0 text-teal" size={17} />{point}</li>)}
              </ul>
              <p className="mt-7 text-sm leading-relaxed text-mute">The guard should fit correctly around the joint without interfering with normal inspection and maintenance requirements.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-line bg-surface p-8 sm:p-10">
                <SectionEyebrow index="05" label="SITE SUPPORT" />
                <h2 className="mt-5 font-display text-2xl font-semibold text-ink">Flange Survey, Mapping and Installation</h2>
                <p className="mt-4 text-sm leading-relaxed text-mute">Large industrial facilities can contain hundreds or thousands of flanged connections. A structured flange protection programme should therefore begin by identifying which joints require protection and recording their dimensions, service and operating conditions.</p>
                <p className="mt-4 text-sm leading-relaxed text-mute">SensCore supports onsite flange measurement surveys, mapping, customised guard selection and installation. This allows protection to be selected around individual flange conditions rather than purchasing generic guards without confirming fit or application suitability.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><SectionEyebrow index="06" label="INDUSTRIES" /><h2 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">Industrial Applications</h2><p className="mt-5 max-w-4xl text-base leading-relaxed text-mute sm:text-lg">Flange guards can be relevant across chemical processing, oil and gas, petrochemical facilities, water treatment, utilities, pharmaceuticals, power generation and other process industries where hazardous fluids are transported through flanged piping. ARTEMA specifically provides solutions for aggressive chemicals, hydrocarbons, LNG and specialised hazardous environments.</p></Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Chemical processing", "Oil & gas", "Petrochemical", "Water treatment", "Utilities", "Pharmaceuticals", "Power generation", "Process industries"].map((item) => <div key={item} className="rounded-xl border border-line bg-void/30 px-5 py-4 text-sm text-mute">{item}</div>)}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <SectionEyebrow index="07" label="UAE COVERAGE" />
            <h2 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">Flange Protection Across the UAE</h2>
            <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">SensCore supports industrial flange protection requirements across Abu Dhabi, Dubai, Sharjah, Ajman, Ras Al Khaimah (RAK), Fujairah and Umm Al Quwain (UAQ).</p>
            <p className="mt-5 text-base leading-relaxed text-mute">Support can include application review, site measurement, flange mapping, guard selection, customised requirements and installation for new projects and existing industrial facilities.</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <SectionEyebrow index="08" label="SEALING" />
              <h2 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">Industrial Gaskets</h2>
              <p className="mt-5 text-base leading-relaxed text-mute">The gasket remains the primary sealing element within a flanged joint. Where required, SensCore can also support industrial gasket requirements including flat, spiral wound, cam-profile and ring joint constructions. ARTEMA manufactures these gasket types in a range of metallic, semi-metallic and non-metallic materials.</p>
              <p className="mt-5 text-base leading-relaxed text-mute">Flange guards and gaskets perform different functions and should not be treated as substitutes for one another.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionEyebrow index="09" label="FAQ" />
              <div className="mt-5 space-y-6">
                {[
                  ["What is the purpose of a flange guard?", "A flange guard provides secondary protection around a flange by helping contain or redirect spray if leakage occurs."],
                  ["Are flange guards suitable for acids and aggressive chemicals?", "Yes, suitable flange guards can be selected for aggressive chemical services. The guard material must be checked against the specific chemical, concentration, temperature and pressure."],
                  ["Can a flange guard help identify a leak?", "Some designs include transparent inspection areas that allow the flange condition and visible leakage to be observed while the guard remains installed."],
                  ["Can leaking fluid be collected from a flange guard?", "Suitable protection systems can incorporate drainage arrangements to direct released fluid towards a controlled collection point."],
                  ["How do I select the correct flange guard?", "Selection should consider the process fluid, chemical compatibility, flange dimensions, pressure, temperature, operating environment, inspection requirement and any applicable hazardous area requirements."],
                ].map(([question, answer]) => <div key={question} className="border-b border-line pb-5"><h3 className="text-base font-semibold text-ink">{question}</h3><p className="mt-2 text-sm leading-relaxed text-mute">{answer}</p></div>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line py-24 text-center">
        <div className="relative mx-auto max-w-3xl px-6">
          <Reveal>
            <SectionEyebrow index="10" label="REQUEST SUPPORT" />
            <h2 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">Need Help With a Flange Protection Requirement?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">SensCore can survey, map and review flange connections to help identify suitable flange guard materials and configurations for industrial facilities across the UAE.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GlowButton href="/contact">Request a Flange Survey</GlowButton>
              <Link href="/products" className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition hover:border-teal/50 hover:text-teal">View All Products <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
