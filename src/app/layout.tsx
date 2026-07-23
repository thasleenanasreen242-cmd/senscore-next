import type { Metadata } from "next";
import { Chakra_Petch, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import WhatsAppButton from "@/components/WhatsAppButton";

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
  title: "SensCore | UAE's First Autonomous AI Industrial Platform",
  description:
    "SensCore fuses AI and Industrial IoT into one autonomous sensing platform — the first of its kind in the UAE. Real-time instrumentation, predictive automation, and self-optimizing process control.",
  openGraph: {
    title: "SensCore | UAE's First Autonomous AI Industrial Platform",
    description:
      "The UAE's first autonomous AI industrial sensing platform. Real-time instrumentation, predictive automation, and self-optimizing process control.",
    url: "https://www.senscoretech.com",
    siteName: "SensCore",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-void text-ink antialiased selection:bg-teal/20">
        <CursorGlow />
        <WhatsAppButton />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
