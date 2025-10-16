"use client";

import Image from "next/image";
import Link from "next/link";

// 1. Define Props Interface
interface NavbarProps {
  // Optional prop to override the default link text color (e.g., "text-black")
  linkTextColor?: string;
}

// 2. Accept Props
export default function Navbar({ linkTextColor }: NavbarProps) {
  // 3. Determine the final link text color class, defaulting to white
  // Note: We removed the 'text-white' from the parent div and applied it here.
  const textColorClass = linkTextColor || 'text-white';
  
  // A combined class for all links (includes the dynamic color and hover)
  const linkBaseClass = `hover:text-[#C90F0F] transition text-xs sm:text-sm ${textColorClass}`;
  
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 flex justify-center"
      style={{
        height: "142px",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 14.29%, rgba(255, 255, 255, 0) 100%)",
        backdropFilter: "blur(0px)",
      }}
    >
      {/* Outer container */}
      <div className="w-full max-w-[1440px] px-6 sm:px-[80px] md:px-[125px] py-[24px] flex justify-center items-center">
        {/* Inner navbar content */}
        {/* We removed text-white from this div, as the color is now applied to individual links */}
        <div className="flex items-center justify-between font-bold tracking-wide text-sm w-full sm:w-[397px] h-auto sm:h-[94px] gap-4 sm:gap-[19px]">
          
          {/* Left links */}
          <div className="hidden sm:flex items-center justify-center gap-[24px]">
            <Link
              href="#"
              className={linkBaseClass} // 👈 Applied dynamic class
            >
              WATCH
            </Link>

            {/* GAMES link */}
            <Link
              href="/games"
              className={linkBaseClass} // 👈 Applied dynamic class
            >
              GAMES
            </Link>
          </div>

          {/* Center logo (responsive) */}
          <div className="flex justify-center items-center flex-1">
            <Image
              src="/logo1.png"
              alt="CFFL Logo"
              width={85}
              height={94}
              priority
              className="
                h-[60px] w-auto 
                sm:h-[70px] 
                md:h-[85px] 
                lg:h-[94px] 
                transition-all duration-300 ease-in-out
              "
            />
          </div>

          {/* Right links */}
          <div className="hidden sm:flex items-center justify-center gap-[24px]">
            <Link
              href="/TEAMS"
              className={linkBaseClass} // 👈 Applied dynamic class
            >
              TEAMS
            </Link>
            <Link
              href="#"
              className={linkBaseClass} // 👈 Applied dynamic class
            >
              NEWS
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            {/* The mobile button text remains white, as it's not a standard link */}
            <button
              className="text-white text-2xl focus:outline-none"
              aria-label="Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}