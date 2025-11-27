import { motion } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Lock, CreditCard, Bell, Heart, LogOut, User, Mail, Phone, Edit2, Home, Search, ShoppingBag, Settings, Eye, EyeOff } from "lucide-react";
import BarsStatusBarDesignLight from "../imports/BarsStatusBarDesignLight";
import imgProfile from "figma:asset/e2db1865e7299c33d1d7de36aa46e37cda72d981.png";

// InputField Component
function InputField({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  type = "text",
  showPasswordToggle = false
}: { 
  label: string; 
  value: string; 
  onChange: (value: string) => void; 
  placeholder: string;
  type?: string;
  showPasswordToggle?: boolean;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const inputType = showPasswordToggle ? (showPassword ? "text" : "password") : type;

  return (
    <div className="mb-4">
      <label className="block text-[14px] font-medium text-[#666] mb-2">{label}</label>
      <div className="relative">
        <motion.input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
            isFocused ? "border-[#0088ff] bg-white" : "border-[#e0e0e0] bg-[#f9f9f9]"
          } text-[14px] text-black placeholder:text-[#999] outline-none`}
          whileFocus={{ scale: 1.01 }}
        />
        {showPasswordToggle && (
          <motion.button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5 text-[#666]" />
            ) : (
              <Eye className="w-5 h-5 text-[#666]" />
            )}
          </motion.button>
        )}
      </div>
    </div>
  );
}

// SelectField Component
function SelectField({
  label,
  value,
  onChange,
  options
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-4">
      <label className="block text-[14px] font-medium text-[#666] mb-2">{label}</label>
      <motion.select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
          isFocused ? "border-[#0088ff] bg-white" : "border-[#e0e0e0] bg-[#f9f9f9]"
        } text-[14px] text-black outline-none`}
        whileFocus={{ scale: 1.01 }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </motion.select>
    </div>
  );
}

export default function ProfilePage({
  onSave,
  onBack,
  onNavigateToGetStarted,
  onNavigateToShop,
  onNavigateToCheckout
}: {
  onSave: () => void;
  onBack: () => void;
  onNavigateToGetStarted: () => void;
  onNavigateToShop: () => void;
  onNavigateToCheckout: () => void;
}) {
  // Personal Details
  const [email, setEmail] = useState("innFit@gmail.com");
  const [password, setPassword] = useState("***********");

  // Business Address Details
  const [pincode, setPincode] = useState("450116");
  const [address, setAddress] = useState("216 This Rd,");
  const [city, setCity] = useState("Daejeon");
  const [state, setState] = useState("Daejeon");
  const [country, setCountry] = useState("Republic of Korea");

  // Bank Account Details
  const [accountNumber, setAccountNumber] = useState("204356XXXXXXX");
  const [accountHolder, setAccountHolder] = useState("Hoshimov Mirzohamidullo");
  const [ifscCode, setIfscCode] = useState("SBIN00428");

  const handleSave = () => {
    // Add ripple effect
    const button = document.getElementById("save-button");
    if (button) {
      button.classList.add("animate-ping");
      setTimeout(() => {
        button.classList.remove("animate-ping");
        onSave();
      }, 300);
    } else {
      onSave();
    }
  };

  return (
    <div className="bg-[#fdfdfd] h-screen relative overflow-y-auto overflow-x-hidden pb-32">
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
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        <h1 className="text-[18px] font-semibold text-black text-center w-full">Profile Details</h1>
      </div>

      {/* Profile Picture */}
      <div className="flex justify-center py-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={imgProfile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.button
            className="absolute bottom-0 right-0 bg-[#4392F9] rounded-full p-2 border-3 border-white shadow-lg"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            <Edit2 className="w-4 h-4 text-white" />
          </motion.button>
        </div>
      </div>

      {/* Scrollable Form Content */}
      <div className="px-4">
        {/* Personal Details */}
        <div className="mb-6">
          <h2 className="text-[18px] font-semibold text-black mb-4">Personal Details</h2>
          <InputField
            label="Email Address"
            value={email}
            onChange={setEmail}
            placeholder="Enter your email"
            type="email"
          />
          <InputField
            label="Password"
            value={password}
            onChange={setPassword}
            placeholder="Enter your password"
            type="password"
            showPasswordToggle
          />
          <div className="text-right mb-4">
            <motion.button
              className="text-[#0088ff] text-[12px] font-medium underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Change Password
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#C4C4C4] mb-6" />

        {/* Business Address Details */}
        <div className="mb-6">
          <h2 className="text-[16px] font-semibold text-black mb-4">Business Address Details</h2>
          <InputField
            label="Pincode"
            value={pincode}
            onChange={setPincode}
            placeholder="Enter pincode"
          />
          <InputField
            label="Address"
            value={address}
            onChange={setAddress}
            placeholder="Enter address"
          />
          <InputField
            label="City"
            value={city}
            onChange={setCity}
            placeholder="Enter city"
          />
          <SelectField
            label="State"
            value={state}
            onChange={setState}
            options={["Daejeon", "Seoul", "Busan", "Incheon", "Gwangju"]}
          />
          <InputField
            label="Country"
            value={country}
            onChange={setCountry}
            placeholder="Enter country"
          />
        </div>

        {/* Divider */}
        <div className="h-px bg-[#C4C4C4] mb-6" />

        {/* Bank Account Details */}
        <div className="mb-6">
          <h2 className="text-[16px] font-semibold text-black mb-4">Bank Account Details</h2>
          <InputField
            label="Bank Account Number"
            value={accountNumber}
            onChange={setAccountNumber}
            placeholder="Enter account number"
          />
          <InputField
            label="Account Holder's Name"
            value={accountHolder}
            onChange={setAccountHolder}
            placeholder="Enter account holder name"
          />
          <InputField
            label="IFSC Code"
            value={ifscCode}
            onChange={setIfscCode}
            placeholder="Enter IFSC code"
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