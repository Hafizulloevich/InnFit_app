import { motion } from "motion/react";
import { useState } from "react";
import { Minus, Plus, ChevronLeft, Heart, MapPin, Edit2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import BarsStatusBarDesignLight from "../imports/BarsStatusBarDesignLight";
import imgUnsplashMHUk4Se7PeY from "figma:asset/15ccb7f8f307fccfd6490b7c69d110be523e0933.png";

interface PlaceOrderPageProps {
  onBack: () => void;
  onNavigateToGetStarted?: () => void;
  onNavigateToShop?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCheckout?: () => void;
}

export default function PlaceOrderPage({ 
  onBack, 
  onNavigateToGetStarted, 
  onNavigateToShop, 
  onNavigateToProfile, 
  onNavigateToCheckout 
}: PlaceOrderPageProps) {
  const [size, setSize] = useState(42);
  const [quantity, setQuantity] = useState(1);
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);
  const [showQtyDropdown, setShowQtyDropdown] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const orderAmount = 7000.00;
  const convenienceFee = 0;
  const deliveryFee = 0;
  const totalAmount = orderAmount + convenienceFee + deliveryFee;

  const availableSizes = [38, 40, 42, 44, 46];
  const availableQuantities = [1, 2, 3, 4, 5];

  return (
    <div className="bg-[#fdfdfd] h-screen relative overflow-y-auto overflow-x-hidden pb-32">
      {/* Status Bar - iPhone Standard */}
      <div className="bg-white relative h-[44px] sticky top-0 z-30">
        <BarsStatusBarDesignLight />
      </div>

      {/* Header */}
      <div className="bg-white px-4 py-4 flex items-center justify-between sticky top-[44px] z-30 shadow-sm">
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.1, x: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </motion.button>
        <h1 className="text-[16px] font-semibold text-black">Shopping Bag</h1>
        <motion.button
          onClick={() => setIsFavorite(!isFavorite)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart className={`w-6 h-6 ${isFavorite ? "fill-red-500 text-red-500" : "text-black"}`} />
        </motion.button>
      </div>

      {/* Product Details */}
      <div className="px-4 py-6">
        <div className="flex gap-4 mb-6">
          {/* Product Image */}
          <div className="w-[110px] h-[140px] rounded-[4px] overflow-hidden flex-shrink-0">
            <ImageWithFallback
              src={imgUnsplashMHUk4Se7PeY}
              alt="Women's Casual Wear"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <h3 className="text-[16px] font-semibold text-black mb-1">Women's Casual Wear</h3>
            <p className="text-[13px] text-black mb-3">Checked Single-Breasted Blazer</p>

            {/* Size and Quantity */}
            <div className="flex gap-3 mb-3">
              {/* Size Selector */}
              <div className="relative">
                <motion.button
                  className="bg-[#f2f2f2] px-3 py-1.5 rounded-[4px] flex items-center gap-2 min-w-[86px]"
                  onClick={() => {
                    setShowSizeDropdown(!showSizeDropdown);
                    setShowQtyDropdown(false);
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-[14px] text-black">Size</span>
                  <span className="text-[14px] font-medium text-black">{size}</span>
                  <svg className="w-3 h-3 ml-auto" fill="#1C1B1F" viewBox="0 0 11 6">
                    <path d="M5.5 6L0 0H11L5.5 6Z" />
                  </svg>
                </motion.button>
                {showSizeDropdown && (
                  <motion.div
                    className="absolute top-full mt-1 bg-white rounded-[4px] shadow-lg z-40 min-w-[86px]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {availableSizes.map((s) => (
                      <motion.button
                        key={s}
                        className="w-full px-3 py-2 text-left text-[14px] hover:bg-gray-100"
                        onClick={() => {
                          setSize(s);
                          setShowSizeDropdown(false);
                        }}
                        whileHover={{ backgroundColor: "#f0f0f0" }}
                      >
                        {s}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="relative">
                <motion.button
                  className="bg-[#f2f2f2] px-3 py-1.5 rounded-[4px] flex items-center gap-2 min-w-[90px]"
                  onClick={() => {
                    setShowQtyDropdown(!showQtyDropdown);
                    setShowSizeDropdown(false);
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-[14px] text-black">Qty</span>
                  <span className="text-[14px] font-medium text-black">{quantity}</span>
                  <svg className="w-3 h-3 ml-auto" fill="#1C1B1F" viewBox="0 0 11 6">
                    <path d="M5.5 6L0 0H11L5.5 6Z" />
                  </svg>
                </motion.button>
                {showQtyDropdown && (
                  <motion.div
                    className="absolute top-full mt-1 bg-white rounded-[4px] shadow-lg z-40 min-w-[90px]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {availableQuantities.map((q) => (
                      <motion.button
                        key={q}
                        className="w-full px-3 py-2 text-left text-[14px] hover:bg-gray-100"
                        onClick={() => {
                          setQuantity(q);
                          setShowQtyDropdown(false);
                        }}
                        whileHover={{ backgroundColor: "#f0f0f0" }}
                      >
                        {q}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Delivery Date */}
            <p className="text-[13px] text-black">
              <span className="tracking-[-0.3px]">Delivery by: </span>
              <span className="font-semibold tracking-[-1.1px]">17 Dec 2025</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#CACACA] mb-6" />

        {/* Apply Coupons */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg className="w-6 h-5" fill="#231F20" viewBox="0 0 31 20">
                <path d="M29.5 0H1.5C0.671573 0 0 0.671573 0 1.5V7C0 7.82843 0.671573 8.5 1.5 8.5C2.32843 8.5 3 9.17157 3 10C3 10.8284 2.32843 11.5 1.5 11.5C0.671573 11.5 0 12.1716 0 13V18.5C0 19.3284 0.671573 20 1.5 20H29.5C30.3284 20 31 19.3284 31 18.5V13C31 12.1716 30.3284 11.5 29.5 11.5C28.6716 11.5 28 10.8284 28 10C28 9.17157 28.6716 8.5 29.5 8.5C30.3284 8.5 31 7.82843 31 7V1.5C31 0.671573 30.3284 0 29.5 0Z"/>
              </svg>
            </div>
            <span className="text-[16px] font-medium text-black tracking-[-0.7px]">Apply Coupons</span>
          </div>
          <motion.button
            className="text-[14px] font-semibold text-[#0088ff] tracking-[-0.7px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Select
          </motion.button>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#CACACA] mb-6" />

        {/* Order Payment Details */}
        <div className="mb-6">
          <h3 className="text-[17px] font-medium text-black mb-4 tracking-[-0.7px]">Order Payment Details</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[16px] text-black tracking-[-0.7px]">Order Amount</span>
              <span className="text-[16px] font-semibold text-black">${orderAmount.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[16px] text-black tracking-[-0.7px]">Convenience</span>
                <motion.button
                  className="text-[12px] font-semibold text-[#0088ff]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Know More
                </motion.button>
              </div>
              <motion.button
                className="text-[12px] font-semibold text-[#0088ff]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Coupon
              </motion.button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[14px] text-black tracking-[-0.7px]">Delivery Fee</span>
              <span className="text-[14px] font-semibold text-[#0088ff]">Free</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#CACACA] mb-6" />

        {/* Delivery Address */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-black" />
            <h3 className="text-[14px] font-semibold text-black">Delivery Address</h3>
          </div>

          <div className="flex gap-3">
            {/* Address Card */}
            <div className="flex-1 bg-white rounded-[6px] shadow-[0px_-4px_9px_-7px_rgba(0,0,0,0.25),0px_6px_14px_-8px_rgba(0,0,0,0.25)] p-4">
              <p className="text-[12px] font-bold text-black mb-2">Address:</p>
              <p className="text-[12px] text-black leading-[14px] mb-1">
                216 This Rd, Woosong University, Korea
              </p>
              <p className="text-[12px] text-black leading-[14px]">
                Contact : + 8244-784232
              </p>
            </div>

            {/* Edit Button Card */}
            <motion.button
              className="bg-white rounded-[6px] shadow-[0px_-4px_9px_-7px_rgba(0,0,0,0.25),0px_6px_14px_-8px_rgba(0,0,0,0.25)] px-4 py-4 flex flex-col items-center justify-center gap-2"
              onClick={onNavigateToProfile}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Edit2 className="w-6 h-6 text-black rotate-180" />
              <span className="text-[12px] text-black">Edit</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#F8F8F8] px-4 py-3 shadow-[0_-0.5px_0_rgba(0,0,0,0.3)] z-40">
        <div className="flex items-center justify-between mb-3">
          <motion.button
            className="text-[12px] font-semibold text-[#0088ff]"
            onClick={() => setShowDetails(!showDetails)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
          <p className="text-[16px] font-semibold text-black">
            ${totalAmount.toFixed(2)}
          </p>
        </div>

        <motion.button
          className="w-full bg-[#0088ff] text-white py-3 rounded-[5px] text-[22px] font-bold tracking-[-0.41px] relative overflow-hidden font-['Montserrat']"
          onClick={onNavigateToCheckout}
          whileHover={{ scale: 1.02, backgroundColor: "#0077ee" }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ scale: 0, opacity: 1 }}
            whileTap={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
          <span className="relative z-10">Proceed to Payment</span>
        </motion.button>

        {/* Home Indicator */}
        <div className="h-[5px] bg-[#b7b7b7] rounded-[100px] mx-auto mt-2 w-[153px]" />
      </div>

      {/* Details Modal */}
      {showDetails && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowDetails(false)}
        >
          <motion.div
            className="bg-white w-full rounded-t-[20px] p-6"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
            <h3 className="text-[18px] font-semibold text-black mb-4">Order Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[14px] text-gray-600">Order Amount</span>
                <span className="text-[14px] font-semibold text-black">${orderAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[14px] text-gray-600">Convenience Fee</span>
                <span className="text-[14px] font-semibold text-black">${convenienceFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[14px] text-gray-600">Delivery Fee</span>
                <span className="text-[14px] font-semibold text-[#0088ff]">Free</span>
              </div>
              <div className="h-px bg-gray-200" />
              <div className="flex justify-between">
                <span className="text-[16px] font-semibold text-black">Total Amount</span>
                <span className="text-[16px] font-bold text-black">${totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}