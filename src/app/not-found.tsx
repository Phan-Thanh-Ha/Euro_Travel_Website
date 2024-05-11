import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import envConfig from "../../config";
export const metadata: Metadata = {
  title: "EuroTravel - Thương Hiệu Chuyên Tour Uy Tín Tại Việt Nam",
  description: "EuroTravel - Thương Hiệu Chuyên Tour Uy Tín Tại Việt Nam",
  keywords: "EuroTravel - Thương Hiệu Chuyên Tour Uy Tín Tại Việt Nam",
  openGraph: {
    url: "https://eurotravel.vn",
    type: "website",
    title: "EuroTravel - Thương Hiệu Chuyên Tour Uy Tín Tại Việt Nam",
    description: "EuroTravel - Thương Hiệu Chuyên Tour Uy Tín Tại Việt Nam",
    images: [
      {
        url: `${envConfig.NEXT_PUBLIC_CDN}/maysaydq.png`,
        width: 1200,
        height: 630,
        alt: "Eurotravel",
      },
    ],
  },
};
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-8 text-center shadow-xl">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="text-gray-600">Xin lỗi, đường dẫn không tồn tại</p>
        <Link
          href="/"
          className="mt-4 inline-block rounded bg-blue-default px-4 py-2 font-semibold text-white hover:bg-blue-600"
        >
          {" "}
          Trở về trang chủ
        </Link>
      </div>
    </div>
  );
}
