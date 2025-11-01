import { defineField, defineType } from "sanity";

export default defineType({
  name: "news",
  title: "News Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      description: "Name of the article author",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }], // You can replace this with 'blockContent' if you use a custom type
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      description: "Date and time when this article was published",
    }),
  ],

  // 👇 Add sorting in the Studio (e.g. show latest news first)
  orderings: [
    {
      title: "Publish Date (Newest first)",
      name: "publishDateDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Publish Date (Oldest first)",
      name: "publishDateAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
  ],

  // 👇 Preview setup for better display in Sanity Studio
  preview: {
    select: {
      title: "title",
      author: "author",
      media: "mainImage",
      date: "publishedAt",
    },
    prepare({ title, author, media, date }) {
      return {
        title,
        subtitle: author
          ? `${author} — ${new Date(date).toLocaleDateString()}`
          : new Date(date).toLocaleDateString(),
        media,
      };
    },
  },
});
