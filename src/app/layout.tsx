import type { Metadata } from "next";
import { Manrope } from "next/font/google"; // Changed from Poppins to Manrope
import "../styles/custom.css";
import "./globals.css";
import React from "react";
import { SITE_NAME } from "@/contants/variables.constant";

const fontVariable = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Manrope doesn't have 100/900
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap"
});

const fontStyle = Manrope({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME}`
  },
  description: "Toolo.online is a platform that provides everyday online tools to make your life easier",
  keywords: ["Tools", "convert", "documents", "pdf", "docx", "Toolo"]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body className={`${fontVariable.variable} ${fontStyle.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
