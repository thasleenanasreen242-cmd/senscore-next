export type KnowledgeArticle = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    slug: "flow-measurement",
    title: "Flow Measurement for Industrial Applications",
    seoTitle: "Flow Measurement UAE | Industrial Flowmeter Guide | SensCore",
    description: "Technical guidance on industrial flow measurement, flowmeter selection and applications for water, steam, gas, chemicals and compressed air across the UAE.",
    intro: "Reliable flow measurement starts with understanding the application, not simply selecting an instrument. Different liquids, gases and steam services require different measurement principles.",
    sections: [
      { heading: "Choosing the Right Flow Measurement Technology", paragraphs: ["Fluid properties, pipe size, operating pressure, temperature, required accuracy, flow range, installation conditions and maintenance requirements can all influence the correct choice."], bullets: ["Electromagnetic flowmeters — conductive liquids, water, wastewater, chemicals and suitable slurry.", "Vortex flowmeters — liquids, gases and steam where process and installation conditions are suitable.", "Ultrasonic and clamp-on flowmeters — useful where measurement is required without cutting the existing pipeline.", "Coriolis mass flowmeters — direct mass measurement for demanding liquid applications.", "Thermal mass flowmeters — gas mass-flow measurement, including compressed air applications."] },
      { heading: "Industrial Applications", paragraphs: ["SensCore supports industrial flow measurement for water, wastewater, chemicals, slurry, steam, compressed air, process gases and other industrial fluids."] }
    ]
  },
  {
    slug: "level-measurement",
    title: "Level Measurement for Industrial Applications",
    seoTitle: "Level Measurement UAE | Industrial Level Instrumentation | SensCore",
    description: "Practical guidance on industrial level measurement for liquids, slurry and bulk solids across the UAE.",
    intro: "Level measurement selection depends on the vessel, process medium and operating conditions. Foam, vapour, dust, agitation, temperature and vessel geometry can all affect technology selection.",
    sections: [{ heading: "Application Considerations", paragraphs: ["Evaluate the medium, vessel geometry, measuring range, process conditions, installation constraints and required accuracy before selecting a level technology."] }]
  },
  {
    slug: "pressure-temperature",
    title: "Pressure and Temperature Measurement",
    seoTitle: "Pressure and Temperature Measurement UAE | SensCore",
    description: "Guidance on selecting and applying pressure and temperature instruments across industrial pipelines, vessels and utilities.",
    intro: "Pressure and temperature instruments must be selected around the actual process conditions and installation environment.",
    sections: [{ heading: "Selection Considerations", paragraphs: ["Consider range, pressure or temperature conditions, materials, connections, environmental conditions, accuracy and signal requirements."] }]
  },
  {
    slug: "process-analysis",
    title: "Process Analysis and Water Quality Monitoring",
    seoTitle: "Process Analysis UAE | Water Quality Instrumentation | SensCore",
    description: "Technical guidance on pH, conductivity, dissolved oxygen, turbidity, chlorine and industrial process analysis.",
    intro: "Process analysis provides visibility into water quality and critical process parameters. Technology should be selected around the medium, range, installation and maintenance requirements.",
    sections: [{ heading: "Common Analytical Parameters", paragraphs: ["Applications may involve pH, conductivity, dissolved oxygen, turbidity, chlorine and other analytical measurements depending on the process."] }]
  },
  {
    slug: "automation-connectivity",
    title: "Industrial Automation and Connectivity",
    seoTitle: "Industrial Automation UAE | PLC Remote IO Connectivity | SensCore",
    description: "Practical guidance on PLCs, Remote IO, industrial communication, protocol conversion and instrument connectivity across the UAE.",
    intro: "Modern industrial automation connects field instruments and equipment to controllers, communication networks and supervisory systems.",
    sections: [{ heading: "PLC, Remote IO and Industrial Networks", paragraphs: ["SensCore supports PLC and Remote IO selection, industrial communication, protocol conversion, instrument connectivity and integration for new projects, plant upgrades and existing systems."], bullets: ["Remote IO collects distributed field signals and communicates with a PLC or control system.", "Protocol gateways allow equipment using different communication protocols to exchange information.", "IO Link can carry process values together with device information, configuration and diagnostics."] }]
  },
  {
    slug: "valves-flow-control",
    title: "Industrial Valves and Flow Control",
    seoTitle: "Valves and Flow Control UAE | Industrial Valves | SensCore",
    description: "Technical guidance on industrial valves, flow control, butterfly valves, ball valves, control valves and valve automation for applications across the UAE.",
    intro: "Industrial valves control, isolate, regulate or direct the movement of liquids, gases, steam, slurry and other process media. Selecting the correct valve requires more than matching pipeline size.",
    sections: [
      { heading: "Butterfly Valves", paragraphs: ["Butterfly valves use a rotating disc to control or isolate flow. Wafer, lug and double-flanged designs may be considered, including concentric, high-performance and triple-offset arrangements."] },
      { heading: "Ball Valves", paragraphs: ["Ball valves use a rotating ball with an internal flow passage and are commonly selected for reliable shut-off and relatively low flow resistance. Configurations may include threaded, flanged, three-piece, three-way, floating and trunnion-mounted designs."] },
      { heading: "Gate, Globe and Check Valves", paragraphs: ["Gate valves are primarily used for isolation, globe valves are commonly considered for regulation or throttling, and check valves help prevent reverse flow."] },
      { heading: "Specialised Valves for Challenging Applications", paragraphs: ["Abrasive slurry, powders, corrosive chemicals and dry bulk materials can create specific challenges involving wear, material build-up, sealing and operating torque. ABC Valve offers abrasion-resistant butterfly valves, lined ball valves, inflatable-seat butterfly valves, dome valves, powder discharge valves, rotary valves and slide-gate solutions."] },
      { heading: "Valve Actuation and Automation", paragraphs: ["Pneumatic and electric actuators can be used for automated operation. Assemblies may include solenoid valves, limit switches, valve indicators and positioners."] },
      { heading: "Control Valves and Flow Regulation", paragraphs: ["Control valve selection should consider required flow capacity, pressure conditions, available pressure drop, fluid properties, operating range, actuator requirements and control signal. The final valve assembly should be evaluated as part of the complete process control loop."] }
    ]
  },
  {
    slug: "pumps-dosing",
    title: "Industrial Pumps and Dosing",
    seoTitle: "Industrial Pumps and Dosing UAE | Pump Selection Guide | SensCore",
    description: "Technical guidance on industrial pumps, AODD pumps, metering and dosing pumps, centrifugal pumps and specialised pumping applications across the UAE.",
    intro: "Industrial pump selection starts with the application. Flow rate and pressure are important, but fluid properties, viscosity, solids content, chemical compatibility, suction conditions, temperature and operating pattern also matter.",
    sections: [
      { heading: "AODD Pumps", paragraphs: ["Air Operated Double Diaphragm pumps use compressed air to move flexible diaphragms. They are widely used for chemicals, viscous liquids, slurry, wastewater and suspended solids where suitable materials can be selected."] },
      { heading: "Metering and Dosing Pumps", paragraphs: ["Metering pumps provide controlled delivery of liquids for chemical dosing, water treatment, disinfection, pH correction and process additives. Required dosing rate, discharge pressure, chemical properties and control method should be defined before selection."] },
      { heading: "Centrifugal and Process Pumps", paragraphs: ["Centrifugal pumps are widely used for water circulation, utilities, cooling systems, process transfer and general industrial pumping. Selection should consider duty point, suction conditions, system resistance, fluid properties and material compatibility."] }
    ]
  },
  {
    slug: "flange-protection",
    title: "Industrial Flange Guards and Leak Protection",
    seoTitle: "Flange Guards UAE | Industrial Flange Protection | SensCore",
    description: "Technical guidance on flange guards, spray protection, chemical flange safety, leak containment and industrial flange protection across the UAE.",
    intro: "Flanged connections are common throughout industrial piping systems. Where the medium is corrosive, hazardous, hot or flammable, a pressurised spray can create risks for personnel and equipment.",
    sections: [{ heading: "Flange Protection", paragraphs: ["Flange guards provide secondary protection around flanged joints by helping contain, control or redirect an unexpected release. They do not replace correct gasket selection, flange assembly or maintenance. SensCore supports flange surveys, mapping, customised guard selection and installation."] }, { heading: "Industrial Gaskets", paragraphs: ["Gaskets remain the primary sealing element within a flanged joint. SensCore can support flat, spiral-wound, cam-profile and ring-joint constructions where required."] }]
  },
  {
    slug: "compressed-air-energy-efficiency",
    title: "Compressed Air and Energy Efficiency",
    seoTitle: "Compressed Air Audit UAE | Energy Efficiency and Flow Measurement | SensCore",
    description: "Technical guidance on compressed air audits, compressor efficiency, air flow measurement, network monitoring and energy efficiency for industrial facilities across the UAE.",
    intro: "Compressed air is an essential industrial utility, but its performance cannot be managed effectively without reliable measurement. Systems can experience excessive consumption, leakage, pressure losses, inefficient compressor loading or poor distribution.",
    sections: [
      { heading: "Compressed Air Flow Measurement", paragraphs: ["Measuring air flow at compressor outlets, main distribution lines, production areas or individual equipment helps establish consumption patterns and changes in demand. Thermal mass flowmeters are widely used for compressed air; differential pressure and insertion technologies may also be considered."] },
      { heading: "Compressed Air Network Auditing", paragraphs: ["A complete audit assesses the distribution network as well as the compressor room. Measurement can identify unexpected consumption, pressure-related inefficiencies, high-consumption areas and possible leakage or uncontrolled usage."] },
      { heading: "Improving Energy Efficiency", paragraphs: ["Potential opportunities include repairing leaks, reviewing compressor sequencing, reducing unnecessary air consumption, improving distribution, correcting pressure settings and identifying equipment using more air than expected."] }
    ]
  },
  {
    slug: "engineering-practice",
    title: "Engineering Practice and Industrial Applications",
    seoTitle: "Industrial Engineering and Instrumentation UAE | SensCore",
    description: "Practical guidance on instrument selection, specification, installation, commissioning, verification and industrial applications across the UAE.",
    intro: "Good industrial measurement begins before an instrument is installed. Process conditions must first be understood, followed by correct technology selection, specification, installation, commissioning and ongoing verification.",
    sections: [
      { heading: "Application-Based Instrument Selection", paragraphs: ["The same measurement requirement can often be solved using several technologies, but they may not perform equally well under actual process conditions. Flowmeter selection can depend on conductivity, viscosity, solids content, pipe size, pressure, temperature and available installation space. Level measurement can be influenced by foam, vapour, dust, agitation and vessel geometry."] },
      { heading: "Engineering Specification Review", paragraphs: ["Important requirements can include the measured or handled medium, operating and design conditions, measurement range, pipe or vessel dimensions, materials, process connections, accuracy, electrical and communication requirements, environmental conditions and hazardous-area requirements where applicable."] },
      { heading: "Commissioning and Verification", paragraphs: ["Commissioning can include installation inspection, configuration, signal testing, loop checking, communication verification and confirmation that measurement is correctly received by the control system."] }
    ]
  }
];

export function getKnowledgeArticle(slug: string) {
  return KNOWLEDGE_ARTICLES.find((article) => article.slug === slug);
}
