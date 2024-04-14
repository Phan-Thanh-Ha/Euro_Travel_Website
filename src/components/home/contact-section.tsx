import { fetchSetting } from "@/actions/setting";
import { handleDataSetting } from "@/utils/handleDataSetting";
import Image from "next/image";
import Link from "next/link";
export default async function ContactSection() {
  const dataSetting = await fetchSetting({
    KeySetting: "",
  });
  let setting = await handleDataSetting(dataSetting);

  return (
    <section className="bg-main w-full py-6 text-center px-2">
      <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 text-white gap-8 text-center align-middle">
        <div className="bg-blue-default-50 flex flex-col md:flex-row gap-4 shadow-2xl">
          <div className="shadow-2xl mx-auto">
            <Link href={setting?.Website || "/"}>
              <Image
                className="w-full"
                src="/images/button-logo-eurotravel.png"
                alt={setting?.CompanyName}
                width={200}
                height={200}
                style={{ width: "auto", height: "200px" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
          </div>
          <div className="shadow-2xl lg:ml-4 lg:mb-4">
            <h4 className="font-bold text-xl my-6">
              WEBSITE CHÍNH THỨC EUROTRAVEL
            </h4>
            <p>Thương Hiệu Chuyên Tour Uy Tín</p>
          </div>
        </div>
        <div className="bg-blue-default-50 flex flex-col md:flex-row gap-4 drop-shadow-2xl">
          <div className="shadow-2xl lg:mr-4 lg:mb-4">
            <h4 className="font-bold text-xl my-6">
              WEBSITE CHÍNH THỨC EUROTRAVEL
            </h4>
            <p>Website Chuyên Tour Du Lịch Mỹ EuroTravel</p>
          </div>
          <div className="shadow-2xl mx-auto">
            <Link href={setting?.Website || "/"}>
              <Image
                className="w-full items-center"
                src="/images/button-logo-eurotravel.png"
                alt={setting?.CompanyName}
                width={200}
                height={200}
                style={{ width: "auto", height: "200px" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center py-4 mt-4 flex md:flex-row flex-col gap-4 justify-center">
        <Link
          title={"Gọi tới hot line: " + setting?.Hotline}
          className="text-white bg-blue-default px-6 py-2 border-2 border-blue-default rounded-full font-bold hover:text-blue-default hover:bg-white hover:border-white"
          href={`tel:${setting?.Hotline}`}
        >
          Tổng đài: {setting?.Hotline}
        </Link>
        <Link
          title={"Chat Messenger với " + setting?.CompanyName}
          className="text-white bg-main px-6 py-2 border-2 border-white rounded-full font-bold hover:text-blue-default hover:bg-white"
          href={setting?.FacebookChat || "/"}
        >
          Chat Messenger
        </Link>
      </div>
    </section>
  );
}
