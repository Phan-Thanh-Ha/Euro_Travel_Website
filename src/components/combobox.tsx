"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type ComboboxProps = {
  value: string;
  setValue: (value: string) => void;
  options: { value: string; label: string }[];
  title: string;
  className: string;
  placeholder: string;
  textSize: string;
};

export function Combobox({
  value,
  setValue,
  options,
  title = "Vui lòng chọn...",
  placeholder = "Vui lòng chọn...",
  className,
  textSize = "text-lg",
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState("");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("!w-full justify-between text-base ", className)}
        >
          <div className="flex flex-col w-full ">
            <span className="text-sm text-start">{title}</span>
            <span
              className={cn(
                "flex flex-row items-center w-full justify-between ",
                textSize
              )}
            >
              {value
                ? options.find((option) => option.label === value)?.label
                : placeholder}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" p-0">
        <Command>
          <CommandInput placeholder="Tìm kiếm" className="h-9" />
          <CommandEmpty>Không có dữ liệu</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  className="text-base"
                >
                  {option.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
