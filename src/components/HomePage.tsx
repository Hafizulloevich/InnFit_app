import { motion } from "motion/react";
import { useState, useRef } from "react";
import { Heart, Search, ChevronLeft, ChevronRight, Home, ShoppingBag, Settings, Menu, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import BarsStatusBarDesignLight from "../imports/BarsStatusBarDesignLight";
import logoImage from "figma:asset/bcad57e1d6c1c2268497f73295365b193f5a969f.png";
import imgProfile from "figma:asset/e2db1865e7299c33d1d7de36aa46e37cda72d981.png";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  brand?: string;
}

// Generate random fit percentage between 80-100%
const generateFitPercentage = (productId: number): number => {
  // Use productId as seed for consistent values per product
  const seed = productId * 137; // Prime number for better distribution
  return 80 + Math.floor((seed % 21)); // Returns 80-100
};

const dealProducts: Product[] = [
  {
    id: 1,
    name: "Women Printed Dress",
    price: 520,
    originalPrice: 600,
    rating: 4.5,
    brand: "LIME by Soly Hux",
    image: "https://images.unsplash.com/photo-1610202631408-fa6ba0f39ca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBkcmVzc3xlbnwxfHx8fDE3NjQxNjg4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    name: "Nike Air Jordan Retro",
    price: 155,
    originalPrice: 200,
    rating: 5.0,
    brand: "Nike Jordan",
    image: "https://images.unsplash.com/photo-1656944227480-98180d2a5155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc2NDE0NjU5MHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    name: "Luxury Watch",
    price: 350,
    originalPrice: 450,
    rating: 4.8,
    brand: "Timex",
    image: "https://images.unsplash.com/photo-1702865053958-71ec751c4118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMGx1eHVyeXxlbnwxfHx8fDE3NjQxMzU3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const trendingProducts: Product[] = [
  {
    id: 4,
    name: "IWC Schaffhausen 2021 Pilot Watch",
    price: 650,
    rating: 5.0,
    brand: "IWC",
    image: "https://images.unsplash.com/photo-1702865053958-71ec751c4118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMGx1eHVyeXxlbnwxfHx8fDE3NjQxMzU3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    name: "Men's Sneakers",
    price: 120,
    rating: 4.5,
    brand: "Nike",
    image: "https://images.unsplash.com/photo-1656944227480-98180d2a5155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc2NDE0NjU5MHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    name: "Women Heels",
    price: 180,
    rating: 4.7,
    brand: "Zara",
    image: "https://images.unsplash.com/photo-1686668572495-2832c97ea508?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwaGVlbHMlMjBzaG9lc3xlbnwxfHx8fDE3NjQxNDgwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const categories = [
  { id: 1, name: "All", image: "https://images.unsplash.com/photo-1610202631408-fa6ba0f39ca3?w=100&h=100&fit=crop" },
  { id: 2, name: "Dress", image: "https://images.unsplash.com/photo-1610202631408-fa6ba0f39ca3?w=100&h=100&fit=crop" },
  { id: 3, name: "Shoes", image: "https://images.unsplash.com/photo-1656944227480-98180d2a5155?w=100&h=100&fit=crop" },
  { id: 4, name: "Watch", image: "https://images.unsplash.com/photo-1702865053958-71ec751c4118?w=100&h=100&fit=crop" },
  { id: 5, name: "Bags", image: "https://images.unsplash.com/photo-1758520387687-38a92a7ee42f?w=100&h=100&fit=crop" },
];

function ProductCard({ product, onFavorite, isFavorite }: { product: Product; onFavorite: () => void; isFavorite: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const fitPercentage = generateFitPercentage(product.id);

  return (
    <>
      <motion.div
        className="relative flex-shrink-0 w-[160px] bg-white rounded-[12px] overflow-hidden shadow-sm cursor-pointer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsExpanded(true)}
      >
        <div className="relative h-[140px] bg-gray-100">
          <ImageWithFallback src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <motion.button
            className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5"
            onClick={(e) => {
              e.stopPropagation();
              onFavorite();
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart
              className={`w-4 h-4 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`}
            />
          </motion.button>
        </div>
        <div className="p-3">
          <p className="text-[11px] text-gray-500 mb-1">{product.brand}</p>
          <p className="text-[13px] font-medium text-black line-clamp-2 mb-2">{product.name}</p>
          <div className="flex items-center gap-1 mb-2">
            <span className="text-yellow-500 text-[12px]">★</span>
            <span className="text-[11px] text-gray-600">{product.rating}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="text-[15px] font-semibold text-black">${product.price}</p>
              {product.originalPrice && (
                <p className="text-[12px] text-gray-400 line-through">${product.originalPrice}</p>
              )}
            </div>
            <div className="bg-green-50 px-2 py-0.5 rounded-[4px]">
              <p className="text-[11px] font-semibold text-green-600">{fitPercentage}% fit</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expanded View Overlay */}
      {isExpanded && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsExpanded(false)}
        >
          <motion.div
            className="bg-white rounded-[20px] p-6 max-w-[340px] w-[90%]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[280px] bg-gray-100 rounded-[12px] overflow-hidden mb-4">
              <ImageWithFallback src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <p className="text-[13px] text-gray-500 mb-2">{product.brand}</p>
            <h3 className="text-[20px] font-semibold text-black mb-3">{product.name}</h3>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-yellow-500 text-[16px]">★</span>
              <span className="text-[14px] text-gray-600">{product.rating} Rating</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <p className="text-[24px] font-bold text-black">${product.price}</p>
              {product.originalPrice && (
                <p className="text-[16px] text-gray-400 line-through">${product.originalPrice}</p>
              )}
              <div className="ml-auto bg-green-50 px-3 py-1.5 rounded-[6px]">
                <p className="text-[14px] font-semibold text-green-600">{fitPercentage}% fit</p>
              </div>
            </div>
            <div className="flex gap-3">
              <motion.button
                className="flex-1 bg-[#0088ff] text-white py-3 rounded-[8px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Try On
              </motion.button>
              <motion.button
                className="bg-gray-100 text-black px-5 py-3 rounded-[8px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsExpanded(false)}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

function HorizontalScroller({
  children,
  id
}: {
  children: React.ReactNode;
  id: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative">
      <motion.button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
        onClick={() => scroll("left")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </motion.button>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>
      <motion.button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
        onClick={() => scroll("right")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </motion.button>
    </div>
  );
}

export default function HomePage({
  onNavigateToGetStarted,
  onNavigateToShop,
  onNavigateToProfile,
  onNavigateToTrendingProducts,
  onNavigateToPlaceOrder
}: {
  onNavigateToGetStarted: () => void;
  onNavigateToShop: () => void;
  onNavigateToProfile: () => void;
  onNavigateToTrendingProducts: () => void;
  onNavigateToPlaceOrder: () => void;
}) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [activeNav, setActiveNav] = useState("home");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);

  const allProducts = [...dealProducts, ...trendingProducts];

  const handleSearch = () => {
    if (searchValue.trim()) {
      // Randomly shuffle and select 6-12 products to simulate search results
      const shuffled = [...allProducts].sort(() => Math.random() - 0.5);
      const resultCount = 6 + Math.floor(Math.random() * 7); // 6-12 results
      setFilteredProducts(shuffled.slice(0, resultCount));
      setIsSearchActive(true);
    } else {
      setIsSearchActive(false);
      setFilteredProducts([]);
    }
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setSearchValue("");
    setIsSearchActive(false);
    setFilteredProducts([]);
  };

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => searchRef.current?.focus(), 500);
  };

  return (
    <div className="bg-[#f8f9fa] h-screen relative overflow-y-auto overflow-x-hidden pb-24">
      {/* Status Bar - iPhone Standard */}
      <div className="bg-white relative h-[44px] sticky top-0 z-30">
        <BarsStatusBarDesignLight />
      </div>

      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between shadow-sm sticky top-[44px] z-30">
        <Menu className="w-6 h-6 text-black" />
        <div className="flex items-center gap-2">
          <ImageWithFallback src={logoImage} alt="InnFit Logo" className="w-8 h-8 object-contain" />
          <span className="text-[18px] font-semibold text-black">InnFit</span>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-pink-400 bg-gradient-to-br from-pink-400 to-purple-500">
          <img
            src={imgProfile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-4 bg-white">
        <div className="relative">
          <motion.div
            className={`flex items-center bg-gray-100 rounded-[10px] px-4 py-3 border-2 ${
              searchFocused ? "border-[#0088ff]" : "border-transparent"
            }`}
            animate={{
              boxShadow: searchFocused ? "0 0 0 4px rgba(0,136,255,0.1)" : "none"
            }}
          >
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              ref={searchRef}
              type="text"
              placeholder="Search Products..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              onKeyPress={handleSearchKeyPress}
              className="flex-1 bg-transparent outline-none text-[14px] text-black placeholder:text-gray-400"
            />
            {searchValue && (
              <motion.button
                onClick={clearSearch}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="ml-2"
              >
                <X className="w-5 h-5 text-gray-400" />
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 py-3 bg-white flex items-center justify-between border-b border-gray-100">
        <motion.button
          className="text-[14px] font-medium text-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All Featured
        </motion.button>
        <div className="flex gap-3">
          <motion.button
            className="text-[14px] text-gray-600 flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sort by ↓
          </motion.button>
          <motion.button
            className="text-[14px] text-gray-600 flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Filter ☰
          </motion.button>
        </div>
      </div>

      {/* Categories */}
      <div className="py-4 bg-white">
        <HorizontalScroller id="categories">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNavigateToTrendingProducts}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[11px] text-gray-700">{category.name}</span>
            </motion.div>
          ))}
        </HorizontalScroller>
      </div>

      {/* Search Results */}
      {isSearchActive && filteredProducts.length > 0 && (
        <div className="px-4 py-4 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[18px] font-semibold text-black">Search Results</h3>
            <span className="text-[14px] text-gray-500">{filteredProducts.length} items found</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onFavorite={() => toggleFavorite(product.id)}
                isFavorite={favorites.has(product.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Hide default content when search is active */}
      {!isSearchActive && (
        <>
      {/* Promotional Banner */}
      <div className="px-4 py-4">
        <motion.div
          className="relative bg-gradient-to-r from-pink-400 to-pink-500 rounded-[16px] p-6 overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative z-10">
            <h2 className="text-[24px] font-bold text-white mb-2">50-40% OFF</h2>
            <p className="text-[13px] text-white/90 mb-4">Now in (product)<br />All colours</p>
            <motion.button
              className="bg-white text-pink-500 px-6 py-2 rounded-[8px] text-[13px] font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNavigateToTrendingProducts}
            >
              Shop Now →
            </motion.button>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758520387687-38a92a7ee42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMHdvbWFuJTIwYmFnc3xlbnwxfHx8fDE3NjQxNzIzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Shopping"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
          </div>
        </motion.div>
      </div>

      {/* Deal of the Day */}
      <div className="py-4">
        <div className="px-4 flex items-center justify-between mb-4">
          <h3 className="text-[18px] font-semibold text-black">Deal of the Day</h3>
          <motion.button
            className="flex items-center gap-1 bg-[#0088ff] text-white px-4 py-2 rounded-[8px] text-[13px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNavigateToTrendingProducts}
          >
            View All →
          </motion.button>
        </div>
        <HorizontalScroller id="deals">
          {dealProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onFavorite={() => toggleFavorite(product.id)}
              isFavorite={favorites.has(product.id)}
            />
          ))}
        </HorizontalScroller>
      </div>

      {/* Special Offers */}
      <div className="px-4 py-4">
        <motion.div
          className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-[16px] p-6 flex items-center justify-between"
          whileHover={{ scale: 1.02 }}
        >
          <div>
            <h3 className="text-[20px] font-bold text-black mb-2">Special Offers 🎉</h3>
            <p className="text-[13px] text-gray-600 mb-1">We make sure you get the</p>
            <p className="text-[13px] text-gray-600">offer you need at best prices</p>
          </div>
        </motion.div>
      </div>

      {/* Flat and Heels */}
      <div className="px-4 py-4">
        <motion.div
          className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-[16px] p-6 flex items-center justify-between"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex-1">
            <h3 className="text-[20px] font-bold text-black mb-2">Flat and Heels</h3>
            <p className="text-[13px] text-gray-600 mb-3">Stand a chance to get rewarded</p>
            <motion.button
              className="bg-[#0088ff] text-white px-5 py-2 rounded-[8px] text-[13px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNavigateToTrendingProducts}
            >
              Visit now →
            </motion.button>
          </div>
          <div className="w-24 h-24">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1686668572495-2832c97ea508?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwaGVlbHMlMjBzaG9lc3xlbnwxfHx8fDE3NjQxNDgwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Heels"
              className="w-full h-full object-cover rounded-[12px]"
            />
          </div>
        </motion.div>
      </div>

      {/* Trending Products */}
      <div className="py-4">
        <div className="px-4 flex items-center justify-between mb-4">
          <h3 className="text-[18px] font-semibold text-black">Trending Products</h3>
          <motion.button
            className="flex items-center gap-1 bg-[#0088ff] text-white px-4 py-2 rounded-[8px] text-[13px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNavigateToTrendingProducts}
          >
            View All →
          </motion.button>
        </div>
        <HorizontalScroller id="trending">
          {trendingProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onFavorite={() => toggleFavorite(product.id)}
              isFavorite={favorites.has(product.id)}
            />
          ))}
        </HorizontalScroller>
      </div>

      {/* Hot Summer Sale Banner */}
      <div className="px-4 py-4">
        <motion.div
          className="relative bg-gradient-to-r from-orange-200 to-yellow-200 rounded-[16px] h-[160px] overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1761552349911-d99f39bf70ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBzYWxlJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjQxMzgyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Summer Sale"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-center">
            <h2 className="text-[32px] font-bold text-white">Hot Summer Sale</h2>
          </div>
        </motion.div>
      </div>

      {/* New Arrivals */}
      <div className="py-4 px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[18px] font-semibold text-black">New Arrivals</h3>
          <motion.button
            className="flex items-center gap-1 bg-[#0088ff] text-white px-4 py-2 rounded-[8px] text-[13px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNavigateToTrendingProducts}
          >
            View All →
          </motion.button>
        </div>
        <p className="text-[14px] text-gray-500">Summer 25 Collections</p>
      </div>

      {/* Sponsored */}
      <div className="px-4 py-4">
        <h3 className="text-[18px] font-semibold text-black mb-4">Sponsored</h3>
        <motion.div
          className="relative bg-gradient-to-br from-amber-800 to-amber-600 rounded-[16px] h-[200px] overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1656944227480-98180d2a5155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc2NDE0NjU5MHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sponsored"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-[8px]">
            <p className="text-[18px] font-bold text-black">up to</p>
            <p className="text-[24px] font-bold text-[#0088ff]">50% OFF</p>
          </div>
        </motion.div>
      </div>

      {/* Up to 50% Off */}
      <div className="px-4 py-4 mb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] font-semibold text-black">up to 50% Off</h3>
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </div>
      </div>
        </>
      )}

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
          onClick={() => {
            setActiveNav("wishlist");
            onNavigateToShop();
          }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <Heart className={`w-6 h-6 ${activeNav === "wishlist" ? "text-[#0088ff]" : "text-gray-600"}`} />
          <span className={`text-[11px] ${activeNav === "wishlist" ? "text-[#0088ff]" : "text-gray-600"}`}>Wishlist</span>
        </motion.button>

        <motion.button
          className="bg-[#0088ff] w-14 h-14 rounded-full flex items-center justify-center -mt-8 shadow-lg"
          onClick={() => {
            setActiveNav("search");
            onNavigateToTrendingProducts();
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
            onNavigateToPlaceOrder();
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