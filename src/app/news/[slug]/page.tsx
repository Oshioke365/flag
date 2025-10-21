import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";

// 🧱 Sanity image builder
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

// ✅ Use Next.js's built-in PageProps structure directly
type PageProps = {
  params: {
    slug: string;
  };
};

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
export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = params;

  const article = await client.fetch(
    `
    *[_type == "news" && slug.current == $slug][0]{
      title,
      mainImage,
      publishedAt,
      content
    }
  `,
    { slug }
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
      <section className="w-full pt-40 pb-8 flex flex-col items-center justify-center">
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
        {/* ... your sections here ... */}
      </main>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
