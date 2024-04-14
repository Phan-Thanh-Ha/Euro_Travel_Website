"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
export function Menu({ data = [] }: { data: any }) {
  const RenderMenu = ({ className = "" }) => {
    return data.map((item, index) => {
      if (item?.children?.length > 0) {
        return (
          <NavigationMenuItem key={index} className={className}>
            <HoverCard openDelay={100}>
              <HoverCardTrigger
                className="group inline-flex h-9 w-max items-center  cursor-pointer
              justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors
               hover:bg-accent hover:text-white focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 bg-main text-white uppercase active:bg-main focus:bg-main"
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
              </HoverCardTrigger>
              <HoverCardContent className="grid w-[300px] gap-3 mt-0 p-4 md:w-[300px] bg-main">
                <ul className=" ">
                  {item?.children.map((component) => (
                    <ListItem
                      key={component.MenuName}
                      title={component.MenuName}
                      href={"/" + item.key + "/" + component.key}
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
        <NavigationMenuItem key={index} className={`${className} bg-main`}>
          <Link
            className="w-full"
            href={"/" + item.key}
            legacyBehavior
            passHref
          >
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()}  bg-main text-white uppercase active:bg-main focus:bg-main`}
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
        className={`w-full bg-main transition-[display] duration-500 z-30  `}
      >
        <div className="container hidden lg:block lg:mx-auto py-1">
          <NavigationMenu>
            <NavigationMenuList className="bg-main">
              <RenderMenu />
            </NavigationMenuList>
          </NavigationMenu>
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
        <a
          ref={ref}
          className={cn(
            "block cursor-pointer select-none space-y-1 text-white rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-base font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
