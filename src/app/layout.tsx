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
  title: {
    default: "Patrizia Pellegrini",
    template: "%s | Patrizia Pellegrini",
  },
  description:
    "Portfolio di Patrizia Pellegrini - Artista contemporanea specializzata in pittura e scultura",
  keywords: [
    "Artista",
    "Pittura",
    "Scultura",
    "Artista Contemporanea",
    "Grosseto",
  ],
  metadataBase: new URL("https://patriziapellegrini.art"),
  openGraph: {
    title: "Patrizia Pellegrini | Artista contemporanea",
    description:
      "Portfolio di Patrizia Pellegrini, artista contemporanea di Grosseto",
    url: "https://patriziapellegrini.art",
    siteName: "Patrizia Pellegrini",
    locale: "it_IT",
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
