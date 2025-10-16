"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link"; // For making the logos clickable

// --- 1. Team Data (Names removed) ---
const teams = [
  { logoSrc: "/team4.png", link: "/teams/titans", altText: "Titans Logo" },
  { logoSrc: "/team3.png", link: "/teams/wolverines", altText: "Wolverines Logo" },
  { logoSrc: "/team2.png", link: "/teams/lions", altText: "Lions Logo" },
  { logoSrc: "/team6.png", link: "/teams/eagles", altText: "Eagles Logo" },
  { logoSrc: "/team7.png", link: "/teams/sharks", altText: "Sharks Logo" },
  { logoSrc: "/team5.png", link: "/teams/bears", altText: "Bears Logo" },
  { logoSrc: "/team1.png", link: "/teams/raptors", altText: "Raptors Logo" },
  { logoSrc: "/team9.png", link: "/teams/hawks", altText: "Hawks Logo" },
];

export default function TeamsPage() {
  return (
    <>
      {/* Navbar at the top */}
      <Navbar linkTextColor="text-black" />

      {/* Page content */}
      <main className="min-h-screen bg-white text-gray-800 pt-[160px] px-6 md:px-10">
        
        {/* Teams Header (Optional - for context) */}
        <h1 className="text-3xl font-bold text-[#002060] mb-12 text-center uppercase tracking-wider">
          Select Your Team
        </h1>

        {/* 2. Team Logo Grid */}
        <div className="max-w-4xl mx-auto">
          {/* Responsive grid: 2 columns on mobile, 4 columns on medium screens and up */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            
            {teams.map((team, index) => (
              <Link 
                // Using the index for the key since the name property was removed. 
                // NOTE: Using a unique ID is generally better if available.
                key={index} 
                href={team.link} 
                className="flex flex-col items-center justify-start group cursor-pointer p-4 rounded-lg transition duration-200 hover:bg-gray-50"
              >
                <div className="w-full h-auto max-w-[150px] relative transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={team.logoSrc}
                    // Use the altText property for accessibility instead of a name property
                    alt={team.altText} 
                    width={150}
                    height={150}
                    className="w-full h-auto object-contain"
                  />
                </div>
                
                {/* ❌ REMOVED: Team Name below the logo */}
                {/* <span className="mt-3 text-lg font-semibold text-gray-800 group-hover:text-[#C90F0F] transition duration-200">
                    {team.name}
                </span> */}
              </Link>
            ))}
          </div>
        </div>
        
      </main>
      
      {/* 3. Footer */}
      <Footer />
    </>
  );
}