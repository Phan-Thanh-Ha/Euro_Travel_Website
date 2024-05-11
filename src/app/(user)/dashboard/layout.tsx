"use client";
import { Bai_Jamjuree } from "next/font/google";
import { GlobalProvider } from "@/store";
import FloatingButton from "@/components/float-button/float-button";
import NextTopLoader from "nextjs-toploader";
import { useState } from "react";
import Sidebar from "./sidebar";
import dynamic from "next/dynamic";
const sans = Bai_Jamjuree({ weight: "500", subsets: ["vietnamese"] });

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={sans.className + " font-lato"}>
        <NextTopLoader
          color="#1d246c"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #1d246c,0 0 5px #1d246c"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
 '
          zIndex={1600}
          showAtBottom={false}
        />
        <GlobalProvider>
          {" "}
          <div className="flex h-screen overflow-hidden">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="bg-sky-100 w-full overflow-y-auto overflow-x-hidden">
              <main >
                {children}
              </main>
            </div>
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
}
export default dynamic (() => Promise.resolve(DashboardLayout), {ssr: false})

