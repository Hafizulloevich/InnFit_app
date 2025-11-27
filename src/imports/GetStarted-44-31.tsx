import svgPaths from "./svg-m6ttj44gq4";
import imgUnsplashFouVDmGXoPi from "figma:asset/286cfb49fcf85103beefe96a0f0c05b47cf0465e.png";

function HomeIndicator() {
  return (
    <div className="absolute bottom-[-34px] h-[34px] left-[561px] w-[375px]" data-name="Home-indicator">
      <div className="absolute bg-[rgba(255,255,255,0.5)] inset-[55.88%_32%_29.41%_32.27%] rounded-[2.5px]" data-name="Indicator" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#0088ff] box-border content-stretch flex gap-[10px] h-[55px] items-center justify-center left-[59px] px-[109px] py-[21px] rounded-[4px] top-[704px] w-[279px]">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[23px] text-nowrap text-white whitespace-pre">Get Started</p>
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

export default function GetStarted() {
  return (
    <div className="bg-white relative size-full" data-name="Get Started">
      <div className="absolute h-[852px] left-0 top-0 w-[406px]" data-name="unsplash:fouVDmGXoPI">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgUnsplashFouVDmGXoPi} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
      <HomeIndicator />
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] left-[202.5px] text-[34px] text-center text-white top-[523px] tracking-[0.34px] translate-x-[-50%] w-[315px]">Your only store needed</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[1.54] left-[194.5px] text-[#f2f2f2] text-[14px] text-center top-[656px] tracking-[0.14px] translate-x-[-50%] w-[315px]">Bringing shopping closer!</p>
      <Frame />
      <BarsStatusBarDesignLight />
    </div>
  );
}