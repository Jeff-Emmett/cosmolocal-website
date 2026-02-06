import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cosmolocal Foundation",
  description:
    "Bridging cosmic perspective with local action. The Cosmolocal Foundation supports projects at the intersection of global coordination and community resilience.",
  openGraph: {
    title: "Cosmolocal Foundation",
    description:
      "Bridging cosmic perspective with local action.",
    url: "https://cosmolocal.world",
    siteName: "Cosmolocal Foundation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
