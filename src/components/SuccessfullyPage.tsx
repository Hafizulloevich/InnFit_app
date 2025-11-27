import { motion } from "motion/react";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import BarsStatusBarDesignLight from "../imports/BarsStatusBarDesignLight";

interface SuccessfullyPageProps {
  onBack?: () => void;
  onLogOut?: () => void;
  onNavigateToGetStarted?: () => void;
  onNavigateToShop?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToTrendingProducts?: () => void;
}

export default function SuccessfullyPage({ 
  onBack,
  onLogOut,
  onNavigateToGetStarted,
  onNavigateToShop,
  onNavigateToProfile,
  onNavigateToTrendingProducts
}: SuccessfullyPageProps) {
  const [showSuccessModal, setShowSuccessModal] = useState(true);

  const orderAmount = 7000;
  const shippingFee = 30;
  const totalAmount = orderAmount + shippingFee;

  return (
    <div className="bg-white h-screen relative overflow-hidden">
      {/* Status Bar - iPhone Standard */}
      <div className="bg-white relative h-[44px]">
        <BarsStatusBarDesignLight />
      </div>

      {/* Success Content */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-50">
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Success Card */}
          <div className="bg-white rounded-[20px] w-[330px] h-[201px] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Decorative Stars */}
            <div className="absolute left-[117px] top-[31px]">
              <svg className="w-[14px] h-[14px] opacity-40 rotate-180" fill="#0088FF" viewBox="0 0 14 14">
                <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" />
              </svg>
            </div>
            <div className="absolute right-[63px] top-[117px]">
              <svg className="w-[11px] h-[11px] opacity-40 rotate-180" fill="#0088FF" viewBox="0 0 11 11">
                <path d="M5.5 0L6.5 4.5L11 5.5L6.5 6.5L5.5 11L4.5 6.5L0 5.5L4.5 4.5L5.5 0Z" />
              </svg>
            </div>
            <div className="absolute left-[27px] top-[73px]">
              <svg className="w-[7px] h-[7px] opacity-40 rotate-180" fill="#0088FF" viewBox="0 0 7 7">
                <path d="M3.5 0L4.25 2.75L7 3.5L4.25 4.25L3.5 7L2.75 4.25L0 3.5L2.75 2.75L3.5 0Z" />
              </svg>
            </div>
            <div className="absolute right-[106px] top-[106px]">
              <svg className="w-[7px] h-[7px] opacity-40 rotate-180" fill="#0088FF" viewBox="0 0 7 7">
                <path d="M3.5 0L4.25 2.75L7 3.5L4.25 4.25L3.5 7L2.75 4.25L0 3.5L2.75 2.75L3.5 0Z" />
              </svg>
            </div>

            {/* Large Star with Checkmark */}
            <div className="relative w-[94px] h-[91px] mb-4">
              <svg className="w-full h-full" fill="#0088FF" viewBox="0 0 88 85">
                <path d="M44 0L54 30L88 42.5L54 55L44 85L34 55L0 42.5L34 30L44 0Z" />
              </svg>
              {/* Checkmark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-[42px] h-[28px]" stroke="white" fill="none" viewBox="0 0 46 31" strokeWidth="4">
                  <path d="M2 15L16 27L44 2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Success Text */}
            <p className="text-[14px] font-semibold text-[#222222] font-['Montserrat'] text-center px-8">
              Payment completed successfully!
            </p>
          </div>

          {/* Continue Button */}
          <div className="mt-4 flex justify-center">
            <motion.button
              className="bg-[#0088ff] w-[309px] h-[59px] rounded-[8px] flex items-center justify-center relative overflow-hidden"
              onClick={onNavigateToGetStarted}
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

          {/* Log Out Button */}
          <div className="mt-4 flex justify-center">
            <motion.button
              className="bg-gray-100 w-[154px] h-[30px] rounded-[6px] flex items-center justify-center relative overflow-hidden"
              onClick={onLogOut}
              whileHover={{ scale: 1.05, backgroundColor: "#e5e7eb" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gray-300/30"
                initial={{ scale: 0, opacity: 1 }}
                whileTap={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
              <p className="text-[11px] font-semibold text-gray-700 font-['Montserrat'] relative z-10">Log Out</p>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}