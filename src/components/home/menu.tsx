"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import { getUserLogin } from "@/utils/GetUserLogin";
export function Menu({ data = [], setting = [] }: { data: any; setting: any }) {

  let menuTour = [35, 37, 38, 39];
  const RenderMenu = ({ className = "" }) => {
    return data.map((item: any, index: any) => {
      let keyTour = menuTour.includes(item.MenuId) ? "/du-lich" : "";
      if (item?.children?.length > 0) {
        return (
          <NavigationMenuItem key={index} className={className}>
            <HoverCard openDelay={10} closeDelay={10}>
              <HoverCardTrigger
                asChild
                className="group inline-flex h-9 w-max items-center  cursor-pointer
              justify-center rounded-md bg-background px-2 py-2 text-sm font-semibold transition-colors
               hover:bg-accent hover:text-main focus:bg-accent focus:text-accent-foreground focus:outline-none
               disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50
               data-[state=open]:text-main bg-transparent text-two uppercase active:bg-transparent focus:bg-transparent"
              >
                <Link
                  href={keyTour + "/" + item.key}
                  className="group inline-flex h-9 w-max items-center  cursor-pointer
                  justify-center rounded-md bg-background px-2 py-2 text-sm font-semibold transition-colors
                   hover:bg-accent hover:text-main focus:bg-accent focus:text-accent-foreground focus:outline-none
                    disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50
                    data-[state=open]:text-main bg-transparent text-two uppercase active:bg-transparent focus:bg-transparent"
                >
                  {" "}
                  {item.MenuName}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </HoverCardTrigger>

              <HoverCardContent className="grid w-[300px] gap-3 mt-0 p-4 md:w-[300px] bg-white">
                <ul className=" ">
                  {item?.children.map((component: any) => (
                    <ListItem
                      key={component.MenuName}
                      title={component.MenuName}
                      href={
                        keyTour.length > 0
                          ? keyTour + "/" + component.key
                          : "/" + item.key + "/" + component.key
                      }
                      className="hover:text-two"
                    >
                      {/* {component.MenuName} */}
                    </ListItem>
                  ))}
                </ul>
              </HoverCardContent>
            </HoverCard>
          </NavigationMenuItem>
        );
      }
      return (
        <NavigationMenuItem
          key={index}
          className={`${className} bg-transparent`}
        >
          <Link
            className="w-full"
            href={keyTour + "/" + item.key}
            legacyBehavior
            passHref
          >
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} active:text-main focus:text-main hover:text-main bg-transparent text-two uppercase font-semibold active:bg-white focus:bg-white`}
            >
              {item.MenuName}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      );
    });
  };

  return (
    <>
      <div
        className={`w-full  bg-white/95 transition-[display] drop-shadow-xl duration-500 z-30 shadow-sm  `}
      >
        <div className=" hidden lg:flex justify-between  py-1">
          <div className="flex flex-row">
            {" "}
            <Link
              href="/"
              className="title-font font-medium items-center align-middle text-gray-900 w-fit "
            >
              <Image
                src={setting?.Logo ?? ""}
                alt={setting?.CompanyName}
                width={170}
                height={100}
                quality={100}
                className="w-auto h-[60px]  md:h-[70px] ml-2 "
              />
            </Link>
            <NavigationMenu className="">
              <NavigationMenuList className="bg-none">
                <RenderMenu />
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center">
            <a href={"/dashboard/customer"}>
              <button className="flex items-center pr-4">
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
                  className="lucide lucide-user stroke-two"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block cursor-pointer select-none space-y-1 text-main hover:text-two  rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-base font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
