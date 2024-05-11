import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Policy({ tour }: { tour: any }) {
  return (
    <div>
      <div className="hidden md:block">
        <h2 className="text-xl md:text-2xl font-bold text-main mb-4 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={26}
            height={26}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-scale"
          >
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
          </svg>
          Điều khoản
        </h2>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: tour?.RulesTour || "" }}
        ></div>
      </div>
      <Accordion type="single" collapsible className="w-full md:hidden">
        <AccordionItem value="intro" className=" ">
          <AccordionTrigger className="hover:no-underline text-start">
            <h2 className="text-xl md:text-2xl font-bold text-main flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={26}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-scale"
              >
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="M7 21h10" />
                <path d="M12 3v18" />
                <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
              </svg>
              Điều khoản
            </h2>
          </AccordionTrigger>
          <AccordionContent className="border-none">
            <div
              className="content leading-8"
              dangerouslySetInnerHTML={{ __html: tour?.RulesTour || "" }}
            ></div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
