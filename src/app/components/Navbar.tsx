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
  const textColorClass = linkTextColor || "text-white";
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
      <div className="w-full max-w-[1440px] px-6 sm:px-[80px] md:px-[125px] py-[24px] flex justify-center items-center">
        <div className="flex items-center justify-between font-bold tracking-wide text-sm w-full sm:w-[397px] h-auto sm:h-[94px] gap-4 sm:gap-[19px]">
          
          {/* Left links */}
          <div className="hidden sm:flex items-center justify-center gap-[24px]">
            <Link href="#" className={linkBaseClass}>
              WATCH
            </Link>
            <Link href="/games" className={linkBaseClass}>
              GAMES
            </Link>
          </div>

          {/* ✅ Center logo (clickable) */}
          <div className="flex justify-center items-center flex-1">
            <Link href="/" aria-label="Go to homepage">
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
            </Link>
          </div>

          {/* Right links */}
          <div className="hidden sm:flex items-center justify-center gap-[24px]">
            <Link href="/teams" className={linkBaseClass}>
              TEAMS
            </Link>
            <Link href="/news" className={linkBaseClass}>
              NEWS
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
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
