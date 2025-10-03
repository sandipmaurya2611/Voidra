"use client"
// src/app/contact/page.tsx
import Head from 'next/head'
import Link from 'next/link'
import { useState, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { MdEmail,MdCallEnd, } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  inquiryType: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const contactMethods = [
    {
      icon: <MdEmail />,
      title: 'Email Us',
      description: 'Get in touch for any inquiries',
      contact: 'hello@voidra.in',
      action: 'mailto:hello@voidra.in',
      availability: '24/7 Response within 24 hours'
    },
    {
      icon: <IoMdCall />,
      title: 'Call Us',
      description: 'Speak with our customer service',
      contact: '+91 98765 43210',
      action: 'tel:+919876543210',
      availability: 'Mon-Sat, 10 AM - 7 PM IST'
    },
    {
      icon: <ImWhatsapp />
,
      title: 'WhatsApp',
      description: 'Quick support via WhatsApp',
      contact: '+91 98765 43210',
      action: 'https://wa.me/919876543210',
      availability: 'Mon-Sat, 10 AM - 7 PM IST'
    },
    {
      icon: <FaLocationDot />
,
      title: 'Visit Store',
      description: 'Experience VOIDRA in person',
      contact: 'Mumbai Flagship Store',
      action: 'https://maps.google.com',
      availability: 'Mon-Sun, 11 AM - 9 PM'
    }
  ]

  // Map state and ref for scrolling to map on selection
  const mapRef = useRef<HTMLDivElement | null>(null)

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'orders', label: 'Order Support' },
    { value: 'returns', label: 'Returns & Exchanges' },
    { value: 'wholesale', label: 'Wholesale Partnership' },
    { value: 'press', label: 'Press & Media' },
    { value: 'careers', label: 'Career Opportunities' }
  ]

  const offices = [
    {
      city: 'Mumbai',
      type: 'Flagship Store & Headquarters',
      address: 'VOIDRA House, Linking Road, Bandra West, Mumbai 400050',
      phone: '+91 98765 43210',
      email: 'mumbai@voidra.in',
      hours: 'Mon-Sun: 11 AM - 9 PM'
    },
    // {
    //   city: 'Delhi',
    //   type: 'Retail Store',
    //   address: 'Khan Market, New Delhi 110003',
    //   phone: '+91 98765 43211',
    //   email: 'delhi@voidra.in',
    //   hours: 'Mon-Sun: 11 AM - 8 PM'
    // },
    // {
    //   city: 'Bangalore',
    //   type: 'Retail Store',
    //   address: 'UB City Mall, Vittal Mallya Road, Bangalore 560001',
    //   phone: '+91 98765 43212',
    //   email: 'bangalore@voidra.in',
    //   hours: 'Mon-Sun: 10 AM - 10 PM'
    // },
    {
      city: 'Pune',
      type: 'Retail Store',
      address: 'V18, Balewadi High Street, Baner, Pune, Maharashtra',
      phone: '+91 98765 43213',
      email: 'pune@voidra.in',
      hours: 'Mon-Sun: 11 AM - 9 PM'
    }
  ]

  const [selectedOffice, setSelectedOffice] = useState(offices[0])

  const faqData = [
    {
      question: "What are your shipping policies?",
      answer: "We offer free shipping on orders above ₹5,000 within India. International shipping is available to select countries. Orders are processed within 24-48 hours."
    },
    {
      question: "Do you offer returns and exchanges?",
      answer: "Yes, we accept returns within 30 days of purchase in original condition with tags. Exchanges are available for size and color variations subject to availability."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email and SMS. You can also track your order through your account on our website."
    },
    {
      question: "Do you offer customization services?",
      answer: "We offer select customization services for certain products. Please contact our customer service team to discuss your requirements and availability."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, and digital wallets. All transactions are secured with industry-standard encryption."
    }
  ]

  const [openFaqs, setOpenFaqs] = useState<boolean[]>(new Array(faqData.length).fill(false))

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      })
    }, 2000)
  }

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => prev.map((open, i) => (i === index ? !open : open)))
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Contact VOIDRA – Get in Touch | Premium Fashion Support</title>
        <meta name="description" content="Contact VOIDRA for inquiries, support, or partnerships. Multiple ways to connect with our premium fashion team." />
      </Head>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-70 pb-75 px-4 relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Model with bags.jpg')" }}
        ></div>
        <div className="absolute inset-0  from-gray-50/80 to-gray-100/80"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-wide text-white">
            CONTACT VOIDRA
          </h1>
          <p className="text-xl sm:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            We're here to help you elevate your style journey.
            Connect with us for support, inquiries, or partnerships.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 bg-[#cbd1c4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-wide text-gray-900">
              GET IN TOUCH
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to connect with our team
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center group">
                <a
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="block bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4 flex items-center justify-center">{method.icon}</div> 

                  <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-black">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                  <p className="font-medium text-black mb-2">{method.contact}</p>
                  <p className="text-gray-500 text-xs">{method.availability}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#cbd1c4] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-wide text-gray-900">
                SEND US A MESSAGE
              </h2>
              <p className="text-black mb-8 leading-relaxed">
                Have a question or want to collaborate? We&apos;d love to hear from you.
                Send us a message and we&apos;ll respond as soon as possible.
              </p>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-green-700 font-medium">Message sent successfully! We&apos;ll get back to you soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors rounded-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors rounded-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors rounded-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-black mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors rounded-sm"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors rounded-sm"
                    placeholder="Brief subject of your message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors rounded-sm resize-vertical"
                    placeholder="Please share your message, questions, or how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-black text-white hover:bg-gray-800 disabled:bg-gray-400 transition-colors duration-300 font-medium tracking-wide uppercase rounded-sm"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Map & Office Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-wide text-gray-900">
                VISIT OUR STORES
              </h2>

              {/* Interactive Map (selected office) */}
              <div ref={mapRef} className="mb-8">
                <iframe
                  title={`Map of ${selectedOffice.city}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(selectedOffice.address)}&output=embed`}
                  className="w-full h-64 rounded-lg border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="mt-2 text-sm text-gray-600">
                  Showing: <span className="font-medium text-gray-800">{selectedOffice.city}</span>
                </div>
              </div>

             <h1 className="text-3xl sm:text-4xl font-bold mb-4 tracking-wide text-gray-900 text-center">
                 OFFICE ADDRESS
              </h1>


        

              {/* Office Locations */}
              <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-6 w-150 h-70">
                {offices.map((office, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-lg text-gray-900">{office.city}</h3>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {office.type}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-600 flex items-start">
                        <svg className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {office.address}
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        {office.phone}
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        {office.email}
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {office.hours}
                      </p>
                      <div className="pt-2">
                        <button
                          onClick={() => {
                            setSelectedOffice(office)
                            mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          }}
                          className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors text-xs uppercase tracking-wide"
                          aria-label={`View ${office.city} on map`}
                        >
                          <span className="mr-2">📍</span>
                          View on map
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50 bg-gradient-to-b from-[#5a2917] to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-wide text-gray-900">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-lg text-black-600">
              Quick answers to common inquiries
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left flex justify-between items-center font-semibold text-lg text-gray-900 hover:text-gray-700 transition-colors"
                >
                  {faq.question}
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${openFaqs[index] ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaqs[index] && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link href="/faq">
              <button className="px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-medium tracking-wide uppercase">
                View All FAQs
              </button>
            </Link>
          </div> */}
        </div>
      </section>

      {/* Newsletter */}
      {/* <section className="py-16 px-4 bg-black text-white  bg-gradient-to-b from-[#5a2917] to-white">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-light mb-4 tracking-wide">
            STAY CONNECTED
          </h3>
          <p className="text-gray-300 mb-8 text-lg">
            Subscribe to receive exclusive updates, new collection launches, and special offers.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm"
            />
            <button className="px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors duration-300 font-medium uppercase tracking-wide rounded-sm">
              Subscribe
            </button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
