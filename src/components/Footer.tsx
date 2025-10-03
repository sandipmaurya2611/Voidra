"use client"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Logo + Tagline */}
          <div>
          <div className="flex items-center">
            {/* Overlapping circles joined at the right end */}
            <div className="relative mr-3 h-4 w-10">
              {/* Left circle */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#b6774d] opacity-90"></div>
              {/* Middle circle */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#464646] z-10"></div>
              {/* Right circle (tip/end) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#cbd1c4]"></div>
            </div>
            <span className="font-bold text-xl tracking-wide text-[#ffffff]">
              VOIDRA
            </span>
          </div>
           
            <p className="text-gray-300 text-sm leading-relaxed">
              Elevating modern fashion with iconic adaptable design.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/" className="hover:text-[#b6774d] transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-[#b6774d] transition-colors">Products</Link></li>
              <li><Link href="/about-us" className="hover:text-[#b6774d] transition-colors">About us</Link></li>
              <li><Link href="/contact" className="hover:text-[#b6774d] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/about-us?section=story" className="hover:text-[#b6774d] transition-colors">Our Story</Link></li>
              <li><Link href="/about-us?section=philosophy" className="hover:text-[#b6774d] transition-colors">Philosophy</Link></li>
              <li><Link href="/about-us?section=values" className="hover:text-[#b6774d] transition-colors">Values</Link></li>
              <li><Link href="/about-us?section=team" className="hover:text-[#b6774d] transition-colors">Team</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/shipping" className="hover:text-[#b6774d] transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-[#b6774d] transition-colors">Returns</Link></li>
              <li><Link href="/size-guide" className="hover:text-[#b6774d] transition-colors">Size Guide</Link></li>
              <li><Link href="/faq" className="hover:text-[#b6774d] transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} VOIDRA. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-[#b6774d] text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#b6774d] text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
