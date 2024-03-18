import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/main-components/NavBar";
import { Footer } from "@/components/main-components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gradient-to-r from-green-300 to-blue-300 h-full">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
