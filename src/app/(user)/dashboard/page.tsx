import { fetchSetting } from "@/actions/setting";
import AboutUsSection from "@/components/home/about-us-section";
import { handleDataSetting } from "@/utils/handleDataSetting";

export default async function Dashboard() {
  const settings = await fetchSetting({
    KeySetting: "",
  });
  const setting = await handleDataSetting(settings);
  return (
    <div className="w-full">
      <div className="flex justify-center items-center rounded-md border my-8 py-4 px-2">
        <AboutUsSection setting={setting} />
      </div>
    </div>
  );
}