import BlogList from "@/app/blogs/TravelblogsinterestComp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchHandBook } from "@/actions/blogs";
import { Breadcrum } from "@/components/home/bread-crumb";
import { HomeIcon } from "@radix-ui/react-icons";
import BlogsListCarosel from "@/components/blogs/blog-list";
import ListTourHot from "@/components/tour/list-tour-hot";
export default async function Blogs() {
  const HandBookList = await fetchHandBook({
    Take: 100,
    Url: "/cam-nang",
  });

  /* Kinh nghiệm du lịch */
  const data1 = HandBookList.filter((item: any) =>
    item.CategoriesId.includes("61")
  );
  /* Địa điểm du lịch */
  const data2 = HandBookList.filter((item: any) =>
    item.CategoriesId.includes("62")
  );
  /* Văn hóa ẩm thực */
  const data3 = HandBookList.filter((item: any) =>
    item.CategoriesId.includes("63")
  );
  /* Tin tức du lịch */
  const data4 = HandBookList.filter((item: any) =>
    item.CategoriesId.includes("64")
  );

  return (
    <div>
      <div className="container px-2 mx-auto ">
        <div className="py-4">
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
              { title: "Cẩm nang", isCurrentPage: true },
            ]}
          />
        </div>
        <div className="bg-blue-50 p-8 rounded-lg">
          <div className="md:flex md:justify-between">
            <div className="">
              <h2 className="text-3xl font-bold text-main mb-4">
                Cẩm nang du lịch
              </h2>
              <p className="text-gray-700 mb-4">
                Bước vào cuộc hành trình khám phá Châu Âu với những cẩm nang du
                lịch độc đáo, được tổng hợp từ những người đam mê du lịch và
                chuyên gia hàng đầu. Tìm hiểu về những điểm đến tuyệt vời, văn
                hóa sâu sắc, ẩm thực độc đáo và lễ hội hấp dẫn trên khắp lục địa
                già.
              </p>
              <p className="text-gray-700 mb-4">
                Cẩm nang du lịch Châu Âu – Úc – là nguồn thông tin tin cậy để
                bạn khám phá những kỳ quan của Châu Âu. Từ các kinh nghiệm du
                lịch đến những bí quyết du lịch thông minh, chúng tôi luôn cập
                nhật những thông tin mới nhất giúp bạn chuẩn bị tốt nhất cho
                hành trình của mình.
              </p>
            </div>
          </div>
          <BlogList />
        </div>
        <div>
          {/* 1 */}
          <h2 className="text-2xl text-main font-bold my-5">
            Kinh nghiệm du lịch
          </h2>
          <BlogsListCarosel data={data1} />
        </div>
        {/* 2 */}
        <div>
          <h2 className="text-2xl text-main font-bold my-5">
            Địa điểm du lịch
          </h2>
          <BlogsListCarosel data={data2} />
        </div>
        {/* 3 */}
        <div>
          <h2 className="text-2xl text-main font-bold my-5">Văn hóa ẩm thực</h2>
          <BlogsListCarosel data={data3} />
        </div>
        {/* 4 */}
        <div>
          <h2 className="text-2xl text-main font-bold my-5">Tin tức du lịch</h2>
          <BlogsListCarosel data={data4} />
        </div>
      </div>
    </div>
  );
}
