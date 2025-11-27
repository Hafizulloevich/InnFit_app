import { motion } from "motion/react";
import { useState } from "react";
import imgImage17 from "figma:asset/6349f1b1a77f13b094c3d8c8f463be342050d1c5.png";
import imgImage18 from "figma:asset/d3174e88369df0019c02a82568b5c12fb6511aa4.png";
import imgImage19 from "figma:asset/d597f602e35859114516782e14bdf2ad21abae43.png";

function BtnHome() {
  return (
    <div className="absolute h-[35px] left-0 top-[806px] w-[375px]" data-name="btnHome">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 35">
        <g id="btnHome">
          <g id="Background"></g>
          <rect fill="var(--fill-0, #A8A8A9)" height="5" id="01" rx="2.5" width="134" x="121" y="21" />
        </g>
      </svg>
    </div>
  );
}

function SwipeUp({ onClick }: { onClick: () => void }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <motion.div
      className="absolute left-0 top-[730px] w-full cursor-pointer"
      data-name="SWIPE UP"
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        y: isPressed ? 2 : 0,
      }}
      transition={{ duration: 0.15 }}
    >
      <BtnHome />
      <motion.div
        className="absolute left-1/2 top-6 -translate-x-1/2 text-[#a8a8a9] text-[12px] font-['Montserrat:Medium',sans-serif]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        Swipe Up to Continue
      </motion.div>
    </motion.div>
  );
}

function Loading() {
  return (
    <div className="absolute h-[18px] left-[167px] top-[561px] w-[42px]" data-name="Loading">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 18">
        <g id="Loading">
          <motion.circle
            cx="3"
            cy="15"
            fill="white"
            id="dot"
            r="3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
          />
          <motion.circle
            cx="15"
            cy="11"
            fill="white"
            id="dot_2"
            r="3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
          />
          <motion.circle
            cx="27"
            cy="3"
            fill="white"
            id="dot_3"
            r="3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
          />
          <motion.circle
            cx="39"
            cy="12"
            fill="white"
            id="dot_4"
            r="3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.45 }}
          />
        </g>
      </svg>
    </div>
  );
}

export default function AppLoading({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="bg-white relative size-full overflow-hidden" data-name="App Loading">
      <SwipeUp onClick={onContinue} />
      <Loading />
      
      {/* Image 19 - Main logo with scale pulse and float */}
      <motion.div
        className="absolute h-[79px] left-[112px] top-[332px] w-[187px]"
        data-name="image 19"
        initial={{ opacity: 0, scale: 0.5, y: -50 }}
        animate={{ 
          opacity: 1, 
          scale: [1, 1.05, 1],
          y: [0, -10, 0]
        }}
        transition={{ 
          opacity: { duration: 0.8, ease: "easeOut" },
          scale: { 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <img 
          alt="" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgImage19} 
        />
      </motion.div>

      {/* Image 17 - Text with slide in from left and gentle float */}
      <motion.div
        className="absolute h-[43px] left-[146px] top-[435px] w-[114px]"
        data-name="image 17"
        initial={{ opacity: 0, x: -100, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          scale: 1,
          y: [0, -5, 0]
        }}
        transition={{ 
          opacity: { duration: 0.6, delay: 0.3 },
          x: { duration: 0.8, delay: 0.3, ease: "easeOut" },
          scale: { duration: 0.8, delay: 0.3, ease: "easeOut" },
          y: {
            duration: 2.5,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <img 
          alt="" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgImage17} 
        />
      </motion.div>

      {/* Image 18 - Tagline with slide in from right and gentle float */}
      <motion.div
        className="absolute h-[23px] left-[84px] top-[487px] w-[237px]"
        data-name="image 18"
        initial={{ opacity: 0, x: 100, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          scale: 1,
          y: [0, -6, 0]
        }}
        transition={{ 
          opacity: { duration: 0.6, delay: 0.5 },
          x: { duration: 0.8, delay: 0.5, ease: "easeOut" },
          scale: { duration: 0.8, delay: 0.5, ease: "easeOut" },
          y: {
            duration: 2.8,
            delay: 1.2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <img 
          alt="" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgImage18} 
        />
      </motion.div>
    </div>
  );
}