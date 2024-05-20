"use client";
import React, { useEffect, useState } from "react";
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
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useToast } from "../ui/use-toast";
type DiaLogRegisterTourProps = {
  tourName: string;
  tourId: number;
};

export default function DiaLogRegisterTour({
  tourName,
  tourId,
}: DiaLogRegisterTourProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = React.useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isSubmitSuccess) {
      setIsOpen(false);
      setIsConfirmDialogOpen(true);
    }
  }, [isSubmitSuccess]);

  const handleSubmitSuccess = () => {
    setIsSubmitSuccess(true);
  };

  const handleConfirm = () => {
    setIsOpen(false);
    setIsSubmitSuccess(false);
    setIsConfirmDialogOpen(false);
  };

  return (
    <>
      {isDesktop ? (
        <>
          <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
            <DialogTrigger asChild>
              <Button
                className="w-full font-bold text-base px-2"
                size={"lg"}
                onClick={() => setIsOpen(true)}
              >
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
                <TourRegisterForm
                  tourId={tourId}
                  setOpen={setIsOpen}
                  setSubmit={handleSubmitSuccess}
                />
              </div>
            </DialogContent>
          </Dialog>
          <Dialog
            open={isConfirmDialogOpen}
            onOpenChange={() => setIsConfirmDialogOpen(!isConfirmDialogOpen)}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Đặt tour thành công </DialogTitle>
                <DialogDescription className="font-bold text-main text-lg text-center">
                  {tourName}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button onClick={handleConfirm}>Xác nhận</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <>
          <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
            <DrawerTrigger asChild>
              <Button
                className="w-full font-bold text-base"
                size={"lg"}
                onClick={() => setIsOpen(true)}
              >
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
                <TourRegisterForm
                  tourId={tourId}
                  setOpen={setIsOpen}
                  setSubmit={setIsSubmitSuccess}
                />
              </div>
            </DrawerContent>
          </Drawer>
          <Dialog
            open={isConfirmDialogOpen}
            onOpenChange={() => setIsConfirmDialogOpen(!isConfirmDialogOpen)}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Đặt tour thành công </DialogTitle>
                <DrawerDescription className="flex justify-center">
                  {tourName}
                </DrawerDescription>
              </DialogHeader>
              <DialogFooter>
                <Button onClick={handleConfirm}>Xác nhận</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      )}
    </>
  );
}
