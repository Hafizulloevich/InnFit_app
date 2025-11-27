import { motion } from "motion/react";
import { useState } from "react";
import { ChevronLeft, Home, Heart, ShoppingCart, Search, Settings } from "lucide-react";
import BarsStatusBarDesignLight from "../imports/BarsStatusBarDesignLight";

interface ShippingPageProps {
  onBack: () => void;
  onContinue: () => void;
  onNavigateToGetStarted?: () => void;
  onNavigateToShop?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToTrendingProducts?: () => void;
}

export default function ShippingPage({ 
  onBack, 
  onContinue,
  onNavigateToGetStarted,
  onNavigateToShop,
  onNavigateToProfile,
  onNavigateToTrendingProducts
}: ShippingPageProps) {
  const [selectedPayment, setSelectedPayment] = useState<string>("visa");
  
  const orderAmount = 7000;
  const shippingFee = 30;
  const totalAmount = orderAmount + shippingFee;

  // Payment card images - using placeholder SVG data
  const imgVisa1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 20'%3E%3Ctext x='0' y='15' font-family='Arial' font-size='14' fill='%231434CB'%3EVISA%3C/text%3E%3C/svg%3E";
  const imgPaypal1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 63 20'%3E%3Ctext x='0' y='15' font-family='Arial' font-size='12' fill='%23003087'%3EPayPal%3C/text%3E%3C/svg%3E";
  const imgMaestro1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Ccircle cx='7' cy='10' r='7' fill='%23EB001B'/%3E%3Ccircle cx='13' cy='10' r='7' fill='%230099DF'/%3E%3C/svg%3E";

  return (
    <div className="bg-[#fdfdfd] h-screen relative overflow-hidden">
      {/* Status Bar - iPhone Standard */}
      <div className="bg-white relative h-[44px]">
        <BarsStatusBarDesignLight />
      </div>

      {/* Header */}
      <div className="relative">
        <div className="h-px bg-[#C6C6C6] opacity-20" />
        <div className="px-4 py-4 flex items-center justify-center relative">
          <motion.button
            onClick={onBack}
            className="absolute left-4"
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </motion.button>
          <h1 className="text-[18px] font-semibold text-black font-['Montserrat']">Checkout</h1>
        </div>
        <div className="h-px bg-[#C6C6C6] opacity-20" />
      </div>

      {/* Order Summary */}
      <div className="px-[42px] pt-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[18px] font-medium text-[#a8a8a9] font-['Montserrat']">Order</p>
          <p className="text-[16px] font-medium text-[#a8a8a9] font-['Montserrat']">${orderAmount}</p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-[18px] font-medium text-[#a8a8a9] font-['Montserrat']">Shipping</p>
          <p className="text-[16px] font-medium text-[#a8a8a9] font-['Montserrat']">${shippingFee}</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <p className="text-[18px] font-medium text-[#4c5059] font-['Montserrat']">Total</p>
          <p className="text-[16px] font-medium text-[#4c5059] font-['Montserrat']">${totalAmount}</p>
        </div>

        {/* Divider */}
        <div className="h-[1.5px] bg-[#C4C4C4] mb-6" />

        {/* Payment Section */}
        <p className="text-[18px] font-medium text-[#222222] font-['Montserrat'] mb-6">Payment</p>

        {/* Payment Options */}
        <div className="space-y-4 mb-8">
          {/* Visa */}
          <motion.button
            className={`w-full h-[59px] rounded-[8px] flex items-center px-4 border-[1.5px] ${
              selectedPayment === "visa" 
                ? "bg-[#f4f4f4] border-[#0088ff]" 
                : "bg-[#f4f4f4] border-[#f8f8f8]"
            }`}
            onClick={() => setSelectedPayment("visa")}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-[47.826px] h-[20px] mr-auto">
              <img src={imgVisa1} alt="Visa" className="w-full h-full object-contain" />
            </div>
            <p className="text-[15px] font-medium text-[#6e7179] font-['Montserrat']">*********2109</p>
          </motion.button>

          {/* PayPal */}
          <motion.button
            className={`w-full h-[59px] rounded-[8px] flex items-center px-4 border ${
              selectedPayment === "paypal" 
                ? "bg-[#f4f4f4] border-[#0088ff] border-[1.5px]" 
                : "bg-[#f4f4f4] border-[#f8f8f8]"
            }`}
            onClick={() => setSelectedPayment("paypal")}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-[62.759px] h-[20px] mr-auto">
              <img src={imgPaypal1} alt="PayPal" className="w-full h-full object-contain" />
            </div>
            <p className="text-[15px] font-medium text-[#6e7179] font-['Montserrat']">*********2109</p>
          </motion.button>

          {/* Maestro */}
          <motion.button
            className={`w-full h-[59px] rounded-[8px] flex items-center px-4 border ${
              selectedPayment === "maestro" 
                ? "bg-[#f4f4f4] border-[#0088ff] border-[1.5px]" 
                : "bg-[#f4f4f4] border-[#f8f8f8]"
            }`}
            onClick={() => setSelectedPayment("maestro")}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-[20px] h-[20px] mr-auto">
              <img src={imgMaestro1} alt="Maestro" className="w-full h-full object-cover" />
            </div>
            <p className="text-[15px] font-medium text-[#6e7179] font-['Montserrat']">*********2109</p>
          </motion.button>

          {/* Apple Pay */}
          <motion.button
            className={`w-full h-[59px] rounded-[8px] flex items-center px-4 border ${
              selectedPayment === "apple" 
                ? "bg-[#f4f4f4] border-[#0088ff] border-[1.5px]" 
                : "bg-[#f4f4f4] border-[#f8f8f8]"
            }`}
            onClick={() => setSelectedPayment("apple")}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-[24px] h-[24px] bg-white rounded-[20px] flex items-center justify-center mr-auto">
              <svg className="w-[8px] h-[10px]" fill="black" viewBox="0 0 9 11">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.28571 0C6.14286 1.1 5.42857 2 4.71429 2C4.57143 0.9 5.42857 0 6.28571 0ZM4.57143 2.2C3.85714 2.2 3.28571 2.6 2.85714 2.6C2.42857 2.6 1.85714 2.3 1.28571 2.3C0.571429 2.3 0 2.8 0 4C0 5.2 0.857143 6.7 1.57143 7.7C2 8.4 2.42857 9 3 9C3.42857 9 3.71429 8.7 4.28571 8.7C4.85714 8.7 5.14286 9 5.71429 9C6.28571 9 6.71429 8.4 7.14286 7.7C7.57143 7 7.71429 6.3 7.71429 6.2C7.57143 6.2 6.42857 5.7 6.42857 4.5C6.42857 3.5 7.28571 3 7.28571 2.9C6.85714 2.3 6.14286 2.2 5.85714 2.2C5.42857 2.2 5 2.2 4.57143 2.2Z" />
              </svg>
            </div>
            <p className="text-[15px] font-medium text-[#6e7179] font-['Montserrat']">*********2109</p>
          </motion.button>
        </div>

        {/* Continue Button */}
        <div className="flex justify-center mb-8">
          <motion.button
            className="bg-[#0088ff] w-[309px] h-[59px] rounded-[8px] flex items-center justify-center relative overflow-hidden"
            onClick={onContinue}
            whileHover={{ scale: 1.02, backgroundColor: "#0077ee" }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0, opacity: 1 }}
              whileTap={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
            <p className="text-[22px] font-bold text-white font-['Montserrat'] tracking-[-0.41px] relative z-10">Continue</p>
          </motion.button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-[76px] bg-white shadow-[0px_-1px_1px_0px_rgba(0,0,0,0.1)]">
        <div className="h-full flex items-center justify-around px-4">
          {/* Home */}
          <motion.button
            className="flex flex-col items-center gap-1"
            onClick={onNavigateToGetStarted}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Home className="w-6 h-6 text-black" strokeWidth={2} />
            <span className="text-[12px] text-black font-['Roboto'] tracking-[0.4px]">Home</span>
          </motion.button>

          {/* Wishlist */}
          <motion.button
            className="flex flex-col items-center gap-1"
            onClick={onNavigateToShop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className="w-6 h-6 text-black" strokeWidth={2} />
            <span className="text-[12px] text-black font-['Roboto'] tracking-[0.4px] capitalize">wishlist</span>
          </motion.button>

          {/* Shop - Active */}
          <div className="relative">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#0088ff] rounded-[50px] w-14 h-14 shadow-[0px_2px_14px_0px_rgba(0,0,0,0.09)] flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-[#E9E9E9]" strokeWidth={2} />
            </div>
            <div className="h-12" />
          </div>

          {/* Search */}
          <motion.button
            className="flex flex-col items-center gap-1"
            onClick={onNavigateToTrendingProducts}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Search className="w-6 h-6 text-black" strokeWidth={2} />
            <span className="text-[12px] text-black font-['Roboto'] tracking-[0.4px]">Search</span>
          </motion.button>

          {/* Setting */}
          <motion.button
            className="flex flex-col items-center gap-1"
            onClick={onNavigateToProfile}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Settings className="w-6 h-6 text-black" strokeWidth={2} />
            <span className="text-[12px] text-black font-['Roboto'] tracking-[0.4px]">Setting</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}