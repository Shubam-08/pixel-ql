import { FaWhatsapp, FaYoutube, FaFacebook,  } from "react-icons/fa";
import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] bg-opacity-100 text-white py-0 sm:py-6 relative z-10">
      <div className="w-full px-2 sm:px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-4 md:mb-6 items-start">

          {/* LEFT: QR PIXEL & Address */}
          <div className="space-y-2 sm:space-y-3 text-left">
            <h2 className="text-lg sm:text-xl font-bold text-white">QR Pixel Design Studio</h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Lighting Consultation | Lighting Design /<br />
              Intelligent Automation | Digital Signage
            </p>
            <div>
              <address className="text-[11px] sm:text-xs text-white not-italic leading-tight mt-1">
                <p>Dubai | Bangalore</p>
              </address>
            </div>
          </div>

          {/* CENTER: Quick Links */}
       <div className="flex flex-col items-center text-center">
 
  <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] sm:text-xs text-white/70">
    <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
    <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
    <li><Link href="/projects"
     
    className="hover:text-blue-400">Projects</Link></li>
     <li><Link href="/blog" className="hover:text-blue-400">Blogs</Link></li>
    <li><Link href="/contact" 
    
    className="hover:text-blue-400">Contact</Link></li>
  </ul>
</div>


          {/* RIGHT: Social Media Icons */}
          <div className="flex flex-col items-end sm:items-end text-right">
            <h3 className="text-[11px] sm:text-xs font-semibold text-gray-300 tracking-wide mb-2  ">
              Follow and Contact with us
            </h3>
            <div className="flex gap-1.5 sm:gap-2 justify-end">
              <SocialIcon href="https://wa.me/916005749782" label="WhatsApp" icon={<FaWhatsapp size={22} />} />
              <SocialIcon href="https://www.instagram.com/qr_pixel?igsh=MW1oY3hkMTRmZXZjcA==" label="Instagram" icon={<Instagram size={22} />} />
              <SocialIcon href="https://youtube.com/@qr-pixel8275?si=tul4YLOhjjzczHG6" label="YouTube" icon={<FaYoutube size={22} />} />
              <SocialIcon href="https://www.facebook.com/share/1AdHt798nj/" label="Facebook" icon={<FaFacebook size={22} />} />
              
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
