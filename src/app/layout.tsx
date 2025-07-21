import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/Navbar";
import WhatsAppChatbot from "@/components/WhatsappChatbot";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kester Dev Studio",
  description:
    "Kester Dev Studio is a software development studio that specializes in building custom software solutions for businesses.",
  openGraph: {
    title: "Kester Dev Studio",
    description:
      "Kester Dev Studio is a software development studio that specializes in building custom software solutions for businesses.",
    url: "https://www.kesterdevstudio.com",
    siteName: "Kester Dev Studio",
    images: [
      {
        url: "https://www.kesterdevstudio.com/kester-logo.png",
        width: 1200,
        height: 630,
        alt: "Kester Dev Studio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kester Dev Studio",
    description:
      "Kester Dev Studio is a software development studio that specializes in building custom software solutions for businesses.",
    images: ["https://www.kesterdevstudio.com/kester-logo.png"],
  },
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
          <Cta />
          <Footer />
        </main>
        <WhatsAppChatbot phoneNumber="2348163577508" />
      </body>
    </html>
  );
}
