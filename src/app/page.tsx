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
                <button className="group relative mt-4 px-8 py-3 border-2 border-white text-white font-medium tracking-wide uppercase animate-fade-in-up animation-delay-400 overflow-hidden">
  <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
  <span className="relative z-10 group-hover:text-black transition-colors duration-500">
    Explore Collection
  </span>
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
          <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Crafted for the Bold</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every piece we create is a declaration of confidence — a quiet rebellion wrapped in elegance. 
                  We design for women who don&apos;t just wear fashion, they embody it.
                </p>
              </div>

              <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Luxury in Simplicity</h3>
                <p className="text-gray-600 leading-relaxed">
                  True luxury lies not in complexity, but in the perfection of simplicity. 
                  Our commitment to refined details and timeless aesthetics defines modern elegance.
                </p>
              </div>

              <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Intentional Living</h3>
                <p className="text-gray-600 leading-relaxed">
                  We&apos;re more than a fashion brand — we&apos;re a movement toward intentional living. 
                  Our designs bring clarity to clutter and softness to strength.
                </p>
              </div>
            </div>
        </div>
      </section>


      {/* Blog Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#5a2917] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Blog Posts</h2>

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
              <button className="group relative px-8 py-3 border-2 border-black text-black font-medium tracking-wide uppercase overflow-hidden">
                <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  View All Products
                </span>
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
            <button className="group relative px-8 py-3 border-2 border-white text-white font-medium tracking-wide uppercase overflow-hidden">
              <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                Read More
              </span>
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
            <button className="group relative px-6 py-3 bg-black text-white font-medium uppercase tracking-wide rounded-sm overflow-hidden">
              <span className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                Subscribe
              </span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
