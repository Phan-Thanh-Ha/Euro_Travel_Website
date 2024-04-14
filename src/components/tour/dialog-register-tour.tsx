"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TourRegisterForm from "@/components/forms/tour-register-form";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
type DiaLogRegisterTourProps = {
  tourName: string;
};

export default function DiaLogRegisterTour({
  tourName,
}: DiaLogRegisterTourProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop)
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full font-bold text-base" size={"lg"}>
            Đặt ngay
          </Button>
        </DialogTrigger>
        <DialogContent className=" md:min-w-[1000px]">
          <DialogHeader>
            <DialogTitle>Thông tin đặt tour</DialogTitle>
            <DialogDescription className="font-bold text-main text-lg text-center">
              {tourName}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 pb-4">
            <TourRegisterForm />
          </div>
        </DialogContent>
      </Dialog>
    );
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full font-bold text-base" size={"lg"}>
          Đặt ngay
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Thông tin đặt tour</DrawerTitle>
          <DrawerDescription className="flex justify-center">
            {tourName}
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <TourRegisterForm />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
