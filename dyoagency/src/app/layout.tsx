import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import ScrollToTop from "@/components/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Verhindert "Layout Shift" beim Laden
});

export const metadata: Metadata = {
  title: {
    default: "Chris Management | Elite Electronic Music Talent Management",
    template: "%s | Chris Management",
  },
  description: "Premier talent agency representing elite electronic music artists. Specializing in booking, tour management, and strategic career development for global DJs.",
  keywords: ["DJ Booking", "Artist Management Switzerland", "Electronic Music Agency", "DJs", "House Music", "Deep House","Swiss DJs", "Techno Talent", "Tour Management"],
  authors: [{ name: "Chris Management" }],
  openGraph: {
    title: "Chris Management | Global Artist Management",
    description: "Bridging the gap between world-class DJs and global festival stages.",
    url: "https://dyoagency.com",
    siteName: "Chris Management",
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
      <body className="bg-black antialiased text-white">
        <Navbar />
        {children}
        <SpeedInsights />
        
          <ScrollToTop />
         
      </body>
    </html>
  );
}
