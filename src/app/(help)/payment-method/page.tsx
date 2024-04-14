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

export default async function PaymentMethodPage() {
  const settingData = await fetchSetting({
    KeySetting: "PaymentMethod",
  });
  const setting = await handleDataSetting(settingData || []);

  return (
    <div className="lg:container px-2 lg:px-0">
      <div className="py-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Phương thức thanh toán</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {setting?.PaymentMethod && (
        <div dangerouslySetInnerHTML={{ __html: setting?.PaymentMethod }}></div>
      )}
      <div className="w-full flex-1 mt-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7838.35451892803!2d106.663899!3d10.797732000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529174c16d7dd%3A0x670834c61853b2db!2zRXVyb1RyYXZlbCAtIFRoxrDGoW5nIEhp4buHdSBDaHV5w6puIFRvdXIgVXkgVMOtbg!5e0!3m2!1svi!2sus!4v1711515053848!5m2!1svi!2sus"
          className="w-full aspect-video"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
