import type { Metadata } from "next";
import { inter } from './fonts'
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My professional portfolio showcasing my work and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={cn(
        inter.variable,
        'font-sans',
        'bg-dark-950 text-white antialiased',
        'min-h-screen flex flex-col'
      )}>
        {children}
      </body>
    </html>
  );
}
