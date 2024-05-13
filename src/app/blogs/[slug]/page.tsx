import { fetchHandBook } from "@/actions/blogs";
import { BlogTravelComp } from "@/app/blogs/[slug]/BlogTravelComp";
import { Breadcrum } from "@/components/home/bread-crumb";
import { HomeIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default async function Blogs_Travel_Experience({
  params,
}: {
  params: { slug: string };
}) {
  const HandBookList = await fetchHandBook({
    Take: 100,
    Url: `/${params.slug}`,
  });

  function getTitle(slug: string) {
    if (slug === "kinh-nghiem-du-lich") {
      return "Kinh nghiệm du lịch";
    }
    if (slug === "dia-diem-du-lich") {
      return "Địa điểm du lịch";
    }
    if (slug === "van-hoa-am-thuc") {
      return "Văn hóa ẩm thực";
    }
    if (slug === "tin-du-lich") {
      return "Tin tức du lịch";
    }
  }
  function getSrc(slug: string) {
    if (slug === "kinh-nghiem-du-lich") {
      return "/images/bg2.png";
    }
    if (slug === "dia-diem-du-lich") {
      return "/images/dia-diem.jpg";
    }
    if (slug === "van-hoa-am-thuc") {
      return "/images/am-thuc.jpg";
    }
    if (slug === "tin-du-lich") {
      return "/images/bg2.png";
    }
  }

  const Banner = () => {
    return (
      <div className="relative overflow-hidden bg-gray-900 h-[500px] rounded-md mt-2">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={`${getSrc(params.slug)}`}
            alt="Banner Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="w-full h-full"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-black opacity-60"></div>
        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold tracking-wider md:text-6xl">
            Cẩm Nang Du Lịch
            <br /> Thế Giới
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Hành Trình Mới - Trải Nghiệm Mới <br /> Cùng Euro Travel
          </p>
          <div className="mt-8 px-10 py-3 text-lg font-semibold text-black bg-yellow-400 rounded-sm">
            {getTitle(params.slug)}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="container px-2 mx-auto my-4">
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
          { title: `${getTitle(params.slug)}`, isCurrentPage: true },
        ]}
      />
      <Banner />
      <div>
        <h2 className="text-2xl md:text-3xl text-main font-bold pb-1 mt-10 ">
          {getTitle(params.slug)}
        </h2>
      </div>
      <BlogTravelComp data={HandBookList} />
    </div>
  );
}
