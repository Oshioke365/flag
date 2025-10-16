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

      {/* CFFL Image Layer */}
      <div className="absolute top-[156px] left-[157px] w-[1126px] h-[756px] rounded-2xl overflow-hidden">
        <Image
          src="/CFFL.png"
          alt="CFFL Hero"
          width={1126}
          height={756}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text Container Above CFFL */}
      <div className="absolute top-[224.5px] left-[84px] flex flex-col gap-6">
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

        {/* Subtitle below */}
        <span
          className="text-white text-[40px] pl-[330px] leading-[120%]"
          style={{
            fontFamily: "ITC Machine Std, sans-serif",
          }}
        >
          Building Africa's Flag Football Future
        </span>
      </div>

      {/* Player Image Below Text */}
      <div className="absolute top-[400.5px] left-[169px]">
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