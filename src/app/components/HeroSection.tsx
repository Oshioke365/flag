"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Titans Remain Unbeaten This Season",
    desc: "A clutch play-game winner in the final seconds.",
    date: "October 12, 2025",
    image: "/news1.png",
  },
  {
    id: 2,
    title: "Game Day 2 at Showtime Arena: Outlaws Brings the Heat",
    desc: "Recap of the action-packed matchups at Showtime Arena, spotlighting Off Szn’s performance, game highlights, and the fan energy that lit up Game Day 2.",
    date: "October 10, 2025",
    image: "/news2.png",
  },
  {
    id: 3,
    title: "Mavericks on the Move: Rising Stars Shaking Up the CFFL",
    desc: "Spotlight on the Mavericks’ younger players making waves, highlighting their bold style of play and unpredictable game plans.",
    date: "October 9, 2025",
    image: "/news3.png",
  },
  {
    id: 4,
    title: "Clash of the Titans: How the Titans Keep Dominating the League",
    desc: "A feature story breaking down the Titans’ game strategies, key players, and what makes them the team to beat this season.",
    date: "October 8, 2025",
    image: "/news4.png",
  },
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="flex flex-col items-center justify-start w-full overflow-hidden text-white relative">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full min-h-[480px] lg:h-[1002px] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/hero-bg.png")' }}
      >
        {/* Overlay Gradient */}
        <div
          className="absolute inset-0 w-full h-full mix-blend-multiply"
          style={{
            background:
              "linear-gradient(180deg, #1F54A9 -2.56%, #000000 115.31%)",
          }}
        />

        {/* CFFL Image */}
        <div className="block sm:hidden h-[185px]" />
        <div
          className="absolute 
            top-20 lg:top-[156px] 
            left-1/2 -translate-x-1/2 
            w-11/12 max-w-4xl lg:max-w-[1126px] 
            h-auto aspect-[1126/756] lg:h-[756px] 
            rounded-2xl overflow-hidden flex justify-center items-center relative"
        >
          <img
            src="/CFFL.png"
            alt="CFFL Hero"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>

        {/* Text Section */}
        <div
          className="absolute 
            top-24 lg:top-[224.5px] 
            left-1/2 -translate-x-1/2 
            w-full px-4 sm:px-8 
            flex flex-col gap-1 sm:gap-6 
            items-center text-center"
        >
          {/* SPORT • COMMUNITY • IMPACT */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-5 mt-7 sm:mt-2">
            {["SPORT", "COMMUNITY", "IMPACT"].map((word, i) => (
              <div key={i} className="flex items-center gap-5">
                <span
                  className="text-white uppercase 
                    text-2xl sm:text-5xl md:text-7xl lg:text-[96px] 
                    font-bold leading-none"
                  style={{
                    fontFamily: "ITC Machine Std, sans-serif",
                  }}
                >
                  {word}
                </span>
                {i < 2 && <div className="w-2 h-2 bg-white hidden sm:block" />}
              </div>
            ))}
          </div>

          {/* Subtitle */}
          <span
            className="text-white 
              text-base sm:text-2xl md:text-3xl lg:text-[40px] 
              leading-[120%] mt-9 sm:mt-4"
            style={{
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            Building Africa's Flag Football Future
          </span>

          {/* Player Image */}
          <div className="block sm:hidden h-[180px]" />
          <div
            className="-mt-45 max-w-4xl lg:max-w-[1023px]
            w-full h-auto aspect-[1023/944] relative"
          >
            <img
              src="/players.png"
              alt="Player"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Fade effect into next section */}
        <div className="absolute bottom-0 translate-y-10 sm:translate-y-16 w-full h-62 sm:h-86 bg-gradient-to-t from-white via-white/90 to-transparent blur-3xl opacity-100 pointer-events-none" />
      </section>

      {/* ================= OVERLAPPING MIDDLE IMAGE ================= */}
{/* ================= OVERLAPPING MIDDLE IMAGE ================= */}
<div className="relative w-full flex justify-center" 
style={{
  height:"99px", 
  backgroundColor:"#fff", 
  // position:"absolute",
  // marginTop:"1000px",
  }}>
  <Image
    src="football.png" // 👈 your image file
    alt="Mid Overlap Image"
    width={316.4822129201497}
    height={186.00000274354937}
    className="absolute z-20 -translate-y-1/2 object-contain"
    style={{
      width: "316.4822129201497px",
      height: "186.00000274354937px",
    }}
  />
  <div
  style={{
    backgroundColor: "grey",
    opacity:"0.3",
    marginTop:"70px",
    width: "220px",
    height: "28px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  }}
>
</div>
</div>
 





      {/* ================= TRENDING SECTION ================= */}
      <section className="relative bg-white text-black w-full pt-[50px] pb-[120px] px-6 md:px-[80px] lg:px-[134px] " >
        {/* Padding top is increased (pt-[250px]) so that the overlapping image has space */}

        {/* Background "TRENDING" Text */}
       
        <h1
          className="absolute top-1/2 left-0 -translate-y-[301%]
             text-left w-auto 
             text-[164px] leading-[110px] font-medium uppercase 
             text-[#BAB8B8] opacity-30 pointer-events-none select-none z-0 pl-[134px]"
          style={{ fontFamily: "ITC Machine Std, sans-serif", fontSize:"250px", fontWeight:"500px"}}
        >
          Trending
        </h1>

        {/* Header */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6 w-full">
          <h2
            className="text-[28px] md:text-[40px] font-extrabold text-[#012752] uppercase tracking-tight"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Trending News
          </h2>
          <a
            href="#"
            className="text-[#262626] text-[18px] font-[700] hover:underline transition"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            See all &gt;
          </a>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mb-10">
          {newsItems.map((item, index) => {
            const isActive = activeIndex === index;
            const activeWidth = 330;
            const activeHeight = 280;
            const inactiveWidth = 250;
            const inactiveHeight = 210;

            return (
              <motion.div
                key={item.id}
                animate={{
                  scale: isActive ? 1.07 : 1,
                  y: isActive ? -10 : 0,
                  opacity: isActive ? 1 : 0.8,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="flex flex-col items-start text-left w-full max-w-[350px] h-full"
              >
                <motion.div
                  animate={{
                    width: isActive ? activeWidth : inactiveWidth,
                    height: isActive ? activeHeight : inactiveHeight,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="overflow-hidden rounded-2xl mx-auto"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={isActive ? activeWidth : inactiveWidth}
                    height={isActive ? activeHeight : inactiveHeight}
                    className="object-cover w-full h-full transition-all duration-300"
                  />
                </motion.div>

                <div className="mt-12 flex flex-col items-start text-left w-full">
                  <p className="text-gray-500 text-[10px] font-medium mb-1">
                    {item.date}
                  </p>
                  <h3
                    className={`font-bold transition-all duration-300 ${
                      isActive
                        ? "text-[20px] md:text-[22px] text-[#002060]"
                        : "text-[12px] md:text-[16px] text-gray-700"
                    }`}
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#262626] text-[12px] font-normal mt-2 leading-relaxed max-w-[300px]"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-10 mt-10">
          <button
            onClick={handlePrev}
            className="w-[70px] h-[50px] flex items-center justify-center rounded-[3px] border border-gray-300 bg-transparent 
               hover:bg-[#012752] active:bg-[#012752] transition cursor-pointer group"
          >
            <ArrowLeft className="w-5 h-5 text-[#919192] group-hover:text-white group-active:text-white transition-colors duration-200" />
          </button>

          <div className="flex items-center gap-8">
            {newsItems.map((_, index) => (
              <span
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-[24px] font-semibold cursor-pointer transition-colors ${
                  activeIndex === index
                    ? "text-[#012752]"
                    : "text-gray-400 hover:text-[#012752]"
                }`}
              >
                {index + 1}
              </span>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-[70px] h-[50px] flex items-center justify-center rounded-[3px] border border-gray-300 bg-transparent 
               hover:bg-[#012752] active:bg-[#012752] transition cursor-pointer group"
          >
            <ArrowRight className="w-5 h-5 text-[#919192] group-hover:text-white group-active:text-white transition-colors duration-200" />
          </button>
        </div>
      </section>
    </main>
  );
}

