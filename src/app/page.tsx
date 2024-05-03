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

export default async function Home() {
  const banner = await fetchBanner({
    KeySelect: "",
  });
  const settings = await fetchSetting({
    KeySetting: "",
  });
  const setting = await handleDataSetting(settings);

  return (
    <main>
      <CarouselBanner banner={banner} />
      <SearchComponent />
      <div className="relative">
        <div className=" fixed top-[10%] left-7 -z-50">
          <div className="h-[300px] bg-main w-40"></div>
        </div>

        <GroupTour />
        <NewspaperAboutUsSection data={banner} />
        <FeedbackCustomer data={banner} />
        <AboutUsSection setting={setting} />
        <ImageCustomerSection data={banner} />
        <PlaceTravelSection data={banner} />
        <DiscoverWith data={banner} />
        <PartnerSection data={banner} />
      </div>
    </main>
  );
}
