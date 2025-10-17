"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[1842px] overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/hero-bg.png")' }}>
      {/* Linear Gradient Overlay */}
      <div 
        className="absolute inset-x-0 top-0 w-full h-[1669px] mix-blend-multiply"
        style={{
          background: "linear-gradient(180deg, #1F54A9 -2.56%, #000000 115.31%)",
        }}
      />

      {/* CFFL Image Layer - Centered */}
      {/* Added flex, justify-center, items-center to center content within its parent */}
      <div className="absolute top-[156px] left-1/2 -translate-x-1/2 w-[1126px] h-[756px] rounded-2xl overflow-hidden flex justify-center items-center">
        <Image
          src="/CFFL.png"
          alt="CFFL Hero"
          width={1126}
          height={756}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text Container Above CFFL - Centered horizontally */}
      {/* Changed 'left' to 'left-1/2 -translate-x-1/2' for horizontal centering */}
      <div className="absolute top-[224.5px] left-1/2 -translate-x-1/2 flex flex-col gap-6 items-center">
        {/* Horizontal line: SPORT • COMMUNITY • IMPACT */}
        <div className="flex items-center gap-5">
          <span
            className="text-white uppercase text-[96px] font-bold leading-none"
            style={{
              fontFamily: "ITC Machine Std, sans-serif",
            }}
          >
            SPORT
          </span>

          <div className="w-3 h-3 bg-white" />

          <span
            className="text-white uppercase text-[96px] font-bold leading-none"
            style={{
              fontFamily: "ITC Machine Std, sans-serif",
            }}
          >
            COMMUNITY
          </span>

          <div className="w-3 h-3 bg-white" />

          <span
            className="text-white uppercase text-[96px] font-bold leading-none"
            style={{
              fontFamily: "ITC Machine Std, sans-serif",
            }}
          >
            IMPACT
          </span>
        </div>

        {/* Subtitle below - Adjusted padding to simplify centering based on container */}
        <span
          className="text-white text-[40px] leading-[120%] text-center" // Added text-center
          style={{
            fontFamily: "ITC Machine Std, sans-serif",
          }}
        >
          Building Africa's Flag Football Future
        </span>
      </div>

      {/* Player Image Below Text - Centered */}
      {/* Changed 'left' to 'left-1/2 -translate-x-1/2' for horizontal centering */}
      <div className="absolute top-[400.5px] left-1/2 -translate-x-1/2">
        <Image
          src="/players.png"
          alt="Player"
          width={1023} 
          height={944} 
          className="object-contain"
        />
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
 
    </section>
  );
}