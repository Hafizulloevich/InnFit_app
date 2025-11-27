import { motion } from "motion/react";
import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-m6ttj44gq4";
import imgUnsplashFouVDmGXoPi from "figma:asset/286cfb49fcf85103beefe96a0f0c05b47cf0465e.png";

function GetStartedButton({ onClick, isPressed }: { onClick: () => void; isPressed: boolean }) {
  return (
    <motion.div
      className="absolute bg-[#0088ff] box-border content-stretch flex gap-[10px] h-[55px] items-center justify-center left-1/2 -translate-x-1/2 px-[109px] py-[21px] rounded-[4px] bottom-[90px] w-[279px] max-w-[90%] cursor-pointer select-none"
      onClick={onClick}
      whileHover={{ backgroundColor: "#0077ee", y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98, y: 2 }}
      animate={{ y: isPressed ? 2 : 0 }}
    >
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[23px] text-nowrap text-white whitespace-pre">Get Started</p>
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

function HomeIndicator() {
  return (
    <div className="absolute bottom-[-34px] h-[34px] left-[561px] w-[375px]" data-name="Home-indicator">
      <div className="absolute bg-[rgba(255,255,255,0.5)] inset-[55.88%_32%_29.41%_32.27%] rounded-[2.5px]" data-name="Indicator" />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute bottom-[34.85%] contents right-[14.22px] top-[39.39%]" data-name="Battery">
      <div className="absolute border border-solid border-white bottom-[34.85%] opacity-[0.35] right-[16.55px] rounded-[2.667px] top-[39.39%] w-[22px]" data-name="Border" />
      <div className="absolute bottom-[43.18%] right-[14.22px] top-[47.73%] w-[1.328px]" data-name="Cap">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
          <path d={svgPaths.p12c12640} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute bg-white bottom-[39.39%] right-[18.55px] rounded-[1.333px] top-[43.94%] w-[18px]" data-name="Capacity" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[34.85%] contents right-[14.22px] top-[39.39%]">
      <Battery />
      <div className="absolute bottom-[35.61%] right-[43.55px] top-[39.39%] w-[15.333px]" data-name="Wifi">
        <div className="absolute bottom-[0.01%] left-0 right-0 top-[-0.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
            <path d={svgPaths.p26af4d80} fill="var(--fill-0, white)" id="Wifi" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[35.61%] right-[63.88px] top-[40.15%] w-[17px]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
          <path d={svgPaths.pd2fa900} fill="var(--fill-0, white)" id="Cellular Connection" />
        </svg>
      </div>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute bottom-[36.36%] left-[21px] top-[15.91%] w-[54px]" data-name="Time Style">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[20px] left-0 not-italic right-[44.44%] text-[15px] text-center text-white top-[calc(50%-4.6px)]">9:41</p>
    </div>
  );
}

function BarsStatusBarDesignLight() {
  return (
    <div className="absolute inset-[0.12%_1.79%_94.67%_2.05%]" data-name="Bars / Status Bar / Design / Light">
      <Group />
      <TimeStyle />
    </div>
  );
}

export default function GetStarted({ onGetStarted }: { onGetStarted: () => void }) {
  const [getStartedPressed, setGetStartedPressed] = useState(false);
  const [displayedHeading, setDisplayedHeading] = useState("");
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const headingText = "Your only store needed";
  const subtitleText = "Bringing shopping closer!";

  const handleGetStarted = () => {
    setGetStartedPressed(true);
    setTimeout(() => {
      setGetStartedPressed(false);
      onGetStarted();
    }, 300);
  };

  // Typing effect for heading
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= headingText.length) {
        setDisplayedHeading(headingText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // 50ms per character

    return () => clearInterval(typingInterval);
  }, []);

  // Typing effect for subtitle (starts after heading)
  useEffect(() => {
    const delay = headingText.length * 50 + 200; // Start after heading finishes + 200ms delay
    const timer = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= subtitleText.length) {
          setDisplayedSubtitle(subtitleText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 40); // 40ms per character
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black relative size-full overflow-hidden" data-name="Get Started">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0" data-name="unsplash:fouVDmGXoPI">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-center object-cover size-full" src={imgUnsplashFouVDmGXoPi} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>

      {/* Main Heading with Neon Glow and Typing Effect */}
      <motion.p 
        className="absolute left-1/2 -translate-x-1/2 font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] text-[28px] md:text-[34px] text-center text-white top-[500px] md:top-[523px] tracking-[0.34px] w-[315px] max-w-[90%] px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          textShadow: `
            0 0 8px rgba(255, 255, 255, 0.6),
            0 0 15px rgba(255, 255, 255, 0.4),
            0 0 25px rgba(255, 255, 255, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.5)
          `
        }}
      >
        {displayedHeading}
        {displayedHeading.length < headingText.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block ml-1"
          >
            |
          </motion.span>
        )}
      </motion.p>

      {/* Subtitle with Subtle Glow and Typing Effect */}
      <motion.p 
        className="absolute left-1/2 -translate-x-1/2 font-['Montserrat:Regular',sans-serif] font-normal leading-[1.54] text-[#f2f2f2] text-[14px] text-center top-[620px] md:top-[656px] tracking-[0.14px] w-[315px] max-w-[90%] px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: displayedSubtitle.length > 0 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          textShadow: `
            0 0 5px rgba(242, 242, 242, 0.3),
            0 1px 3px rgba(0, 0, 0, 0.5)
          `
        }}
      >
        {displayedSubtitle}
        {displayedSubtitle.length > 0 && displayedSubtitle.length < subtitleText.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block ml-1"
          >
            |
          </motion.span>
        )}
      </motion.p>

      <GetStartedButton onClick={handleGetStarted} isPressed={getStartedPressed} />
      <BarsStatusBarDesignLight />
      <HomeIndicator />
    </div>
  );
}