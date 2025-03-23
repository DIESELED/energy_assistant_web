import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Energie Spar Assistent",
  description: "Ihr persönlicher Telegram-Bot für cleveres Energiesparen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className={`font-sans min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
