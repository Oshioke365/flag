"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import MatchFixtureCard from "../components/MatchFixtureCard"; // 👈 Imported the new card component

// --- Week Data (Unchanged) ---
const weekData = [
  { week: "WEEK 4", dates: "OCT 16 - 22" },
  { week: "WEEK 5", dates: "OCT 23 - 29" },
  { week: "WEEK 6", dates: "OCT 30 - NOV 5" },
  { week: "WEEK 7", dates: "NOV 6 - 12" },
  { week: "WEEK 8", dates: "NOV 13 - 19" },
  { week: "WEEK 9", dates: "NOV 20 - 26" },
  { week: "WEEK 10", dates: "NOV 27 - DEC 3" },
  { week: "WEEK 11", dates: "DEC 4 - 10" },
];

export default function GamesPage() {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [activeDivision, setActiveDivision] = useState<'Men' | 'Women'>('Men'); 

  // Handlers for Week and Division
  const handleWeekClick = (index: number) => {
    setCurrentWeekIndex(index);
  };
  
  const handleDivisionClick = (division: 'Men' | 'Women') => {
    setActiveDivision(division);
  };

  const activeColor = '#1a1a1a'; 
  const inactiveColor = '#777777'; 

  // Style constants for Segmented Control
  const segmentBaseStyle = "py-2 px-6 text-sm font-semibold transition-colors duration-200";
  const segmentActiveStyle = "bg-[#012752] text-white shadow-inner";
  const segmentInactiveStyle = "bg-transparent text-white hover:bg-[#a80f0f]";

  return (
    <>
      {/* 🏈 Navbar */}
      <Navbar linkTextColor="text-gray-800" /> 

      {/* Main Page Content */}
      <main className="min-h-screen bg-white text-gray-800 pt-[160px]">
        
        {/* --- Top Section (Image and Week Scroller) --- */}
        <div className="px-6 md:px-10">
            {/* Hero Image */}
            <div className="w-full mb-10">
            <Image
                src="/games1.png"
                alt="CFFL Games Background"
                width={1200}
                height={400}
                className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
            </div>

            {/* Week Scroller Section - Static Header */}
            <section className="relative py-4 border-b border-gray-200">
                <div className="flex justify-between items-start w-full select-none">
                    {weekData.map((weekItem, index) => {
                        const isCurrent = index === currentWeekIndex;
                        return (
                            <div
                                key={index}
                                className={`flex flex-col items-center flex-shrink cursor-pointer px-1 
                                transition-all duration-300
                                ${isCurrent ? "scale-105" : "hover:opacity-75"}
                                `}
                                onClick={() => handleWeekClick(index)}
                            >
                                <span
                                    className="font-bold uppercase text-center"
                                    style={{
                                    fontSize: "12px",
                                    color: isCurrent ? activeColor : inactiveColor,
                                    }}
                                >
                                    {weekItem.week}
                                </span>
                                <span
                                    className="font-normal uppercase text-center mt-1"
                                    style={{ 
                                        fontSize: "14px", 
                                        color: isCurrent ? '#333333' : inactiveColor,
                                    }}
                                >
                                    {weekItem.dates}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
        
        {/* -------------------------------------------------------- */}
        {/* Gray Background Container for Fixtures Section */}
        <div className="bg-[#F7F7F7] py-12 mt-12">
            <div className="px-6 md:px-10">
                
                {/* Header: Game Fixtures and Segmented Control */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6 w-full">
                    <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#002060] uppercase tracking-tight">
                        Game Fixtures
                    </h2>

                    {/* Segmented Control Container */}
                    <div className="flex rounded-md overflow-hidden bg-[#C90F0F] shadow-lg">
                        <button
                            onClick={() => handleDivisionClick('Men')}
                            className={`${segmentBaseStyle} ${activeDivision === 'Men' ? segmentActiveStyle : segmentInactiveStyle}`}
                        >
                            Men
                        </button>
                        <button
                            onClick={() => handleDivisionClick('Women')}
                            className={`${segmentBaseStyle} ${activeDivision === 'Women' ? segmentActiveStyle : segmentInactiveStyle}`}
                        >
                            Women
                        </button>
                    </div>
                </div>
                
                {/* 1. Men's Fixtures (Conditionally Rendered) */}
                {activeDivision === 'Men' && (
                    <div className="space-y-8">
                        {/* 🎯 FIRST MEN'S MATCH CARD - Using the exact data you provided */}
                        <MatchFixtureCard
                            matchImageSrc="/mengame1.png" // Added .png extension for typical usage
                            matchDay="MATCH DAY 1"
                            matchTime="11:50 AM WAT"
                            matchDate="SAT 25/09" 
                        />

                        {/* You can add more Men's match cards here */}
                    </div>
                )}

                {/* 2. Women's Fixtures (Conditionally Rendered) */}
                {activeDivision === 'Women' && (
                    <div className="text-xl text-gray-600 font-medium">
                        Displaying **Women's** fixtures for **{weekData[currentWeekIndex].week}**...
                    </div>
                )}

            </div>
        </div>
        
      </main>
    </>
  );
}