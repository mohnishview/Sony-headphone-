import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Sony WH-1000XM6 | Silence, perfected",
  description: "Experience the ultra-premium Sony WH-1000XM6 noise-cancelling headphones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#050505] text-white`}>
        {children}
      </body>
    </html>
  );
}
