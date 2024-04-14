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

export default async function PrivatePolicyPage() {
  const settingData = await fetchSetting({
    KeySetting: "PrivacyPolicyV2",
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
              <BreadcrumbPage>Chính sách bảo mật</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {setting?.PrivacyPolicyV2 && (
        <div
          dangerouslySetInnerHTML={{ __html: setting?.PrivacyPolicyV2 }}
        ></div>
      )}
    </div>
  );
}
