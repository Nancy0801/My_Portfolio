import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"; 
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] }); 

export const metadata: Metadata = {
  title: "Nancy's Portfolio",
  description: "Developed by Nancy",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
