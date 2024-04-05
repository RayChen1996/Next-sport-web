import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Layout/Basic/Navbar";
import Footer from "./components/Layout/Basic/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "運動揪團網",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
