import { Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Image from "next/image";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-4 md:px-8 bg-transparent border-t border-verde/20">
      <div className="max-w-6xl mx-auto">
        {/* Main content */}

        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0 mb-2">
          {/* Info */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={300}
              height={300}
              className="object-contain transition-transform duration-500"
              priority
            />
            <p>Spaziare e perdersi nell&apos;arte per ritrovarsi...</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h1 className="text-xl">Contatti</h1>
            <div className="flex items-center justify-start gap-3">
              <Mail className="w-5 h-5 text-verde" />
              <a
                href="mailto:patrizia.istia@gmail.com"
                className="text-gray-600 hover:text-verde transition-colors font-lato"
              >
                patrizia.istia@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-start gap-3">
              <MapPin className="w-5 h-5 text-verde" />
              <a
                href="https://maps.app.goo.gl/xi8YaEhU6aoihEsy6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 font-lato"
              >
                Via Cristoforo Colombo 15, Grosseto
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaInstagram className="w-5 h-5" />

              <a
                href="https://www.instagram.com/patrizia.pellegrini.967"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-verde transition-colors "
              >
                patrizia.pellegrini.967
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaFacebook className="w-5 h-5" />

              <a
                href="https://www.facebook.com/patriziapellegrini.laboratorioartistico"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-verde transition-colors"
              >
                patriziapellegrini.laboratorioartistico
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 font-lato text-sm">
            © {currentYear} Patrizia Pellegrini. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
