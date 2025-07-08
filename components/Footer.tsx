import { FaWhatsapp, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="!bg-[#0a0a0f] !bg-opacity-100 text-white py-6 relative z-10">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Left: Logo & Tagline */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-white">QR PIXEL</h2>
          <p className="text-xs text-gray-400">Lighting | Designing | Smart Solutions</p>
        </div>

        {/* Right: Social Media Icons */}
        <div className="flex justify-end gap-2 md:gap-3">
          <a href="https://wa.me/916005749782" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
            className="bg-white/10 p-1.5 text-green-500 rounded-full hover:bg-white hover:text-green-600 hover:ring-2 ring-green-400 transition-all">
            <FaWhatsapp size={16} />
          </a>
          <a href="https://www.instagram.com/qr_pixel?igsh=MW1oY3hkMTRmZXZjcA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="bg-white/10 p-1.5 text-pink-500 rounded-full hover:bg-white hover:text-pink-600 hover:ring-2 ring-pink-400 transition-all">
            <Instagram size={16} />
          </a>
          <a href="https://youtube.com/@qr-pixel8275?si=tul4YLOhjjzczHG6" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
            className="bg-white/10 p-1.5 text-red-500 rounded-full hover:bg-white hover:text-red-600 hover:ring-2 ring-red-400 transition-all">
            <FaYoutube size={16} />
          </a>
          <a href="https://www.facebook.com/share/1AdHt798nj/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            className="bg-white/10 p-1.5 text-blue-500 rounded-full hover:bg-white hover:text-blue-600 hover:ring-2 ring-blue-400 transition-all">
            <FaFacebook size={16} />
          </a>
          <a href="https://x.com/QR_Pixel_LED?t=DtcSiKFmON90lp0T0_dXYw&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
            className="bg-white/10 p-1.5 text-sky-400 rounded-full hover:bg-white hover:text-sky-500 hover:ring-2 ring-sky-400 transition-all">
            <FaTwitter size={16} />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} QR Pixel. All rights reserved.
      </div>
    </footer>
  );
}
