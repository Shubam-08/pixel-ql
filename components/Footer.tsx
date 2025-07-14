import { FaWhatsapp, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] bg-opacity-100 text-white py-4 sm:py-6 relative z-10">
      <div className="w-full px-2 sm:px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-4 md:mb-6 items-start">

          {/* LEFT: QR PIXEL & Address */}
          <div className="space-y-2 sm:space-y-3 text-left">
            <h2 className="text-lg sm:text-xl font-bold text-white">QR PIXEL</h2>
            <p className="text-xs sm:text-sm text-gray-400">Lighting | Designing | Smart Solutions</p>
            <div>
              <h3 className="text-[11px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wide">Bengaluru Office</h3>
              <address className="text-[11px] sm:text-xs text-gray-400 not-italic leading-tight mt-1">
                <a
                  href="https://maps.app.goo.gl/zNuAjEVHyN6tV5pR9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-400 transition-colors"
                >
                  First Floor, Block -2<br />
                  KSSIDC Complex, A-202<br />
                  Indra Nagar, Electronic City Phase I<br />
                  Bengaluru, Karnataka 560100
                </a>
              </address>
            </div>
          </div>

          {/* CENTER: CTA */}
          <div className="text-center px-0 sm:px-2">
            <h2 className="text-base sm:text-xl md:text-2xl font-serif font-semibold text-white mb-1 sm:mb-2 tracking-wide">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">
              Contact us today to schedule a consultation.
            </p>
            <Link
              href="/contact"
              className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white font-medium text-xs sm:text-sm shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:brightness-110"
            >
              Get Started
            </Link>
          </div>

          {/* RIGHT: Social Icons */}
          <div className="flex flex-col items-center md:items-end space-y-1 sm:space-y-2">
            <h3 className="text-[11px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wide text-center md:text-right">
              Connect With Us
            </h3>
            <div className="flex gap-1.5 sm:gap-2 flex-wrap justify-center md:justify-end">
              <SocialIcon href="https://wa.me/916005749782" label="WhatsApp" icon={<FaWhatsapp size={18} />} />
              <SocialIcon href="https://www.instagram.com/qr_pixel?igsh=MW1oY3hkMTRmZXZjcA==" label="Instagram" icon={<Instagram size={18} />} />
              <SocialIcon href="https://youtube.com/@qr-pixel8275?si=tul4YLOhjjzczHG6" label="YouTube" icon={<FaYoutube size={18} />} />
              <SocialIcon href="https://www.facebook.com/share/1AdHt798nj/" label="Facebook" icon={<FaFacebook size={18} />} />
              <SocialIcon href="https://x.com/QR_Pixel_LED?t=DtcSiKFmON90lp0T0_dXYw&s=09" label="Twitter" icon={<FaTwitter size={18} />} />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-2 sm:pt-4">
          <p className="text-center text-[11px] sm:text-xs text-gray-500">
            © {new Date().getFullYear()} <span className="text-white font-semibold">QR Pixel</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// SocialIcon button
function SocialIcon({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
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
