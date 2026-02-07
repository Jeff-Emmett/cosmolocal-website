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
    "The Cosmolocal Foundation empowers communities to build localized, regenerative economies connected through global knowledge-sharing, commons-based collaboration, and decentralized governance.",
  openGraph: {
    title: "Cosmolocal Foundation",
    description:
      "What is heavy should be local, and what is light should be global and shared.",
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
