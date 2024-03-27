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
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { ListBulletIcon } from "@radix-ui/react-icons";

export function Menu({ data = [] }: { data: any }) {
  const RenderMenu = ({className=""}) => {
    return data.map((item, index) => {
      if (item?.children?.length > 0) {
        return (
          <NavigationMenuItem key={index} className={className}>
            <NavigationMenuTrigger className="bg-main text-white uppercase active:bg-main focus:bg-main">
              {item.MenuName}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[350px] gap-3 p-4 md:w-[350px] md:grid-cols-2 lg:w-[600px] ">
                {item?.children[0].children.map((component) => (
                  <ListItem
                    key={component.MenuName}
                    title={component.MenuName}
                    href={component.href}
                  >
                    {/* {component.MenuName} */}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        );
      }
      return (
        <NavigationMenuItem key={index} className={`${className} bg-main`}>
          <Link className="w-full" href="/docs" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} bg-main text-white uppercase active:bg-main focus:bg-main`}
            >
              {item.MenuName}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      );
    });
  };
  const [isMenuFixed, setIsMenuFixed] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsMenuFixed(true);
      } else {
        setIsMenuFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Xóa bỏ event listener khi component bị unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`w-full bg-main transition-[display] duration-500 z-30 hidden ${isMenuFixed ? 'lg:fixed top-0' : 'lg:block'}`}>
        <div className="container lg:mx-auto py-1">
          <NavigationMenu>
            <NavigationMenuList className="bg-main ml-4">
              <RenderMenu />
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="lg:hidden fixed top-1 left-1 z-40">
      <Sheet key="left">
        <SheetTrigger asChild>
          <Button className="mt-4 ml-2" variant="ghost" size="icon"><ListBulletIcon className="h-7 w-7 text-black" /></Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-main">
        <SheetHeader>
        </SheetHeader>
          <div className="grid gap-4 py-4">
            <NavigationMenu className="w-full max-w-full block">
              <NavigationMenuList className="bg-main flex flex-col w-full">
                <RenderMenu className="w-full border-b-2 border-b-white" />
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              {/* <Button type="submit">Save changes</Button> */}
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
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
            "block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-base font-medium leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
