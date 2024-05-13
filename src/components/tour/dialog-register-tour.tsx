// ================================================================
// Button Register Tour
// ================================================================
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import TourRegisterForm from "@/components/forms/tour-register-form";
import { useMediaQuery } from "@/hooks/use-media-query";
import Link from "next/link";

interface TourItemData {
  NameTour: string;
  Slug: string;
}
interface TourItemProps {
  data: TourItemData;
}

export default function DiaLogRegisterTour({ data }: TourItemProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop)
    return (
      <Button className="w-full font-bold text-base" size={"lg"}>
        <Link href={"/tour/booking/" + (data?.Slug ?? "")}>Đặt ngay</Link>
      </Button>
    );
  return (
    <Button className="w-full font-bold text-base" size={"lg"}>
      <Link href={"/tour/booking/" + (data?.Slug ?? "")}>Đặt ngay</Link>
    </Button>
  );
}
