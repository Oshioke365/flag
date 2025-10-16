"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
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
                    {activeDivision === 'Men' && (
  <div className="space-y-8">
    {/* Men's Match Card 1 */}
    <div className="bg-white rounded-lg shadow-lg">
      
      {/* 🖼 Full-width Image Section */}
      <div className="relative w-full">
        <img 
          src="/mengame1.png" 
          alt="Men's Game 1" 
          className="w-full h-auto object-contain rounded-t-lg" 
        />
      </div>

      {/* Content Section: Match Details and Buttons */}
      <div className="flex justify-between items-end p-3">
        
        {/* Match Day Info */}
        <div className="text-left text-xs text-gray-700 font-semibold">
          <p className="text-sm text-gray-900">MATCH DAY 1</p>
          <p>SAT, 25/09</p>
          <p>11:50 AM WAT</p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-2">
          {/* Get Ticket Button */}
          <button 
            className="flex items-center space-x-1 py-2 px-3 rounded-md text-white font-medium text-sm transition duration-300"
            style={{ backgroundColor: '#012752', border: '1px solid #012752' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path fillRule="evenodd" d="M.5 9.5a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-18a.5.5 0 0 1-.5-.5v-2ZM19 14h-1.5a.5.5 0 0 1-.5-.5V12h-13v1.5a.5.5 0 0 1-.5.5H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.5a.5.5 0 0 1 .5.5V8h13V6.5a.5.5 0 0 1 .5-.5H19a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1Z" clipRule="evenodd" />
            </svg>
            <span>Get Ticket</span>
          </button>

          {/* Add to Calendar Button */}
          <button 
            className="flex items-center space-x-1 py-2 px-3 rounded-md font-medium text-sm transition duration-300"
            style={{ backgroundColor: 'white', color: '#012752', border: '1px solid #012752' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#012752" className="w-4 h-4">
              <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-1.5ZM3.75 14.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5ZM16.25 7a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-1.5ZM14.25 14.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5ZM8.5 7.75a.75.75 0 0 0 .75.75h2.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v1.5Z" clipRule="evenodd" />
              <path d="M12.75 2a.75.75 0 0 0-.75.75V4h-4V2.75a.75.75 0 0 0-.75-.75h-.5a2.5 2.5 0 0 0-2.5 2.5v12.5c0 1.38 1.12 2.5 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5V4.5a2.5 2.5 0 0 0-2.5-2.5h-.5Z" />
            </svg>
            <span>Add to Calendar</span>
          </button>
        </div>
      </div>
    </div>
  </div>
)}



{activeDivision === 'Men' && (
  <div className="space-y-8">
    {/* Men's Match Card 1 */}
    <div className="bg-white rounded-lg shadow-lg">

      {/* 🖼 Full-width Image Section with Overlay + Logos + Text */}
      <div className="relative w-full">
        {/* Base Image */}
        <img
          src="/m2.png"
          alt="Men's Game 1"
          className="w-full h-auto object-contain rounded-t-lg"
        />

        {/* 🔹 Overlay Image Layer */}
        <img
          src="/matchday2.png"   // ← replace with your overlay image path
          alt="Overlay Graphic"
          className="absolute inset-0 w-full h-full object-contain opacity-80 pointer-events-none"
        />

        {/* 🔹 Logos + Matchup Text Layer */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <div className="flex items-center justify-center space-x-4">
            {/* Left Team Logo */}
            <img
              src="/team1.png"
              alt="Lagos Hawks Logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />

            {/* Matchup Text */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg uppercase">
              Lagos Hawks <span className="text-[#C90F0F]">vs</span> Lagos Lions
            </h2>

            {/* Right Team Logo */}
            <img
              src="/team6.png"
              alt="Lagos Lions Logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
          </div>

        </div>
      </div>

      {/* Content Section: Match Details and Buttons */}
      <div className="flex justify-between items-end p-3">
        {/* Match Day Info */}
        <div className="text-left text-xs text-gray-700 font-semibold">
          <p className="text-sm text-gray-900">MATCH DAY 2</p>
          <p>SAT, 01/10</p>
          <p>11:50 AM WAT</p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-2">
          {/* Get Ticket */}
          <button
            className="flex items-center space-x-1 py-2 px-3 rounded-md text-white font-medium text-sm transition duration-300"
            style={{ backgroundColor: '#012752', border: '1px solid #012752' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path fillRule="evenodd" d="M.5 9.5a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-18a.5.5 0 0 1-.5-.5v-2ZM19 14h-1.5a.5.5 0 0 1-.5-.5V12h-13v1.5a.5.5 0 0 1-.5.5H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.5a.5.5 0 0 1 .5.5V8h13V6.5a.5.5 0 0 1 .5-.5H19a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1Z" clipRule="evenodd" />
            </svg>
            <span>Get Ticket</span>
          </button>

          {/* Add to Calendar */}
          <button
            className="flex items-center space-x-1 py-2 px-3 rounded-md font-medium text-sm transition duration-300"
            style={{ backgroundColor: 'white', color: '#012752', border: '1px solid #012752' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#012752" className="w-4 h-4">
              <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-1.5ZM3.75 14.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5ZM16.25 7a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-1.5ZM14.25 14.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5ZM8.5 7.75a.75.75 0 0 0 .75.75h2.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v1.5Z" clipRule="evenodd" />
              <path d="M12.75 2a.75.75 0 0 0-.75.75V4h-4V2.75a.75.75 0 0 0-.75-.75h-.5a2.5 2.5 0 0 0-2.5 2.5v12.5c0 1.38 1.12 2.5 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5V4.5a2.5 2.5 0 0 0-2.5-2.5h-.5Z" />
            </svg>
            <span>Add to Calendar</span>
          </button>
        </div>
      </div>
    </div>
  </div>
)}

{activeDivision === 'Men' && (
  <div className="space-y-8">
    {/* Men's Match Card 1 */}
    <div className="bg-white rounded-lg shadow-lg">

      {/* 🖼 Full-width Image Section with Overlay + Logos + Text */}
      <div className="relative w-full">
        {/* Base Image */}
        <img
          src="/m2.png"
          alt="Men's Game 1"
          className="w-full h-auto object-contain rounded-t-lg"
        />

        {/* 🔹 Overlay Image Layer */}
        <img
          src="/matchday2.png"   // ← replace with your overlay image path
          alt="Overlay Graphic"
          className="absolute inset-0 w-full h-full object-contain opacity-80 pointer-events-none"
        />

        {/* 🔹 Logos + Matchup Text Layer */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <div className="flex items-center justify-center space-x-4">
            {/* Left Team Logo */}
            <img
              src="/team5.png"
              alt="Mavericks Logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />

            {/* Matchup Text */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg uppercase">
              MAVERICKS <span className="text-[#C90F0F]">vs</span>OUTLAWS
            </h2>

            {/* Right Team Logo */}
            <img
              src="/team2.png"
              alt="Outlaw Logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
          </div>

      
        </div>
      </div>

      {/* Content Section: Match Details and Buttons */}
      <div className="flex justify-between items-end p-3">
        {/* Match Day Info */}
        <div className="text-left text-xs text-gray-700 font-semibold">
          <p className="text-sm text-gray-900">MATCH DAY 3</p>
          <p>SAT, 01/10</p>
          <p>11:50 AM WAT</p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-2">
          {/* Get Ticket */}
          <button
            className="flex items-center space-x-1 py-2 px-3 rounded-md text-white font-medium text-sm transition duration-300"
            style={{ backgroundColor: '#012752', border: '1px solid #012752' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path fillRule="evenodd" d="M.5 9.5a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-18a.5.5 0 0 1-.5-.5v-2ZM19 14h-1.5a.5.5 0 0 1-.5-.5V12h-13v1.5a.5.5 0 0 1-.5.5H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.5a.5.5 0 0 1 .5.5V8h13V6.5a.5.5 0 0 1 .5-.5H19a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1Z" clipRule="evenodd" />
            </svg>
            <span>Get Ticket</span>
          </button>

          {/* Add to Calendar */}
          <button
            className="flex items-center space-x-1 py-2 px-3 rounded-md font-medium text-sm transition duration-300"
            style={{ backgroundColor: 'white', color: '#012752', border: '1px solid #012752' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#012752" className="w-4 h-4">
              <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-1.5ZM3.75 14.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5ZM16.25 7a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-1.5ZM14.25 14.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5ZM8.5 7.75a.75.75 0 0 0 .75.75h2.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v1.5Z" clipRule="evenodd" />
              <path d="M12.75 2a.75.75 0 0 0-.75.75V4h-4V2.75a.75.75 0 0 0-.75-.75h-.5a2.5 2.5 0 0 0-2.5 2.5v12.5c0 1.38 1.12 2.5 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5V4.5a2.5 2.5 0 0 0-2.5-2.5h-.5Z" />
            </svg>
            <span>Add to Calendar</span>
          </button>
        </div>
      </div>
    </div>
  </div>
)}

{activeDivision === 'Men' && (
  <div className="space-y-8">
    {/* Men's Match Card 1 */}
    <div className="bg-white rounded-lg shadow-lg">

      {/* 🖼 Full-width Image Section with Overlay + Logos + Text */}
      <div className="relative w-full">
        {/* Base Image */}
        <img
          src="/m2.png"
          alt="Men's Game 1"
          className="w-full h-auto object-contain rounded-t-lg"
        />

        {/* 🔹 Overlay Image Layer */}
        <img
          src="/matchday2.png"   // ← replace with your overlay image path
          alt="Overlay Graphic"
          className="absolute inset-0 w-full h-full object-contain opacity-80 pointer-events-none"
        />

        {/* 🔹 Logos + Matchup Text Layer */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <div className="flex items-center justify-center space-x-4">
            {/* Left Team Logo */}
            <img
              src="/team7.png"
              alt="Dragons Logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />

            {/* Matchup Text */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg uppercase">
              Dragons <span className="text-[#C90F0F]">vs</span> SPartans
            </h2>

            {/* Right Team Logo */}
            <img
              src="team9.png"
              alt="sparta Logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
          </div>

        
      
        </div>
      </div>

      {/* Content Section: Match Details and Buttons */}
      <div className="flex justify-between items-end p-3">
        {/* Match Day Info */}
        <div className="text-left text-xs text-gray-700 font-semibold">
          <p className="text-sm text-gray-900">MATCH DAY 4</p>
          <p>SAT, 15/10</p>
          <p>11:50 AM WAT</p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-2">
          {/* Get Ticket */}
          <button
            className="flex items-center space-x-1 py-2 px-3 rounded-md text-white font-medium text-sm transition duration-300"
            style={{ backgroundColor: '#012752', border: '1px solid #012752' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path fillRule="evenodd" d="M.5 9.5a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-18a.5.5 0 0 1-.5-.5v-2ZM19 14h-1.5a.5.5 0 0 1-.5-.5V12h-13v1.5a.5.5 0 0 1-.5.5H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.5a.5.5 0 0 1 .5.5V8h13V6.5a.5.5 0 0 1 .5-.5H19a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1Z" clipRule="evenodd" />
            </svg>
            <span>Get Ticket</span>
          </button>

          {/* Add to Calendar */}
          <button
            className="flex items-center space-x-1 py-2 px-3 rounded-md font-medium text-sm transition duration-300"
            style={{ backgroundColor: 'white', color: '#012752', border: '1px solid #012752' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#012752" className="w-4 h-4">
              <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-1.5ZM3.75 14.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5ZM16.25 7a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-1.5ZM14.25 14.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5ZM8.5 7.75a.75.75 0 0 0 .75.75h2.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v1.5Z" clipRule="evenodd" />
              <path d="M12.75 2a.75.75 0 0 0-.75.75V4h-4V2.75a.75.75 0 0 0-.75-.75h-.5a2.5 2.5 0 0 0-2.5 2.5v12.5c0 1.38 1.12 2.5 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5V4.5a2.5 2.5 0 0 0-2.5-2.5h-.5Z" />
            </svg>
            <span>Add to Calendar</span>
          </button>
        </div>
      </div>
    </div>
  </div>
)}




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
    
         {/* 3. Footer */}
         <Footer />
         </>
  );
}