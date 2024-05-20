import { Breadcrum } from "@/components/home/bread-crumb";
import Sidebar from "../sidebar";
import ContactPage from "./contact-page";
import { HomeIcon } from "@radix-ui/react-icons";
import BackgroundLayout from "@/components/background-layout";

export default function Contract() {

  return (
    <BackgroundLayout>
      <div className="container w-full">
        <div className="mx-4 my-5">
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
              { title: `Hợp đồng`, isCurrentPage: true },
            ]}
          />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="hidden md:block md:col-span-4">
            <Sidebar />
          </div>
          <div className="col-span-12 md:col-span-8 h-fit">
            <ContactPage />
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
}