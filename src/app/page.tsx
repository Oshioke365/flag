import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Trending from "./components/Trending";
import Upcoming from "./components/upcoming";
import Academy from "./components/Academy";
import AboutSection from "./components/AboutSection";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <div className="w-full bg-black text-white">
      <Navbar />
      <HeroSection />
      <Trending />
      <Upcoming />
      <Academy />      {/* Make sure Academy is ABOVE AboutSection and Footer */}
      <AboutSection /> {/* White bg, black text */}
      <Footer />       {/* Footer ALWAYS LAST */}
    </div>
  );
}