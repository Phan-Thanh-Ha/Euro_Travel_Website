import { Menu } from "@/components/home/menu";
import MenuMobile from "@/components/home/menu-mobile";
import { handleDataSetting } from "@/utils/handleDataSetting";
import Image from "next/image";
import Link from "next/link";

export default async function TopHeader({ dataSetting = [], dataMenu = [] }) {
  let setting = await handleDataSetting(dataSetting);
  return (
    <>
      <div className="text-center md:hidden bg-main text-white font-bold text-xs md:text-sm py-1 md:py-2">
        {setting?.Slogan}
      </div>
      <section
        className={`w-full bg-cover bg-no-repeat bg-center bg-transparent   `}
        style={{ backgroundImage: `url('${setting?.ImageABoutUs}')` }}
      >
        <div className="bg-white/50 backdrop-blur-sm md:bg-white/30">
          <div className="lg:container flex flex-row ">
            <div className="flex-1 flex items-center justify-end md:justify-start  order-last md:order-none">
              <Link href={`tel:${setting?.Hotline}`}>
                <Image
                  src={"/images/hotline-1.png"}
                  alt={setting?.CompanyName}
                  width={140}
                  height={80}
                  className="w-auto h-[50px] md:w-[140px] md:h-[80px]  animate-[scale-inf_1s_infinite] "
                  sizes="100vw"
                />
              </Link>
            </div>
            <div className=" flex-none flex justify-center items-center">
              <Link
                href="/"
                className="title-font font-medium items-center align-middle text-gray-900 w-fit "
              >
                <Image
                  src={setting?.Logo ?? ""}
                  alt={setting?.CompanyName}
                  sizes="(max-width: 768px) 30vw, (max-width: 1200px) 100vw, 100vw"
                  width={170}
                  height={100}
                  className="w-auto h-[60px] md:w-[170px] md:h-[100px]  "
                />
              </Link>
            </div>
            <div className="flex-1 flex order-first md:order-none  items-center md:justify-end ">
              <div className=" hidden md:flex flex-col w-fit gap-2">
                <div className="flex flex-row mx-auto items-end">
                  <Image
                    style={{ width: "auto", height: "90%" }}
                    src="/images/cup-1.png"
                    alt={setting?.CompanyName || ""}
                    width={30}
                    height={70}
                    className="inline-block"
                  />
                  <Image
                    style={{ width: "auto", height: "100%" }}
                    src="/images/cup-2.png"
                    alt={setting?.CompanyName || ""}
                    width={30}
                    height={70}
                    className="inline-block"
                  />
                  <Image
                    style={{ width: "auto", height: "90%" }}
                    src="/images/cup-3.png"
                    alt={setting?.CompanyName || ""}
                    width={30}
                    height={70}
                    className="inline-block"
                  />
                </div>
                <div className="border-text text-white font-semibold text-sm mx-auto w-full">
                  {setting?.Slogan}
                </div>
              </div>
              <MenuMobile data={dataMenu} setting={setting} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
