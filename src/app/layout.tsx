import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { GlobalProvider } from "@/store";
import FloatingButton from "@/components/float-button/float-button";
import NextTopLoader from "nextjs-toploader";
import Provider, { NextAuthProvider } from "@/components/Provider";

const sans = Bai_Jamjuree({ weight: "500", subsets: ["vietnamese"] });
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#d52028",
};
export const metadata: Metadata = {
  title: "EuroTravel - Thương Hiệu Chuyên Tour Uy Tín Tại Việt Nam",
  description:
    "EuroTravel - Một trong những đơn vị lữ hành quốc tế uy tín hàng đầu tại Việt Nam chuyên Tour Chất Lượng đi Âu - Úc - Mỹ. Tổng Đài 1800 1021.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description || ""} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href={sans.href} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={sans.className + " font-lato"}>
        <NextTopLoader
          color="#d52028"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #d52028,0 0 5px #d52028"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
 '
          zIndex={1600}
          showAtBottom={false}
        />
        <NextAuthProvider>
          <GlobalProvider>
            <Header />
            {children}
            <FloatingButton />
            <Footer />
          </GlobalProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
