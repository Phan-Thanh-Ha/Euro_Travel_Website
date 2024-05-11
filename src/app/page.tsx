import { fetchBanner, fetchSetting } from "@/actions/setting";
import AboutUsSection from "@/components/home/about-us-section";
import CarouselBanner from "@/components/home/carousel-banner";
import DiscoverWith from "@/components/home/discover-with-eurotravel";
import FeedbackCustomer from "@/components/home/feedback-customer";
import ImageCustomerSection from "@/components/home/image-customer-section";
import NewspaperAboutUsSection from "@/components/home/newspapers-aboutus-section";
import PartnerSection from "@/components/home/partner-section";
import PlaceTravelSection from "@/components/home/place-travel-section";
import SearchComponent from "@/components/search/search";
import GroupTour from "@/components/tour/group-tour";
import { handleDataSetting } from "@/utils/handleDataSetting";
import Image from "next/image";
import envConfig from "../../config";
import Link from "next/link";
import BannerBlogs from "@/components/blogs/banner-blog";
export default async function Home() {
  const banner = await fetchBanner({
    KeySelect: "",
  });
  const settings = await fetchSetting({
    KeySetting: "",
  });
  const setting = await handleDataSetting(settings);
  const banners = banner.filter(
    (item: any) => item.KeySelect === "BannerDoc"
  )[0]?.BannerList;

  return (
    <main className="">
      <CarouselBanner banner={banner} />
      <div className="relative md:mt-[150px]">
        <div className="hidden 2xl:block fixed top-20 left-0  z-10">
          <Link href={banners[0]?.UrlSlide}>
            <Image
              src={envConfig.NEXT_PUBLIC_CDN + banners[0]?.Image?.split(",")[0]}
              width={400}
              height={962}
              alt="banner"
              className="w-44"
            />
          </Link>
        </div>
        <div className=" hidden 2xl:block fixed top-20 right-0 z-10 ">
          <Link href={banners[1]?.UrlSlide}>
            <Image
              src={envConfig.NEXT_PUBLIC_CDN + banners[1]?.Image?.split(",")[0]}
              width={400}
              height={962}
              alt="banner"
              className="w-44"
            />
          </Link>
        </div>
        <GroupTour />

        <NewspaperAboutUsSection data={banner} />
        <FeedbackCustomer data={banner} />
        <AboutUsSection setting={setting} />
        <ImageCustomerSection data={banner} />
        <PlaceTravelSection data={banner} />
        {/* <DiscoverWith data={banner} /> */}
        <BannerBlogs />
        <PartnerSection data={banner} />
      </div>
    </main>
  );
}
