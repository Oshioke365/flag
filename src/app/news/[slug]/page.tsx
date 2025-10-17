import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import Image from "next/image";

interface NewsDetailPageProps {
  params: {
    slug: string;
  };
}

const newsArticles = [
  {
    slug: "top-plays-week",
    title: "Rookies Rising: New Faces Making an Impact Across the CFFL",
    image: "/news7.png",
    content: `The Community Flag Football League (CFFL) is no stranger to standout performances, but this season, one team’s rookies are stealing the spotlight. Lagos Lions came into the year with fresh faces, bold energy, and a point to prove — and their young guns are already changing the game.
      
    `,
  },
];

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const article = newsArticles.find((item) => item.slug === params.slug);

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-700 bg-white">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p>Sorry, we couldn’t find that news article.</p>
      </div>
    );
  }

  return (
    <>
      {/* ✅ White background across the entire page */}
      <div className="bg-white min-h-screen text-[#292929]">
        {/* Navbar */}
        <Navbar linkTextColor="text-black" />

        {/* Article Header Section */}
        <section className="w-full pt-30 pb-8 flex flex-col items-center justify-center">
          {/* Title and Date */}
          <div className="max-w-4xl w-full px-6 md:px-12 text-center">
            <h1
              className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-4"
              style={{
                color: "#012752",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              {article.title}
            </h1>
        
          </div>

          {/* Article Image */}
          <div className="max-w-6xl w-full h-[500px] relative overflow-hidden mb-1">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
            />
          </div>
        </section>

        {/* ✅ Article Content */}
        <main className="max-w-4xl mx-auto py-8 px-6 md:px-12">
          <p
            className="text-lg leading-relaxed whitespace-pre-line text-justify"
            style={{
              color: "#292929",
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "32px",
            }}
          >
            {article.content}
          </p>

          {/* Extra Section */}
<div className="mt-12">
  {/* Sub-title */}
  <h2
    className="text-3xl font-bold mb-6 text-center"
    style={{
      color: '#012752',
      fontFamily: 'DM Sans, sans-serif',
    }}
  >
    Fresh Faces, Fresh Energy
  </h2>

  {/* Image */}
  <div className="relative w-full h-[400px] mb-3 rounded-lg overflow-hidden">
    <Image
      src="/rookieimg.png" // 👈 replace with your own image (e.g. /news-extra1.png)
      alt="Inside the Locker Room"
      fill
      className="object-cover"
    />
  </div>

  {/* Photo Credit */}
  <p
    className="text-sm text-gray-500 text-center mb-8 italic"
    style={{
      fontFamily: 'DM Sans, sans-serif',
    }}
  >
    Photo by: Jide Ajala / Sportsblog
  </p>

  {/* Paragraph */}
  <p
    className="text-lg leading-relaxed text-justify"
    style={{
      color: '#292929',
      fontFamily: 'DM Sans, sans-serif',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '32px',
    }}
  >
    Off Szn’s roster looks different this season, and fans have noticed. Instead of easing into the league quietly, their rookies have stepped up from day one. Whether it’s sharp route running, fearless defense, or quick decision-making under pressure, the team’s newcomers are showing confidence beyond their years.
<br /><br /> It isn’t just about skill — it’s about attitude. These rookies play with urgency, hustle on every down, and bring an infectious energy that spreads across the entire roster.
  </p>
</div>


{/* Extra Section */}
<div className="mt-12">
  {/* Sub-title */}
  <h2
    className="text-3xl font-bold mb-6 text-center"
    style={{
      color: '#012752',
      fontFamily: 'DM Sans, sans-serif',
    }}
  >
    Early Impact on the Field
  </h2>

  {/* Image */}
  <div className="relative w-full h-[400px] mb-3 rounded-lg overflow-hidden">
    <Image
      src="/earlyimpactimg.png" // 👈 replace with your own image (e.g. /news-extra1.png)
      alt="Inside the Locker Room"
      fill
      className="object-cover"
    />
  </div>

  {/* Photo Credit */}
  <p
    className="text-sm text-gray-500 text-center mb-8 italic"
    style={{
      fontFamily: 'DM Sans, sans-serif',
    }}
  >
    Photo by: Jide Ajala / Sportsblog
  </p>

  {/* Paragraph */}
  <p
    className="text-lg leading-relaxed text-justify"
    style={{
      color: '#292929',
      fontFamily: 'DM Sans, sans-serif',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '32px',
    }}
  >
  Game Day 2 at Showtime Arena proved one thing: Lagos Lions’ rookies belong here. Big catches, clutch stops, and explosive plays reminded everyone that they’re not waiting for “next season” — they’re making their mark now.
 <br /><br />Fans are buzzing about their breakout moments: the wideout who turned a short pass into a touchdown, the defender who broke up a crucial drive, and the quarterback rookie who showed poise in the red zone. Each play adds fuel to Lagos Lions’ momentum.
  </p>
</div>



{/* Extra Section */}
<div className="mt-12">
  {/* Sub-title */}
  <h2
    className="text-3xl font-bold mb-6 text-center"
    style={{
      color: '#012752',
      fontFamily: 'DM Sans, sans-serif',
    }}
  >
    Building Chemistry with the Team
  </h2>




  {/* Paragraph */}
  <p
    className="text-lg leading-relaxed text-justify"
    style={{
      color: '#292929',
      fontFamily: 'DM Sans, sans-serif',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '32px',
    }}
  >
   A team is only as strong as its chemistry, and Lagos Lions seems to be blending veterans with rookies seamlessly. Coaches have praised the newcomers’ work ethic, while veteran players are rallying around them, helping accelerate their growth.
 <br /><br />The trust is showing on the field — rookies are getting more snaps, and teammates aren’t hesitating to look their way in big moments. That kind of bond is rare this early in a season, and it could be the secret weapon that carries Lagos Lions forward.
  </p>
</div>

{/* Extra Section */}
<div className="mt-12">
  {/* Sub-title */}
  <h2
    className="text-3xl font-bold mb-6 text-center"
    style={{
      color: '#012752',
      fontFamily: 'DM Sans, sans-serif',
    }}
  >
    Challenges Ahead
  </h2>



  {/* Paragraph */}
  <p
    className="text-lg leading-relaxed text-justify"
    style={{
      color: '#292929',
      fontFamily: 'DM Sans, sans-serif',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '32px',
    }}
  >Of course, every rookie faces hurdles. Adjusting to the speed and strategy of the CFFL takes time, and Lagos Lions’ young talent will be tested in upcoming matchups against more seasoned teams like the Titans and Warriors. Mistakes will happen — missed assignments, dropped passes, or misreads — but the real story is how quickly these players learn and bounce back.
<br /><br />Their grit will be measured not just in highlight plays but in how they respond when the pressure is on.
  </p>
</div>



{/* Extra Section */}
<div className="mt-12">
  {/* Sub-title */}
  <h2
    className="text-3xl font-bold mb-6 text-center"
    style={{
      color: '#012752',
      fontFamily: 'DM Sans, sans-serif',
    }}
  >
    The Bigger Picture
  </h2>



  {/* Paragraph */}
  <p
    className="text-lg leading-relaxed text-justify"
    style={{
      color: '#292929',
      fontFamily: 'DM Sans, sans-serif',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '32px',
    }}
  >
Lagos Lions’ rookies aren’t just filling roles — they’re rewriting expectations. Their energy has reignited the fan base and added new dimensions to the team’s game. If they keep trending upward, Off Szn could move from underdog to serious contender before season’s end.
<br /> <br />One thing’s certain: the CFFL is watching. And so are the fans. Are we witnessing the rise of the league’s next superstars?
<br /><br />Don’t miss the next chapter. Catch Lagos Lions in action on Game Day 3 — because this young squad is just getting started.
  </p>
</div>

        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
