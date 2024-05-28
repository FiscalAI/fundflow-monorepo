import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBarComponent } from "@/components/navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fiscal AI",
  description:
    "Fiscal AI is modern monry management platform powered by AI. Track expenses, optimize investments, and reach your goals—all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(" ", inter.className)}>
        <NavBarComponent />
        {children}
      </body>
    </html>
  );
}
