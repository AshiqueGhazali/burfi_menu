import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1A120C",
};

export const metadata: Metadata = {
  title: "Burfi.in — Digital Cafe Menu Card",
  description:
    "Scan & explore Burfi.in's digital cafe menu: Authentic shawarmas, refreshing mojitos, fresh cold-pressed juices, artisanal teas, coffees & signature burfi sweets.",
  keywords: [
    "Burfi.in",
    "Digital Menu",
    "Cafe Menu Card",
    "Shawarma",
    "Mojitos",
    "Cold Coffee",
    "Fresh Juices",
    "Burfi Sweets",
    "QR Code Menu",
  ],
  openGraph: {
    title: "Burfi.in — Digital Cafe Menu Card",
    description: "Fresh bites, refreshing drinks & good vibes at Burfi.in cafe.",
    type: "website",
    locale: "en_IN",
    siteName: "Burfi.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-[#FDFBF7] text-[#231C18] flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
