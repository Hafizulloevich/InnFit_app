import { motion } from "motion/react";
import { useState } from "react";
import svgPaths from "../imports/svg-bmbwre09jq";

function SubmitButton({ onClick, isPressed }: { onClick: () => void; isPressed: boolean }) {
  return (
    <motion.div
      className="absolute bg-[#0088ff] box-border content-stretch flex gap-[10px] h-[55px] items-center justify-center left-[44px] px-[109px] py-[21px] rounded-[4px] top-[508px] w-[317px] cursor-pointer"
      onClick={onClick}
      whileHover={{ backgroundColor: "#0077ee", y: -2 }}
      whileTap={{ scale: 0.98, y: 2 }}
      animate={{ y: isPressed ? 2 : 0 }}
    >
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Submit</p>
      {isPressed && (
        <motion.div
          className="absolute inset-0 bg-white rounded-[4px] opacity-20"
          initial={{ scale: 0, opacity: 0.3 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.div>
  );
}

function Mail() {
  return (
    <div className="absolute left-[51px] size-[24px] top-[368px]" data-name="Mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Mail">
          <path clipRule="evenodd" d={svgPaths.p1eee8a80} fill="var(--fill-0, #626262)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function EnterYourEmailAddress({
  value,
  onChange,
  isFocused,
  onFocus,
  onBlur,
}: {
  value: string;
  onChange: (value: string) => void;
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
}) {
  return (
    <div className="absolute contents left-[38px] top-[351px]" data-name="Enter your email address">
      <motion.div
        className="absolute bg-[#f3f3f3] border border-solid h-[55px] left-[38px] rounded-[10px] top-[351px] w-[317px]"
        animate={{ borderColor: isFocused ? "#0088ff" : "#a8a8a9" }}
        transition={{ duration: 0.2 }}
      />
      <input
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder="Enter your email address"
        className="absolute bg-transparent border-0 font-['Montserrat:Medium',sans-serif] font-medium h-[55px] left-[130px] outline-none text-[#676767] text-[12px] top-[351px] w-[210px]"
      />
      {isFocused && !value && (
        <motion.div
          className="absolute bg-[#0088ff] h-[20px] left-[132px] top-[370px] w-[1px]"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
      <Mail />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[34.85%] right-[14.34px] top-[39.39%] w-[66.662px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 12">
        <g id="Group 33677">
          <g id="Battery">
            <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="42.8335" y="0.502686" />
            <path d={svgPaths.p33573c00} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="44.3335" y="2.00269" />
          </g>
          <path d={svgPaths.p9212ee0} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.p53e9200} fill="var(--fill-0, black)" id="Cellular Connection" />
        </g>
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute bottom-[36.36%] left-[21px] top-[15.91%] w-[54px]" data-name="Time Style">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[20px] left-0 not-italic right-[44.44%] text-[15px] text-black text-center top-[calc(50%-4.5px)]">9:41</p>
    </div>
  );
}

function BarsStatusBarDesignLight() {
  return (
    <div className="absolute h-[44px] left-[9px] top-0 w-[375px]" data-name="Bars / Status Bar / Design / Light">
      <Group />
      <TimeStyle />
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      className="absolute h-[19px] left-[39px] top-[68px] w-[9.5px] cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.1, x: -2 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="absolute inset-[-3.72%_-7.44%_-3.72%_-6.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 21">
          <path d={svgPaths.p349a0648} id="Vector 3" stroke="var(--stroke-0, black)" strokeWidth="2" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function ForgotPassword({
  onSubmit,
  onBack,
}: {
  onSubmit: () => void;
  onBack: () => void;
}) {
  const [email, setEmail] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [submitPressed, setSubmitPressed] = useState(false);

  const handleSubmit = () => {
    setSubmitPressed(true);
    setTimeout(() => {
      setSubmitPressed(false);
      onSubmit();
    }, 300);
  };

  return (
    <div className="bg-white relative size-full" data-name="Forgot password">
      <div className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[43px] left-[44px] text-[36px] text-black text-nowrap top-[233px] whitespace-pre">
        <p className="mb-0">Forgot</p>
        <p>password?</p>
      </div>
      <SubmitButton onClick={handleSubmit} isPressed={submitPressed} />
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal h-[48px] leading-[normal] left-[52px] text-[#676767] text-[12px] top-[439px] w-[282px]">
        <span className="text-[#ff4b26]">*</span>
        <span>{` We will send you a message to set or reset your new password`}</span>
      </p>
      <EnterYourEmailAddress
        value={email}
        onChange={setEmail}
        isFocused={emailFocused}
        onFocus={() => setEmailFocused(true)}
        onBlur={() => setEmailFocused(false)}
      />
      <BarsStatusBarDesignLight />
      <BackButton onClick={onBack} />
    </div>
  );
}
