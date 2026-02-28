import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-4 md:px-8 bg-transparent border-t border-verde/20">
      <div className="max-w-6xl mx-auto">
        {/* Main content */}

        <div className="flex justify-between mb-2">
          {/* Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-playfair text-2xl font-bold text-verde mb-6">
              Logo Grande
            </h3>
            <p>Spaziare e perdersi nell'arte per ritrovarsi...</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h1 className="text-xl">Contatti</h1>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="w-5 h-5 text-verde" />
              <a
                href="mailto:info@patriziapellegrini.com"
                className="text-gray-600 hover:text-verde transition-colors font-lato"
              >
                info@patriziapellegrini.com
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPin className="w-5 h-5 text-verde" />
              <a
                href="https://maps.app.goo.gl/snEC3DJLpxhCcv4F8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 font-lato"
              >
                Duomo, Grosseto, Italia
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaInstagram className="w-5 h-5" />

              <a
                href="https://www.instagram.com/patriziapellegrini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-verde transition-colors "
              >
                patriziapellegrini
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaFacebook className="w-5 h-5" />

              <a
                href="https://www.facebook.com/patriziapellegrini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-verde transition-colors"
              >
                patriziapellegrini
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
