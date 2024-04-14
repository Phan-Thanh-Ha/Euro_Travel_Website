import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import { ScrollArea } from "@/components/ui/scroll-area";
export default function MenuMobile({
  data = [],
  setting = {},
}: {
  data: any;
  setting: any;
}) {
  const RenderMenu = ({ className = "" }) => {
    return data.map((item, index) => {
      if (item?.children?.length > 0) {
        return (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="py-4  text-lg hover:no-underline font-bold">
              <Link href={`/${item.key}`}>{item.MenuName}</Link>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 ml-4">
              {item?.children.map((component) => (
                <Link
                  key={component.MenuId}
                  href={"/" + item.key + "/" + component.key}
                >
                  <span className="  text-lg hover:no-underline">
                    {component.MenuName}
                  </span>
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        );
      }
      return (
        <AccordionItem value="item-2" key={index} className="py-4">
          <span className="  text-lg hover:no-underline font-bold">
            <Link href={`/${item.key}`}>{item.MenuName}</Link>
          </span>
        </AccordionItem>
      );
    });
  };

  return (
    <div className="h-full md:hidden flex items-center left-2">
      <Sheet key="left">
        <SheetTrigger asChild>
          <Button className="" variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-align-justify"
            >
              <line x1={3} x2={21} y1={6} y2={6} />
              <line x1={3} x2={21} y1={12} y2={12} />
              <line x1={3} x2={21} y1={18} y2={18} />
            </svg>
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-white w-full p-1">
          <SheetHeader className="items-center">
            <Link
              href="/"
              className="title-font font-medium items-center align-middle text-gray-900 w-fit "
            >
              <Image
                src={setting?.Logo ?? ""}
                alt={setting?.CompanyName}
                sizes="(max-width: 768px) 30vw, (max-width: 1200px) 100vw, 100vw"
                width={170}
                height={100}
                className="w-auto h-[60px] md:w-[170px] md:h-[100px]  "
              />
            </Link>
          </SheetHeader>
          <div className="grid gap-4 h-full">
            <ScrollArea className="h-[calc(100vh_-_60px)] w-full">
              <Accordion
                type="single"
                collapsible
                className="w-full h-full text-main p-4 "
              >
                <RenderMenu />
              </Accordion>
            </ScrollArea>
          </div>
          <SheetFooter>
            <SheetClose asChild></SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
