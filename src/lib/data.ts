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
    items: [
      "Electromagnetic, Vortex & Coriolis Flowmeters",
      "Ultrasonic & Thermal Mass Flowmeters",
      "Radar Level Transmitters & Level Switches",
      "Pressure & Temperature Transmitters",
    ],
  },
  {
    id: "automation",
    title: "Automation & Connectivity",
    tag: "CONNECT",
    description:
      "The nervous system linking field devices to the control room. PLCs, IIoT gateways, and edge nodes selected to survive the environment they're installed in.",
    items: [
      "Programmable Logic Controllers (PLCs) & Remote I/O",
      "Proximity, Photoelectric & Ultrasonic Sensors",
      "Industrial Protocol Gateways & Ethernet Switches",
      "HMI, SCADA & Industrial PCs",
    ],
  },
  {
    id: "valves",
    title: "Valves",
    tag: "CONTROL",
    description:
      "Control, isolation, and safety valves engineered for demanding pressures, corrosive media, and continuous duty. Sized and trimmed to the actual service condition.",
    items: [
      "Butterfly, Ball, Gate & Globe Valves",
      "Solenoid & Control Valves",
      "Actuated Ball & Butterfly Valves",
      "Safety Relief Valves (API/ASME Certified)",
    ],
  },
  {
    id: "analysers",
    title: "Analysers",
    tag: "ANALYSE",
    description:
      "Gas, liquid, and water quality analysis covering pH, conductivity, dissolved oxygen, turbidity and beyond. The measurements that decide whether your process is compliant, not just running.",
    items: [
      "Water Quality Analyzers",
      "Oxygen & Moisture Analyzers",
      "CO₂ & Multi-Gas Detectors",
      "pH, Conductivity & Turbidity Sensors",
    ],
  },
  {
    id: "pumps",
    title: "Pumps",
    tag: "MOVE",
    description:
      "AODD, centrifugal, and process pumps selected for chemical compatibility, duty point, and energy cost over the life of the asset, not just the purchase price.",
    items: [
      "AODD (Air-Operated Diaphragm) Pumps",
      "Metering & Dosing Pumps",
      "Centrifugal & Process Pumps (API 610)",
      "Specialized & Sanitary Pumps",
    ],
  },
  {
    id: "flangeguards",
    title: "Flange Guards & Gaskets",
    tag: "PROTECT",
    description:
      "Spray shields, insulation kits, and sealing solutions for high-temperature and critical service lines. Spiral wound, RTJ, and metal jacketed gaskets, plus mapping and installation on site.",
    items: [
      "Spiral Wound & RTJ Gaskets",
      "Flange Insulation Kits",
      "Metallic & Semi-Metallic Gaskets",
      "Custom Machined Sealing Components",
    ],
  },
  {
    id: "services",
    title: "Services",
    tag: "SUSTAIN",
    description:
      "Compressed Air Audit, Liquid, Gas & Steam flow Audit. Engineering support across the asset lifecycle. Sizing and selection, commissioning, calibration, spares, and troubleshooting.",
    items: [
      "Compressed Air Audit Service",
      "Flow Surveys",
      "Automation & Control Integration",
      "Pump & Valve Services",
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
