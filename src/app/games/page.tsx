"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        <div className="px-6 md:px-10 max-w-7xl mx-auto">

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
  <div className="flex items-center justify-between w-full select-none">
    
    {/* Left Arrow */}
    <button
      onClick={() => handleWeekClick(currentWeekIndex - 1)}
      disabled={currentWeekIndex === 0}
      className={`p-2 rounded-full transition-all ${
        currentWeekIndex === 0
          ? "opacity-30 cursor-not-allowed"
          : "hover:bg-gray-100"
      }`}
    >
      <ChevronLeft size={24} />
    </button>

    {/* Week Items */}
    <div className="flex justify-between items-start flex-grow mx-4">
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
                color: isCurrent ? "#333333" : inactiveColor,
              }}
            >
              {weekItem.dates}
            </span>
          </div>
        );
      })}
    </div>

    {/* Right Arrow */}
    <button
      onClick={() => handleWeekClick(currentWeekIndex + 1)}
      disabled={currentWeekIndex === weekData.length - 1}
      className={`p-2 rounded-full transition-all ${
        currentWeekIndex === weekData.length - 1
          ? "opacity-30 cursor-not-allowed"
          : "hover:bg-gray-100"
      }`}
    >
      <ChevronRight size={24} />
    </button>

  </div>
</section>

        </div>
        
        {/* -------------------------------------------------------- */}
        {/* Gray Background Container for Fixtures Section */}
        <div className="bg-[#F7F7F7] py-12 mt-12">
            <div className="px-6 md:px-10">
                
                {/* Header: Game Fixtures and Segmented Control */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6 w-full">
                    <h2 className="text-[28px] md:text-[40px] font-extrabold text-[#002060] uppercase tracking-tight"
                      style={{ fontFamily: "ITC Machine Std, sans-serif" }}>
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
  <section className="w-full bg-[#F7F7F7] py-12">
    <div className="space-y-8 max-w-7xl mx-auto px-4">

      {/* ---------------------- MATCH CARD 1 ---------------------- */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full mb-[5px]">
          <img
            src="/mengame1.png"
            alt="Men's Game 1"
            className="w-full h-auto object-contain rounded-t-lg"
          />
        </div>

        <div className="flex justify-between items-end p-3">
          <div className="text-left text-xs text-gray-700 font-semibold">
            <p className="text-sm text-gray-900">MATCH DAY 1</p>
            <p>SAT, 25/09</p>
            <p>11:50 AM WAT</p>
          </div>

          <div className="flex space-x-2">
            <button
              className="flex items-center space-x-1 py-2 px-3 rounded-md text-white font-medium text-sm transition duration-300"
              style={{ backgroundColor: '#012752', border: '1px solid #012752' }}
            >
              <span>Get Ticket</span>
            </button>

            <button
              className="flex items-center space-x-1 py-2 px-3 rounded-md font-medium text-sm transition duration-300"
              style={{ backgroundColor: 'white', color: '#012752', border: '1px solid #012752' }}
            >
              <span>Add to Calendar</span>
            </button>
          </div>
        </div>
      </div>

      {/* ---------------------- MATCH CARD 2 ---------------------- */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full mb-[5px]">
          <img src="/m2.png" alt="Men's Game 2" className="w-full h-auto object-contain rounded-t-lg" />
          <img src="/matchday2.png" alt="Overlay Graphic" className="absolute inset-0 w-full h-full object-contain opacity-80 pointer-events-none" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <div className="flex items-center justify-center space-x-4">
              <img src="/team1.png" alt="Lagos Hawks Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg uppercase">
                Lagos Hawks <span className="text-[#C90F0F]">vs</span> Lagos Lions
              </h2>
              <img src="/team6.png" alt="Lagos Lions Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end p-3">
          <div className="text-left text-xs text-gray-700 font-semibold">
            <p className="text-sm text-gray-900">MATCH DAY 2</p>
            <p>SAT, 01/10</p>
            <p>11:50 AM WAT</p>
          </div>

          <div className="flex space-x-2">
            <button className="py-2 px-3 rounded-md text-white font-medium text-sm" style={{ backgroundColor: '#012752', border: '1px solid #012752' }}>Get Ticket</button>
            <button className="py-2 px-3 rounded-md font-medium text-sm" style={{ backgroundColor: 'white', color: '#012752', border: '1px solid #012752' }}>Add to Calendar</button>
          </div>
        </div>
      </div>

        {/* ---------------------- MATCH CARD 3 ---------------------- */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full mb-[5px]">
          <img src="/m2.png" alt="Men's Game 2" className="w-full h-auto object-contain rounded-t-lg" />
          <img src="/matchday2.png" alt="Overlay Graphic" className="absolute inset-0 w-full h-full object-contain opacity-80 pointer-events-none" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <div className="flex items-center justify-center space-x-4">
              <img src="/team5.png" alt="Lagos Hawks Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg uppercase">
                MAVERICKS <span className="text-[#C90F0F]">vs</span> OUTLAWS
              </h2>
              <img src="/team2.png" alt="Lagos Lions Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end p-3">
          <div className="text-left text-xs text-gray-700 font-semibold">
            <p className="text-sm text-gray-900">MATCH DAY 3</p>
            <p>SAT, 08/10</p>
            <p>11:50 AM WAT</p>
          </div>

          <div className="flex space-x-2">
            <button className="py-2 px-3 rounded-md text-white font-medium text-sm" style={{ backgroundColor: '#012752', border: '1px solid #012752' }}>Get Ticket</button>
            <button className="py-2 px-3 rounded-md font-medium text-sm" style={{ backgroundColor: 'white', color: '#012752', border: '1px solid #012752' }}>Add to Calendar</button>
          </div>
        </div>
      </div>
      {/* ---------------------- MATCH CARD 4 ---------------------- */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full mb-[5px]">
          <img src="/m2.png" alt="Men's Game 2" className="w-full h-auto object-contain rounded-t-lg" />
          <img src="/matchday2.png" alt="Overlay Graphic" className="absolute inset-0 w-full h-full object-contain opacity-80 pointer-events-none" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <div className="flex items-center justify-center space-x-4">
              <img src="/team7.png" alt="Lagos Hawks Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg uppercase">
                DRAGON <span className="text-[#C90F0F]">vs</span> SPARTANS
              </h2>
              <img src="/team9.png" alt="Lagos Lions Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end p-3">
          <div className="text-left text-xs text-gray-700 font-semibold">
            <p className="text-sm text-gray-900">MATCH DAY 3</p>
            <p>SAT, 15/10</p>
            <p>11:50 AM WAT</p>
          </div>

          <div className="flex space-x-2">
            <button className="py-2 px-3 rounded-md text-white font-medium text-sm" style={{ backgroundColor: '#012752', border: '1px solid #012752' }}>Get Ticket</button>
            <button className="py-2 px-3 rounded-md font-medium text-sm" style={{ backgroundColor: 'white', color: '#012752', border: '1px solid #012752' }}>Add to Calendar</button>
          </div>
        </div>
      </div>


      {/* You can continue with Match Day 3 & 4 using the same pattern */}
    </div>
  </section>
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
    
         {/* 3. Footer */}
         <Footer />
         </>
  );
}