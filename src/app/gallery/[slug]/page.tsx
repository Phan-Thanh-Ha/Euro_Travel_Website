import { fetchGallery } from "@/actions/gallery";
import React from "react";
import envConfig from "../../../../config";

export default async function GalleryListPage() {
  let galleryData = await fetchGallery({ tagUrl: "", Type: "GALERY" });

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
    <div>
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {groups.map((group: any[], groupIndex: number) => (
            <div key={groupIndex} className="grid gap-4 h-fit">
              {group.map((img: any, imgIndex: number) => (
                <div key={imgIndex} className="">
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={img.src}
                    alt={img.alt}
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
