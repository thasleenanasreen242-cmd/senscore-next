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
    intro: "Reliable flow measurement starts with understanding the application, not simply selecting an instrument. Different liquids, gases and steam services require different measurement principles. Fluid properties, pipe size, operating pressure, temperature, required accuracy, flow range, installation conditions and maintenance requirements can all influence the correct choice.",
    sections: [
      {
        heading: "Choosing the Right Flow Measurement Technology",
        paragraphs: [
          "SensCore supports industrial flow measurement applications with technologies for water, wastewater, chemicals, slurry, steam, compressed air, process gases and other industrial fluids."
        ],
        bullets: [
          "Electromagnetic Flowmeters — Electromagnetic flowmeters measure the volumetric flow of conductive liquids using electromagnetic induction. With no obstruction inside the measuring tube, they are widely considered for water, wastewater, conductive chemicals, slurry and other suitable process liquids. Liner and electrode selection should be matched carefully to the process medium, especially where corrosion, abrasion or temperature are important considerations.",
          "Vortex Flowmeters — Vortex flowmeters measure flow by detecting vortices generated as the fluid passes a bluff body. They can be applied to liquids, gases and steam where process and installation conditions are suitable. They are particularly relevant to steam measurement, utility monitoring and industrial gas applications. Multivariable configurations can also incorporate temperature and pressure information for compensated flow measurement.",
          "Ultrasonic and Clamp-On Flowmeters — Ultrasonic flow measurement uses acoustic signals to determine fluid velocity. Clamp on ultrasonic flowmeters can be useful when measurement is required without cutting the existing pipeline. This makes the technology particularly valuable for temporary flow surveys, verification work and applications where process interruption should be minimised. SensCore includes clamp on ultrasonic measurement within its flow measurement and survey capability.",
          "Coriolis Mass Flowmeters — Coriolis flowmeters measure mass flow directly and are suited to applications where accurate mass measurement is important. They can be considered for a wide range of liquids, including higher viscosity fluids, suspensions and demanding process applications, subject to correct sizing and material compatibility.",
          "Thermal Mass Flowmeters — Thermal mass flowmeters measure gas mass flow using heat transfer principles. They are particularly useful for compressed air and industrial gas measurement where direct mass flow information is required. Applications can include compressed air consumption, nitrogen, oxygen, argon, combustion air and other compatible gases.",
          "Differential Pressure and Pitot Tube Flowmeters — Differential pressure measurement determines flow from the relationship between fluid velocity and measured pressure difference. Pitot-tube based systems can be useful for compressed air, gases, steam and larger pipelines where insertion measurement and relatively low-pressure loss are important considerations. Certain configurations can also support installation on operating pipelines.",
          "Turbine, Variable Area and Other Flowmeters — Turbine flowmeters use a rotating element whose speed corresponds to fluid velocity and can provide a pulse signal proportional to flow. Variable area meters provide a simple approach for suitable smaller flow applications. SensCore can also support water meters, micro flowmeters and other measurement technologies where the process requirement calls for a more specialised solution."
        ]
      },
      {
        heading: "What Should Engineers Consider When Selecting a Flowmeter?",
        paragraphs: [
          "Flowmeter selection should consider the complete operating condition.",
          "Important factors include the measured medium, minimum and maximum flow, pipe diameter, pressure, temperature, density, viscosity, conductivity, solids content, required accuracy, available straight pipe length, connection type, material compatibility, hazardous area requirements, communication outputs and future maintenance access.",
          "The best measurement technology is therefore application specific."
        ]
      },
      {
        heading: "Typical Industrial Flow Measurement Applications",
        paragraphs: [
          "SensCore supports flow measurement requirements across water and wastewater systems, oil and gas facilities, chemical processing, manufacturing, power generation, food and beverage plants, utilities, compressed air networks, HVAC and district cooling systems.",
          "Applications may include process flow control, utility metering, steam monitoring, compressed air consumption, water distribution, chemical transfer, energy analysis, cooling circuits and temporary flow surveys."
        ]
      },
      {
        heading: "Flow Measurement Support Across the UAE",
        paragraphs: [
          "Based in the UAE, SensCore supports industrial flow measurement requirements across Abu Dhabi, Dubai, Sharjah, Ajman, Ras Al Khaimah (RAK), Fujairah and Umm Al Quwain (UAQ).",
          "Our approach is centred on the process conditions and engineering requirement. Support can include flowmeter selection, application review, onsite flow surveys, flowmeter verification, commissioning support and troubleshooting for existing measurement systems."
        ]
      },
      {
        heading: "Frequently Asked Questions",
        paragraphs: [
          "Which flowmeter is best for an industrial application?\nThere is no single best flowmeter. The correct technology depends on the fluid, flow range, pipe size, pressure, temperature, accuracy requirement and installation conditions.",
          "Which flowmeter is commonly used for water and wastewater?\nElectromagnetic flowmeters are widely considered for conductive water and wastewater applications. Ultrasonic technologies can also be appropriate, particularly where non-intrusive measurement is required.",
          "What type of flowmeter can measure steam?\nVortex and differential pressure technologies are commonly considered for steam measurement. Final selection should account for steam condition, pressure, temperature, flow range and required compensation.",
          "Can flow be measured without cutting the pipeline?\nYes. Clamp on ultrasonic flowmeters can measure suitable liquids externally without modifying the pipe. They are commonly useful for surveys, temporary measurement and verification.",
          "What information is required to select a flowmeter?\nAt minimum, provide the fluid, pipe size, flow range, operating pressure, temperature, connection requirement and required output. Details such as conductivity, viscosity, density and solids content may also be necessary depending on the application."
        ]
      },
      {
        heading: "Need Help with a Flow Measurement Application?",
        paragraphs: [
          "SensCore can review your process conditions and help determine a suitable measurement principle, configuration and installation approach for industrial flow applications across the UAE."
        ]
      }
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
