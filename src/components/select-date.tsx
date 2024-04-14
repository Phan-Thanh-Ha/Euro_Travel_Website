"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type SelectDateProps = {
  value: Date;
  setValue: (value: Date) => void;
  className?: string;
};

export function SelectDate({
  value,
  setValue,
  className = "w-[240px]",
}: SelectDateProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "justify-start text-left font-normal text-base",
            !value && "text-muted-foreground" && className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, "dd/MM/yyyy") : <span>Chọn ngày</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={setValue}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
