import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Kakatiya Olympiad School | Where Curiosity Meets Excellence",
  description: "Kakatiya Olympiad School - Premier educational institution pioneering STEM, Olympiad preparation, and holistic leadership development for future global leaders.",
  keywords: [
    "Kakatiya Olympiad School",
    "Best Olympiad School",
    "STEM Education",
    "CBSE School",
    "IIT JEE Foundation",
    "NEET Coaching School",
    "Smart Schooling",
  ],
  openGraph: {
    title: "Kakatiya Olympiad School | World-Class Education",
    description: "Inspiring future leaders through innovation, scientific inquiry, and Olympiad excellence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${poppins.variable} ${cormorant.variable} scroll-smooth antialiased`}
    >
      <body className="bg-slate-950 font-sans text-slate-100 selection:bg-amber-400 selection:text-slate-950 min-h-screen">
        {children}
      </body>
    </html>
  );
}

