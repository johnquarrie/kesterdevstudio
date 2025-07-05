import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/Navbar";
import WhatsAppChatbot from "@/components/WhatsappChatbot";

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kester Dev Studio",
  description:
    "Kester Dev Studio is a software development studio that specializes in building custom software solutions for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <NextTopLoader color="#6C0BDB" showSpinner={false} />
        <main className="flex flex-col w-full relative bg-black">
          <Navbar />
          {children}
        </main>
        <WhatsAppChatbot phoneNumber="2348163577508" />
      </body>
    </html>
  );
}
