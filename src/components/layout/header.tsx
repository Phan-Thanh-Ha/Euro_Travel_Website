import { fetchBanner, fetchMenu, fetchSetting } from "@/actions/setting";
import { Menu } from "@/components/home/menu";
import TopHeader from "@/components/home/top-header";
import ModalAds from "@/components/modal-ads";
import { handleDataSetting } from "@/utils/handleDataSetting";

export default async function Header() {
  const data = await fetchMenu({ MenuName: null });
  let settingData = await fetchSetting({
    KeySetting: "",
  });
  let setting = await handleDataSetting(settingData);
  const banner = await fetchBanner({
    KeySelect: "",
  });

  return (
    <header className="sticky top-0 z-50">
      <ModalAds banner={banner} />

      <TopHeader dataSetting={setting} dataMenu={data} />
      <Menu data={data} setting={setting} />
    </header>
  );
}
