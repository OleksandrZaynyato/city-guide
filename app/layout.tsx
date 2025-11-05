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
    openGraph: {
        title: "City guide Львова",
        description: "City guide Львова",
        url: "https://city-guide-psi.vercel.app/",
        siteName: "Мій сайт",
        images: [
            {
                url: "https://www.davlermedia.com/wp-content/uploads/city-guide-square.png",
                width: 800,
                height: 600,
                alt: "Next.js SEO Preview",
            },
        ],
        locale: "uk_UA",
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
      <Header />
        {children}
      </body>
    </html>
  );
}
