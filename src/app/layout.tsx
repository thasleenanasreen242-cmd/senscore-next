import type { Metadata } from "next";
import { Chakra_Petch, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatWidget from "@/components/ChatWidget";
import ScrollProgress from "@/components/ScrollProgress";

const display = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.senscoretech.com"),
  title: "SensCore | Autonomous AI Industrial Platform",
  description:
    "SensCore combines AI and Industrial IoT into an autonomous platform for real-time instrumentation, predictive automation, and intelligent process control.",
  alternates: {
    canonical: "https://www.senscoretech.com/",
  },
  openGraph: {
    title: "SensCore | Autonomous AI Industrial Platform",
    description:
      "SensCore combines AI and Industrial IoT into an autonomous sensing platform for real-time instrumentation, predictive automation, and intelligent process control.",
    url: "https://www.senscoretech.com/",
    siteName: "SensCore",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png.webp",
        alt: "SensCore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SensCore | Autonomous AI Industrial Platform",
    description:
      "SensCore combines AI and Industrial IoT into an autonomous sensing platform for real-time instrumentation, predictive automation, and intelligent process control.",
    images: ["/logo.png.webp"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.senscoretech.com/#organization",
      name: "SensCore",
      url: "https://www.senscoretech.com",
      logo: "https://www.senscoretech.com/logo.png.webp",
      email: "info@senscoretech.com",
      telephone: "+971 50 103 5348",
      address: {
        "@type": "PostalAddress",
        streetAddress: "9th Floor, Mazyad Mall, Business Tower 3, MBZ City",
        addressLocality: "Abu Dhabi",
        addressCountry: "AE",
      },
      sameAs: [
        "https://www.linkedin.com/company/senscore/",
        "https://www.instagram.com/senscoretech",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.senscoretech.com/#website",
      url: "https://www.senscoretech.com",
      name: "SensCore",
      publisher: {
        "@id": "https://www.senscoretech.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-void text-ink antialiased selection:bg-teal/20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ScrollProgress />
        <CursorGlow />
        <CustomCursor />
        <WhatsAppButton />
        <ChatWidget />
        <div className="fixed inset-x-0 top-0 z-40 pt-[3px]">
          <Navbar />
        </div>
        <div className="h-[68px] sm:h-[76px]" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
