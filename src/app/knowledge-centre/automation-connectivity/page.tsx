import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import GlowButton from "@/components/GlowButton";

export const metadata: Metadata = {
  title: "Industrial Automation UAE | PLC, Remote IO and Connectivity | SensCore",
  description: "Technical guidance on industrial automation, PLC systems, Remote IO, IO Link, industrial networks and protocol connectivity for applications across the UAE.",
  alternates: { canonical: "https://www.senscoretech.com/knowledge-centre/automation-connectivity" },
};

const sections: { heading: string; paragraphs: string[]; bullets?: [string, string][] }[] = [
  {
    heading: "Industrial Automation and Connectivity",
    paragraphs: [
      "Modern industrial automation depends on more than a controller. Reliable operation requires sensors, instruments, IO systems, communication networks and control platforms to exchange process information accurately and consistently.",
      "The right automation architecture depends on the process, number and location of field devices, communication protocols, control requirements, future expansion and existing plant infrastructure.",
      "SensCore supports industrial automation and connectivity requirements including PLC systems, Remote IO, IO Link, protocol gateways, industrial Ethernet and integration of field instrumentation with monitoring and control systems.",
    ],
  },
  {
    heading: "Programmable Logic Controllers",
    paragraphs: ["A Programmable Logic Controller, commonly known as a PLC, provides the control logic for machines, processes and industrial systems.", "PLCs receive information from sensors and instruments, execute programmed logic and send commands to equipment such as valves, pumps, motors and actuators.", "Selection should consider IO capacity, processing requirements, communication interfaces, programming environment, expansion capability and compatibility with the wider automation system.", "ODOT currently provides PLC platforms alongside its industrial communication and distributed IO technologies."],
  },
  {
    heading: "Remote IO Systems",
    paragraphs: ["Remote IO allows input and output modules to be installed closer to field equipment while communicating with the main controller through an industrial network.", "This approach can reduce long individual cable runs and provide a structured way to collect digital, analogue and temperature signals from distributed plant areas.", "Remote IO can be particularly useful in larger automation systems, plant expansions and applications where instruments are distributed across several locations.", "ODOT offers modular and integrated Remote IO systems with network adapters supporting communication technologies including Modbus TCP, PROFINET, EtherCAT, EtherNet IP, PROFIBUS DP and other industrial protocols."],
  },
  {
    heading: "IO Link and Smart Device Connectivity",
    paragraphs: ["IO Link provides digital communication between compatible sensors, actuators and an IO Link master.", "In addition to basic process values, compatible devices can make diagnostic and configuration information available to the automation system.", "This can support more structured device management, commissioning and maintenance where IO Link compatible field equipment is used.", "ODOT currently offers IP67 IO Link systems, IO Link masters and IO Link slave products for industrial connectivity applications."],
  },
  {
    heading: "Industrial Protocol Converters and Gateways",
    paragraphs: ["Industrial plants often contain equipment using different communication standards.", "A protocol converter or gateway allows devices using one communication method to exchange information with another network without replacing the entire existing system.", "Typical requirements can include connecting serial devices to Ethernet networks or converting between Modbus RTU, Modbus TCP, PROFINET, PROFIBUS DP and other protocols.", "For example, ODOT provides gateways for Modbus RTU and ASCII to PROFINET, serial communication to Modbus TCP, and other industrial protocol conversion requirements."],
  },
  {
    heading: "Industrial Ethernet Switches",
    paragraphs: ["Industrial Ethernet switches provide network connectivity between PLCs, Remote IO, HMIs, gateways, computers and other Ethernet based automation devices.", "Unlike general office networking equipment, industrial switches are intended for installation within industrial environments and control panels.", "Network design should consider the required number of ports, communication speed, managed or unmanaged architecture, redundancy requirements and overall plant network structure.", "ODOT offers industrial Ethernet switching products alongside its PLC, IO and communication portfolio."],
  },
  {
    heading: "Connecting Instrumentation to Automation Systems",
    paragraphs: ["Automation begins with reliable field information.", "Flowmeters, level transmitters, pressure transmitters, temperature instruments and process analysers may communicate through conventional analogue signals or digital protocols depending on the application.", "A well-planned connectivity architecture allows measurement data to move from the field instrument through IO or communication networks to PLC, HMI, SCADA or other monitoring systems.", "SensCore therefore approaches automation and instrumentation as connected engineering disciplines rather than isolated product categories. Our current portfolio includes PLCs, Remote IO, communication gateways, industrial switches, HMI and SCADA technologies alongside process instrumentation."],
  },
  {
    heading: "What Should Engineers Consider When Selecting an Automation Architecture?",
    paragraphs: ["Important considerations include the number and type of field signals, physical distance between devices, required control speed, communication protocol, existing PLC architecture, network availability, environmental conditions and future expansion.", "Engineers should also identify whether existing equipment needs to be retained. In many upgrade projects, suitable gateways and Remote IO can allow older field equipment to communicate with newer automation networks.", "The objective should be a maintainable and compatible system rather than adding connectivity without a defined operational purpose."],
  },
  {
    heading: "Typical Industrial Automation Applications",
    paragraphs: ["Automation and industrial connectivity are used across water and wastewater facilities, oil and gas, chemical processing, manufacturing, power, utilities, food and beverage, material handling and infrastructure.", "Applications can include machine control, process automation, distributed data acquisition, pump and valve control, utility monitoring, production systems, remote instrumentation and plant modernisation."],
  },
  {
    heading: "Industrial Automation Support Across the UAE",
    paragraphs: ["SensCore supports industrial automation and connectivity requirements across Abu Dhabi, Dubai, Sharjah, Ajman, Ras Al Khaimah (RAK), Fujairah and Umm Al Quwain (UAQ).", "Support can include PLC and Remote IO selection, industrial communication, protocol conversion, instrument connectivity and integration requirements for new projects, plant upgrades and existing industrial systems across the UAE."],
  },
  {
    heading: "Frequently Asked Questions",
    paragraphs: [],
    bullets: [
      ["What is Remote IO in industrial automation?", "Remote IO collects signals from field instruments and equipment at distributed locations and communicates the information to a PLC or control system through an industrial network."],
      ["What is the difference between a PLC and Remote IO?", "A PLC executes the control programme and makes control decisions. Remote IO primarily provides distributed input and output points that communicate field signals to and from the controller."],
      ["Why are protocol gateways used in industrial plants?", "Gateways allow equipment using different communication protocols to exchange information. They can be particularly useful when integrating existing devices into newer automation networks."],
      ["What is IO Link used for?", "IO Link provides digital communication between compatible field devices and an IO Link master. It can carry process values along with device information, configuration and diagnostic data."],
      ["Which industrial communication protocol should be selected?", "There is no single protocol suitable for every application. Selection depends on the existing control platform, connected equipment, required performance, network architecture and compatibility requirements."],
    ],
  },
];

export default function AutomationConnectivityPage() {
  return (
    <>
      <PageHero eyebrow="Knowledge Centre" title="Industrial Automation and Connectivity" description="Technical guidance on industrial automation, PLC systems, Remote IO, IO Link, industrial networks and protocol connectivity for applications across the UAE." />
      <main className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal><Link href="/knowledge-centre" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-teal hover:text-ink"><ArrowLeft size={14} /> Back to Knowledge Centre</Link></Reveal>
          <div className="mt-10 space-y-7">
            {sections.map((section, index) => (
              <Reveal key={section.heading} delay={index * 0.03}>
                <section className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
                  <h2 className="font-display text-2xl font-semibold text-ink">{section.heading}</h2>
                  {section.heading === "Frequently Asked Questions" ? (
                    <div className="mt-6 space-y-4">
                      {section.bullets?.map(([question, answer], faqIndex) => <div key={question} className="rounded-xl border border-line bg-void/30 p-5 sm:p-6"><div className="flex items-start gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-teal/30 bg-teal/10 font-mono text-[10px] font-semibold text-teal">{String(faqIndex + 1).padStart(2, "0")}</span><div><h3 className="font-display text-base font-semibold leading-7 text-ink sm:text-lg">{question}</h3><p className="mt-2 text-sm leading-7 text-mute">{answer}</p></div></div></div>)}
                    </div>
                  ) : (
                    <>
                      <div className="mt-5 space-y-4 text-sm leading-8 text-mute">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                    </>
                  )}
                </section>
              </Reveal>
            ))}
            <Reveal><div className="mt-3 flex flex-col gap-4 rounded-2xl border border-line bg-surface p-7 sm:flex-row sm:items-center sm:justify-between"><div><div className="font-display text-lg font-medium text-ink">Need Help with an Automation or Connectivity Requirement?</div><p className="mt-1 text-sm leading-7 text-mute">SensCore can review your field instrumentation, control architecture and communication requirements to help identify suitable automation and connectivity solutions for industrial applications across the UAE.</p></div><GlowButton href="/contact">Talk to an Engineer</GlowButton></div></Reveal>
          </div>
        </div>
      </main>
    </>
  );
}
