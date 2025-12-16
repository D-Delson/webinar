import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import AppToast from "@/components/common/AppToast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turais",
  description:
    "Transform your business operations with our proven strategies and expert guidance. We make it happen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
      <AppToast />
    </html>
  );
}
