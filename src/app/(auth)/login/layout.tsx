import dynamic from "next/dynamic";

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          {children}    
      </body>
    </html>
  );
}

export default dynamic (() => Promise.resolve(RootLayout), {ssr: false})

