import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react"; // arrow icon

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      image: "/news1.png",
      date: "17 Sep, 2025",
      title: "Game Day 2 At Showtime Arena: Outlaws Brings The Heat",
      excerpt:
        "Recap of the action-packed matchups at Showtime Arena, spotlighting Off-San’s performance, and the thrilling finish that had fans on their feet.",
      link: "/news/game-day-2",
    },
    {
      id: 2,
      image: "/news2.png",
      date: "17 Sep, 2025",
      title: "Mavericks On The Move: Rising Stars Shaking Up The CFFL",
      excerpt:
        "Spotlight on the Mavericks' younger players making waves, highlighting their bold style of play and unpredictable game plans.",
      link: "/news/mavericks-rising",
    },
    {
      id: 3,
      image: "/news3.png",
      date: "02 Aug, 2025",
      title: "Clash of the Titans: How the Titans Keep Dominating the League",
      excerpt:
        "A feature story breaking down the Titans’ strategies, key players, and what makes them the team to beat this season.",
      link: "/news/titans-dominating",
    },
    {
      id: 4,
      image: "/news4.png",
      date: "25 Jul, 2025",
      title: "Rising Rivalries: The Battle Between Hawks and Lions",
      excerpt:
        "An inside look at the long-standing rivalry heating up again this season as two powerhouse teams face off.",
      link: "/news/hawks-vs-lions",
    },
    {
      id: 5,
      image: "/news5.png",
      date: "19 Jul, 2025",
      title: "Game Day Highlights: Defenders Show Unstoppable Form",
      excerpt:
        "The Defenders’ rock-solid defense and teamwork delivered another unforgettable performance for fans.",
      link: "/news/defenders-dominance",
    },
    {
      id: 6,
      image: "/news6.png",
      date: "10 Jul, 2025",
      title: "Top Plays Of The Week: Touchdowns And Turnovers",
      excerpt:
        "A look at the most electrifying plays from this week’s games — from game-winning touchdowns to clutch turnovers.",
      link: "/news/top-plays-week",
    },
    {
      id: 7,
      image: "/news7.png",
      date: "05 Jul, 2025",
      title: "CFFL Coaches Share Secrets To Success",
      excerpt:
        "Exclusive interviews with top coaches revealing strategies, motivation techniques, and team-building insights.",
      link: "/news/coaches-secrets",
    },
    {
      id: 8,
      image: "/news8.png",
      date: "01 Jul, 2025",
      title: "Fans Bring The Energy: How Support Powers The League",
      excerpt:
        "The electric fan culture behind the CFFL and how supporters play a huge role in the players’ performance.",
      link: "/news/fans-energy",
    },
    {
      id: 9,
      image: "/news9.png",
      date: "25 Jun, 2025",
      title: "Rookie Watch: The New Faces Making An Impact",
      excerpt:
        "Meet the rookies turning heads and proving their worth on the big stage this season.",
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
        <div className="absolute inset-0 bg-[#C90F0F] opacity-70"></div>

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
