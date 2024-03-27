"use client";
import { FormatNumber } from "@/utils/FormatNumber";
import Link from "next/link";
import React from "react";
import envConfig from "../../../config";
import Image from "next/image";

export default function ProductItem({ product }: { product: any }) {
  return (
    <div className=" group relative shadow-xs  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 hover:border-main bg-white  products-center justify-center">
      <div className="relative group w-full">
        <Link
          className={`flex h-32 md:h-60 overflow-hidden rounded-t-lg justify-center p-3`}
          href={`/san-pham/${product.Url}`}
        >
          <Image
            src={
              envConfig.NEXT_PUBLIC_CDN + product?.ImageProduct?.split(",")[0]
            }
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="banner"
            width={500}
            height={500}
            style={{ width: "auto", height: "100%" }}
            className="rounded-lg object-cover w-auto h-full"
          />
        </Link>{" "}
      </div>
      <div className=" p-3 w-full flex flex-col gap-1">
        <Link href={`/brand/${product.BrandUrl}`}>
          <h5 className="text-xs  uppercase  tracking-tight text-gray-500 text-ellipsis overflow-hidden font-semibold line-clamp-2">
            {product.BrandName}
          </h5>
        </Link>
        <Link href={`/san-pham/${product.Url}`} className=" text-center">
          <h5
            className="text-xs md:text-sm tracking-tight text-gray-10 
      h-8 md:h-10 text-ellipsis overflow-hidden font-bold line-clamp-2"
          >
            {product.ProductName}
          </h5>
        </Link>
        {product.Price > 1 ? (
          <>
            <div className=" flex justify-center h-10">
              <div>
                <span
                  className={`text-base md:text-lg  font-bold text-red-600
              } mr-2`}
                >
                  {product.Promotion > 0
                    ? FormatNumber(product.PriceSale)
                    : FormatNumber(product.Price)}
                  đ
                </span>
                {product.Promotion > 0 && (
                  <div className="text-sm text-slate-900 line-through">
                    {FormatNumber(product.Price)}đ
                  </div>
                )}
              </div>
            </div>
            <Link
              href={`/san-pham/${product.Url}`}
              className="flex products-center justify-center rounded-md  px-1 py-2 text-center text-sm font-medium bg-main text-white focus:outline-none  w-full"
            >
              Liên hệ ngay
            </Link>
          </>
        ) : (
          <>
            <div className=" flex justify-between h-10"></div>
            <Link
              href={`/san-pham/${product.Url}`}
              className="flex products-center justify-center rounded-md  px-1 py-2 text-center text-sm font-medium bg-main text-white focus:outline-none  w-full"
            >
              Liên hệ ngay
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
