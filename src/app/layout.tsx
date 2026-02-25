import type { Metadata } from "next";
import { Ma_Shan_Zheng } from "next/font/google";
import "./globals.css";

const maShanZheng = Ma_Shan_Zheng({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-brush"
});

export const metadata: Metadata = {
  title: "高句丽纹样库 | Koguryo Mural & Pattern Digital Library",
  description:
    "An immersive museum-style digital library for Koguryo murals and patterns."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`dark ${maShanZheng.variable}`}>
      <body className="min-h-screen bg-museum-bg font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}

