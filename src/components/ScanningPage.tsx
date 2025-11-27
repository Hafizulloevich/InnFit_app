import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import BarsStatusBarDesignLight from "../imports/BarsStatusBarDesignLight";

export default function ScanningPage({ onBack, onComplete }: { onBack: () => void; onComplete: () => void }) {
  const [isScanned, setIsScanned] = useState(false);

  // Form state
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [waist, setWaist] = useState("");
  const [chest, setChest] = useState("");
  const [shoulders, setShoulders] = useState("");
  const [hips, setHips] = useState("");
  const [age, setAge] = useState("");

  const handleScan = () => {
    setIsScanned(true);
  };

  const handleSave = () => {
    // Add ripple effect
    const button = document.getElementById("save-button");
    if (button) {
      button.classList.add("animate-ping");
      setTimeout(() => {
        button.classList.remove("animate-ping");
        onComplete();
      }, 300);
    } else {
      onComplete();
    }
  };

  return (
    <div className="bg-[#fdfdfd] h-screen relative overflow-y-auto overflow-x-hidden pb-32" data-name="Scanning Page">
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
          className="absolute left-4"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <h1 className="text-[18px] font-semibold text-black text-center w-full">Body Measurements</h1>
      </div>

      {/* Scrollable Content */}
      <div className="px-4 py-6">
        {/* 3D Model Container */}
        <Container isScanned={isScanned} onScan={handleScan} />
        
        {/* Scan Button */}
        <ScanButton onClick={handleScan} isScanned={isScanned} />
        
        {/* Personal Details Section */}
        <div className="mb-6">
          <h2 className="text-[18px] font-semibold text-black mb-4">Personal Details</h2>
          
          <InputField
            label="Height"
            value={height}
            onChange={setHeight}
            placeholder="e.g., 170 cm"
          />
          
          <InputField
            label="Weight"
            value={weight}
            onChange={setWeight}
            placeholder="e.g., 70 kg"
          />
          
          <InputField
            label="Waist"
            value={waist}
            onChange={setWaist}
            placeholder="e.g., 32 inches"
          />
          
          <InputField
            label="Chest"
            value={chest}
            onChange={setChest}
            placeholder="e.g., 38 inches"
          />
          
          <InputField
            label="Shoulders"
            value={shoulders}
            onChange={setShoulders}
            placeholder="e.g., 42 cm"
          />
          
          <InputField
            label="Hips"
            value={hips}
            onChange={setHips}
            placeholder="e.g., 36 inches"
          />
          
          <InputField
            label="Age"
            value={age}
            onChange={setAge}
            placeholder="e.g., 25"
          />
        </div>
      </div>

      {/* Save Button - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white px-6 py-4 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] z-40">
        <motion.button
          id="save-button"
          className="w-full bg-[#0088ff] text-white py-4 rounded-[8px] text-[15px] font-semibold font-['Plus_Jakarta_Sans'] tracking-wide relative overflow-hidden"
          whileHover={{ scale: 1.02, backgroundColor: "#0077ee" }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSave}
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ scale: 0, opacity: 1 }}
            whileTap={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
          <span className="relative z-10">Save</span>
        </motion.button>
      </div>
    </div>
  );
}

function Container({ isScanned, onScan }: { isScanned: boolean; onScan: () => void }) {
  return (
    <div className="flex justify-center mb-6" data-name="Container">
      <div className="w-[360px] h-[360px] rounded-[12px] overflow-hidden">
        <AnimatePresence>
          {!isScanned ? (
            <motion.div
              key="placeholder"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center h-full relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[12px]"
            >
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-4"
                >
                  <svg className="w-24 h-24 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </motion.div>
                <p className="font-['Montserrat:Medium',sans-serif] text-gray-500 text-[14px]">Press Scan and Point the camera to your body</p>
              </div>
            </motion.div>
          ) : (
            <motion.iframe
              key="sketchfab"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src="https://sketchfab.com/models/932a07f7f9e143f4820546709853576e/embed?autostart=1&ui_theme=dark"
              className="bg-white block cursor-pointer h-full w-full relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[12px]"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              title="3D Body Scan"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ScanButton({ onClick, isScanned }: { onClick: () => void; isScanned: boolean }) {
  return (
    <motion.button
      className="w-full bg-[#0088ff] cursor-pointer flex items-center justify-center overflow-hidden px-[32px] py-[14px] rounded-[8px] mb-6 relative"
      data-name="button_scanbody-self"
      onClick={onClick}
      whileHover={{ scale: 1.02, backgroundColor: "#0077ee" }}
      whileTap={{ scale: 0.98 }}
      disabled={isScanned}
      animate={{ opacity: isScanned ? 0.6 : 1 }}
    >
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ scale: 0, opacity: 1 }}
        whileTap={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.4 }}
      />
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[20px] text-nowrap text-white tracking-[0.1px] whitespace-pre z-10">
        {isScanned ? "Scanned..." : "Scan"}
      </p>
    </motion.button>
  );
}

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

function InputField({ label, value, onChange, placeholder, type = "text" }: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  const hasValue = value.length > 0;

  const handleFocus = () => {
    setIsFocused(true);
    setIsBlinking(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsBlinking(false);
  };

  return (
    <div className="mb-4">
      <label className="block text-[12px] text-black mb-2 font-['Montserrat']">{label}</label>
      <motion.div
        className={`relative bg-white border-2 rounded-[8px] transition-all ${
          isFocused 
            ? "border-[#0088ff] shadow-[0_0_0_4px_rgba(0,136,255,0.1)]" 
            : hasValue
            ? "border-[#00C9A7]"
            : "border-[#c8c8c8]"
        }`}
        animate={{
          borderColor: isFocused ? "#0088ff" : hasValue ? "#00C9A7" : "#c8c8c8"
        }}
      >
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="w-full h-[48px] px-4 bg-transparent outline-none text-[14px] text-black font-semibold font-['Montserrat'] placeholder:text-gray-400"
        />
        {isFocused && isBlinking && (
          <motion.div
            className="absolute right-4 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[#0088ff]"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </motion.div>
    </div>
  );
}