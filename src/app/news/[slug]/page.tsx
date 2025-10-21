import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

// 🧱 Sanity image builder
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

interface NewsDetailPageProps {
  params: { slug: string };
}

// ⚙️ Pre-render all possible slugs
export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] = await client.fetch(`
    *[_type == "news" && defined(slug.current)]{
      slug
    }
  `);

  return slugs.map((item) => ({
    slug: item.slug.current,
  }));
}

// 📰 Main Page Component
export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const article = await client.fetch(
    `
    *[_type == "news" && slug.current == $slug][0]{
      title,
      mainImage,
      publishedAt,
      content
    }
  `,
    { slug: params.slug }
  );

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-700 bg-white">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p>Sorry, we couldn’t find that news article.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-[#292929]">
      {/* ✅ Navbar */}
      <Navbar linkTextColor="text-black" />

      {/* 📰 Header */}
      <section className="w-full  pt-40 pb-8 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full px-6 md:px-12 text-center">
          <h1
            className="text-4xl md:text-6xl font-extrabold text-center leading-tight mb-4"
            style={{
              color: "#012752",
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            {article.title}
          </h1>
          <p className="text-sm text-gray-500">
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
        </div>

        {/* ✅ Main Image */}
        {article.mainImage && (
          <div className="max-w-6xl w-full h-[500px] relative overflow-hidden mb-1">
            <Image
              src={urlFor(article.mainImage).width(1200).height(600).url()}
              alt={article.title}
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
            />
          </div>
        )}
      </section>

      {/* 🧾 Main Content */}
      <main className="max-w-4xl mx-auto py-8 px-6 md:px-12">
        {/* 🪶 Render PortableText */}
        {article.content ? (
          <div
            className="prose prose-lg max-w-none text-justify"
            style={{
              color: "#292929",
              fontFamily: "DM Sans, sans-serif",
              fontSize: "20px",
              lineHeight: "32px",
            }}
          >
            <PortableText value={article.content} />
          </div>
        ) : (
          <p className="text-gray-600 italic">No content available.</p>
        )}

        {/* ⚡ Extra Sections */}
        <div className="mt-20 space-y-20">
          {/* 🧩 Section 1 */}
          <section>
            <h2
              className="text-3xl font-bold mb-6 text-center"
              style={{
                color: "#012752",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              Fresh Faces, Fresh Energy
            </h2>
            <div className="relative w-full h-[400px] mb-3 rounded-lg overflow-hidden">
              <Image
                src="/rookieimg.png"
                alt="Inside the Locker Room"
                fill
                className="object-cover"
              />
            </div>
            <p
              className="text-sm text-gray-500 text-center mb-8 italic"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Photo by: Jide Ajala / Sportsblog
            </p>
            <p className="text-lg leading-relaxed text-justify">
              Off Szn’s roster looks different this season, and fans have
              noticed. Instead of easing into the league quietly, their rookies
              have stepped up from day one. Whether it’s sharp route running,
              fearless defense, or quick decision-making under pressure, the
              team’s newcomers are showing confidence beyond their years.
            </p>
          </section>

          {/* 🧩 Section 2 */}
          <section>
            <h2
              className="text-3xl font-bold mb-6 text-center"
              style={{
                color: "#012752",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              Early Impact
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              Analysts predicted this would be a rebuilding year, but no one
              expected such quick chemistry. During the preseason, the rookies
              contributed in crucial moments — helping the team secure three
              straight wins. It’s still early, but the signs are promising.
            </p>
          </section>

          {/* 🧩 Section 3 */}
          <section>
            <h2
              className="text-3xl font-bold mb-6 text-center"
              style={{
                color: "#012752",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              Challenges Ahead
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              No journey is without hurdles. Off Szn’s young squad faces
              pressure to maintain consistency and avoid fatigue. Their next few
              fixtures will test their resilience — especially against
              experienced teams known for punishing rookie mistakes.
            </p>
          </section>

          {/* 🧩 Section 4 */}
          <section>
            <h2
              className="text-3xl font-bold mb-6 text-center"
              style={{
                color: "#012752",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              The Locker Room Vibe
            </h2>
            <div className="relative w-full h-[400px] mb-3 rounded-lg overflow-hidden">
              <Image
                src="/lockerroom.png"
                alt="Locker Room Energy"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-gray-500 text-center mb-8 italic">
              Photo by: Ayo Dada / Off Szn Media
            </p>
            <p className="text-lg leading-relaxed text-justify">
              Team captain Marcus Ibeh said, “These young guys bring energy we
              haven’t felt in years. They keep us older players on our toes.
              It’s like a new spark in the locker room.”
            </p>
          </section>

          {/* 🧩 Section 5 */}
          <section>
            <h2
              className="text-3xl font-bold mb-6 text-center"
              style={{
                color: "#012752",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              What’s Next
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              The next matchup will reveal how well this mix of youthful
              enthusiasm and veteran leadership holds up under real pressure.
              Whether win or lose, one thing’s clear — Off Szn’s new era is here
              to stay.
            </p>
          </section>
        </div>
      </main>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
