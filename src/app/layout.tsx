import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-english",
  weight: ["400", "500", "600", "700"],
});

const notoSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-chinese",
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VisRx — Portfolio",
  description:
    "VisRx: a minimal portfolio site showcasing AR-assisted medication guidance for elderly and guardians.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} ${notoSC.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
