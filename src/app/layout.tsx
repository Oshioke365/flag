import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CFFL - Building Africa's Flag Football Future",
  description: "Sport • Community • Impact - Africa’s Flag Football League",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">{children}</body>
    </html>
  );
}
