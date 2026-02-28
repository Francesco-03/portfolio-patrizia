import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BackgroundShapes from "@/components/BackgroundShapes";
import Footer from "@/components/Footer";

const mainFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const secondaryFont = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "700",
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
    <html
      lang="it"
      className={`${mainFont.variable}, ${secondaryFont.variable}`}
    >
      <body className="antialiased flex flex-col max-w-[100vw]">
        <Header />
        <BackgroundShapes />
        {children}
        <Footer />
      </body>
    </html>
  );
}
