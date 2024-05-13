"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import envConfig from "../../config";
import Image from "next/image";
export default function ModalAds({ banner }: { banner: any }) {
  let ads = banner.filter((item: any) => item.KeySelect === "ModalAds")[0]
    ?.BannerList;

  const [open, setOpen] = useState(false);
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    let s = async () => {
      await sleep(3000);
      await setOpen(true);

      const now = new Date();
      const endOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1
      );
      //
      sessionStorage.setItem("hasSeenAd", true);
    };
    let ads = sessionStorage.getItem("hasSeenAd");
    if (!ads) {
      s();
    }
  }, []);
  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      {/* <DialogTrigger asChild>
          <Button className="w-full font-bold text-base" size={"lg"}>
            Đặt ngay
          </Button>
        </DialogTrigger> */}
      <DialogContent className=" md:min-w-[1000px] p-0 border-none rounded-lg">
        {ads.length > 0 && (
          <Link href={ads[0].UrlSlide}>
            <Image
              src={envConfig.NEXT_PUBLIC_CDN + ads[0].Image.split(",")[0]}
              width={1000}
              height={500}
              quality={100}
              className="w-full h-auto rounded-lg"
              alt="Ads image"
            />
          </Link>
        )}
      </DialogContent>
    </Dialog>
  );
}
