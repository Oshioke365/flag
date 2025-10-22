import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Trending from "./components/Trending";
import Upcoming from "./components/upcoming";
import Academy from "./components/Academy";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen text-white overflow-hidden flex flex-col items-center">
      {/* Fixed navbar */}
      <Navbar />

      {/* 👇 Add top padding equal to the navbar height */}
      <div className="w-full flex flex-col items-center pt-[142px]">
        <HeroSection />
        <Trending />
        <Upcoming />
        <Academy />
        <Footer />
      </div>
    </main>
  );
}
