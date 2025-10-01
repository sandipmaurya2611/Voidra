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
            <div className="flex items-center mb-4">
              <div className="flex items-center space-x-1 mr-3">
                <div className="w-3 h-3 rounded-full bg-[#b6774d] opacity-90"></div>
                <div className="w-3 h-3 rounded-full bg-[#cbd1c4] -ml-1"></div>
                <div className="w-3 h-3 rounded-full bg-white/40 -ml-1"></div>
              </div>
              <span className="font-bold text-lg tracking-wide">VOIDRA</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Elevating modern fashion with iconic adaptable design.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Collections</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/femme" className="hover:text-[#b6774d] transition-colors">VOIDRA FEMME</Link></li>
              <li><Link href="/bags" className="hover:text-[#b6774d] transition-colors">Handbags</Link></li>
              <li><Link href="/accessories" className="hover:text-[#b6774d] transition-colors">Accessories</Link></li>
              <li><Link href="/new" className="hover:text-[#b6774d] transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/about-us" className="hover:text-[#b6774d] transition-colors">About VOIDRA</Link></li>
              <li><Link href="/whispers" className="hover:text-[#b6774d] transition-colors">Whispers Blog</Link></li>
              <li><Link href="/careers" className="hover:text-[#b6774d] transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-[#b6774d] transition-colors">Contact</Link></li>
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
