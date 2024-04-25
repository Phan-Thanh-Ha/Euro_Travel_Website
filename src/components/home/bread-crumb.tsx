import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
interface BreadcrumbItemData {
  href?: string;
  title: string | JSX.Element;
  isCurrentPage?: boolean;
}

interface BreadcrumProps {
  items: BreadcrumbItemData[];
  className?: string;
  colorBreadcrumbPage?: string;
  colorBreadcrumbLink?: string;
}
export function Breadcrum({
  items,
  className,
  colorBreadcrumbPage,
  colorBreadcrumbLink,
}: BreadcrumProps) {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.isCurrentPage ? (
                <BreadcrumbPage style={{ color: colorBreadcrumbPage }}>
                  {item.title}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink
                  href={item.href || "#"}
                  style={{ color: colorBreadcrumbLink }}
                >
                  {item.title}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
