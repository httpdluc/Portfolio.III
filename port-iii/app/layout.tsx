import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ResponsiveNav from "@/components/Home/NavBar/ResponsiveNav";
import "./globals.css";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Inter({
  variable: '--font-Poppins',
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets:['latin'],
})

export const metadata: Metadata = {
  title: "Portfolio.III | Next.js 16",
  description: "portfolio desenvolvido com Next.js 16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${font.className} antialiased bg-[#0d0d1f]`}>
        <ResponsiveNav/>
        {children}
        <ScrollToTop/>
      </body>
    </html>
  );
}
