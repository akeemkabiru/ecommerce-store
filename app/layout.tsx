"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${
          isDarkMode
            ? "bg-black text-white"
            : "bg-white text-black transition-colors duration-700"
        }`}
      >
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`${
            isDarkMode ? "bg-white text-black" : "bg-black text-white"
          } border rounded-lg p-4`}
        >
          {isDarkMode ? "Light☀️" : "Dark🌙"}
        </button>
        {children}
      </body>
    </html>
  );
}
