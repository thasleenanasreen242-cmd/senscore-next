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
      "Flowmeters, level, pressure, and temperature transmitters that turn physical process conditions into live, trustworthy data.",
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
      "The nervous system linking field devices to control rooms — PLCs, IIoT gateways, and edge nodes built for uptime.",
    items: [
      "Industrial IoT Gateways & Edge Devices",
      "PLC & SCADA Integration",
      "Wireless Sensor Networks",
      "Predictive Maintenance Platforms",
    ],
  },
  {
    id: "valves",
    title: "Valves",
    tag: "CONTROL",
    description:
      "Precision flow control hardware engineered for demanding pressures, corrosive media, and continuous duty cycles.",
    items: [
      "Control & Isolation Valves",
      "Actuated Ball & Butterfly Valves",
      "Safety Relief Valves",
      "Solenoid & Pneumatic Valves",
    ],
  },
  {
    id: "pipes",
    title: "Pipes & Fittings",
    tag: "CARRY",
    description:
      "Certified piping infrastructure for process, utility, and hygienic lines — sized and specified for the GCC's toughest sites.",
    items: [
      "Carbon & Stainless Steel Pipe",
      "Precision Casting Fittings",
      "Flanges & Couplings",
      "Hygienic Process Piping",
    ],
  },
  {
    id: "pumps",
    title: "Pumps",
    tag: "MOVE",
    description:
      "AODD, centrifugal, and process pumps selected for chemical compatibility, energy efficiency, and low total cost of ownership.",
    items: [
      "AODD (Air-Operated Double Diaphragm) Pumps",
      "Centrifugal & Process Pumps",
      "Dosing & Metering Pumps",
      "Sump & Submersible Pumps",
    ],
  },
  {
    id: "services",
    title: "Services",
    tag: "SUSTAIN",
    description:
      "Field-proven engineering support across the asset lifecycle — from commissioning to continuous optimization.",
    items: [
      "Commissioning & Calibration",
      "Predictive Maintenance Programs",
      "Retrofit & System Integration",
      "24/7 Technical Support",
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
