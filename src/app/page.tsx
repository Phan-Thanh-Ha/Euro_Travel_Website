import { fetchBanner } from "@/actions/setting";
import BlogSection from "@/components/home/blog-section";
import CarouselBanner from "@/components/home/carousel-banner";
import ContactSection from "@/components/home/contact-section";
import CarouselGroupProduct from "@/components/home/group-product";
import PartnerSection from "@/components/home/partner-section";

export default async function Home() {
  const banner = await fetchBanner({
    GroupId: process.env.NEXT_PUBLIC_GROUPID,
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CarouselBanner banner={banner} />
      <CarouselGroupProduct />
      {/*  <BlogSection /> */}
      <PartnerSection />
      <ContactSection />
    </main>
  );
}
