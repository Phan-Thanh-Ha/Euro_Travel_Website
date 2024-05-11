import MenuMobile from "@/components/home/menu-mobile";
import Image from "next/image";
import Link from "next/link";

export default async function TopHeader({ dataSetting = [], dataMenu = [] }) {
  let setting = dataSetting;
  return (
    <>
      {/* <div className="text-center md:hidden bg-main text-white font-bold text-xs md:text-sm py-1 md:py-2">
        {setting?.Slogan}
      </div> */}
      <section className={`w-full   md:hidden `}>
        <div className="bg-white/70 backdrop-blur-sm ">
          <div className="lg:container flex flex-row justify-between w-full ">
            <div className=" flex-1 flex justify-start items-center">
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
            <div className="flex-none flex  items-center md:justify-end ">
              <MenuMobile data={dataMenu} setting={setting} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
