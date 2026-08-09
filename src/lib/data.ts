export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export const PRODUCT_CATEGORIES = [
  {
    id: "instrumentation",
    title: "Instrumentation",
    tag: "SENSE",
    description:
      "Flowmeters, level, pressure, and temperature transmitters, specified for the medium, the pressure, and the ambient reality of a GCC site rather than the datasheet ideal.",
    groups: [
      { heading: "Flow Meters", items: "Electromagnetic, Vortex, Ultrasonic, Thermal mass & Differential pressure flow meters" },
      { heading: "Level Measurement", items: "Radar, Ultrasonic & Magnetostrictive level transmitters, Float switches" },
      { heading: "Pressure Measurement", items: "Pressure & Differential pressure transmitters, Digital pressure gauges, Pressure switches" },
      { heading: "Temperature Measurement", items: "RTDs, Thermocouples, Temperature transmitters, Infrared thermometers, Temperature gauges" },
      { heading: "Other Instruments", items: "Flow switches, Signal isolators, Indicators, Data loggers, Portable instruments" },
    ],
  },
  {
    id: "automation",
    title: "Automation & Connectivity",
    tag: "CONNECT",
    description:
      "The nervous system linking field devices to the control room. PLCs, IIoT gateways, and edge nodes selected to survive the environment they're installed in.",
    groups: [
      { heading: "Controllers & I/O", items: "PLCs, Remote I/O systems, IO-Link modules" },
      { heading: "Sensors", items: "Proximity, Inductive, Photoelectric, Capacitive & Ultrasonic" },
      { heading: "Communication", items: "Industrial protocol gateways, Ethernet switches, Serial/fieldbus converters" },
      { heading: "Connectors & Cable Assemblies", items: "Circular, IO-Link, Push-Pull self-locking, D-SUB & MIL-standard connectors" },
      { heading: "RFID & Identification", items: "RFID read/write heads, Smart sensor hubs" },
      { heading: "HMI & SCADA", items: "Operator panels, Industrial PCs, SCADA software" },
    ],
  },
  {
    id: "valves",
    title: "Valves",
    tag: "CONTROL",
    description:
      "Control, isolation, and safety valves engineered for demanding pressures, corrosive media, and continuous duty. Sized and trimmed to the actual service condition.",
    groups: [
      { heading: "Pipeline Valves", items: "Butterfly, Ball, Gate, Globe & Check valves" },
      { heading: "Automation Valves", items: "Solenoid valves, Control valves, Actuated ball & butterfly valves" },
      { heading: "Specialty Valves", items: "Plug valves, Safety relief valves (API/ASME certified), Cryogenic valves" },
    ],
  },
  {
    id: "analysers",
    title: "Analysers",
    tag: "ANALYSE",
    description:
      "Gas, liquid, and water quality analysis covering pH, conductivity, dissolved oxygen, turbidity and beyond. The measurements that decide whether your process is compliant, not just running.",
    groups: [
      { heading: "Analyzers & Gas Detectors", items: "Water quality analyzers, Oxygen analyzers, Moisture analyzers, CO₂ and multi-gas detectors" },
    ],
  },
  {
    id: "pumps",
    title: "Pumps",
    tag: "MOVE",
    description:
      "AODD, centrifugal, and process pumps selected for chemical compatibility, duty point, and energy cost over the life of the asset, not just the purchase price.",
    groups: [
      { heading: "AODD Pumps", items: "Metallic and Non-metallic Air Operated Diaphragm pumps" },
      { heading: "Metering & Dosing Pumps", items: "Precision chemical dosing and metering pumps" },
      { heading: "Specialized Pumps", items: "Powder transfer diaphragm, food-grade sanitary, mining slurry & gas-operated diaphragm pumps" },
      { heading: "Centrifugal & Process Pumps", items: "API 610 standard, End suction & multistage, Vertical inline pumps" },
      { heading: "Accessories & Spares", items: "Diaphragms, Valve balls/seats, Air valve assemblies, Repair kits, Surge dampeners, Air regulators" },
    ],
  },
  {
    id: "flangeguards",
    title: "Flange Guards & Gaskets",
    tag: "PROTECT",
    description:
      "Spray shields, insulation kits, and sealing solutions for high-temperature and critical service lines. Spiral wound, RTJ, and metal jacketed gaskets, plus mapping and installation on site.",
    groups: [
      { heading: "Industrial Gaskets", items: "Spiral wound, RTJ, Kamm profile, Corrugated metal, Jacketed & Flat soft gaskets" },
      { heading: "Sealing Solutions", items: "Graphite sealing products, PTFE sheets & tapes, Expanded graphite sheets, High-temperature sealing materials" },
      { heading: "Flange Insulation Kits", items: "Complete insulation gasket kits, Phenolic sleeves & washers, GRE insulation sets" },
      { heading: "Metallic & Semi-Metallic Gaskets", items: "Spiral wound with inner/outer rings, RTJ (R, RX, BX) & Metal jacketed gaskets" },
      { heading: "Custom Machined Sealing Components", items: "CNC-machined gaskets, Special dimension gaskets, OEM sealing parts" },
      { heading: "High-Temperature & Critical Service", items: "Solutions for Oil & Gas, Petrochemical, Power generation, Refineries" },
      { heading: "Other Sealing Products", items: "O-rings, Rubber gaskets, Die-cut gaskets, Insulation accessories" },
    ],
  },
  {
    id: "services",
    title: "Services",
    tag: "SUSTAIN",
    description:
      "Compressed Air Audit, Liquid, Gas & Steam flow Audit. Engineering support across the asset lifecycle. Sizing and selection, commissioning, calibration, spares, and troubleshooting.",
    groups: [
      { heading: "Compressed Air Audit Service", items: "Compressor efficiency, leakage & optimization analysis" },
      { heading: "Flow Surveys", items: "Flow measurement surveys in existing gas/liquid lines" },
      { heading: "Automation & Control Integration", items: "PLC programming, I/O configuration, HMI/SCADA integration" },
      { heading: "Pump Services", items: "Installation supervision, preventive maintenance, troubleshooting, repair" },
      { heading: "Valve Services", items: "Valve sizing support, Actuator mounting/testing, On-site leak testing" },
      { heading: "Energy & Efficiency Services", items: "BTU/Energy measurement, Steam trap survey, Heat exchanger monitoring" },
    ],
  },
];

export const INDUSTRIES = [
  {
    id: "oil-gas",
    title: "Oil & Gas",
    badge: "Zone 1 / 2 — Hazardous Area Rated",
    description:
      "Custody-grade metering and hazardous-area instrumentation for upstream, midstream, and downstream operations, with flange protection and sealing for critical service lines.",
    stat: "±0.1%",
    statLabel: "Custody metering accuracy",
    supply: [
      "Custody-grade flow measurement — Coriolis, ultrasonic & turbine meters",
      "Hazardous-area pressure and temperature transmitters",
      "Level measurement for tanks and separators",
      "Gas detection and flame detection",
      "Control, isolation, and safety valves",
      "Flange guards, spray shields, and insulation kits",
      "Spiral wound, RTJ, and metal jacketed gaskets",
      "Instrumentation fittings and manifolds",
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    badge: "4–20mA / HART — Field to Control Room",
    description:
      "Process measurement, automation, and compressed air network audits that make production lines visible and energy cost accountable.",
    stat: "24/7",
    statLabel: "Line monitoring",
    supply: [
      "Process flow, pressure, temperature, and level instrumentation",
      "Compressed air flow measurement and leak detection",
      "PLCs, HMIs, and IIoT gateways",
      "Photoelectric, proximity, and vision sensors",
      "Encoders and position feedback",
      "AODD and centrifugal process pumps",
      "Pneumatic valves and actuators",
      "Onsite compressed air network audits and efficiency analysis",
    ],
  },
  {
    id: "food-beverage",
    title: "Food & Beverage",
    badge: "3-A / FDA — Hygienic Design",
    description:
      "Hygienic-grade instrumentation and materials traceability built to meet food-safety and export compliance requirements.",
    stat: "HACCP",
    statLabel: "Compliant data trails",
    supply: [
      "Hygienic flowmeters — electromagnetic and Coriolis, tri-clamp connection",
      "Sanitary pressure and temperature transmitters",
      "Hygienic level measurement",
      "pH, conductivity, and turbidity analysis",
      "Diaphragm and butterfly valves in sanitary execution",
      "FDA and EC1935-compliant sealing materials",
      "Peristaltic and hygienic pumps",
      "Traceable calibration and documentation",
    ],
  },
  {
    id: "water-utilities",
    title: "Water & Utilities",
    badge: "±0.3% — Flow Accuracy",
    description:
      "Network-wide flow measurement and online quality analysis across treatment, distribution, and wastewater, covering pH, turbidity, dissolved oxygen, and residual chlorine.",
    stat: "-18%",
    statLabel: "Avg. non-revenue water",
    supply: [
      "Electromagnetic flowmeters, DN15 to DN2000",
      "Ultrasonic and insertion flow measurement",
      "Bulk and district water meters",
      "Online analysers — pH, ORP, dissolved oxygen, conductivity, turbidity, residual chlorine, ammonia, COD",
      "Multi-parameter monitoring systems",
      "Level measurement for reservoirs and wet wells",
      "Control and isolation valves",
      "Dosing pumps and controllers",
      "Onsite flow surveys and meter verification",
    ],
  },
  {
    id: "power-energy",
    title: "Power & Energy",
    badge: "24/7 Line Monitoring",
    description:
      "Steam, feedwater, and thermal measurement with control valves and instrumentation rated for continuous duty on critical assets.",
    stat: "3x",
    statLabel: "Faster fault detection",
    supply: [
      "Steam and feedwater flow measurement — vortex and differential pressure",
      "High-temperature and high-pressure transmitters",
      "Thermocouples, RTDs, and thermowells",
      "Control valves for continuous duty service",
      "Compressed air and utility measurement",
      "Vibration and condition monitoring sensors",
      "Flange protection for high-temperature lines",
      "Compressed air network audits and efficiency analysis",
    ],
  },
  {
    id: "hvac-facilities",
    title: "HVAC & Facilities",
    badge: "DN15–DN2000 — Line Size Coverage",
    description:
      "Flow, pressure, and temperature measurement plus control valves for district cooling, chilled water, and building utility distribution.",
    stat: "-22%",
    statLabel: "Avg. energy reduction",
    supply: [
      "Chilled water and thermal energy flow measurement",
      "Differential pressure transmitters and switches",
      "Duct and immersion temperature sensors",
      "Humidity and air quality measurement",
      "Motorised control valves and actuators",
      "Butterfly and balancing valves",
      "Pressure independent control valves",
      "Circulation and booster pumps",
      "Building automation controllers and gateways",
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
  phone: "+971 50 103 5348",
  phoneHref: "tel:+971501035348",
  linkedin: "https://www.linkedin.com/company/senscore/",
};
