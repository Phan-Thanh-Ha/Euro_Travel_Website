import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { GlobalProvider } from "@/store";

const sans = Bai_Jamjuree({ weight: "500", subsets: ["vietnamese"] });

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
        <GlobalProvider>
          {" "}
          <Header />
          {children}
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
