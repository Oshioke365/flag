import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react"; // arrow icon

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      image: "/news2.png",
      date: "17 Sep, 2025",
      title: "Game Day 2 At Showtime Arena: Outlaws Brings The Heat",
      excerpt:
        "Recap of the action-packed matchups at Showtime Arena, spotlighting Off-San’s performance, and the thrilling finish that had fans on their feet.",
      link: "/news/game-day-2",
    },
    {
      id: 2,
      image: "/news3.png",
      date: "17 Sep, 2025",
      title: "Mavericks On The Move: Rising Stars Shaking Up The CFFL",
      excerpt:
        "Spotlight on the Mavericks' younger players making waves, highlighting their bold style of play and unpredictable game plans.",
      link: "/news/mavericks-rising",
    },
    {
      id: 3,
      image: "/news4.png",
      date: "02 Aug, 2025",
      title: "Clash of the Titans: How the Titans Keep Dominating the League",
      excerpt:
        "A feature story breaking down the Titans’ strategies, key players, and what makes them the team to beat this season.",
      link: "/news/titans-dominating",
    },
    {
      id: 4,
      image: "/news5.png",
      date: "25 Jul, 2025",
      title: "Lions’ Grit: The Road to Redemption After a Tough Season",
      excerpt:
        "A narrative on how the Lagos Lions are bouncing back from past setbacks with new energy, training, and leadership..",
      link: "/news/hawks-vs-lions",
    },
    {
      id: 5,
      image: "/news6.png",
      date: "19 Jul, 2025",
      title: "Family. Friends. Football.",
      excerpt:
        "CFFL fans are proof the league is bigger than the scoreboard.",
      link: "/news/defenders-dominance",
    },
    {
      id: 6,
      image: "/news7.png",
      date: "10 Jul, 2025",
      title: "Rookies Rising: New Faces Making an Impact Across the CFFL",
      excerpt:
        "A spotlight on first-year players across the Titans, Warriors, Mavericks, and Off Szn who are already making headlines.",
      link: "/news/top-plays-week",
    },
    {
      id: 7,
      image: "/news8.png",
      date: "05 Jul, 2025",
      title: "Off Szn Fan Zone: Showtime Arena Turns Into a Community Festival",
      excerpt:
        "Coverage of the gameday atmosphere, from tailgates to halftime entertainment, showing how fans bring the league to life.",
      link: "/news/coaches-secrets",
    },
    {
      id: 8,
      image: "/news9.png",
      date: "01 Jul, 2025",
      title: "Double Glory: Outlaws’ Star Shines With Two Trophies",
      excerpt:
        "One player. Two trophies. The Outlaws’ star just lit up the CFFL with back-to-back awards, proving he’s not only a game-changer but a history-maker.",
      link: "/news/fans-energy",
    },
    {
      id: 9,
      image: "/news10.png",
      date: "25 Jun, 2025",
      title: "Titans vs. Wolverines: Rivalry Renewed Under the Lights",
      excerpt:
        "A preview of their highly anticipated matchup, with storylines, predictions, and key players to watch.",
      link: "/news/rookie-watch",
    },
  ];

  return (
    <>
      {/* ✅ Navbar */}
      <Navbar linkTextColor="text-white" />

      {/* 🖼 Hero Section with red overlay */}
      <section className="relative w-full h-[400px] flex items-center justify-center text-white overflow-hidden">
        {/* Background logo */}
        <Image
          src="/logo.png"
          alt="CFFL Logo Background"
          fill
          className="object-contain opacity-10"
          priority
        />
        {/* Red overlay */}
        <div className="absolute inset-0 bg-[#FF0923] opacity-70"></div>

        <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold uppercase drop-shadow-lg">
          Trending News
        </h1>
      </section>

      {/* 📰 News Grid */}
      <main className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {newsArticles.map((article) => (
              <Link
                key={article.id}
                href={article.link}
                className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-60">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#012752] transition duration-300">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* 🔽 Load More Button (centered, no background) */}
          <div className="text-center mt-12">
            <button className="flex items-center justify-center gap-2 mx-auto text-[#012752] font-semibold hover:opacity-70 transition">
              Load More <ChevronDown className="w-5 h-5 text-[#012752]" />
            </button>
          </div>
        </div>
      </main>

      {/* ✅ Footer */}
      <Footer />
    </>
  );
}
