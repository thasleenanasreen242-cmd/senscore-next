import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GlowButton from "@/components/GlowButton";

export const metadata: Metadata = {
  title: "Flange Guards UAE | Industrial Flange Protection | SensCore",
  description: "Technical guidance on flange guards, spray protection, chemical flange safety, leak containment and industrial flange protection for applications across the UAE.",
  alternates: { canonical: "https://www.senscoretech.com/knowledge-centre/flange-protection" },
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

const faqs = [
  ["What is the purpose of a flange guard?", "A flange guard provides secondary protection around a flange by helping contain or redirect spray if leakage occurs."],
  ["Are flange guards suitable for acids and aggressive chemicals?", "Yes, suitable flange guards can be selected for aggressive chemical services. The guard material must be checked against the specific chemical, concentration, temperature and pressure."],
  ["Can a flange guard help identify a leak?", "Some designs include transparent inspection areas that allow the flange condition and visible leakage to be observed while the guard remains installed."],
  ["Can leaking fluid be collected from a flange guard?", "Suitable protection systems can incorporate drainage arrangements to direct released fluid towards a controlled collection point."],
  ["How do I select the correct flange guard?", "Selection should consider the process fluid, chemical compatibility, flange dimensions, pressure, temperature, operating environment, inspection requirement and any applicable hazardous area requirements."],
];

export default function FlangeProtectionKnowledgePage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Centre"
        title="Flange Protection and Sealing"
        description="Technical guidance on flange guards, spray protection, chemical flange safety, leak containment and industrial flange protection for applications across the UAE."
      />

      <main className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <Link href="/knowledge-centre" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-teal hover:text-ink">
              <ArrowLeft size={14} /> Back to Knowledge Centre
            </Link>
          </Reveal>

          <div className="mt-10 space-y-7">
            <Reveal>
              <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-ink">Industrial Flange Guards and Leak Protection</h2>
                <div className="mt-5 space-y-4 text-sm leading-8 text-mute">
                  <p>Flanged connections are common throughout industrial piping systems, but a gasket failure or loss of joint integrity can release process fluid under pressure.</p>
                  <p>Where the medium is corrosive, hazardous, hot or flammable, a pressurised spray can create risks for personnel, equipment and the surrounding area.</p>
                  <p>Flange guards provide secondary protection around flanged joints by helping contain, control or redirect an unexpected release. They do not replace correct gasket selection, flange assembly or maintenance.</p>
                  <p>SensCore supports industrial flange protection through application review, flange surveys, mapping, customised flange guards and installation across industrial facilities in the UAE.</p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-ink">What Is a Flange Guard?</h2>
                <div className="mt-5 space-y-4 text-sm leading-8 text-mute">
                  <p>A flange guard is a protective cover installed around a flange connection.</p>
                  <p>If leakage occurs, the guard helps prevent an uncontrolled lateral spray from travelling directly into surrounding areas.</p>
                  <p>Different constructions are available depending on the process medium, temperature, pressure and operating environment. ARTEMA manufactures flange guards for aggressive chemicals, hydrocarbons, LNG and other demanding industrial applications.</p>
                  <p>The correct guard should therefore be selected according to the actual service rather than using one material for every flange.</p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-ink">Flange Guards for Chemical Applications</h2>
                <div className="mt-5 space-y-4 text-sm leading-8 text-mute">
                  <p>Chemical processing facilities may handle acids, alkalis, solvents and other fluids that can create significant exposure risk if released from a pressurised joint.</p>
                  <p>Chemical flange guards are available using materials such as PTFE and PTFE coated technical fabrics, depending on the required chemical resistance and operating conditions.</p>
                  <p>ARTEMA also provides guards with transparent inspection areas that allow operators to inspect the enclosed flange and identify signs of leakage without removing the protection.</p>
                  <p>Typical applications include chemical transfer lines, dosing systems, storage areas, process piping and water treatment systems handling aggressive chemicals.</p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-ink">PTFE Flange Guards</h2>
                <div className="mt-5 space-y-4 text-sm leading-8 text-mute">
                  <p>PTFE flange guards are particularly relevant where chemical resistance is a primary requirement.</p>
                  <p>ARTEMA offers safety flange covers manufactured from 100 percent PTFE for aggressive chemical applications. Selection must still consider the specific fluid, concentration, operating temperature and pressure.</p>
                  <p>PTFE based guards can be considered for chemical lines where compatibility with the process medium is more important than mechanical strength alone.</p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-ink">Fabric Flange Guards</h2>
                <div className="mt-5 space-y-4 text-sm leading-8 text-mute">
                  <p>Technical fabric flange guards provide a lightweight approach to spray protection.</p>
                  <p>Depending on the construction, materials can include PTFE coated glass fabric and other engineered fabrics selected according to chemical and operating requirements.</p>
                  <p>Some configurations incorporate a transparent central section to support visual inspection of the flange while the guard remains installed.</p>
                  <p>Fabric construction can be useful where ease of installation, chemical resistance and regular visual inspection are important.</p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-ink">Metallic Flange Guards</h2>
                <div className="mt-5 space-y-4 text-sm leading-8 text-mute">
                  <p>Metallic flange guards can be considered for demanding industrial applications involving hydrocarbons, elevated temperature, higher pressure or environments where a more robust mechanical construction is required.</p>
                  <p>ARTEMA manufactures stainless steel safety flange guards and specialised metallic designs for oil and gas applications.</p>
                  <p>The correct metallic guard should be selected according to the process conditions and the specific protection objective.</p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-ink">Flange Guards for ATEX Areas</h2>
                <div className="mt-5 space-y-4 text-sm leading-8 text-mute">
                  <p>Some industrial environments require consideration of electrostatic charge and ignition risk.</p>
                  <p>ARTEMA provides antistatic flange guard constructions specifically intended for ATEX environments. These products use electrically conductive materials designed to dissipate electrostatic charges while providing chemical spray protection.</p>
                  <p>ATEX suitability should always be verified for the exact guard configuration and application before specification.</p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-ink">Drainage and Leak Collection</h2>
                <div className="mt-5 space-y-4 text-sm leading-8 text-mute">
                  <p>In some applications, containing the initial spray is only part of the requirement.</p>
                  <p>A flange protection system can also be configured to direct leaking fluid towards a controlled collection point.</p>
                  <p>Drain connections, stainless steel hoses or collection arrangements can help transfer released fluid away from personnel and surrounding equipment.</p>
                  <p>SensCore can support flange protection requirements involving measurement, mapping, customised guards, drainage arrangements and installation.</p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-ink">Valve Covers and Related Protection</h2>
                <div className="mt-5 space-y-4 text-sm leading-8 text-mute">
                  <p>Pressurised leakage is not limited to flange joints. Valves can also contain several potential release points.</p>
                  <p>ARTEMA provides safety valve covers using PTFE, technical fabrics, antistatic materials and stainless-steel constructions for different chemical and operating conditions.</p>
                  <p>This allows flange and valve protection to be considered together where the process hazard requires a wider spray protection strategy.</p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-ink">Selecting the Right Flange Guard</h2>
                <p className="mt-5 text-sm leading-8 text-mute">Selection should begin with the actual process conditions. Engineers should consider the process fluid, chemical concentration, flange size, flange type, operating pressure, temperature, surrounding environment and potential consequences of leakage.</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {selectionPoints.map((point) => <div key={point} className="flex items-start gap-2 rounded-xl border border-line bg-void/30 p-4 text-sm text-mute"><CheckCircle2 className="mt-0.5 shrink-0 text-teal" size={17} />{point}</div>)}
                </div>
                <p className="mt-7 text-sm leading-8 text-mute">The guard should fit correctly around the joint without interfering with normal inspection and maintenance requirements.</p>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-ink">Flange Survey, Mapping and Installation</h2>
                <div className="mt-5 space-y-4 text-sm leading-8 text-mute">
                  <p>Large industrial facilities can contain hundreds or thousands of flanged connections.</p>
                  <p>A structured flange protection programme should therefore begin by identifying which joints require protection and recording their dimensions, service and operating conditions.</p>
                  <p>SensCore supports onsite flange measurement surveys, mapping, customised guard selection and installation.</p>
                  <p>This allows protection to be selected around individual flange conditions rather than purchasing generic guards without confirming fit or application suitability.</p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-ink">Industrial Applications</h2>
                <div className="mt-5 space-y-4 text-sm leading-8 text-mute">
                  <p>Flange guards can be relevant across chemical processing, oil and gas, petrochemical facilities, water treatment, utilities, pharmaceuticals, power generation and other process industries where hazardous fluids are transported through flanged piping.</p>
                  <p>ARTEMA specifically provides solutions for aggressive chemicals, hydrocarbons, LNG and specialised hazardous environments.</p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-ink">Flange Protection Across the UAE</h2>
                <div className="mt-5 space-y-4 text-sm leading-8 text-mute">
                  <p>SensCore supports industrial flange protection requirements across Abu Dhabi, Dubai, Sharjah, Ajman, Ras Al Khaimah (RAK), Fujairah and Umm Al Quwain (UAQ).</p>
                  <p>Support can include application review, site measurement, flange mapping, guard selection, customised requirements and installation for new projects and existing industrial facilities.</p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-ink">Industrial Gaskets</h2>
                <div className="mt-5 space-y-4 text-sm leading-8 text-mute">
                  <p>The gasket remains the primary sealing element within a flanged joint.</p>
                  <p>Where required, SensCore can also support industrial gasket requirements including flat, spiral wound, cam-profile and ring joint constructions. ARTEMA manufactures these gasket types in a range of metallic, semi-metallic and non-metallic materials.</p>
                  <p>Flange guards and gaskets perform different functions and should not be treated as substitutes for one another.</p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-ink">Frequently Asked Questions</h2>
                <div className="mt-6 space-y-4">
                  {faqs.map(([question, answer], index) => <div key={question} className="rounded-xl border border-line bg-void/30 p-5"><div className="flex items-start gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-teal/30 bg-teal/10 font-mono text-[10px] font-semibold text-teal">{String(index + 1).padStart(2, "0")}</span><div><h3 className="font-display text-base font-semibold leading-7 text-ink">{question}</h3><p className="mt-2 text-sm leading-7 text-mute">{answer}</p></div></div></div>)}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-ink">Need Help With a Flange Protection Requirement?</h2>
                <p className="mt-5 text-sm leading-8 text-mute">SensCore can survey, map and review flange connections to help identify suitable flange guard materials and configurations for industrial facilities across the UAE.</p>
                <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                  <GlowButton href="/contact">Request a Flange Survey</GlowButton>
                  <Link href="/knowledge-centre" className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition hover:border-teal/50 hover:text-teal">More Knowledge Centre <ArrowRight size={16} /></Link>
                </div>
              </section>
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
}
