import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function ScheduleTour({ schedule }: { schedule: any }) {
  const RenderItem = () => {
    return schedule.map((item: any) => {
      return (
        <AccordionItem key={item.Day} value={item.Day} className=" ">
          <AccordionTrigger className="hover:no-underline text-base md:text-lg font-bold text-blue-default text-start">
            {item.Title}
          </AccordionTrigger>
          <AccordionContent className="relative">
            <div
              dangerouslySetInnerHTML={{ __html: item.DescriptionSchedule }}
              className=" text-base  leading-8 pl-4"
            ></div>
            <span className="absolute left-0 inset-y-2 border-l-[1px] border-dashed"></span>
          </AccordionContent>
        </AccordionItem>
      );
    });
  };
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        <RenderItem />
      </Accordion>
    </div>
  );
}
