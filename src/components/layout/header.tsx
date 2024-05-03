import { fetchMenu, fetchSetting } from "@/actions/setting";
import { Menu } from "@/components/home/menu";
import TopHeader from "@/components/home/top-header";
import { handleDataSetting } from "@/utils/handleDataSetting";

export default async function Header() {
  const data = await fetchMenu({ MenuName: null });
  let settingData = await fetchSetting({
    KeySetting: "",
  });
  let setting = await handleDataSetting(settingData);

  return (
    <header className=" sticky -top-6 md:-top-[100px] z-50">
      <TopHeader dataSetting={setting} dataMenu={data} />
      <Menu data={data} setting={setting} />
    </header>
  );
}
