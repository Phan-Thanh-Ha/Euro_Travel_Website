import { fetchSetting } from "@/actions/setting";
import FooterData from "@/components/home/footer-data";

export default async function Footer() {
  let setting = await fetchSetting({
    GroupId: process.env.NEXT_PUBLIC_GROUPID,
  });
  return (
    <footer className="px-2">
      <FooterData settingData={setting} />
    </footer>
  );
}
