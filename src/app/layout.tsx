import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";
import { NavBar } from "@/components/main-components/NavBar";
import AuthStateLoader from "@/redux/AuthStateLoader";
import { Footer } from "@/components/sub-components/Footer";

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
      <body
        className={`${inter.className} relative max-w-[1900px]  items-center mx-auto `}
        style={{ overflowX: "hidden" }}
      >
        <ReduxProvider>
          <AuthStateLoader>
            <NavBar />
            {children}
            <Footer />
          </AuthStateLoader>
        </ReduxProvider>
      </body>
    </html>
  );
}
