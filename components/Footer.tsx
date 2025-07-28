import { FaWhatsapp, FaYoutube, FaFacebook } from "react-icons/fa";
import { Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative text-white py-0 sm:py-4 lg:py-4 z-10 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
     <div className="absolute inset-0 -z-10">
  <Image
    src="/footerbgcrop.jpg"
    alt="Footer background"
    fill
    className="object-cover"
    priority // optional: ensures faster loading
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/20" />
</div>


      {/* Footer Content */}
      <div className="relative z-10 w-full px-2 sm:px-4 md:px-8 text-shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-4 md:mb-6 items-start">
          {/* LEFT: Studio Info */}
          <div className="space-y-2 sm:space-y-3 text-left">
            <h2 className="text-lg sm:text-xl font-bold text-white drop-shadow">
              QR Pixel Design Studio
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Lighting Consultation |
              Intelligent Automation | Digital Signage
            </p>
            <address className="text-[11px] sm:text-xs text-white not-italic leading-tight mt-1">
              <p className="text-gray-300">Dubai | Bangalore</p>
            </address>
          </div>

          {/* CENTER: (Empty to preserve layout) */}
          <div className="flex flex-col items-center text-center" />

          {/* RIGHT: Social Links */}
          <div className="flex flex-col items-end text-right">
            <h3 className="text-[11px] sm:text-xs font-semibold text-gray-300 tracking-wide mb-2">
              Follow and Contact with us
            </h3>
            <div className="flex gap-1.5 sm:gap-2 justify-end">
              <SocialIcon
                href="https://wa.me/916005749782"
                label="WhatsApp"
                icon={<FaWhatsapp size={22} />}
              />
              <SocialIcon
                href="https://www.instagram.com/qr_pixel?igsh=MW1oY3hkMTRmZXZjcA=="
                label="Instagram"
                icon={<Instagram size={22} />}
              />
              <SocialIcon
                href="https://youtube.com/@qr-pixel8275?si=tul4YLOhjjzczHG6"
                label="YouTube"
                icon={<FaYoutube size={22} />}
              />
              <SocialIcon
                href="https://www.facebook.com/share/1AdHt798nj/"
                label="Facebook"
                icon={<FaFacebook size={22} />}
              />
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <p className="text-center text-[11px] sm:text-xs text-gray-400 mb-4">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">QR Pixel</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// Social Icon Component
function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="bg-gradient-to-tr from-gray-800 via-gray-900 to-black p-2 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 shadow-md hover:shadow-lg sm:p-2.5"
    >
      {icon}
    </a>
  );
}
