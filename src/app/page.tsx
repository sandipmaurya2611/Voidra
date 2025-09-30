'use client'  // ← Important for Next.js client components

import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function VoidraHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroSlides = [
    {
      title: "CRAFTED FOR THE BOLD",
      subtitle: "A declaration of confidence — a quiet rebellion wrapped in elegance",
      image: "/images/hero-1.jpg"
    },
    {
      title: "LUXURY IN SIMPLICITY", 
      subtitle: "Refined details and timeless aesthetics defining modern luxury",
      image: "/images/hero-2.jpg"
    },
    {
      title: "INTENTIONAL LIVING",
      subtitle: "Beyond fashion — a movement toward intentional living",
      image: "/images/hero-3.jpg"
    }
  ]

  const featuredProducts = [
    {
      name: "TerraTote™",
      subtitle: "Oversized Canvas Crossbody",
      price: "₹14,342",
      image: "/images/terratote.jpg"
    },
    {
      name: "LunaLoop™", 
      subtitle: "Retro Crescent Shoulder",
      price: "₹15,412",
      image: "/images/lunaloop.jpg"
    },
    {
      name: "SleekBox™",
      subtitle: "Minimalist Chic Shoulder",
      price: "₹22,285",
      image: "/images/sleekbox.jpg"
    },
    {
      name: "GemBlaze™",
      subtitle: "Crystal Clutch Collection", 
      price: "₹69,205",
      image: "/images/gemblaze.jpg"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>VOIDRA – Elevating Modern Fashion with Iconic Adaptable Design</title>
        <meta name="description" content="Premium fashion brand rooted in emotional storytelling and bold elegance." />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* VOIDRA Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-1 mr-3">
                <div className="w-4 h-4 rounded-full bg-amber-200 opacity-80"></div>
                <div className="w-4 h-4 rounded-full bg-gray-700 -ml-2 z-10"></div>
                <div className="w-4 h-4 rounded-full bg-green-200 opacity-70 -ml-2"></div>
              </div>
              <span className="font-bold text-xl tracking-wide text-black">VOIDRA</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/collections" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium">
                Collections
              </Link>
              <Link href="/femme" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium">
                VOIDRA FEMME
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium">
                About
              </Link>
              <Link href="/whispers" className="text-gray-700 hover:text-black transition-colors duration-300 font-medium">
                Whispers
              </Link>
              <Link href="/cart" className="text-gray-700 hover:text-black transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 9.5M7 13L5.5 7M7 13h10" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-black transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Hero Background with Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-gray-300"
              style={{ backgroundImage: `linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)` }}
            ></div>
            
            {/* Hero Content */}
            <div className="relative z-20 flex items-center justify-center h-full text-center text-white px-4">
              <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-wider mb-6 leading-tight animate-fade-in-up">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
                  {slide.subtitle}
                </p>
                <button className="mt-4 px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide uppercase animate-fade-in-up animation-delay-400">
                  Explore Collection
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 w-2 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 tracking-wide text-gray-900">
            ELEVATING MODERN FASHION
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-16">
            A future-forward fashion house redefining luxury through adaptable design, 
            bold silhouettes, and globally inspired aesthetics.
          </p>
          
          {/* Philosophy Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-amber-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-amber-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Crafted for the Bold</h3>
              <p className="text-gray-600 leading-relaxed">
                Each piece is a declaration of confidence — designed for women who set trends rather than follow them.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Luxury in Simplicity</h3>
              <p className="text-gray-600 leading-relaxed">
                Refined details and timeless aesthetics defining our interpretation of modern luxury.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Intentional Living</h3>
              <p className="text-gray-600 leading-relaxed">
                Beyond fashion — a movement toward intentional living that brings clarity to clutter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 tracking-wide text-gray-900">
              FEATURED COLLECTION
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most coveted pieces from VOIDRA FEMME
            </p>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 mb-4 overflow-hidden rounded-lg">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500 ease-out">
                    <span className="text-gray-500 text-sm font-medium">Product Image</span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-1 text-gray-900 group-hover:text-black transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{product.subtitle}</p>
                <p className="font-medium text-lg text-gray-900">{product.price}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/collections">
              <button className="px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-medium tracking-wide uppercase">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Whispers Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-8 tracking-wide">
            WHISPERS FROM THE VOID
          </h2>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed italic mb-8 text-gray-100">
            "Elegance is not soft — it is surgical. She doesn't follow trends, she bends time."
          </blockquote>
          <p className="text-gray-400 mb-8 text-lg">
            Discover stories of empowerment, style philosophy, and the art of intentional living.
          </p>
          <Link href="/whispers">
            <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide uppercase">
              Read More
            </button>
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-light mb-4 tracking-wide text-gray-900">
            STAY IN THE VOID
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Be the first to discover new collections and exclusive insights.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors rounded-sm"
            />
            <button className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-300 font-medium uppercase tracking-wide rounded-sm">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center space-x-1 mr-3">
                  <div className="w-3 h-3 rounded-full bg-amber-200 opacity-80"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-400 -ml-1"></div>
                  <div className="w-3 h-3 rounded-full bg-green-200 opacity-70 -ml-1"></div>
                </div>
                <span className="font-bold text-lg tracking-wide">VOIDRA</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Elevating modern fashion with iconic adaptable design.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Collections</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/femme" className="hover:text-white transition-colors">VOIDRA FEMME</Link></li>
                <li><Link href="/bags" className="hover:text-white transition-colors">Handbags</Link></li>
                <li><Link href="/accessories" className="hover:text-white transition-colors">Accessories</Link></li>
                <li><Link href="/new" className="hover:text-white transition-colors">New Arrivals</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About VOIDRA</Link></li>
                <li><Link href="/whispers" className="hover:text-white transition-colors">Whispers Blog</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
                <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} VOIDRA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
