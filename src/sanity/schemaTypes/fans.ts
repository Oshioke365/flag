import { defineField, defineType } from "sanity";

export default defineType({
  name: "fans",
  title: "Meet the Fans",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Fan Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls the order images appear on the website.",
    }),
  ],
});
