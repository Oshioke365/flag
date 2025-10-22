"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

// --- Data for the Animated Upcoming Schedule (Unchanged) ---
const games = [
  { id: 1, logo: "/team1.png", date: "Oct 18", week: "WK 4 - 6:00 PM" },
  { id: 2, logo: "/team2.png", date: "Oct 20", week: "WK 4 - 7:30 PM" },
  { id: 3, logo: "/team3.png", date: "Oct 22", week: "WK 4 - 4:00 PM" },
  { id: 4, logo: "/team4.png", date: "Oct 24", week: "WK 4 - 8:00 PM" },
  { id: 5, logo: "/team5.png", date: "Oct 26", week: "WK 4 - 5:00 PM" },
];

// --- Data for the New Next Games Section (Unchanged) ---
const nextGames = [
  {
    id: 1,
    team1: { name: "WOL", logo: "/team1.png", color: ["#DFB645", "#796325"] },
    team2: { name: "OUT", logo: "/team2.png", color: "#5F4B8B" },
  },
  {
    id: 2,
    team1: { name: "TAT", logo: "/team4.png", color: "#AA3939" },
    team2: { name: "LAL", logo: "/team6.png", color: "#F07818" },
  },
  {
    id: 3,
    team1: { name: "DRA", logo: "/team7.png", color: "#79B222" },
    team2: { name: "HAW", logo: "/team1.png", color: "#FBB03B" },
  },
  {
    id: 4,
    team1: { name: "HAW", logo: "/team1.png", color: "#5F4B8B" },
    team2: { name: "SPA", logo: "/team9.png", color: "#6C7A89" },
  },
  {
    id: 5,
    team1: { name: "MAV", logo: "/team5.png", color: "#F07818" },
    team2: { name: "OUT", logo: "/team2.png", color: "#AA3939" },
  },
  {
    id: 6,
    team1: { name: "LAL", logo: "/team6.png", color: "#FBB03B" },
    team2: { name: "TAT", logo: "/team4.png", color: "#79B222" },
  },
];


export default function Upcoming() {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const [isRunning, setIsRunning] = useState(true);
  const scrollDuration = 7;

  useEffect(() => {
    let loopTimeout: NodeJS.Timeout | null = null;

    const loopScroll = async () => {
      while (isRunning) {
        if (!isPaused) {
          await controls.start({
            x: "-50%",
            transition: { duration: scrollDuration, ease: "linear" },
          });
          await controls.start({ x: "0%", transition: { duration: 0 } });
        } else {
          await new Promise<void>((resolve) => {
            loopTimeout = setTimeout(resolve, 100);
          });
        }
      }
    };

    loopScroll();

    return () => {
      setIsRunning(false);
      if (loopTimeout) clearTimeout(loopTimeout);
    };
  }, [controls, isPaused, scrollDuration, isRunning]);

  // Helper function to determine the color/gradient for the main card background
  const getTeam1Color = (team1Color: string | string[]) => {
    if (Array.isArray(team1Color)) {
      return 'transparent'; 
    }
    return team1Color;
  };
  
  return (
    <section 
      className="relative w-full py-[120px] bg-[#F7F7F7]" 
      aria-label="Upcoming Schedule and Game Replays"
    >
      
      {/* ------------------ 1. UPCOMING SCHEDULE SECTION (Background Darkened) ------------------ */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="relative w-full flex justify-center items-center rounded-lg overflow-hidden px-6 md:px-[80px] lg:px-[134px]">
=======
      <div className="relative w-full flex justify-center items-center rounded-lg overflow-hidden px-6 md:px-[80px] lg:px-[134px]" >
>>>>>>> parent of 6932f2c (Update upcoming.tsx)
=======
      <div className="relative w-full flex justify-center items-center rounded-lg overflow-hidden px-6 md:px-[80px] lg:px-[134px]">
>>>>>>> parent of 2245bf9 (floating football fixed)
        <Image
          src="/upcoming-bg.png"
          alt="Upcoming Background"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div> 
=======
        <div className="absolute inset-0 bg-#ffff opacity-30 z-10"></div> 
>>>>>>> parent of 6932f2c (Update upcoming.tsx)
=======
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div> 
>>>>>>> parent of 2245bf9 (floating football fixed)

        <h2 className="absolute top-8 left-8 md:top-10 md:left-12 text-white text-[28px] md:text-[48px] font-extrabold uppercase tracking-tight z-20"   style={{
    fontFamily: "DM Sans, sans-serif",
    fontWeight: 500,
<<<<<<< HEAD
<<<<<<< HEAD
=======
    paddingLeft:"150px",
>>>>>>> parent of 6932f2c (Update upcoming.tsx)
=======
>>>>>>> parent of 2245bf9 (floating football fixed)
  }}>
          Upcoming Schedule
        </h2>

        <div
          className="absolute bottom-0 left-0 right-0 overflow-hidden z-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div className="flex gap-6 py-6 px-8" animate={controls}>
            {[...games, ...games].map((game, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[280px] h-[100px] border border-[#EBEEF3BF] rounded-xl flex items-center overflow-hidden backdrop-blur-sm"
              >
                {/* Left Half (White Background) */}
                <div className="absolute left-0 top-0 h-full w-1/2 bg-white flex items-center justify-center p-4 rounded-l-xl z-0">
                  <Image
                    src={game.logo}
                    alt="team logo"
                    width={50}
                    height={69}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.png";
                    }}
                    className="object-contain mix-blend-luminosity opacity-100"
                  />
                </div>
                
                {/* Right Half (Transparent/Date & Time) */}
                <div className="flex flex-col justify-center relative z-10 w-1/2 ml-auto pl-4">
                  <p className="text-white text-[36px] font-medium leading-none">
                    {game.date}
                  </p>
                  <p className="text-white text-[16px] font-normal mt-1">
                    {game.week}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* ------------------ 2. GAME REPLAYS SECTION ------------------ */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="w-full pt-20 px-6 md:px-[80px] lg:px-[134px]">
=======
      <div className="w-full pt-20 px-6 md:px-[80px] lg:px-[134px]" >
>>>>>>> parent of 6932f2c (Update upcoming.tsx)
=======
      <div className="w-full pt-20 px-6 md:px-[80px] lg:px-[134px]">
>>>>>>> parent of 2245bf9 (floating football fixed)
        
        {/* Header with Title and See All Link */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6 w-full">
          <h2 className="text-[28px] md:text-[40px] font-extrabold text-[#002060] uppercase tracking-tight"   style={{
    fontFamily: "DM Sans, sans-serif",
    fontWeight: 500,
  }}>
            Game Replays
          </h2>
          <a
            href="#"
            className="text-[#262626] text-[18px] font-[700] hover:underline transition"
          >
            See all &gt;
          </a>
        </div>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nextGames.map((game) => (
            <div
              key={game.id}
              className="relative w-full h-[150px] overflow-hidden rounded-xl shadow-lg group cursor-pointer"
            >
              {/* Background divided into two halves using a CSS gradient */}
              <div
                // FIX: Added z-0 to push this background layer beneath the content layers
                className="absolute inset-0 transition-opacity duration-300 z-0"
                style={{
                  background: `linear-gradient(to right, ${getTeam1Color(game.team1.color)} 50%, ${game.team2.color} 50%)`,
                }}
              ></div>

              {/* Conditional Team 1 Gradient Overlay */}
              {Array.isArray(game.team1.color) && (
                <div
                  className="absolute left-0 top-0 w-1/2 h-full z-[1]" 
                  style={{
                    background: `linear-gradient(to right, ${game.team1.color[0]}, ${game.team1.color[1]})`,
                  }}
                />
              )}

              {/* Content for Team 1 (Left Half) - z-20 */}
              <div className="absolute left-0 top-0 w-1/2 h-full flex flex-col items-center justify-center p-4 relative z-20">
                <Image
                  src={game.team1.logo}
                  alt={`${game.team1.name} Logo`}
                  width={60}
                  height={60}
                  className="object-contain" 
                />
                <p className="mt-1 text-white text-[28px] font-bold uppercase"   style={{
    fontFamily: "ITC Machine Std, sans-serif",
    fontWeight: 700,
  }}
  >
                  {game.team1.name}
                </p>
              </div>

              {/* Content for Team 2 (Right Half) - z-20 */}
              <div className="absolute right-0 top-0 w-1/2 h-full flex flex-col items-center justify-center p-4 relative z-20">
                <Image
                  src={game.team2.logo}
                  alt={`${game.team2.name} Logo`}
                  width={60}
                  height={60}
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.png";
                    target.width = 60; 
                    target.height = 60;
                  }}
                  className="object-contain"
                />
                <p className="mt-1 text-white text-[28px] font-bold uppercase">
                  {game.team2.name}
                </p>
              </div>

              {/* The Central Play Button Overlay - z-30 */}
              <div className="absolute inset-0 flex items-center justify-center z-30">
                <div className="w-[120px] h-[120px] flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                  <Image
                    src="/play.png" 
                    alt="Play button icon"
                    width={60}
                    height={60}
                    className="object-contain" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}