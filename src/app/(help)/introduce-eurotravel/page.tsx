import { fetchSetting } from "@/actions/setting";
import { handleDataSetting } from "@/utils/handleDataSetting";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function IntroducePage() {
  const settingData = await fetchSetting({
    KeySetting: "IntroduceContent1",
  });
  const setting = await handleDataSetting(settingData || []);

   const settingData2 = await fetchSetting({
     KeySetting: "IntroduceContent2",
   });
   const setting2 = await handleDataSetting(settingData2|| []);
  return (
    <div className=" px-2 lg:px-0">
      <div className="py-2 lg:container">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Giới thiệu</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {setting?.IntroduceContent1 && (
        <div className="lg:container px-2"
          dangerouslySetInnerHTML={{ __html: setting?.IntroduceContent1 }}
        ></div>
      )}
      <div className="w-full bg-red-50 rounded-t-[20px] pb-10">
          <div className="flex justify-center pt-5 mb-5">
            <h2 className="flex text-lg font-semibold text-main text-center ">
              THÔNG TIN VỀ THƯƠNG HIỆU EUROTRAVEL
            </h2>
          </div>
          <div className="container px-1 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="w-full pr-2 flex-1 pl-2">
                <iframe
                  title='EuroTravel vinh dự nhận giải thưởng "Doanh Nghiệp Xuất Sắc Châu Á 2023" - ASIA EXCELLENT BRAND 2023'
                  className="w-full aspect-video rounded-lg"
                  src="https://www.youtube.com/embed/JSyLyBKsEqE?feature=oembed"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen=""
                ></iframe>
              </div>
              <div className="w-full pl-2 flex-1 pr-1 ">
                <iframe
                  title='EUROTRAVEL VINH DỰ NHẬN DANH HIỆU "DOANH NGHIỆP LỮ HÀNH UY TÍN VIỆT NAM" NĂM 2023'
                  className="w-full aspect-video rounded-lg"
                  src="https://www.youtube.com/embed/DqB5KTjnp8o?feature=oembed"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
          </div>
      </div>
      {setting2?.IntroduceContent2 && (
        <div className="lg:container pt-5 pb-5 px-2"
          dangerouslySetInnerHTML={{ __html: setting2?.IntroduceContent2 }}
        ></div>
      )}
    </div>
  );
}
