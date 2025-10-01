'use client'  // ← Important for Next.js client components

import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image"
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function VoidraHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "CRAFTED FOR THE BOLD",
      subtitle: "A declaration of confidence — a quiet rebellion wrapped in elegance",
      image: "/girl1.jpg",
    },
    {
      title: "LUXURY IN SIMPLICITY",
      subtitle: "Refined details and timeless aesthetics defining modern luxury",
      image: "/girl2.jpg",
    },
    {
      title: "INTENTIONAL LIVING",
      subtitle: "Beyond fashion — a movement toward intentional living",
      image: "/boy1.jpg",
    },
  ]

  const featuredProducts = [
    {
      name: "TerraTote™",
      subtitle: "Oversized Canvas Crossbody",
      price: "₹14,342",
      image: "/product/bg1.jpg",
    },
    {
      name: "LunaLoop™",
      subtitle: "Retro Crescent Shoulder",
      price: "₹15,412",
      image: "/product/bg2.jpg",
    },
    {
      name: "SleekBox™",
      subtitle: "Minimalist Chic Shoulder",
      price: "₹22,285",
      image: "/product/shoes1.jpg",
    },
    {
      name: "GemBlaze™",
      subtitle: "Crystal Clutch Collection",
      price: "₹69,205",
      image: "/product/shoes2.jpg",
    },
  ]

  const posts = [
    {
      id: 1,
      title: "PERFORMANCE OF PRECISION",
      date: "MAY 4, 2025",
      excerpt:
        "Subtlety was never her size. She doesn't chase icons — she becomes one. Read the blog that reclaims power through quiet rebellion.",
      image: "/blog1.png",
      href: "/blog/performance-of-precision",
    },
    {
      id: 2,
      title: "WHISPERS FROM THE VOID",
      date: "MAY 4, 2025",
      excerpt:
        "Elegance is not soft — it is surgical. Read how the VOIDRA woman cuts through noise with silence sharp enough to command.",
      image: "/blog2.jpg",
      href: "/blog/whispers-from-the-void",
    },
    {
      id: 3,
      title: "BEGIN THE BECOMING",
      date: "MAY 4, 2025",
      excerpt:
        "She doesn't follow trends. She bends time. A revelation in heels, a whisper wrapped in armor — meet the woman who wears the Void.",
      image: "/blog3.jpg",
      href: "/blog/begin-the-becoming",
    },
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

      <Navbar />

      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {/* Hero Background with Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
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
                <Link href="/products">
                  <button className="mt-4 px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide uppercase animate-fade-in-up animation-delay-400">
                    Explore Collection
                  </button>
                </Link>
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
              className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 w-2 hover:bg-white/75'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#cbd1c4] to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 tracking-wide text-[#464646]">
            ELEVATING MODERN FASHION
          </h2>
          <p className="text-lg sm:text-xl text-[#464646]/80 max-w-4xl mx-auto leading-relaxed mb-16">
            A future-forward fashion house redefining luxury through adaptable design,
            bold silhouettes, and globally inspired aesthetics.
          </p>

          {/* Philosophy Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 group">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#b6774d]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#b6774d]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#464646]">Crafted for the Bold</h3>
              <p className="text-[#464646]/70 leading-relaxed">
                Each piece is a declaration of confidence — designed for women who set trends rather than follow them.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 group">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#464646]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#464646]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#464646]">Luxury in Simplicity</h3>
              <p className="text-[#464646]/70 leading-relaxed">
                Refined details and timeless aesthetics defining our interpretation of modern luxury.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 group">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#cbd1c4]/60 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#b6774d]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#464646]">Intentional Living</h3>
              <p className="text-[#464646]/70 leading-relaxed">
                Beyond fashion — a movement toward intentional living that brings clarity to clutter.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Blog Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#5a2917] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Blog posts</h2>

          <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-50 flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col items-center justify-between gap-3 h-[314px] text-center">
                <Link
                  href={post.href}
                  className="text-xl sm:text-2xl font-light uppercase tracking-wide hover:underline"
                >
                  ✦ {post.title}
                </Link>
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-gray-500">
                  {post.date}
                </p>
                <p
                  className="text-gray-700 text-base leading-8 sm:leading-9 max-w-xs mx-auto"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#cbd1c4] to-white">
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
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
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
            <Link href="/products">
              <button className="px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-medium tracking-wide uppercase">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Whispers Section */}
      <section className="py-20 px-4 text-white" style={{ backgroundColor: '#5a2917' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-8 tracking-wide">
            WHISPERS FROM THE VOID
          </h2>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed italic mb-8 text-gray-100">
            "Elegance is not soft — it is surgical. She doesn't follow trends, she bends time."
          </blockquote>
          <p className="mb-8 text-lg text-gray-300">
            Discover stories of empowerment, style philosophy, and the art of intentional living.
          </p>
          <Link href="/about-us">
            <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide uppercase">
              Read More
            </button>
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#cbd1c4] to-white">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-light mb-4 tracking-wide text-gray-900">
            STAY IN THE VOIDRA
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

      <Footer />
    </div>
  )
}
