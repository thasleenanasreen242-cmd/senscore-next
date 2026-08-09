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
    description:
      "Custody-grade metering and hazardous-area instrumentation for upstream, midstream, and downstream operations.",
    stat: "±0.1%",
    statLabel: "Custody metering accuracy",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "Connected production lines with real-time OEE, quality, and energy visibility across every asset.",
    stat: "24/7",
    statLabel: "Line monitoring",
  },
  {
    id: "food-beverage",
    title: "Food & Beverage",
    description:
      "Hygienic-grade sensing and traceable process data built to meet food-safety and export compliance standards.",
    stat: "HACCP",
    statLabel: "Compliant data trails",
  },
  {
    id: "water-utilities",
    title: "Water & Utilities",
    description:
      "Network-wide flow and quality monitoring that catches loss, leakage, and drift before it becomes downtime.",
    stat: "-18%",
    statLabel: "Avg. non-revenue water",
  },
  {
    id: "power-energy",
    title: "Power & Energy",
    description:
      "Condition monitoring and predictive maintenance for turbines, compressors, and critical rotating assets.",
    stat: "3x",
    statLabel: "Faster fault detection",
  },
  {
    id: "hvac-facilities",
    title: "HVAC & Facilities",
    description:
      "Building-scale sensing that ties energy consumption directly to occupancy, load, and equipment health.",
    stat: "-22%",
    statLabel: "Avg. energy reduction",
  },
];

export const PARTNERS = [
  { name: "Marvtech", href: "https://en.marvtech.cn/" },
  { name: "Comate", href: "https://www.comate-instruments.com/" },
  { name: "DJ Pumps", href: "https://www.pumpfromchina.com/" },
  { name: "Feejoy", href: "https://en.feejoy.com/" },
  { name: "Meide", href: "https://www.meide-casting.com/en/" },
  { name: "ODOT Automation", href: "https://www.odotautomation.com/" },
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
