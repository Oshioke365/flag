// @ts-nocheck
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

// ✅ FIXED: Correct Next.js props type
type Props = {
  params: { slug: string };
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
export default async function NewsDetailPage({ params }: Props) {
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
}