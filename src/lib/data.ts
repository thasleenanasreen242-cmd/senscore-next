export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/knowledge-centre", label: "Knowledge Centre" },
  { href: "/contact", label: "Contact" },
];

export const PRODUCT_CATEGORIES = [
  {
    id: "instrumentation",
    title: "Instrumentation",
    tag: "SENSE",
    description:
      "Flow, level, pressure and temperature instrumentation selected around the process medium, operating range, installation conditions and demanding UAE environments.",
    groups: [
      { heading: "Flow Meters", items: "Electromagnetic, vortex, ultrasonic, Coriolis, thermal mass and differential pressure flow meters" },
      { heading: "Level Measurement", items: "Radar, guided wave radar, ultrasonic and magnetostrictive level transmitters, level gauges and switches" },
      { heading: "Pressure Measurement", items: "Pressure and differential pressure transmitters, digital pressure gauges and pressure switches" },
      { heading: "Temperature Measurement", items: "RTDs, thermocouples, temperature transmitters, infrared thermometers and temperature gauges" },
      { heading: "Other Instruments", items: "Flow switches, signal isolators, indicators, data loggers and portable measurement instruments" },
    ],
  },
  {
    id: "automation",
    title: "Automation & Connectivity",
    tag: "CONNECT",
    description:
      "PLCs, remote I/O, industrial communication and IIoT connectivity linking field devices, control systems and plant data. Selected around protocol, network architecture, operating environment and integration requirements.",
    groups: [
      { heading: "Controllers & I/O", items: "PLCs, remote I/O systems and IO-Link modules" },
      { heading: "Industrial Sensors", items: "Proximity, inductive, photoelectric, capacitive and ultrasonic sensors" },
      { heading: "Industrial Communication", items: "Protocol gateways, industrial Ethernet switches and serial/fieldbus converters" },
      { heading: "Connectors & Cable Assemblies", items: "Circular, IO-Link, push-pull, D-SUB and MIL-standard industrial connectors" },
      { heading: "RFID & Identification", items: "RFID read/write systems and industrial identification solutions" },
      { heading: "HMI & SCADA", items: "Operator panels, industrial PCs and SCADA systems for monitoring and control" },
    ],
  },
  {
    id: "valves",
    title: "Valves",
    tag: "CONTROL",
    description:
      "Isolation, control and automated valve solutions selected around pressure, temperature, media compatibility, shut-off requirements and operating duty. (API/ASME certified)",
    groups: [
      { heading: "Pipeline Valves", items: "Ball, butterfly, gate, globe and check valves" },
      { heading: "Automated & Control Valves", items: "Control valves, actuated ball and butterfly valves, solenoid valves, pneumatic and electric actuators" },
      { heading: "Specialty Valves", items: "Plug, knife gate, lined, cryogenic, Safety relief valves (API/ASME certified) and application-specific valves" },
    ],
  },
  {
    id: "analysers",
    title: "Analysers",
    tag: "ANALYSE",
    description:
      "Online and portable analysis solutions for water quality, process gases and critical parameters, supporting process control, quality monitoring and environmental compliance.",
    groups: [
      { heading: "Water Quality Analysers", items: "pH, ORP, conductivity, dissolved oxygen, turbidity, TSS, chlorine, COD, BOD and TOC measurement" },
      { heading: "Gas & Process Analysis", items: "Oxygen, moisture and dew point analysers for industrial gas and process applications" },
      { heading: "Gas Detection", items: "CO₂ and multi-gas detection systems for industrial monitoring and safety applications" },
    ],
  },
  {
    id: "pumps",
    title: "Pumps",
    tag: "MOVE",
    description:
      "Industrial pumping solutions selected around duty point, fluid properties, material compatibility, operating conditions and lifecycle requirements, not simply the initial purchase cost.",
    groups: [
      { heading: "AODD Pumps", items: "Metallic and non-metallic air-operated double-diaphragm pumps for industrial fluid transfer" },
      { heading: "Metering & Dosing Pumps", items: "Precision metering and chemical dosing pumps for controlled fluid injection" },
      { heading: "Specialised Pumps", items: "Powder-transfer, sanitary, slurry and application-specific diaphragm pump solutions" },
      { heading: "Centrifugal & Process Pumps", items: "End-suction, multistage, vertical-inline and engineered process pump configurations" },
      { heading: "Spares & Accessories", items: "Diaphragms, valve balls and seats, air-valve assemblies, repair kits, pulsation dampeners and air regulators" },
    ],
  },
  {
    id: "flangeguards",
    title: "Flange Guards & Gaskets",
    tag: "PROTECT",
    description:
      "Flange protection and engineered sealing solutions for hazardous, corrosive, high-temperature and critical-service piping, supported by material selection, site surveys, mapping and installation.",
    groups: [
      { heading: "Flange Guards & Spray Shields", items: "PTFE, metallic and application-specific flange guards for leak containment and spray protection" },
      { heading: "Industrial Gaskets", items: "Spiral wound, RTJ, Kammprofile, metal-jacketed, corrugated and soft-cut gaskets" },
      { heading: "Flange Insulation Kits", items: "Insulation gasket kits, phenolic sleeves and washers, GRE insulation sets and isolation components" },
      { heading: "Sealing Materials", items: "Graphite, PTFE, CNAF, rubber and high-temperature sealing materials" },
      { heading: "Custom & Critical-Service Solutions", items: "CNC-machined and special-dimension gaskets, engineered sealing components and solutions for demanding process applications" },
      { heading: "Site Services", items: "Flange guard surveys, mapping, customization and installation support" },
    ],
  },
  {
    id: "services",
    title: "Services",
    tag: "SUSTAIN",
    description:
      "On-site measurement, audits and engineering support for industrial facilities across the UAE, from flow and compressed-air performance to automation, equipment support and energy efficiency.",
    groups: [
      { heading: "Compressed Air Audits", items: "Compressor efficiency assessment, network flow measurement, leak detection and optimisation analysis" },
      { heading: "Flow Surveys & Verification", items: "On-site liquid, gas and steam flow measurement, flowmeter verification and troubleshooting" },
      { heading: "Automation & Control Integration", items: "PLC programming, I/O configuration, HMI/SCADA integration and control-system support" },
      { heading: "Pump Services", items: "Installation supervision, preventive maintenance, troubleshooting, repair and spare-parts support" },
      { heading: "Valve Services", items: "Valve sizing support, actuator mounting and testing, troubleshooting and on-site technical support" },
      { heading: "Energy & Efficiency Services", items: "BTU and energy measurement, steam-trap surveys, heat-exchanger performance monitoring and plant efficiency studies" },
    ],
  },
];

export const INDUSTRIES = [
  {
    id: "oil-gas",
    title: "Oil & Gas",
    badge: "Zone 1 / 2 · Hazardous Area Solutions",
    footerTag: "Upstream · Midstream · Downstream",
    description:
      "Instrumentation, flow control and engineered solutions for upstream, midstream and downstream applications, including hazardous areas and critical-service process lines.",
    stat: "±0.1%",
    statLabel: "Custody metering accuracy",
    supply: [
      "Flow measurement for liquids, gas and hydrocarbons — Coriolis, ultrasonic, vortex & turbine flow meters",
      "Tank & separator level measurement — Radar and guided wave radar",
      "Control, isolation & automated valves",
      "Spiral wound, RTJ & metal-jacketed gaskets",
      "Hazardous-area pressure & temperature instrumentation",
      "Gas detection & process monitoring",
      "Flange guards, spray shields & insulation kits",
      "Instrumentation fittings, manifolds & accessories",
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    badge: "4–20mA / HART — Field to Control Room",
    footerTag: "Measurement · Automation · Energy Efficiency",
    description:
      "Industrial instrumentation, automation and efficiency solutions for manufacturing facilities, helping improve process visibility, production reliability and energy performance.",
    stat: "24/7",
    statLabel: "Line monitoring",
    supply: [
      "Flow, pressure, level and temperature instrumentation",
      "PLCs, remote I/O, HMI/SCADA and IIoT connectivity",
      "Industrial sensors for detection and position monitoring",
      "Automated valves, actuators and process control",
      "Compressed air flow measurement and network monitoring",
      "Compressed air leak detection and efficiency audits",
      "AODD, metering and process pumping solutions",
      "Energy and utility performance measurement",
    ],
  },
  {
    id: "food-beverage",
    title: "Food & Beverage",
    badge: "3-A / FDA — Hygienic Design",
    footerTag: "Hygienic · Process Measurement",
    description:
      "Hygienic instrumentation, process control and analysis solutions for food and beverage production, selected around cleanability, product compatibility and process requirements.",
    stat: "HACCP",
    statLabel: "Compliant data trails",
    supply: [
      "Hygienic flow measurement — Electromagnetic and Coriolis flow meters with sanitary process connections",
      "Hygienic level measurement for tanks, vessels and process systems",
      "Sanitary valves and automated flow control",
      "Metering, dosing and hygienic pumping solutions",
      "Pressure and temperature instrumentation for hygienic process applications",
      "pH, conductivity, dissolved oxygen and turbidity analysis",
      "Food-contact sealing and gasket solutions",
      "Instrumentation support for process monitoring and quality control",
    ],
  },
  {
    id: "water-utilities",
    title: "Water & Utilities",
    badge: "±0.3% — Flow Accuracy",
    footerTag: "Flow · Quality · Level Monitoring",
    description:
      "Flow measurement, water quality analysis and process control solutions for water treatment, distribution, wastewater and utility networks.",
    stat: "-18%",
    statLabel: "Avg. non-revenue water",
    supply: [
      "Electromagnetic flow meters for water and wastewater applications",
      "Bulk and district water metering",
      "Multi-parameter water quality monitoring systems",
      "Control and isolation valves",
      "On-site flow surveys and flowmeter verification",
      "Ultrasonic and insertion flow measurement",
      "Online water quality analysers — pH, ORP, conductivity, dissolved oxygen, turbidity, chlorine, ammonia and COD",
      "Level measurement for reservoirs, tanks, wells and treatment systems",
      "Metering and dosing pumps for chemical treatment applications",
    ],
  },
  {
    id: "power-energy",
    title: "Power Generation & Energy",
    badge: "24/7 Line Monitoring",
    footerTag: "Steam · Water · Utility Measurement",
    description:
      "Instrumentation, flow measurement and control solutions for steam, feedwater, utilities and critical process systems in power generation and energy facilities.",
    stat: "3x",
    statLabel: "Faster fault detection",
    supply: [
      "Steam and feedwater flow measurement — Vortex and differential pressure technologies",
      "Temperature measurement — RTDs, thermocouples and temperature transmitters",
      "Compressed air and utility flow measurement",
      "Flange guards and sealing solutions for high-temperature service",
      "Pressure and differential pressure instrumentation for demanding process conditions",
      "Control and automated valves for steam, water and utility applications",
      "Process monitoring and industrial connectivity",
      "Compressed air audits and energy-efficiency analysis",
    ],
  },
  {
    id: "hvac-facilities",
    title: "HVAC, District Cooling & Facilities",
    badge: "DN15–DN2000 — Line Size Coverage",
    footerTag: "Chilled Water · HVAC · Building Utilities",
    description:
      "Flow, pressure, temperature and control solutions for chilled water, district cooling, HVAC systems and building utility networks.",
    stat: "-22%",
    statLabel: "Avg. energy reduction",
    supply: [
      "Chilled water and thermal energy measurement",
      "Temperature measurement for ducts, pipes and HVAC systems",
      "Motorised control valves and actuators",
      "Building automation, remote I/O and communication gateways",
      "Differential pressure transmitters and switches",
      "Flow measurement for utility and distribution networks",
      "Butterfly, isolation and control valves",
      "Pumping and flow-control solutions for chilled water systems",
    ],
  },
];

export const PARTNERS = [
  { name: "Feejoy", href: "https://en.feejoy.com/" },
  { name: "ODOT Automation", href: "https://www.odotautomation.com/" },
  { name: "Artema", href: "" },
  { name: "Comate", href: "https://www.comate-instruments.com/" },
  { name: "DJ Pumps", href: "https://www.pumpfromchina.com/" },
  { name: "Probest", href: "" },
];

export const CLIENTS = [
  "Atlas Copco", "Bosch", "BYD", "Chery", "CNPC", "Coca-Cola", "CRRC",
  "Doosan", "Egypt GAS", "Emerson", "IKEA", "Jindal Steel & Power",
  "John Crane", "Metso", "Midea", "Mitsubishi", "Panasonic",
  "Saint-Gobain", "SANY", "SLB", "Toshiba",
];

export const REPRESENTED_BRANDS = [
  "ABB", "ACO", "ASCO", "Alfa Laval", "Allen Bradley", "Atlas Copco", "Balluff",
  "Basler", "Baumer", "Bitzer", "Boxo", "Carrier", "Control Techniques",
  "Datalogic", "Det-Tronics", "Dewalt", "Dwyer", "Eaton", "Elobau",
  "Elster (Honeywell)", "Emerson", "Endress+Hauser", "Euromag International",
  "Festo", "Fluke", "Foxtam Controls", "Frick", "Fristam", "Gefran", "HBM",
  "Honeywell", "IFM", "Isoil Industria", "Jumo", "Kimo Instruments", "Krohne",
  "Land (Ametek)", "Lenze", "Lovato", "Mitsubishi", "Omega", "Omron",
  "Panasonic", "Parker", "Pilz", "Raytek (Fluke PI)", "Riels Instruments",
  "Rosemount", "SICK", "SPM", "Sabroe", "Samson", "Schneider", "Siemens",
  "Sumitomo", "TuFIT", "Turck Banner", "United Electric Controls (UE)",
  "Wago", "Weidmüller", "Xtralis", "Yokogawa", "York",
];

export const CONTACT = {
  address: "9th Floor, Mazyad Mall - Business Tower 3, MBZ City, Abu Dhabi, UAE",
  email: "info@senscoretech.com",
  enquiriesEmail: "enquiries@senscore.ae",
  phone: "+971 50 103 5348",
  phoneHref: "tel:+971501035348",
  linkedin: "https://www.linkedin.com/company/senscore/",
  instagram: "https://www.instagram.com/senscoretech",
};

export const LOCATIONS = [
  {
    country: "UAE",
    label: "Head Office",
    address: "9th Floor, Mazyad Mall, Business Tower 3, MBZ City, Abu Dhabi, UAE",
  },
  {
    country: "UAE",
    label: "Warehouse & Logistics",
    address: "No. 22, Mussafah 9, Mussafah Industrial Area, PO Box 35514, Abu Dhabi, UAE",
  },
  {
    country: "South Africa",
    label: "SensCore",
    address: "65, 2nd Ave, Lambton, Germiston, Johannesburg, South Africa",
    phone: "+27 67 668 4947",
  },
  {
    country: "Georgia",
    label: "SensCore",
    address: "Unit 87 Crossroad, Avlabari, Tbilisi, Georgia",
    phone: "+995 59 364 9007",
  },
  {
    country: "UK",
    label: "SensCore",
    address: "63 Barnwood Rd, Gloucester GL2 0SF, United Kingdom",
    phone: "+44 7384 055110",
  },
  {
    country: "India",
    label: "SensCore",
    address: "HiLITE Business Park, State Highway 28, Palazhi, Kozhikode, Kerala 673014, India",
    phone: "+91 956 719 2688",
  },
];
