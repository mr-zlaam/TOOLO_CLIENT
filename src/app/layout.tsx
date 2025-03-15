import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/custom.css";
import "./globals.css";
import React from "react";
import { SITE_NAME } from "@/contants/varaibles.constant";

const fontVariable = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"]
});

const fontStyle = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME}`
  },
  description: "Toolo.online is a plate form which has everyday online tools to make your life easier",
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
