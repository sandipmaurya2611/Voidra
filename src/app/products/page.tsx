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
      name: 'Shoes',
      description: 'Elegant footwear for the modern woman',
      image: '/images/ladies-shoes.jpg',
      productCount: 24,
      priceRange: '₹8,000 - ₹25,000',
      gender: 'ladies'
    },
    {
      id: 'ladies-handbags',
      name: 'Handbags',
      description: 'Luxury handbags and accessories',
      image: '/images/ladies-handbags.jpg',
      productCount: 32,
      priceRange: '₹12,000 - ₹75,000',
      gender: 'ladies'
    },
    {
      id: 'ladies-shirts',
      name: 'Shirts & Tops',
      description: 'Contemporary blouses and statement tops',
      image: '/images/ladies-shirts.jpg',
      productCount: 18,
      priceRange: '₹4,500 - ₹15,000',
      gender: 'ladies'
    },
    {
      id: 'ladies-pants',
      name: 'Pants & Trousers',
      description: 'Tailored bottoms for professional elegance',
      image: '/images/ladies-pants.jpg',
      productCount: 16,
      priceRange: '₹6,000 - ₹20,000',
      gender: 'ladies'
    },
    {
      id: 'ladies-sandals',
      name: 'Sandals',
      description: 'Chic sandals for every occasion',
      image: '/images/ladies-sandals.jpg',
      productCount: 20,
      priceRange: '₹5,500 - ₹18,000',
      gender: 'ladies'
    },
    {
      id: 'ladies-accessories',
      name: 'Accessories',
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
      <section className="pt-20 pb-12 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 tracking-wide text-gray-900">
            VOIDRA COLLECTIONS
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
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
                        <div className="text-4xl mb-2">
                          {category.id.includes('shoes') && '👞'}
                          {category.id.includes('handbags') && '👜'}
                          {category.id.includes('shirts') && '👔'}
                          {category.id.includes('pants') && '👖'}
                          {category.id.includes('sandals') && '👡'}
                          {category.id.includes('accessories') && '💎'}
                          {category.id.includes('wallets') && '👛'}
                        </div>
                        <span className="text-gray-500 text-sm font-medium">{category.name}</span>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white px-4 py-2 rounded-full shadow-lg">
                        <span className="text-black font-medium text-sm">View Products</span>
                      </div>
                    </div>
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

      {/* Product Detail Modal */}
      {showProductModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-light text-gray-900">Product Details</h2>
              <button
                onClick={() => setShowProductModal(false)}
                className="text-gray-500 hover:text-black transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Product Images */}
                <div>
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-lg font-medium">Product Image</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedProduct.images.slice(1).map((_, index) => (
                      <div key={index} className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-xs">Image {index + 2}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <h3 className="text-2xl font-light mb-4 text-gray-900">{selectedProduct.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{selectedProduct.description}</p>
                  
                  {/* Price */}
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="text-2xl font-medium text-gray-900">
                      {formatPrice(selectedProduct.price)}
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        {formatPrice(selectedProduct.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Material */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-gray-900">Material</h4>
                    <p className="text-gray-600">{selectedProduct.material}</p>
                  </div>

                  {/* Colors */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-gray-900">Available Colors</h4>
                    <div className="flex space-x-2">
                      {selectedProduct.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer hover:border-black transition-colors"
                          style={{
                            backgroundColor: color === 'Black' ? '#000' : 
                                           color === 'White' ? '#fff' :
                                           color === 'Brown' ? '#8B4513' :
                                           color === 'Tan' ? '#D2B48C' :
                                           color === 'Navy' ? '#000080' :
                                           color === 'Nude' ? '#F5DEB3' :
                                           color === 'Burgundy' ? '#800020' :
                                           color === 'Cognac' ? '#8B4513' :
                                           color === 'Midnight Blue' ? '#191970' : '#ccc'
                          }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Sizes */}
                  {selectedProduct.sizes.length > 1 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-gray-900">Available Sizes</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.sizes.map((size, index) => (
                          <button
                            key={index}
                            className="px-3 py-1 border border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors text-sm"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3 text-gray-900">Features</h4>
                    <ul className="space-y-1">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button className="w-full px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors font-medium tracking-wide uppercase">
                      Add to Cart
                    </button>
                    <button className="w-full px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors font-medium tracking-wide uppercase">
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter */}
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

      <Footer />
    </div>
  )
}
