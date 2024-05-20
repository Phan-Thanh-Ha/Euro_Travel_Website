import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

export default dynamic(() => Promise.resolve(AuthLayout), { ssr: false })

