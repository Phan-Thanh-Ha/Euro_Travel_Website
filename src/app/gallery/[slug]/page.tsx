import { fetchGallery } from "@/actions/gallery";
import React from "react";
import envConfig from "../../../../config";
import Image from "next/image";
import { Breadcrum } from "@/components/home/bread-crumb";
import { HomeIcon } from "@radix-ui/react-icons";

export default async function GalleryListPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  let galleryData = await fetchGallery({ Url: slug, IsAll: false });
  const groups = galleryData.reduce((acc: any[], item: any) => {
    const images = item.Images.map((img: any) => ({
      id: img.GaleryId,
      src: envConfig.NEXT_PUBLIC_CDN + img.Image,
      alt: envConfig.NEXT_PUBLIC_CDN + img.Image,
    }));
    const inlength = (images.length / 3).toFixed();
    for (let i = 0; i < images.length; i += parseInt(inlength)) {
      acc.push(images.slice(i, i + parseInt(inlength)));
    }
    return acc;
  }, []);
  return (
    <div className="mx-2 mb-5">
      <div className="my-5">
        <Breadcrum
          items={[
            {
              href: "/",
              title: (
                <>
                  <HomeIcon />
                </>
              ),
            },
            {
              href: "/",
              title: galleryData[0]?.ParentName,
            },
            { title: galleryData[0].TagName, isCurrentPage: true },
          ]}
        />
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 ">
          {groups.map((group: any[], groupIndex: number) => (
            <div key={groupIndex} className="grid gap-4 h-fit">
              {group.map((img: any, imgIndex: number) => (
                <div key={imgIndex} className="">
                  <Image
                    className="h-auto w-full rounded-lg"
                    src={img.src}
                    alt={img.alt}
                    width={500}
                    height={500}
                    quality={100}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
