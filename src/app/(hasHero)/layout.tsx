import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/assets/css/globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { twMerge } from "tailwind-merge";
import { ThemeProvider } from "@/components/ThemeProvider";
import HeroSection from "@/components/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "GennYoon Blog",
  description: "Generated by create next app",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={twMerge("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" storageKey="blog-ui-theme" enableSystem disableTransitionOnChange>
          <Header />

          <main className="flex flex-col items-center w-full max-w-[1400px] ml-auto mr-auto pt-28">
            <HeroSection />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
