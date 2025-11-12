import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: "City guide Львова",
    description: "City guide Львова",
    openGraph: {
        title: "City guide Львова",
        description: "City guide Львова",
        url: "https://city-guide-psi.vercel.app/",
        siteName: "City guide Львова",
        images: [
            {
                url: "https://city-guide-psi.vercel.app/preview.png",
                width: 1200,
                height: 630,
                alt: "City guide preview",
            },
        ],
        locale: "uk_UA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "City guide Львова",
        description: "City guide Львова",
        images: ["https://city-guide-psi.vercel.app/preview.png"],
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
      <Header />
        {children}
      </body>
    </html>
  );
}
