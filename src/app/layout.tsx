import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import AppHeader from "@/app/_components/app-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Project",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="h-dvh bg-white w-full overflow-hidden flex flex-col">
          <AppHeader />
          <div className="w-full flex flex-grow overflow-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
