import { FaWhatsapp, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[hsl(221,39%,11%)] text-white py-10 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">QR PIXEL</h2>
          <p className="text-sm text-gray-400 mt-1">
            Lighting |  Designing | Smart Solutions
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-xl">
          {/* WhatsApp */}
          <a
            href="https://wa.me/916005749782"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/qr_pixel?igsh=MW1oY3hkMTRmZXZjcA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 transition"
          >
            <Instagram size={20} />
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@qr-pixel8275?si=tul4YLOhjjzczHG6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 transition"
          >
            <FaYoutube />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1AdHt798nj/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 transition"
          >
            <FaFacebook />
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/QR_Pixel_LED?t=DtcSiKFmON90lp0T0_dXYw&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-300 transition"
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
