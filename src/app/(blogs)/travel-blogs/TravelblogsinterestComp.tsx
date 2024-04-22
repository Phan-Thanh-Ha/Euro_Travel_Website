import React from "react";
import { dataTravelBlogs } from "./data";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface BlogProps {
  className?: string;
  classNameTitle?: string;
  classNameCard?: string;
  classNameImage?: string;
}

const BlogList: React.FC<BlogProps> = ({
  className,
  classNameTitle,
  classNameCard,
  classNameImage,
}) => {
  return (
    <div className={className}>
      {dataTravelBlogs.map((item) => (
        <div key={item.Id}>
          <Card className={classNameCard}>
            <Link href={`${item.Link}`}>
              <div className={classNameImage}>
                <Image
                  src={item.Image}
                  alt={item.Title}
                  width={100}
                  height={50}
                />
                <h1 className={classNameTitle}>{item.Title}</h1>{" "}
              </div>
            </Link>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
