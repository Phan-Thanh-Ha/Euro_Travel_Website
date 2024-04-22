import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "@radix-ui/react-icons";
import FilterTour from "@/components/forms/filter-form";
import TourList from "@/app/travel/[slug]/tour-list";
import SortComponent from "@/components/sort";

export default function TravelPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <div className="lg:container  ">
      <div className="my-2 mx-2 md:mx-0">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Du lịch A</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="content flex flex-row gap-4">
        <div className="basis-[289px] w-full sticky top-[50px] filter p-4 bg-slate-50 shadow-sm h-fit">
          <h2 className="text-xl font-semibold text-blue-default mb-5">
            Bộ lọc tìm kiếm
          </h2>
          <FilterTour />
        </div>
        <div className="main flex-1 col-span-3 ">
          <h2 className="w-full text-center border-b text-3xl text-main font-bold py-5">
            Du lịch pháp
          </h2>
          <div className="Intro py-5">
            <p>
              Mới nhất Du lịch Pháp 2023 tại EuroTravel là trải nghiệm tuyệt vời
              để khám phá đất nước Pháp xinh đẹp, một quốc gia nổi tiếng với
              lịch sử, văn hóa phong phú và những cảnh quan tuyệt đẹp. Tour Du
              lịch Pháp hứa hẹn sẽ là một trải nghiệm khó quên cho dù bạn là Du
              Khách lần đầu hay Du Khách dày dạn kinh nghiệm. Từ tháp Eiffel
              mang tính biểu tượng ở Paris đến những ngôi làng cổ kính ở
              Provence, những bãi biển ở French Riviera đến lâu đài hùng vĩ ở
              Thung lũng Loire, Pháp mang đến vô số điểm tham quan đa dạng cho
              Du Khách khám phá. Với nền ẩm thực đẳng cấp thế giới, rượu vang
              hảo hạng và khung cảnh nghệ thuật sôi động, chuyến du lịch đến
              Pháp chắc chắn sẽ làm hài lòng mọi giác quan của Du Khách. Chúng
              tôi hy vọng Du Khách sẽ chọn EuroTravel để biến chuyến Du lịch
              Pháp của mình thành hiện thực. Tham khảo ngay: Kinh nghiệm du lịch
              Pháp chi tiết 2023 từ EuroTravel - Thương Hiệu Chuyên Tour Uy Tín.
            </p>
          </div>
          <div className="flex justify-between items-center py-5">
            <p>Chúng tôi tìm thấy xx tour cho quý khách</p>
            <div>
              <SortComponent sort={"1"} />
            </div>
          </div>
          <TourList />
        </div>
      </div>
    </div>
  );
}
