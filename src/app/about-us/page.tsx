"use client"
// src/app/about-us/page.tsx
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('story')

  const milestones = [
    {
      year: "2023",
      title: "The Beginning",
      description: "VOIDRA was founded with a vision to redefine luxury fashion through emotional storytelling and bold elegance."
    },
    {
      year: "2024", 
      title: "Global Expansion",
      description: "Launched internationally, bringing adaptable design and globally inspired aesthetics to discerning women worldwide."
    },
    {
      year: "2025",
      title: "Future Forward",
      description: "Continuing to elevate modern fashion with iconic adaptable design and intentional living philosophy."
    }
  ]

  const values = [
    {
      icon: "⚡",
      title: "Bold Confidence",
      description: "We create pieces for women who set trends rather than follow them — each design is a declaration of confidence."
    },
    {
      icon: "✨",
      title: "Timeless Elegance", 
      description: "Our commitment to refined details and timeless aesthetics defines our interpretation of modern luxury."
    },
    {
      icon: "🌱",
      title: "Intentional Design",
      description: "Beyond fashion, we're a movement toward intentional living that brings clarity to clutter and softness to strength."
    },
    {
      icon: "🌍",
      title: "Global Inspiration",
      description: "Drawing from globally inspired aesthetics to create adaptable designs that transcend cultural boundaries."
    }
  ]

  const team = [
    {
      name: "Manish Kumar Saini",
      role: "Founder & Creative Director",
      description: "Visionary behind VOIDRA's premium fashion philosophy, rooted in emotional storytelling and bold elegance.",
      image: "/images/team-manish.jpg"
    },
    {
      name: "Design Team",
      role: "Creative Collective",
      description: "A dedicated team of designers crafting future-forward pieces that embody luxury and intentional living.",
      image: "/images/team-design.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>About VOIDRA – Premium Fashion Brand Story</title>
        <meta name="description" content="Discover VOIDRA's story - a future-forward fashion house redefining luxury through adaptable design, bold silhouettes, and globally inspired aesthetics." />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 tracking-wide text-gray-900">
            ABOUT VOIDRA
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A future-forward fashion house redefining luxury through adaptable design, 
            bold silhouettes, and globally inspired aesthetics.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 bg-white border-b border-gray-200 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4 overflow-x-auto">
            {[
              { id: 'story', label: 'Our Story' },
              { id: 'philosophy', label: 'Philosophy' },
              { id: 'values', label: 'Values' },
              { id: 'team', label: 'Team' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`px-4 py-2 font-medium transition-colors duration-300 whitespace-nowrap ${
                  activeSection === tab.id
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      {activeSection === 'story' && (
        <section className="py-20 px-4 bg-gradient-to-b from-[#cbd1c4] to-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl sm:text-4xl font-light mb-6 tracking-wide text-gray-900">
                  THE VOIDRA STORY
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  VOIDRA was born from a vision to create more than just fashion — to craft a movement 
                  toward intentional living. Founded by Manish Kumar Saini, our brand emerged from the 
                  belief that elegance is not soft, it is surgical.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We exist for women who don&apos;t follow trends — they bend time. Each piece we create 
                  is a declaration of confidence, a quiet rebellion wrapped in elegance. Our designs 
                  speak to the modern woman who values both beauty and substance.
                </p>
                <blockquote className="text-xl italic text-gray-800 border-l-4 border-amber-200 pl-4 mb-6">
                  &quot;She doesn&apos;t follow trends, she bends time. In a world of noise, she chooses clarity. 
                  In a world of excess, she chooses intention.&quot;
                </blockquote>
              </div>
              <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 aspect-square rounded-lg">
                <Image
                  src="/VOIDRA_Legacy.jpg"
                  alt="VOIDRA Legacy"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-16 p-8 bg-gradient-to-b from-[#ffffff] to-white rounded-lg">
              <h3 className="text-2xl font-light mb-12 text-center tracking-wide text-gray-900">
                OUR JOURNEY
              </h3>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="text-2xl font-light text-gray-900">{milestone.year}</span>
                    </div>
                    <div className="flex-shrink-0 w-4 h-4 bg-amber-200 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2 text-gray-900">{milestone.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Philosophy Section */}
      {activeSection === 'philosophy' && (
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light mb-6 tracking-wide text-gray-900">
                OUR PHILOSOPHY
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At VOIDRA, we believe in creating more than fashion — we create statements, 
                movements, and moments of profound self-expression.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-amber-200 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-amber-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Crafted for the Bold</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every piece we create is a declaration of confidence — a quiet rebellion wrapped in elegance. 
                  We design for women who don&apos;t just wear fashion, they embody it.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Luxury in Simplicity</h3>
                <p className="text-gray-600 leading-relaxed">
                  True luxury lies not in complexity, but in the perfection of simplicity. 
                  Our commitment to refined details and timeless aesthetics defines modern elegance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-green-200 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Intentional Living</h3>
                <p className="text-gray-600 leading-relaxed">
                  We&apos;re more than a fashion brand — we&apos;re a movement toward intentional living. 
                  Our designs bring clarity to clutter and softness to strength.
                </p>
              </div>
            </div>

            {/* Quote Section */}
            <div className="text-center bg-white p-12 rounded-lg">
              <blockquote className="text-2xl sm:text-3xl font-light italic text-gray-800 mb-6 leading-relaxed">
                &quot;In a world of noise, she chooses clarity. In a world of excess, she chooses intention. 
                This is the VOIDRA woman — bold, elegant, and unapologetically herself.&quot;
              </blockquote>
              <cite className="text-gray-600">— VOIDRA Design Philosophy</cite>
            </div>
          </div>
        </section>
      )}

      {/* Values Section */}
      {activeSection === 'values' && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light mb-6 tracking-wide text-gray-900">
                OUR VALUES
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                These principles guide every decision we make, every design we create, 
                and every relationship we build.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-16">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>

            {/* Sustainability Section */}
            <div className="bg-black text-white p-12 rounded-lg text-center">
              <h3 className="text-2xl font-light mb-6 tracking-wide">
                COMMITMENT TO SUSTAINABILITY
              </h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Our commitment extends beyond creating beautiful pieces. We&apos;re dedicated to 
                sustainable practices that honor both craftsmanship and our planet&apos;s future.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                <div>
                  <h4 className="font-semibold mb-2">Ethical Sourcing</h4>
                  <p className="text-gray-400 text-sm">Premium materials sourced with integrity and respect</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Quality Craftsmanship</h4>
                  <p className="text-gray-400 text-sm">Timeless pieces designed to last generations</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Responsible Production</h4>
                  <p className="text-gray-400 text-sm">Mindful manufacturing processes</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Team Section */}
      {activeSection === 'team' && (
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light mb-6 tracking-wide text-gray-900">
                THE TEAM
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Meet the visionaries behind VOIDRA&apos;s distinctive aesthetic and 
                commitment to elevating modern fashion.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {team.map((member, index) => (
                <div key={index} className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Photo</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>

            {/* Join Us Section */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-light mb-6 tracking-wide text-gray-900">
                JOIN OUR JOURNEY
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                We&apos;re always seeking passionate individuals who share our vision 
                for intentional design and bold elegance.
              </p>
              <Link href="/careers">
                <button className="px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-medium tracking-wide uppercase">
                  View Careers
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 text-white" style={{ backgroundColor: '#5a2917' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-6 tracking-wide">
            EXPERIENCE VOIDRA
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover our collection of bold, elegant pieces designed for the modern woman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collections">
              <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide uppercase">
                Shop Collection
              </button>
            </Link>
            <Link href="/whispers">
              <button className="px-8 py-3 bg-transparent text-white hover:text-gray-300 transition-colors duration-300 font-medium tracking-wide uppercase">
                Read Our Stories
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
