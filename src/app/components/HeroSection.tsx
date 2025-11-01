"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function HeroSection() {
  // Dummy data for the news cards
  const newsItems = [
    {
      id: 1,
      title: "Flag Football Expands Across Africa",
      date: "Oct 20, 2025",
      image: "/news1.jpg",
      desc: "CFFL teams from multiple countries gathered for a major regional showcase.",
    },
    {
      id: 2,
      title: "Youth Program Launches in Lagos",
      date: "Oct 25, 2025",
      image: "/news2.jpg",
      desc: "The CFFL’s youth initiative aims to bring flag football to schools across Nigeria.",
    },
    {
      id: 3,
      title: "Women’s League Gains Momentum",
      date: "Oct 28, 2025",
      image: "/news3.jpg",
      desc: "More women are joining the sport as new teams form across West Africa.",
    },
    {
      id: 4,
      title: "Flag Football and Olympic Dreams",
      date: "Nov 1, 2025",
      image: "/news4.jpg",
      desc: "CFFL executives discuss Africa’s potential role in flag football’s Olympic debut.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % newsItems.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? newsItems.length - 1 : prev - 1
    );
  };

  return (
    <main className="flex flex-col items-center justify-start w-full overflow-hidden text-white relative">
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full min-h-[680px] lg:h-[1002px] overflow-hidden bg-cover bg-center bg-no-repeat"
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
          className="
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

        {/* Text Container */}
        <div
          className="absolute 
            top-24 lg:top-[224.5px] 
            left-1/2 -translate-x-1/2 
            w-full px-4 sm:px-8 
            flex flex-col gap-1 sm:gap-6 
            items-center text-center"
        >
          <div className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-5 mt-7 sm:mt-2">
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
          </div>

          {/* Player Image */}
          <div className="block sm:hidden h-[80px]" />
          <div
            className="-mt-49 max-w-4xl lg:max-w-[1023px]
            w-full h-auto aspect-[1023/944] relative min-h-[680px]"
          >
            <img
              src="/players.png"
              alt="Player"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Fade into next section */}
        <div
          className="absolute bottom-0 w-full 
            h-[280px] sm:h-[100px] 
            bg-gradient-to-t from-white via-white/90 to-transparent 
            pointer-events-none"
          style={{
            paddingBottom: "200px",
            transform: "translateY(0)",
            zIndex: "1",
          }}
        />
      </section>

      {/* ================= OVERLAPPING MIDDLE IMAGE ================= */}
      <div
        className="relative w-full flex justify-center"
        style={{
          height: "99px",
          backgroundColor: "#fff",
          zIndex: "3",
        }}
      >
        <Image
          src="/football.png"
          alt="Mid Overlap Image"
          width={316}
          height={186}
          className="absolute z-20 -translate-y-1/2 object-contain"
        />
        <div
          style={{
            backgroundColor: "grey",
            opacity: "0.3",
            marginTop: "70px",
            width: "220px",
            height: "28px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* ================= TRENDING SECTION ================= */}
      <section className="relative bg-white text-black w-full py-6 px-4 sm:px-8 md:px-16 lg:px-[134px] overflow-hidden">
        {/* Background Text */}
        <h1
          className="absolute top-0 left-0 -translate-y-[40%]
             text-left whitespace-nowrap 
             text-[80px] sm:text-[140px] md:text-[200px] lg:text-[250px] 
             leading-none font-medium uppercase 
             text-[#BAB8B8] opacity-20 pointer-events-none select-none z-0 pl-[20px] sm:pl-[60px] lg:pl-[134px]"
          style={{
            fontFamily: "ITC Machine Std, sans-serif",
            paddingTop: "150px",
          }}
        >
          Trending
        </h1>

        {/* Header */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between mb-10 md:mb-16 gap-6 w-full">
          <h2
            className="text-[24px] sm:text-[32px] md:text-[40px] font-extrabold text-[#012752] uppercase tracking-tight"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Trending News
          </h2>
          <a
            href="#"
            className="text-[#262626] text-[16px] sm:text-[18px] font-[700] hover:underline transition"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            See all &gt;
          </a>
        </div>

        {/* News Cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 justify-items-center">
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
                  opacity: isActive ? 1 : 0.9,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="flex flex-col items-start text-left w-full max-w-[350px]"
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

                <div className="mt-6 sm:mt-8 flex flex-col items-start text-left w-full">
                  <p className="text-gray-500 text-[10px] sm:text-[12px] font-medium mb-1">
                    {item.date}
                  </p>
                  <h3
                    className={`font-bold transition-all duration-300 ${
                      isActive
                        ? "text-[18px] sm:text-[20px] md:text-[22px] text-[#002060]"
                        : "text-[14px] sm:text-[16px] text-gray-700"
                    }`}
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#262626] text-[12px] sm:text-[14px] font-normal mt-2 leading-relaxed max-w-[300px]"
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
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-10">
          <button
            onClick={handlePrev}
            className="w-[50px] sm:w-[60px] h-[40px] sm:h-[50px] flex items-center justify-center rounded-[3px] border border-gray-300 bg-transparent 
                     hover:bg-[#012752] active:bg-[#012752] transition cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#919192] group-hover:text-white group-active:text-white transition-colors duration-200" />
          </button>

          <div className="flex items-center gap-4 sm:gap-8">
            {newsItems.map((_, index) => (
              <span
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-[18px] sm:text-[22px] font-semibold cursor-pointer transition-colors ${
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
            className="w-[50px] sm:w-[60px] h-[40px] sm:h-[50px] flex items-center justify-center rounded-[3px] border border-gray-300 bg-transparent 
                     hover:bg-[#012752] active:bg-[#012752] transition cursor-pointer group"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#919192] group-hover:text-white group-active:text-white transition-colors duration-200" />
          </button>
        </div>
      </section>
          </main>
  );
}

