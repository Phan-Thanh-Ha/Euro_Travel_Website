import { TravelBlogPostNew } from "@/app/(blogs)/travel-blogs/TravelBlogPostNew";
import BlogList from "@/app/(blogs)/travel-blogs/TravelblogsinterestComp";
import { Breadcrum } from "@/components/home/bread-crumb";
import Image from "next/image";
export default async function Blogs() {
  return (
    <div>
      <div className="lg:py-4 py-4 w-full">
        <Image
          width={1200}
          height={800}
          src="/images/blogs.png"
          alt=""
          className="attachment-original size-original w-full"
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 23vw"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl bg-black bg-opacity-40 p-12 flex flex-col items-center justify-center">
          <h1 className="text-center text-4xl">Cẩm nang du lịch</h1>
          <Breadcrum
            className="mt-5"
            colorBreadcrumbPage={"white"}
            colorBreadcrumbLink={"white"}
            items={[
              { href: "/", title: "Home" },
              { title: "Cẩm nang du lịch", isCurrentPage: true },
            ]}
          />
        </div>
      </div>
      <div className="container px-2 mx-auto mt-10 ">
        <span>
          <a
            href="your-url"
            className="text-blue-500 hover:text-red-500 font-bold"
          >
            Cẩm nang du lịch Châu Âu – Úc
          </a>{" "}
          – Tổng hợp bài viết về các thông tin {""}
          <a
            href="your-url"
            className="text-blue-500 hover:text-red-500 font-bold"
          >
            kinh nghiệm du lịch Châu Âu,
          </a>{" "}
          điểm đến, văn hóa, ẩm thực, lễ hội… của các quốc gia Châu Âu được {""}
          <a href="your-url" className="text-black font-bold text-xl">
            EuroTravel
          </a>{" "}
          biên tập cập nhật mới, thường xuyên giúp du khách có được những hành
          trang tốt nhất trước khi đi tham gia {""}
          <a href="your-url" className="text-black font-bold text-xl">
            tour du lịch Châu Âu.
          </a>{" "}
        </span>
        <div className="mt-5">
          <span>
            Tham khảo những{" "}
            <a href="your-url" className="text-black font-bold text-xl">
              cẩm nang đi du lịch Châu Âu
            </a>{" "}
            đang được nhiều khách hàng quan tâm nhất hiện nay.
          </span>
        </div>
        <BlogList
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-10 justify-items-center items-center mx-auto w-full sm:w-3/4"
          classNameTitle="text-center text-xl font-bold"
          classNameCard="w-72 h-30 flex flex-col items-center"
          classNameImage="flex flex-col items-center justify-center"
        />
        <TravelBlogPostNew />
      </div>
    </div>
  );
}
