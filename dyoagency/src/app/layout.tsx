import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import ScrollToTop from "@/components/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
 metadataBase: new URL('https://chris.management'),

title: 'CHRIS MANAGEMENT | Global Artist Management',

description:
  'Chris Management ist eine internationale Artist-Management-Agentur für DJs, Musiker und kreative Talente. Wir begleiten Künstler mit strategischer Karriereentwicklung, Markenaufbau, internationaler Repräsentation und nachhaltigem Wachstum in der Musik- und Entertainmentbranche.',

keywords: [
  // Brand
  'Chris Management',

  // Core Services
  'Artist Management',
  'Artist Management Switzerland',
  'Artist Development',
  'DJ Management',

  // Genres
  'House Music Artists',
  'Techno Artists',
  'Melodic Techno',
  'EDM Artists',
  'Pop Artists',
  'Singer Songwriter',
  'Female Singer',
  'Female DJ',

  // Event & Industry
  'Festival Artists',
  'Club Artists',

  // Artist Names
  'Dynoro',
  'Lia Lisse',
  'Simon Miles',
  'Regina Brury',
  'YOYO'
],

authors: [{ name: 'Chris Management' }],

openGraph: {
  title: 'Chris Management | International Artist Management',
  description:
    'Representing Dynoro, Lia Lisse, Simon Miles, Regina Brury and YOYO. Strategic artist management, talent development and international representation for DJs, musicians and creative talent.',
  url: 'https://chris.management',
  siteName: 'Chris Management',
    images: [
      {
        url: "/og-image.jpg", // Erstelle ein 1200x630px Bild in deinem public Ordner
        width: 1200,
        height: 630,
        alt: "Chris Management Artist Roster",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Management",
    description: "Elite Electronic Music Talent Management.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
      <head>
        <link rel="preconnect" href="https://open.spotify.com" crossOrigin="" />
        <link rel="preconnect" href="https://w.soundcloud.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://open.spotify.com" />
        <link rel="dns-prefetch" href="https://w.soundcloud.com" />
      </head>
      <body className="bg-black antialiased text-white">
        <Navbar />
        {children}
        <SpeedInsights />
          <ScrollToTop />
         
      </body>
    </html>
  );
}
