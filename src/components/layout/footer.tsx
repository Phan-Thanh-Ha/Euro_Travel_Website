import { fetchSetting } from "@/actions/setting";
import FooterData from "@/components/home/footer-data";

export default async function Footer() {
  let setting = await fetchSetting({
    KeySetting: "",
  });
  return (
    <footer className="mt-10">
      <FooterData dataSetting={setting} />
    </footer>
  );
}
