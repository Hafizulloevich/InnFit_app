import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import { Heart, ShoppingCart, Home, Search, Settings, ShoppingBag, ChevronLeft, ChevronRight, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import BarsStatusBarDesignLight from "../imports/BarsStatusBarDesignLight";
import svgPaths from "../imports/svg-uufo388ime";
import imgUnsplashMHUk4Se7PeY from "figma:asset/15ccb7f8f307fccfd6490b7c69d110be523e0933.png";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: string;
  size: string;
  sizes: string[];
  images: string[];
  features: string[];
}

const favoriteProducts: Product[] = [
  {
    id: 1,
    name: "Nike Sneakers",
    description: "Vision Alta Men's Shoes Size (All Colours)",
    price: 1500,
    originalPrice: 2999,
    rating: 4.5,
    reviews: "56,890",
    size: "7 UK",
    sizes: ["6 UK", "7 UK", "8 UK", "9 UK", "10 UK"],
    images: [
      imgUnsplashMHUk4Se7PeY,
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ],
    features: ["Nearest Store", "VIP", "Return policy"]
  },
  {
    id: 2,
    name: "Nike Sneakers",
    description: "Mid-Rebel Move High White Black Pink Size",
    price: 1900,
    originalPrice: 2499,
    rating: 4.5,
    reviews: "236,890",
    size: "8 UK",
    sizes: ["6 UK", "7 UK", "8 UK", "9 UK", "10 UK"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ],
    features: ["Nearest Store", "VIP", "Return policy"]
  },
  {
    id: 3,
    name: "Nike Air Max",
    description: "Air Max 270 React Women's Running Shoes",
    price: 2200,
    originalPrice: 3200,
    rating: 5.0,
    reviews: "145,678",
    size: "7 UK",
    sizes: ["5 UK", "6 UK", "7 UK", "8 UK", "9 UK"],
    images: [
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ],
    features: ["Nearest Store", "VIP", "Return policy"]
  }
];

const similarProducts = [
  {
    id: 4,
    name: "Nike Sneakers",
    description: "Nike Jordan Delta Low Mystic Black",
    price: 3200,
    rating: 4.5,
    reviews: "46,890",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400"
  },
  {
    id: 5,
    name: "Nike Sneakers",
    description: "Mid-Rebel Move High White Black Pink Size",
    price: 1900,
    rating: 4.5,
    reviews: "236,890",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400"
  },
  {
    id: 6,
    name: "Nike Air Jordan",
    description: "Retro High OG University Blue",
    price: 2500,
    rating: 5.0,
    reviews: "98,234",
    image: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400"
  }
];

function ImageCarousel({ images, productName }: { images: string[]; productName: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + images.length) % images.length);

  return (
    <div className="relative bg-gray-100 rounded-[12px] overflow-hidden h-[280px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={images[currentIndex]}
            alt={productName}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      
      {images.length > 1 && (
        <>
          <motion.button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </motion.button>
          <motion.button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </motion.button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-white w-6" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ShopPage({
  onBack,
  onNavigateToGetStarted,
  onNavigateToProfile,
  onNavigateToCheckout,
  onNavigateToTrendingProducts
}: {
  onBack: () => void;
  onNavigateToGetStarted: () => void;
  onNavigateToProfile: () => void;
  onNavigateToCheckout: () => void;
  onNavigateToTrendingProducts?: () => void;
}) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [activeNav, setActiveNav] = useState("wishlist");
  const [favorites, setFavorites] = useState<Set<number>>(new Set([1, 2, 3]));

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const discount = selectedProduct 
    ? Math.round(((selectedProduct.originalPrice - selectedProduct.price) / selectedProduct.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-[#fdfdfd] h-screen relative overflow-y-auto overflow-x-hidden pb-24">
      {/* Status Bar - iPhone Standard */}
      <div className="bg-white relative h-[44px] sticky top-0 z-30">
        <BarsStatusBarDesignLight />
      </div>

      {/* Header */}
      <div className="bg-white px-4 py-4 flex items-center justify-between shadow-sm sticky top-[44px] z-30">
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.1, x: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        <h1 className="text-[16px] font-semibold text-black">Favorites</h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ShoppingCart className="w-6 h-6 text-black" />
        </motion.button>
      </div>

      {/* Favorites List */}
      <div className="px-4 py-6 space-y-6">
        {favoriteProducts.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-[12px] shadow-sm overflow-hidden"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4">
              <ImageCarousel images={product.images} productName={product.name} />
              
              <div className="mt-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-[10px] text-gray-500 mb-1">Size: {product.size}</p>
                    <div className="flex gap-2 mb-3">
                      {product.sizes.map((size) => (
                        <motion.button
                          key={size}
                          className={`px-3 py-1 rounded-[6px] text-[12px] font-medium ${
                            size === product.size
                              ? "bg-[#0088ff] text-white"
                              : "bg-gray-100 text-black"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            // Update size
                          }}
                        >
                          {size}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>

                <h3 className="text-[20px] font-semibold text-black mb-1">{product.name}</h3>
                <p className="text-[14px] text-gray-600 mb-3">{product.description}</p>

                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-[16px] ${i < Math.floor(product.rating) ? "text-[#EDB310]" : "text-[#BBBBBB]"}`}>
                      ★
                    </span>
                  ))}
                  <span className="text-[14px] text-gray-500">{product.reviews}</span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <p className="text-[18px] text-gray-400 line-through">${product.originalPrice}</p>
                  <p className="text-[24px] font-bold text-black">${product.price}</p>
                  <div className="bg-[#FEF3F2] text-[#FF5247] text-[14px] px-3 py-1 rounded-[6px] font-semibold">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
                  </div>
                </div>

                <p className="text-[14px] font-semibold text-black mb-2">Product Details</p>
                <p className="text-[12px] text-gray-600 mb-3 leading-relaxed">
                  Perhaps the most iconic sneaker of all-time, this original "Chicago"? colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. This 2015 release saw the...More
                </p>

                <div className="flex gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 bg-gray-50 px-3 py-2 rounded-[8px]">
                      <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                      <span className="text-[12px] text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.button
                    className="flex-1 bg-[#0088ff] text-white py-3 rounded-[8px] flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02, backgroundColor: "#0077ee" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span className="text-[14px] font-semibold">Add to cart</span>
                  </motion.button>
                  <motion.button
                    className="bg-[#00C9A7] text-white px-8 py-3 rounded-[8px] text-[14px] font-semibold"
                    whileHover={{ scale: 1.02, backgroundColor: "#00B896" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    $ Buy Now
                  </motion.button>
                </div>

                <motion.div
                  className="mt-3 bg-[#0088ff] text-white py-3 rounded-[8px] text-center text-[14px] font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Delivery in within 2 Days
                </motion.div>

                <div className="mt-4 flex items-center justify-between">
                  <motion.button
                    className="flex items-center gap-2 text-[14px] text-gray-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                    <span>Check on Me</span>
                  </motion.button>
                  <motion.button
                    className="flex items-center gap-2 text-[14px] text-gray-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                    <span>Add to Compare</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Similar Products */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-[18px] font-semibold text-black">Similar To</h3>
            <p className="text-[14px] text-gray-500">282+ Iteams</p>
          </div>
          <div className="flex gap-3">
            <motion.button
              className="text-[12px] text-gray-700 flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sort ↑↓
            </motion.button>
            <motion.button
              className="text-[12px] text-gray-700 flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Filter ☰
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {similarProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-[12px] overflow-hidden shadow-sm"
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-[140px] bg-gray-100">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <motion.button
                  className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5"
                  onClick={() => toggleFavorite(product.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites.has(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                    }`}
                  />
                </motion.button>
              </div>
              <div className="p-3">
                <p className="text-[14px] font-semibold text-black mb-1">{product.name}</p>
                <p className="text-[11px] text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-[12px] ${i < Math.floor(product.rating) ? "text-[#EDB310]" : "text-[#BBBBBB]"}`}>
                      ★
                    </span>
                  ))}
                  <span className="text-[10px] text-gray-500">{product.reviews}</span>
                </div>
                <p className="text-[16px] font-bold text-black">${product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-around shadow-lg z-40"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.button
          className="flex flex-col items-center gap-1"
          onClick={() => {
            setActiveNav("home");
            onNavigateToGetStarted();
          }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <Home className={`w-6 h-6 ${activeNav === "home" ? "text-[#0088ff]" : "text-gray-600"}`} />
          <span className={`text-[11px] ${activeNav === "home" ? "text-[#0088ff]" : "text-gray-600"}`}>Home</span>
        </motion.button>

        <motion.button
          className="flex flex-col items-center gap-1"
          onClick={() => setActiveNav("wishlist")}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <Heart className={`w-6 h-6 ${activeNav === "wishlist" ? "text-[#0088ff] fill-[#0088ff]" : "text-gray-600"}`} />
          <span className={`text-[11px] ${activeNav === "wishlist" ? "text-[#0088ff]" : "text-gray-600"}`}>Wishlist</span>
        </motion.button>

        <motion.button
          className="bg-[#0088ff] w-14 h-14 rounded-full flex items-center justify-center -mt-8 shadow-lg"
          onClick={() => {
            setActiveNav("search");
            if (onNavigateToTrendingProducts) {
              onNavigateToTrendingProducts();
            }
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Search className="w-7 h-7 text-white" />
        </motion.button>

        <motion.button
          className="flex flex-col items-center gap-1"
          onClick={() => {
            setActiveNav("shop");
            onNavigateToCheckout();
          }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingBag className={`w-6 h-6 ${activeNav === "shop" ? "text-[#0088ff]" : "text-gray-600"}`} />
          <span className={`text-[11px] ${activeNav === "shop" ? "text-[#0088ff]" : "text-gray-600"}`}>Shop</span>
        </motion.button>

        <motion.button
          className="flex flex-col items-center gap-1"
          onClick={() => {
            setActiveNav("settings");
            onNavigateToProfile();
          }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <Settings className={`w-6 h-6 ${activeNav === "settings" ? "text-[#0088ff]" : "text-gray-600"}`} />
          <span className={`text-[11px] ${activeNav === "settings" ? "text-[#0088ff]" : "text-gray-600"}`}>Setting</span>
        </motion.button>
      </motion.div>
    </div>
  );
}