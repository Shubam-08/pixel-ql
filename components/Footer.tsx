import { FaWhatsapp, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[hsl(221,39%,11%)] text-white py-10 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">QR PIXEL</h2>
          <p className="text-sm text-gray-400 mt-1">
            Lighting |  Designing | Smart Solutions
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-row justify-end w-full space-x-3 sm:space-x-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/916005749782"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full bg-white/10 p-2 sm:p-3 text-xl sm:text-2xl text-green-500 shadow-md ring-2 ring-green-200 hover:bg-white hover:text-green-600 hover:scale-110 hover:ring-green-400 transition-all duration-200 flex items-center justify-center"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/qr_pixel?igsh=MW1oY3hkMTRmZXZjcA=="
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full bg-white/10 p-2 sm:p-3 text-xl sm:text-2xl text-pink-500 shadow-md ring-2 ring-pink-200 hover:bg-white hover:text-pink-600 hover:scale-110 hover:ring-pink-400 transition-all duration-200 flex items-center justify-center"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@qr-pixel8275?si=tul4YLOhjjzczHG6"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full bg-white/10 p-2 sm:p-3 text-xl sm:text-2xl text-red-500 shadow-md ring-2 ring-red-200 hover:bg-white hover:text-red-600 hover:scale-110 hover:ring-red-400 transition-all duration-200 flex items-center justify-center"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1AdHt798nj/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full bg-white/10 p-2 sm:p-3 text-xl sm:text-2xl text-blue-600 shadow-md ring-2 ring-blue-200 hover:bg-white hover:text-blue-700 hover:scale-110 hover:ring-blue-400 transition-all duration-200 flex items-center justify-center"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/QR_Pixel_LED?t=DtcSiKFmON90lp0T0_dXYw&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full bg-white/10 p-2 sm:p-3 text-xl sm:text-2xl text-sky-400 shadow-md ring-2 ring-sky-200 hover:bg-white hover:text-sky-600 hover:scale-110 hover:ring-sky-400 transition-all duration-200 flex items-center justify-center"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Qlite Architect. All rights reserved.
      </div>
    </footer>
  );
}
