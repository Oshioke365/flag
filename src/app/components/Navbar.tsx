"use client";

import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  /** Optional prop to change link text color (e.g. "text-black") */
=======
  // Optional prop to override the default link text color (e.g., "text-black")
>>>>>>> parent of 373efe3 (FONT CHANGEd)
=======
  // Optional prop to override the default link text color (e.g., "text-black")
>>>>>>> parent of 373efe3 (FONT CHANGEd)
=======
  // Optional prop to override the default link text color (e.g., "text-black")
>>>>>>> parent of 373efe3 (FONT CHANGEd)
  linkTextColor?: string;
}

export default function Navbar({ linkTextColor }: NavbarProps) {
  const textColorClass = linkTextColor || "text-white";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const linkBaseClass = `hover:text-[#C90F0F] transition-colors duration-200 text-xs sm:text-sm ${textColorClass} font-machine`;

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 flex justify-center font-machine
        bg-[rgba(255,255,255,0.16)] backdrop-blur-[6px]
      `}
=======
  const linkBaseClass = `hover:text-[#C90F0F] transition text-xs sm:text-sm ${textColorClass}`;

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 flex justify-center"
>>>>>>> parent of 373efe3 (FONT CHANGEd)
      style={{
        height: "142px",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.16) 14.29%, rgba(255,255,255,0) 100%)",
=======
  const linkBaseClass = `hover:text-[#C90F0F] transition text-xs sm:text-sm ${textColorClass}`;

  return (
    <nav
=======
  const linkBaseClass = `hover:text-[#C90F0F] transition text-xs sm:text-sm ${textColorClass}`;

  return (
    <nav
>>>>>>> parent of 373efe3 (FONT CHANGEd)
      className="fixed top-0 left-0 w-full z-50 flex justify-center"
      style={{
        height: "142px",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 14.29%, rgba(255, 255, 255, 0) 100%)",
        backdropFilter: "blur(6px)",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 373efe3 (FONT CHANGEd)
=======
>>>>>>> parent of 373efe3 (FONT CHANGEd)
=======
>>>>>>> parent of 373efe3 (FONT CHANGEd)
      }}
    >
      <div className="w-full max-w-[1440px] px-6 sm:px-[80px] md:px-[125px] py-6 flex justify-center items-center">
        <div className="flex items-center justify-between w-full sm:w-[397px] h-auto sm:h-[94px] gap-4 sm:gap-[19px] font-bold tracking-wide text-sm">
          
          {/* Left links */}
          <div className="hidden sm:flex items-center justify-center gap-[24px]">
            <Link href="#" className={linkBaseClass}>
              WATCH
            </Link>
            <Link href="/games" className={linkBaseClass}>
              GAMES
            </Link>
          </div>

          {/* Center logo */}
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
