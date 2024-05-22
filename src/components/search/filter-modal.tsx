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
import FilterTour from "@/components/forms/filter-form";

export default function DiaLogFilterTour({
  setTour,
  filter,
}: {
  setTour: (tour: any) => void;
  filter: any;
}) {
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
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            size={"lg"}
            className="w-full py-1 px-2 h-9    text-sm flex items-center justify-between"
            onClick={() => setIsOpen(true)}
          >
            Lọc
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-filter"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle className="flex justify-center text-2xl text-main">
              Bộ lọc tìm kiếm
            </DrawerTitle>
            {/* <DrawerDescription className="flex justify-center">
                  {tourName}
                </DrawerDescription> */}
          </DrawerHeader>
          <div className="p-4">
            <FilterTour setTour={setTour} className="" filter={filter} />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
