import { Breadcrum } from "@/components/home/bread-crumb";
import Sidebar from "../sidebar";
import MytourPage from "./mytour-page";
import { HomeIcon } from "@radix-ui/react-icons";

export default function MyTour() {
  return (
    <div className="container w-full">
      <div className="my-5 mx-4">
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
            { title: "Khách hàng", href: "/dashboard" },
            { title: `Tour đã đặt`, isCurrentPage: true },
          ]}
        />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="hidden md:block md:col-span-4">
          <Sidebar />
        </div>
        <div className="col-span-12 md:col-span-8 h-fit">
          <MytourPage />
        </div>
      </div>
    </div>
  );
}