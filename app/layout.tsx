import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAdsense from "@/components/Adesense/GoogleAdsense";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EV Electric Vehicle Charging | Empowering Mobility through Electric Vehicles",
  description: "EV Electric Vehicle Charging | Empowering Mobility through Electric Vehicles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children} <GoogleAdsense /></body>
    </html>
  );
}
