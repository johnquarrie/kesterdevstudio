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
        url: "https://www.kesterdevstudio.com/kesterdev.png",
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
    images: ["https://www.kesterdevstudio.com/kesterdev.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Kester Dev Studio</title>
        <meta
          name="description"
          content="Kester Dev Studio is a software development studio that specializes in building custom software solutions for businesses."
        />

        <meta property="og:title" content="Kester Dev Studio" />
        <meta
          property="og:description"
          content="Kester Dev Studio is a software development studio that specializes in building custom software solutions for businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kesterdevstudio.com/" />
        <meta property="og:site_name" content="Kester Dev Studio" />
        <meta property="og:image" content="https://www.kesterdevstudio.com/kesterdev.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Kesterdevstudio" />
        <meta name="twitter:title" content="Kester Dev Studio" />
        <meta
          name="twitter:description"
          content="Kester Dev Studio is a software development studio that specializes in building custom software solutions for businesses."
        />
        <meta name="twitter:image" content="https://www.kesterdevstudio.com/kesterdev.png" />
      </head>

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
