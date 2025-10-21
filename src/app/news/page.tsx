import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { ChevronDown } from "lucide-react";
import { PortableText } from "@portabletext/react";
import LoadMoreButton from "@/app/components/LoadMoreButton";
import imageUrlBuilder from "@sanity/image-url";

// 🧱 Configure Sanity Image Builder
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

interface NewsArticle {
  _id: string;
  title: string;
  slug: { current: string };
  content?: any;
  mainImage?: any;
  publishedAt: string;
  order?: number;
}

// ✅ Server Component (async)
export default async function NewsPage() {
  // 🧩 Fetch news posts (sorted by "order" or by latest date)
  const newsArticles: NewsArticle[] = await client.fetch(`
    *[_type == "news"] | order(order asc, publishedAt asc) {
      _id,
      title,
      slug,
      content,
      mainImage,
      publishedAt,
      order
    }
  `);

  return (
    <>
      <Navbar linkTextColor="text-white" />

      {/* 🖼 Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/logo1.png"
          alt="CFFL Logo Background"
          fill
          className="object-contain opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-[#FF0923] opacity-70"></div>

        <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold uppercase drop-shadow-lg">
          Trending News
        </h1>
      </section>

      {/* 📰 News Grid */}
      <main className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {newsArticles.length === 0 ? (
            <p className="text-center text-gray-500">No news articles found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {newsArticles.map((article) => (
                <Link
                  key={article._id}
                  href={`/news/${article.slug?.current ?? ""}`}
                  className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* 🖼 Article Image */}
                  <div className="relative w-full h-60 bg-gray-200">
                    {article.mainImage ? (
                      <Image
                        src={urlFor(article.mainImage).width(600).height(400).url()}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                        No image
                      </div>
                    )}
                  </div>

                  {/* 🧾 Article Content */}
                  <div className="p-5">
                    <p className="text-xs text-gray-500 mb-2">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </p>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#012752] transition duration-300">
                      {article.title}
                    </h3>

                    {/* ✅ Show excerpt (first few lines of PortableText) */}
                    <div className="text-sm text-gray-600 line-clamp-3">
                      {article.content ? (
                        <PortableText value={article.content} />
                      ) : (
                        <p className="italic">No content yet.</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* 🔽 Load More Button */}
          <div className="text-center mt-12">
       <LoadMoreButton />

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
