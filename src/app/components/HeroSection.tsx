"use client";

// Removed: import Image from "next/image"; to fix compilation error

export default function HeroSection() {
  return (
    // Main Section: Use a responsive min-height and dynamic height based on content
    <section 
      className="relative w-full min-h-[480px] lg:h-[1002px] overflow-hidden bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: 'url("/hero-bg.png")' }}
    >
      {/* Linear Gradient Overlay: Set height to full container height */}
      <div 
        className="absolute inset-0 w-full h-full mix-blend-multiply"
        style={{
          background: "linear-gradient(180deg, #1F54A9 -2.56%, #000000 115.31%)",
        }}
      />


      {/* CFFL Image Layer - Responsive Sizing and Centered */}
       <div className="block sm:hidden h-[185px]" />
      <div className="absolute 
          top-20 lg:top-[156px] 
          left-1/2 -translate-x-1/2 
          w-11/12 max-w-4xl lg:max-w-[1126px] 
          h-auto aspect-[1126/756] lg:h-[756px] 
          rounded-2xl overflow-hidden flex justify-center items-center relative" // Added relative for proper img fill simulation
      >
        {/* Replaced Next.js Image with standard HTML img tag */}
        <img
          src="/CFFL.png"
          alt="CFFL Hero"
          // Mimicking fill behavior with absolute, inset-0, w-full, h-full
          className="absolute inset-0 w-full h-full object-contain" 
        />
      </div>

      {/* Text Container - Centered and Responsive Positioning (Now includes the Player Image) */}
      <div className="absolute 
          top-24 lg:top-[224.5px] 
          left-1/2 -translate-x-1/2 
          w-full px-4 sm:px-8 
          flex flex-col gap-1 sm:gap-6 
          items-center text-center"
      >
        {/* Horizontal line: SPORT • COMMUNITY • IMPACT - Stacks on mobile */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-5   mt-7 sm:mt-2">

          <span
            className="text-white uppercase 
                text-2xl sm:text-5xl md:text-7xl lg:text-[96px] 
                font-bold leading-none"
            style={{
              fontFamily: "ITC Machine Std, sans-serif",
            }}
          >
            SPORT
          </span>

          {/* Separator dots hidden on small mobile screens to prevent wrapping issues */}
          <div className="w-2 h-2 bg-white hidden sm:block" />

          <span
            className="text-white uppercase 
                text-2xl sm:text-5xl md:text-7xl lg:text-[96px] 
                font-bold leading-none"
            style={{
              fontFamily: "ITC Machine Std, sans-serif",
            }}
          >
            COMMUNITY
          </span>

          <div className="w-2 h-2 bg-white hidden sm:block" />

          <span
            className="text-white uppercase 
                text-2xl sm:text-5xl md:text-7xl lg:text-[96px] 
                font-bold leading-none"
            style={{
              fontFamily: "ITC Machine Std, sans-serif",
            }}
          >
            IMPACT
          </span>
        </div>

        {/* Subtitle - Responsive Text Size */}
        <span
          className="text-white 
              text-base sm:text-2xl md:text-3xl lg:text-[40px] 
              leading-[120%]   mt-9 sm:mt-4"
          style={{
            fontFamily: "ITC Machine Std, sans-serif",
          }}
        >
          Building Africa's Flag Football Future
        </span>

        {/* Player Image - Now flows directly after the text (mt-3 = 12px) */}
        <div className="block sm:hidden h-[180px]" />
        <div className="-mt-45 
            max-w-4xl lg:max-w-[1023px]
            w-full h-auto aspect-[1023/944] relative"
        >
          {/* Replaced Next.js Image with standard HTML img tag */}
          <img
            src="/players.png"
            alt="Player"
            // Mimicking fill behavior with absolute, inset-0, w-full, h-full
            className="absolute inset-0 w-full h-full object-contain"
          />
          
        </div>
      </div>
      
      {/* The original Player Image Below Text container has been removed */}
      
{/* Seamless white fade into next section */}
<div className="absolute bottom-0 translate-y-10 sm:translate-y-16 w-full h-72 sm:h-96 bg-gradient-to-t from-white via-white/90 to-transparent blur-2xl opacity-100 pointer-events-none" />


    </section>
  );
}
