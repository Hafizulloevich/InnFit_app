import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import { Heart, Search, Home, ShoppingBag, Settings, X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import BarsStatusBarDesignLight from "../imports/BarsStatusBarDesignLight";
import logoImage from "figma:asset/bcad57e1d6c1c2268497f73295365b193f5a969f.png";
import imgProfile from "figma:asset/e2db1865e7299c33d1d7de36aa46e37cda72d981.png";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: string;
  image: string;
  images?: string[];
}

// Generate random fit percentage between 80-100%
const generateFitPercentage = (productId: number): number => {
  // Use productId as seed for consistent values per product
  const seed = productId * 137; // Prime number for better distribution
  return 80 + Math.floor((seed % 21)); // Returns 80-100
};

const products: Product[] = [
  {
    id: 1,
    name: "Black Winter...",
    description: "Autumn And Winter Casual cotton-padded jacket...",
    price: 499,
    originalPrice: 699,
    rating: 4.0,
    reviews: "6,890",
    image: "https://images.unsplash.com/photo-1588011025378-15f4778d2558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1588011025378-15f4778d2558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1588011025378-15f4778d2558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&sat=-100",
      "https://images.unsplash.com/photo-1588011025378-15f4778d2558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&hue=30"
    ]
  },
  {
    id: 2,
    name: "Mens Starry",
    description: "Mens Starry Sky Printed Shirt 100% Cotton Fabric",
    price: 399,
    originalPrice: 599,
    rating: 5.0,
    reviews: "1,52,344",
    image: "https://images.unsplash.com/photo-1761435755435-34546cbf5b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1761435755435-34546cbf5b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1761435755435-34546cbf5b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&sat=-100"
    ]
  },
  {
    id: 3,
    name: "Black Dress",
    description: "Solid Black Dress for Women, Sexy Chain Shorts Sleeve Dresses",
    price: 2,
    originalPrice: 2000,
    rating: 4.0,
    reviews: "5,44,690",
    image: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1614786269829-d24616faf56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1614786269829-d24616faf56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&sat=-50"
    ]
  },
  {
    id: 4,
    name: "Pink Embroide...",
    description: "EARTHLOGO Rose Pink Embroidered Tiered Max Dress",
    price: 1999,
    originalPrice: 2999,
    rating: 4.0,
    reviews: "45,690",
    image: "https://images.unsplash.com/photo-1717596028374-74027926d206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1717596028374-74027926d206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 5,
    name: "Flare Dress",
    description: "Antheaa Black & Rust Orange Floral Print Tiered Midi F...",
    price: 1990,
    originalPrice: 2990,
    rating: 5.0,
    reviews: "3,35,566",
    image: "https://images.unsplash.com/photo-1762342693452-c407e877cafd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1762342693452-c407e877cafd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 6,
    name: "denim dress",
    description: "Blue cotton denim dress Look 2 Printed cotton dr...",
    price: 999,
    originalPrice: 1599,
    rating: 5.0,
    reviews: "27,344",
    image: "https://images.unsplash.com/photo-1741943716275-2eaf11f4e918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1741943716275-2eaf11f4e918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 7,
    name: "Jordan Stay",
    description: "The classic Air Jordan 8 Retro 'South Beach' is inspired from the tropical...",
    price: 1999,
    originalPrice: 2999,
    rating: 3.0,
    reviews: "8,35,566",
    image: "https://images.unsplash.com/photo-1684918652908-8c5b4a154781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1684918652908-8c5b4a154781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 8,
    name: "Realme 7",
    description: "6 GB RAM | 64 GB ROM | Expandable Up to 256 GB 16.51 cm (6.5 inch)...",
    price: 1999,
    originalPrice: 2999,
    rating: 4.0,
    reviews: "2,93,656",
    image: "https://images.unsplash.com/photo-1592890288564-76628a30a657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1592890288564-76628a30a657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 9,
    name: "Sony PS4",
    description: "Sony PS4 Console, 1TB Slim with 3 Games: Gran Turis...",
    price: 1999,
    originalPrice: 2999,
    rating: 3.5,
    reviews: "8,35,566",
    image: "https://images.unsplash.com/photo-1604846887565-640d2f52d564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1604846887565-640d2f52d564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 10,
    name: "men's & boys s...",
    description: "George Walker Derby Cheenu Formal Shoes",
    price: 999,
    originalPrice: 1599,
    rating: 4.5,
    reviews: "56,890",
    image: "https://images.unsplash.com/photo-1658837407083-308b902ee99d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1658837407083-308b902ee99d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 11,
    name: "Black Jacket 1...",
    description: "Reese PUFFER JACKET with JERSEY HOOD TEX",
    price: 2999,
    originalPrice: 4999,
    rating: 4.0,
    reviews: "8,44,690",
    image: "https://images.unsplash.com/photo-1588011025378-15f4778d2558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1588011025378-15f4778d2558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 12,
    name: "D7200 Digital C...",
    description: "D7200 Digital Camera (Nikon) In New Area",
    price: 1999,
    originalPrice: 2999,
    rating: 4.0,
    reviews: "1,52,344",
    image: "https://images.unsplash.com/photo-1603208234872-619ffa1209cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1603208234872-619ffa1209cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 13,
    name: "Leather Handbag",
    description: "Premium leather handbag with adjustable strap, perfect for daily use",
    price: 899,
    originalPrice: 1299,
    rating: 4.5,
    reviews: "12,456",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 14,
    name: "Fashion Sungla...",
    description: "Designer sunglasses with UV protection, trending style",
    price: 299,
    originalPrice: 599,
    rating: 4.0,
    reviews: "8,234",
    image: "https://images.unsplash.com/photo-1663585703603-9be01a72a62a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1663585703603-9be01a72a62a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 15,
    name: "Running Shoes",
    description: "Ultra-lightweight running shoes with cushioned sole for maximum comfort",
    price: 1599,
    originalPrice: 2199,
    rating: 5.0,
    reviews: "45,789",
    image: "https://images.unsplash.com/photo-1597892657493-6847b9640bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1597892657493-6847b9640bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 16,
    name: "Women's Blazer",
    description: "Professional blazer with modern fit, perfect for office wear",
    price: 2499,
    originalPrice: 3499,
    rating: 4.5,
    reviews: "23,567",
    image: "https://images.unsplash.com/photo-1615348411055-3492a2c76ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1615348411055-3492a2c76ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 17,
    name: "Casual T-Shirt",
    description: "Soft cotton casual t-shirt, available in multiple colors",
    price: 399,
    originalPrice: 699,
    rating: 4.0,
    reviews: "67,890",
    image: "https://images.unsplash.com/photo-1626496997178-7aa9d13b5799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1626496997178-7aa9d13b5799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 18,
    name: "Denim Jeans",
    description: "Classic fit denim jeans with stretch fabric for comfort",
    price: 1299,
    originalPrice: 1899,
    rating: 4.5,
    reviews: "89,234",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 19,
    name: "Winter Boots",
    description: "Waterproof winter boots with warm lining, perfect for cold weather",
    price: 1999,
    originalPrice: 2799,
    rating: 5.0,
    reviews: "34,567",
    image: "https://images.unsplash.com/photo-1611193876764-7611520c8582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1611193876764-7611520c8582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 20,
    name: "Travel Backpack",
    description: "Spacious travel backpack with multiple compartments and laptop sleeve",
    price: 1799,
    originalPrice: 2499,
    rating: 4.5,
    reviews: "56,123",
    image: "https://images.unsplash.com/photo-1570630358718-4fb324824b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1570630358718-4fb324824b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 21,
    name: "Knit Sweater",
    description: "Cozy knit sweater with ribbed collar, ideal for casual wear",
    price: 1499,
    originalPrice: 1999,
    rating: 4.0,
    reviews: "23,890",
    image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1631541909061-71e349d1f203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 22,
    name: "Fashion Skirt",
    description: "Trendy midi skirt with elegant design for any occasion",
    price: 899,
    originalPrice: 1399,
    rating: 4.5,
    reviews: "45,678",
    image: "https://images.unsplash.com/photo-1562041350-7778a082a797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1562041350-7778a082a797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 23,
    name: "Streetwear Hoo...",
    description: "Premium streetwear hoodie with oversized fit and graphic print",
    price: 1899,
    originalPrice: 2599,
    rating: 5.0,
    reviews: "78,234",
    image: "https://images.unsplash.com/photo-1711387718409-a05f62a3dc39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1711387718409-a05f62a3dc39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  },
  {
    id: 24,
    name: "Polo Shirt",
    description: "Classic polo shirt in cotton blend, perfect for smart casual",
    price: 799,
    originalPrice: 1199,
    rating: 4.0,
    reviews: "34,567",
    image: "https://images.unsplash.com/photo-1625910513413-c23b8bb81cba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    images: [
      "https://images.unsplash.com/photo-1625910513413-c23b8bb81cba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  }
];

function ProductCard({ product, onFavorite, isFavorite, onClick }: { 
  product: Product; 
  onFavorite: () => void; 
  isFavorite: boolean;
  onClick: () => void;
}) {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;
  const fitPercentage = generateFitPercentage(product.id);

  return (
    <motion.div
      className="bg-white rounded-[8px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.15)] overflow-hidden cursor-pointer relative"
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="relative">
        <ImageWithFallback 
          src={product.image} 
          alt={product.name}
          className="w-full h-[136px] object-cover rounded-t-[8px]"
        />
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
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded-[4px] font-semibold">
            -{discount}%
          </div>
        )}
      </div>
      <div className="p-2">
        <p className="text-[16px] font-medium text-black mb-1">{product.name}</p>
        <p className="text-[10px] text-black mb-2 line-clamp-2">{product.description}</p>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-[12px] ${i < Math.floor(product.rating) ? "text-[#EDB310]" : "text-[#BBBBBB]"}`}>
              ★
            </span>
          ))}
          <span className="text-[10px] text-[#a4a9b3] ml-1">{product.reviews}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-[12px] font-medium text-black">${product.price}</p>
            {product.originalPrice && (
              <p className="text-[10px] text-gray-400 line-through">${product.originalPrice}</p>
            )}
          </div>
          <div className="bg-green-50 px-1.5 py-0.5 rounded-[4px]">
            <p className="text-[10px] font-semibold text-green-600">{fitPercentage}% fit</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + images.length) % images.length);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="w-full h-[320px] bg-gray-100 rounded-[12px] overflow-hidden"
        >
          <ImageWithFallback
            src={images[currentIndex]}
            alt="Product"
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
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${idx === currentIndex ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function TrendingProductsPage({
  onBack,
  onNavigateToGetStarted,
  onNavigateToShop,
  onNavigateToProfile,
  onNavigateToCheckout,
  onNavigateToTrendingProducts
}: {
  onBack: () => void;
  onNavigateToGetStarted: () => void;
  onNavigateToShop: () => void;
  onNavigateToProfile: () => void;
  onNavigateToCheckout: () => void;
  onNavigateToTrendingProducts?: () => void;
}) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeNav, setActiveNav] = useState("shop");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (searchValue.trim()) {
      // Randomly shuffle and select 6-12 products to simulate search results
      const shuffled = [...products].sort(() => Math.random() - 0.5);
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

  const discount = selectedProduct?.originalPrice 
    ? Math.round(((selectedProduct.originalPrice - selectedProduct.price) / selectedProduct.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-[#f9f9f9] h-screen relative overflow-y-auto overflow-x-hidden pb-24">
      {/* Status Bar - iPhone Standard */}
      <div className="bg-white relative h-[44px] sticky top-0 z-30">
        <BarsStatusBarDesignLight />
      </div>

      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between shadow-sm sticky top-[44px] z-30">
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.1, x: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
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
            className={`flex items-center bg-white rounded-[6px] px-4 py-2.5 border-2 shadow-[0px_2px_9px_0px_rgba(0,0,0,0.04)] ${
              searchFocused ? "border-[#0088ff]" : "border-transparent"
            }`}
            animate={{
              boxShadow: searchFocused ? "0 0 0 4px rgba(0,136,255,0.1)" : "0px 2px 9px 0px rgba(0,0,0,0.04)"
            }}
          >
            <Search className="w-5 h-5 text-[#BBBBBB] mr-3" />
            <input
              ref={searchRef}
              type="text"
              placeholder="Search any Product.."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              onKeyPress={handleSearchKeyPress}
              className="flex-1 bg-transparent outline-none text-[14px] text-black placeholder:text-[#bbbbbb]"
            />
          </motion.div>
          {searchValue && (
            <motion.button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
              onClick={clearSearch}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5 text-gray-700" />
            </motion.button>
          )}
        </div>
      </div>

      {/* Filter Bar */}
      <div className="px-4 py-3 bg-white flex items-center justify-between">
        <p className="text-[18px] font-semibold text-black">52,082+ Items</p>
        <div className="flex gap-2">
          <motion.button
            className="bg-white shadow-[1px_1px_16px_0px_rgba(0,0,0,0.08)] rounded-[6px] px-2 py-1 flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-[12px] text-black">Sort</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M4 6L8 10L12 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
          <motion.button
            className="bg-white shadow-[1px_1px_16px_0px_rgba(0,0,0,0.08)] rounded-[6px] px-2 py-1 flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-[12px] text-black">Filter</span>
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M4 8h8M6 12h4" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-4 px-4 py-4">
        {(isSearchActive ? filteredProducts : products).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onFavorite={() => toggleFavorite(product.id)}
            isFavorite={favorites.has(product.id)}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {/* Expanded Product View */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-white rounded-t-[24px] w-full max-h-[90vh] overflow-y-auto"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white z-10 px-6 py-4 flex items-center justify-between border-b">
                <h3 className="text-[20px] font-semibold text-black">Product Details</h3>
                <motion.button
                  onClick={() => setSelectedProduct(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-100 rounded-full p-2"
                >
                  <X className="w-5 h-5 text-black" />
                </motion.button>
              </div>

              <div className="p-6">
                {selectedProduct.images && selectedProduct.images.length > 0 ? (
                  <ImageCarousel images={selectedProduct.images} />
                ) : (
                  <div className="w-full h-[320px] bg-gray-100 rounded-[12px] overflow-hidden mb-4">
                    <ImageWithFallback
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="mt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h2 className="text-[24px] font-semibold text-black mb-1">
                        {selectedProduct.name}
                      </h2>
                      <p className="text-[14px] text-gray-600 mb-3">
                        {selectedProduct.description}
                      </p>
                    </div>
                    <motion.button
                      onClick={() => toggleFavorite(selectedProduct.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="ml-3"
                    >
                      <Heart
                        className={`w-7 h-7 ${
                          favorites.has(selectedProduct.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-600"
                        }`}
                      />
                    </motion.button>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-[16px] ${
                            i < Math.floor(selectedProduct.rating)
                              ? "text-[#EDB310]"
                              : "text-[#BBBBBB]"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-[14px] text-[#a4a9b3]">
                      ({selectedProduct.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <p className="text-[32px] font-bold text-black">
                      ${selectedProduct.price}
                    </p>
                    {selectedProduct.originalPrice && (
                      <>
                        <p className="text-[18px] text-gray-400 line-through">
                          ${selectedProduct.originalPrice}
                        </p>
                        <div className="bg-red-500 text-white text-[14px] px-3 py-1 rounded-[6px] font-semibold">
                          -{discount}% OFF
                        </div>
                      </>
                    )}
                    <div className="ml-auto bg-green-50 px-3 py-1.5 rounded-[6px]">
                      <p className="text-[14px] font-semibold text-green-600">{generateFitPercentage(selectedProduct.id)}% fit</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      className="flex-1 bg-[#0088ff] text-white py-4 rounded-[12px] text-[16px] font-semibold"
                      whileHover={{ scale: 1.02, backgroundColor: "#0077ee" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Try On
                    </motion.button>
                    <motion.button
                      className="bg-gray-100 text-black px-6 py-4 rounded-[12px] text-[16px] font-semibold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedProduct(null)}
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            scrollToTop();
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