import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const mainFont = Playfair_Display({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patrizia's Portfolio",
  description:
    "Portfolio di Patrizia Pellegrini - Artista contemporanea specializzata in pittura e scultura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={mainFont.className}>
      <body className="antialiased flex flex-col max-w-[100vw]">
        <Header />

        {/* Forme dx e sx di sfondo alle pagine */}
        <div className="pointer-events-none fixed top-0 left-0 h-screen w-96 -z-10">
          <svg
            viewBox="0 0 300 1000"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            className="block"
            id="forma"
          >
            <path d="M 0 0 C 200 80 280 120 220 300 C 180 450 80 550 100 700 C 130 850 50 950 0 1000 L 0 0" />
          </svg>
        </div>
        <div className="pointer-events-none fixed top-0 right-0 h-screen w-96 -z-10">
          <svg
            viewBox="0 0 300 1000"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            className="block"
            id="forma"
          >
            <path d="M 300 0 C 100 80 20 120 80 300 C 120 450 220 550 200 700 C 170 850 250 950 300 1000 L 300 0" />
          </svg>
        </div>
        {children}
      </body>
    </html>
  );
}
