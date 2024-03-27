import { handleDataSetting } from "@/utils/handleDataSetting";
import Image from "next/image";
import Link from "next/link";

export default async function TopHeader({ dataSetting = [] }) {
  let setting = await handleDataSetting(dataSetting);
  return (
    <section
      className={`w-full bg-cover bg-bottom relative max-h-[100px] `}
      style={{ backgroundImage: `url('${setting?.ImageABoutUs}')` }}
    >
      <div className="bg-white/80 absolute top-0 left-0 w-full h-full"></div>
      <div className="grid lg:grid-cols-5 grid-cols-6 lg:container lg:mx-auto relative z-10">
        <div className="lg:hidden flex"></div>
        <div className="lg:flex hidden">
          <Link href={`tel:${setting?.Hotline}`}>
            <Image
              className="transform transition-transform scale-110"
              src={"/images/hotline-1.png"}
              alt={setting.CompanyName}
              width={170}
              height={70}
              style={{ width: "auto", height: "70%" }}
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 23vw"
            />
          </Link>
        </div>
        <div className="mx-auto lg:col-span-3 col-span-4">
          <Link
            href="/"
            className="title-font font-medium items-center align-middle text-gray-900 w-fit "
          >
            <Image
              src={setting.Logo}
              alt={setting.CompanyName}
              width={170}
              height={70}
              style={{ width: "auto", height: "90px" }}
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 23vw"
            />
          </Link>
        </div>
        <div className="lg:hidden flex">
          <Link href={`tel:${setting?.Hotline}`}>
            <Image
              className="animate-[wiggle_1s_ease-in-out_infinite]"
              src={"/images/hotline-1.png"}
              alt={setting.CompanyName}
              width={170}
              height={70}
              style={{ width: "auto", height: "70%" }}
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 23vw"
            />
          </Link>
        </div>
        <div className="hidden lg:flex flex-col gap-2 text-center">
          <div className="flex flex-row mx-auto">
            <Image
              style={{ width: "auto", height: "90%" }}
              //sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 23vw"
              src="/images/cup-1.png"
              alt={setting.CompanyName}
              width={30}
              height={70}
              className="inline-block"
            />
            <Image
              style={{ width: "auto", height: "100%" }}
              //sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 23vw"
              src="/images/cup-2.png"
              alt={setting.CompanyName}
              width={30}
              height={70}
              className="inline-block"
            />
            <Image
              style={{ width: "auto", height: "90%" }}
              //sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 23vw"
              src="/images/cup-3.png"
              alt={setting.CompanyName}
              width={30}
              height={70}
              className="inline-block"
            />
          </div>
          <div className="text-white drop-shadow-xl font-semibold mx-auto w-full">{setting?.Slogan}</div>
        </div>
      </div>
    </section>
  );
}
