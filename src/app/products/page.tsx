"use client"
// src/app/collections/page.tsx
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface ProductCategory {
  id: string
  name: string
  description: string
  image: string
  productCount: number
  priceRange: string
  gender: 'ladies' | 'gents'
}

interface ProductDetail {
  id: number
  name: string
  description: string
  price: number
  originalPrice?: number
  images: string[]
  colors: string[]
  sizes: string[]
  material: string
  category: string
  gender: 'ladies' | 'gents'
  features: string[]
}

export default function ProductsPage() {
  const [selectedGender, setSelectedGender] = useState<'ladies' | 'gents'>('ladies')
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null)
  const [showProductModal, setShowProductModal] = useState(false)

  const productCategories: ProductCategory[] = [
    // Ladies Wear
    {
      id: 'ladies-shoes',
      name: 'The Poise Stiletto | Sculpted Leather Elegance',
      description: 'Elegant footwear for the modern woman',
      image: '/product/shoes1.jpg',
      productCount: 24,
      priceRange: '₹8,000 - ₹25,000',
      gender: 'ladies'
    },
    {
      id: 'ladies-handbags',
      name: 'European Stiletto Ankle Boots for Bold Women',
      description: 'Luxury handbags and accessories',
      image: '/images/ladies-handbags.jpg',
      productCount: 32,
      priceRange: '₹12,000 - ₹75,000',
      gender: 'ladies'
    },
    {
      id: 'ladies-shirts',
      name: 'VOIDRA Denim Over-The-Knee Boots | Western',
      description: 'Contemporary blouses and statement tops',
      image: '/images/ladies-shirts.jpg',
      productCount: 18,
      priceRange: '₹4,500 - ₹15,000',
      gender: 'ladies'
    },
    {
      id: 'ladies-pants',
      name: 'VOIDRA StreetMuse™ – Retro Stitch Accent Shoulder Bag',
      description: 'Tailored bottoms for professional elegance',
      image: '/images/ladies-pants.jpg',
      productCount: 16,
      priceRange: '₹6,000 - ₹20,000',
      gender: 'ladies'
    },
    {
      id: 'ladies-sandals',
      name: 'Starlight Metallic Tote Messenger Bag | VOIDRA',
      description: 'Chic sandals for every occasion',
      image: '/images/ladies-sandals.jpg',
      productCount: 20,
      priceRange: '₹5,500 - ₹18,000',
      gender: 'ladies'
    },
    {
      id: 'ladies-accessories',
      name: 'VOIDRA UrbanCroc Tote – Women Crocodile Pattern Shoulder Bag',
      description: 'Jewelry, scarves, and finishing touches',
      image: '/images/ladies-accessories.jpg',
      productCount: 28,
      priceRange: '₹2,500 - ₹35,000',
      gender: 'ladies'
    },

    // Gents Wear
    {
      id: 'gents-shoes',
      name: 'Shoes',
      description: 'Premium footwear for the distinguished gentleman',
      image: '/images/gents-shoes.jpg',
      productCount: 22,
      priceRange: '₹10,000 - ₹35,000',
      gender: 'gents'
    },
    {
      id: 'gents-shirts',
      name: 'Shirts',
      description: 'Sophisticated shirts for modern men',
      image: '/images/gents-shirts.jpg',
      productCount: 26,
      priceRange: '₹5,500 - ₹18,000',
      gender: 'gents'
    },
    {
      id: 'gents-pants',
      name: 'Pants & Trousers',
      description: 'Tailored trousers and casual pants',
      image: '/images/gents-pants.jpg',
      productCount: 20,
      priceRange: '₹7,000 - ₹25,000',
      gender: 'gents'
    },
    {
      id: 'gents-wallets',
      name: 'Wallets',
      description: 'Luxury leather wallets and accessories',
      image: '/images/gents-wallets.jpg',
      productCount: 15,
      priceRange: '₹3,500 - ₹12,000',
      gender: 'gents'
    }
  ]

  const sampleProducts: ProductDetail[] = [
    {
      id: 1,
      name: 'VOIDRA Elegance Heel',
      description: 'A sophisticated heel that embodies timeless elegance with contemporary flair. Crafted for the woman who commands attention with every step.',
      price: 16500,
      originalPrice: 18000,
      images: ['/images/elegance-heel-1.jpg', '/images/elegance-heel-2.jpg', '/images/elegance-heel-3.jpg'],
      colors: ['Black', 'Nude', 'Burgundy'],
      sizes: ['36', '37', '38', '39', '40', '41'],
      material: 'Premium Italian Leather',
      category: 'ladies-shoes',
      gender: 'ladies',
      features: ['Memory foam insole', 'Anti-slip sole', 'Breathable lining', 'Handcrafted details']
    },
    {
      id: 2,
      name: 'VOIDRA Luna Handbag',
      description: 'The iconic Luna handbag represents the perfect fusion of luxury and functionality. A statement piece for the modern woman.',
      price: 42000,
      images: ['/images/luna-bag-1.jpg', '/images/luna-bag-2.jpg', '/images/luna-bag-3.jpg'],
      colors: ['Black', 'Cognac', 'Midnight Blue'],
      sizes: ['One Size'],
      material: 'Genuine Leather with Gold Hardware',
      category: 'ladies-handbags',
      gender: 'ladies',
      features: ['Multiple compartments', 'Detachable strap', 'Premium hardware', 'Dust bag included']
    },
    {
      id: 3,
      name: 'VOIDRA Classic Oxford',
      description: 'Timeless Oxford shoes crafted for the discerning gentleman. Where tradition meets contemporary sophistication.',
      price: 22500,
      images: ['/images/oxford-1.jpg', '/images/oxford-2.jpg', '/images/oxford-3.jpg'],
      colors: ['Black', 'Brown', 'Tan'],
      sizes: ['40', '41', '42', '43', '44', '45'],
      material: 'Full Grain Leather',
      category: 'gents-shoes',
      gender: 'gents',
      features: ['Goodyear welted', 'Leather sole', 'Breathable lining', 'Traditional craftsmanship']
    },
    {
      id: 4,
      name: 'VOIDRA Executive Wallet',
      description: 'A refined wallet that speaks of understated luxury. Essential for the modern gentleman who values both style and functionality.',
      price: 8500,
      images: ['/images/wallet-1.jpg', '/images/wallet-2.jpg', '/images/wallet-3.jpg'],
      colors: ['Black', 'Brown', 'Navy'],
      sizes: ['One Size'],
      material: 'Premium Leather',
      category: 'gents-wallets',
      gender: 'gents',
      features: ['RFID blocking', '8 card slots', 'Coin pocket', 'ID window']
    }
  ]

  const filteredCategories = productCategories.filter(category => category.gender === selectedGender)

  const handleCategoryClick = (categoryId: string) => {
    // Find a sample product from this category
    const sampleProduct = sampleProducts.find(product => product.category === categoryId)
    if (sampleProduct) {
      setSelectedProduct(sampleProduct)
      setShowProductModal(true)
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>VOIDRA Collections – Premium Fashion for Ladies & Gents</title>
        <meta name="description" content="Discover VOIDRA's curated collection of luxury fashion for ladies and gentlemen. Bold elegance meets intentional design." />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-70 pb-75 px-4 text-white" style={{ backgroundImage: 'url(/boy.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 tracking-wide text-white">
            VOIDRA COLLECTIONS
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
            Curated pieces for those who don&apos;t follow trends — they create them.
          </p>
          
          {/* Gender Toggle */}
          <div className="flex justify-center">
            <div className="inline-flex border border-gray-300 rounded-lg overflow-hidden">
              {/* <button
                onClick={() => setSelectedGender('ladies')}
                className={`px-8 py-3 font-medium transition-all duration-300 ${
                  selectedGender === 'ladies'
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 hover:text-black'
                }`}
              >
                Ladies Wear
              </button> */}
              {/* <button
                onClick={() => setSelectedGender('gents')}
                className={`px-8 py-3 font-medium transition-all duration-300 ${
                  selectedGender === 'gents'
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 hover:text-black'
                }`}
              >
                Gents Wear
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light mb-4 tracking-wide text-gray-900">
              {selectedGender === 'ladies' ? 'LADIES COLLECTION' : 'GENTS COLLECTION'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {selectedGender === 'ladies' 
                ? 'Elegant pieces designed for the bold and confident woman'
                : 'Sophisticated essentials for the modern gentleman'
              }
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => (
              <div 
                key={category.id} 
                className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
                onClick={() => handleCategoryClick(category.id)}
              >
                
                {/* Category Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  
                  {/* Category Image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden relative">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-center">
                        {/* <div className="text-4xl mb-2">
                          {category.id.includes('shoes') && '👞'}
                          {category.id.includes('handbags') && '👜'}
                          {category.id.includes('shirts') && '👔'}
                          {category.id.includes('pants') && '👖'}
                          {category.id.includes('sandals') && '👡'}
                          {category.id.includes('accessories') && '💎'}
                          {category.id.includes('wallets') && '👛'}
                        </div> */}
                        <span className="text-gray-500 text-sm font-medium">{category.name}</span>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                   
                  </div>

                  {/* Category Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-black transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs text-gray-500">
                        {category.productCount} Products
                      </span>
                      <span className="text-xs text-gray-500">
                        {category.priceRange}
                      </span>
                    </div>

                    {/* Action Button */}
                    {/* <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-all duration-300 font-medium text-sm group-hover:bg-black group-hover:text-white">
                      Explore Collection
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Collection Stats */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <h4 className="text-2xl font-light text-gray-900 mb-2">
                  {filteredCategories.reduce((sum, cat) => sum + cat.productCount, 0)}+
                </h4>
                <p className="text-gray-600 text-sm">Products Available</p>
              </div>
              <div>
                <h4 className="text-2xl font-light text-gray-900 mb-2">
                  {filteredCategories.length}
                </h4>
                <p className="text-gray-600 text-sm">Categories</p>
              </div>
              <div>
                <h4 className="text-2xl font-light text-gray-900 mb-2">Premium</h4>
                <p className="text-gray-600 text-sm">Quality Assured</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

    

      <Footer />
    </div>
  )
}
