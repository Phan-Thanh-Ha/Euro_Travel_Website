import { fetchGallery } from "@/actions/gallery";
import React from "react";
import envConfig from "../../../../config";

export default async function GalleryListPage() {
  let galleryData = await fetchGallery({ tagUrl: "", Type: "GALERY" });
  console.log(galleryData);
  return (
    <div>
      <div className="">
        {galleryData.map((item: any) => {
          return (
            <div key={item.Id}>
              <h3>{item.TagName}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {item.Images.map((img: any) => {
                  console.log(img);
                  return (
                    <img
                      key={img.Id}
                      src={envConfig.NEXT_PUBLIC_CDN + img.Image}
                      alt={img.Name}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
