import { fetchMenu, fetchSetting } from "@/actions/setting";
import { Menu } from "@/components/home/menu";
import TopHeader from "@/components/home/top-header";

export default async function Header() {
  const data = await fetchMenu({ GroupId: process.env.NEXT_PUBLIC_GROUPID });
  let setting = await fetchSetting({
    GroupId: process.env.NEXT_PUBLIC_GROUPID,
  });

  return (
    <header className="">
      <TopHeader dataSetting={setting} />
      <Menu data={data} />
    </header>
  );
}
