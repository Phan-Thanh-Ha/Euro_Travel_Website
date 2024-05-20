"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
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
    const showAd = async () => {
      await sleep(3000);
      setOpen(true);
    };

    showAd();
  }, []);

  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent className="md:min-w-[1000px] p-0 border-none rounded-lg bg-transparent">
        {ads.length > 0 && (
          // <Link href={ads[0].UrlSlide}>
          <Image
            src={envConfig.NEXT_PUBLIC_CDN + ads[0].Image.split(",")[0]}
            width={1000}
            height={100}
            quality={100}
            className="w-full h-auto rounded-lg"
            alt="Ads image"
          />
          // </Link>
        )}
      </DialogContent>
    </Dialog>
  );
}
