
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FavoriteProvider } from "@/contexts/FavoriteContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liber-tad",
  description: "Open source books for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <FavoriteProvider>
        <body className={`${inter.className} bg-background`}>{children}</body>
      </FavoriteProvider>
    </html>
  );
}
