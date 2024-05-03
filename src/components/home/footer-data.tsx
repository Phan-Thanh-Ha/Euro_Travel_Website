2;
import Image from "next/image";
import Link from "next/link";
import EmailRegisterForm from "../forms/email-resgister-form";
import { handleDataSetting } from "@/utils/handleDataSetting";
import { fetchMenu } from "@/actions/setting";

export default async function FooterData({ dataSetting = [] }: any) {
  let setting: any = await handleDataSetting(dataSetting);
  let category = await fetchMenu({ MenuName: "" });
  let menuTour = [35, 37, 38, 39];
  let menuList = category?.filter((item: any) =>
    menuTour.includes(item.MenuId)
  );
  const dataDriver = {
    tourList: [
      {
        tourName: "Du lịch mỹ",
        item: [
          {
            location: "item 1",
          },
          {
            location: "item 2",
          },
          {
            location: "item 3",
          },
        ],
      },
      {
        tourName: "Du lịch châu Âu",
        item: [
          {
            location: "item 4",
          },
          {
            location: "item 5",
          },
          {
            location: "item 6",
          },
        ],
      },
      {
        tourName: "Du lịch châu Âu",
        item: [
          {
            location: "item 4",
          },
          {
            location: "item 5",
          },
          {
            location: "item 6",
          },
        ],
      },
      {
        tourName: "Du lịch châu Âu",
        item: [
          {
            location: "item 4",
          },
          {
            location: "item 5",
          },
          {
            location: "item 6",
          },
        ],
      },
      {
        tourName: "Du lịch châu Âu",
        item: [
          {
            location: "item 4",
          },
          {
            location: "item 5",
          },
          {
            location: "item 6",
          },
        ],
      },
      {
        tourName: "Du lịch châu Âu",
        item: [
          {
            location: "item 4",
          },
          {
            location: "item 5",
          },
          {
            location: "item 6",
          },
        ],
      },
    ],
  };

  const TourList = ({ data }: any) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {menuList?.map((tour: any, index: any) => (
          <div key={index} className={index === 0 ? "row-span-3" : ""}>
            <h5 className="text-main text-base font-semibold">
              {tour.MenuName}
            </h5>
            <ul className="p-0 m-0">
              {tour?.children?.map((item: any, itemIndex: any) => (
                <li key={itemIndex} className="p-0 m-0 py-1 text-sm">
                  <Link href={"/"}>{item.MenuName}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <div
        className={`w-full   pt-2 relative bg-cover bg-center bg-no-repeat bg-main transition-[display] duration-500 z-30`}
        style={{ backgroundImage: `url("${setting.BgFooter}")` }}
      >
        <div className="absolute inset-0 bg-white/80 z-[-10]"> </div>
        <div className="px-4">
          <div className="container py-2">
            {/* 1 */}
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
              {/* du lịch cùng eurotravel */}
              <div className="">
                <p className="text-base py-2 font-bold text-main">
                  DU LỊCH CÙNG EUROTRAVEL
                </p>
                <TourList data={dataDriver} />
              </div>
              {/* Group thông tin liên hệ + về chúng tôi */}
              <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Thông tin liên hệ */}
                <div className="">
                  <div className="md:col-span-4 col-span-1">
                    <p className="text-base py-2 font-bold text-main">
                      THÔNG TIN LIÊN HỆ
                    </p>
                    <ul className="text-sm mb-4 ">
                      <li>
                        <h5 className="text-main text-base font-semibold">
                          Văn phòng chính
                        </h5>
                      </li>
                      <li className="text-sm flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={35}
                          height={35}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-map-pin mr-2"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx={12} cy={10} r={3} />
                        </svg>
                        {setting?.AddressMain ||
                          "352-354-356 Lê Văn Sỹ, P.2, Q.Tân Bình, TP Hồ Chí Minh"}
                      </li>
                      <li className="text-sm flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-headset mr-2"
                        >
                          <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                          <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                        </svg>
                        <Link
                          className="hover:text-main "
                          href={`tel:${setting?.Hotline}`}
                        >
                          {setting?.Hotline}
                        </Link>
                      </li>
                      <li className="text-sm flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-phone mr-2"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <Link
                          className="hover:text-main "
                          href={`tel:${setting?.Phone}`}
                        >
                          {setting?.Phone}
                        </Link>
                      </li>
                      <li className="text-sm flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-mail-plus mr-2"
                        >
                          <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          <path d="M19 16v6" />
                          <path d="M16 19h6" />
                        </svg>
                        <Link
                          className="hover:text-main "
                          href={`mailto:${setting?.Email}`}
                        >
                          {setting?.Email}
                        </Link>
                      </li>
                    </ul>
                    <ul className="text-sm mb-4">
                      <li>
                        <h5 className="text-main text-base  font-semibold">
                          Văn phòng Hà Nội
                        </h5>
                      </li>
                      <li className="text-sm flex m-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={35}
                          height={35}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-map-pin mr-2"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx={12} cy={10} r={3} />
                        </svg>
                        {setting?.Address ||
                          "Tòa nhà Imperial Suite, 71 Vạn Phúc, Ba Đình, Hà Nội"}
                      </li>
                      <li className="text-sm flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-headset mr-2"
                        >
                          <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                          <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                        </svg>

                        <Link
                          className="hover:text-main "
                          href={`tel:${setting?.Hotline}`}
                        >
                          {setting?.Hotline}
                        </Link>
                      </li>
                      <li className="text-sm flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-phone mr-2"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>

                        <Link
                          className="hover:text-main "
                          href={`tel:${setting?.Phone}`}
                        >
                          {setting?.Phone}
                        </Link>
                      </li>
                      <li className="text-sm flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-mail-plus mr-2"
                        >
                          <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          <path d="M19 16v6" />
                          <path d="M16 19h6" />
                        </svg>

                        <Link
                          className="hover:text-main "
                          href={`mailto:${setting?.Email}`}
                        >
                          {setting?.Email}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* về chúng tôi */}
                <div className="">
                  <div className="md:col-span-3 col-span-1">
                    <p className="text-base py-2 font-bold text-main">
                      VỀ CHÚNG TÔI
                    </p>
                    <ul className="text-sm mb-4">
                      <li>
                        <h5 className="text-main text-base  font-semibold">
                          Thông tin
                        </h5>
                      </li>
                      <li>
                        <Link
                          className="transition hover:text-main text-sm"
                          href="/gioi-thieu"
                        >
                          Giới thiệu
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="transition hover:text-main text-sm"
                          href="/cam-nang/tin-du-lich"
                        >
                          Tin tức du lịch
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="transition hover:text-main text-sm"
                          href="/cam-nang/dia-diem-du-lich"
                        >
                          Địa điểm du lịch
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="transition hover:text-main text-sm"
                          href="/phuong-thuc-thanh-toan"
                        >
                          Phương thức thanh toán
                        </Link>
                      </li>
                    </ul>
                    <ul className="text-sm mb-4">
                      <li>
                        <h5 className="text-main text-base lg:pt-6  font-semibold">
                          Chính sách và quy định
                        </h5>
                      </li>
                      <li>
                        <Link
                          className="transition hover:text-main text-sm"
                          href="/chinh-sach-bao-mat"
                        >
                          Chính sách bảo mật
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="transition hover:text-main text-sm"
                          href={`/chinh-sach-hoan-huy-dich-vu`}
                        >
                          Chính sách hoàn hủy dịch vụ
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="transition hover:text-main text-sm"
                          href={`/dieu-khoan-dich-vu`}
                        >
                          Điều khoản dịch vụ
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div>
              <div className="h-1 shadow-md my-2"></div>
            </div> */}
            {/* 2 */}
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 mt-10">
              {/* group đăng ký email + mạng xã hội */}
              <div className="lg:pr-6">
                {/* Đăng ký email để nhận thông báo */}
                <div className="md:pb-5">
                  <div className="flex flex-row">
                    <p className="pb-4 sm:text-sm md:text-base text-main text-center font-bold">
                      Đăng ký Email để nhận thông tin từ EuroTravel
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <Link target="_blank" href={"/"} title="home" rel="go home">
                      <Image
                        width={200}
                        height={200}
                        src="/images/logo.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex">
                    <div className="w-full">
                      <EmailRegisterForm />
                    </div>
                  </div>
                </div>
                {/* Mạng xã hội */}
                <div className="">
                  <div className="flex flex-row">
                    <p className="pb-4 sm:text-sm md:text-base text-main font-bold ">
                      Theo dõi mạng xã hội
                    </p>
                  </div>
                  <div className="md:col-span-2 col-span-1 flex flex-row gap-2">
                    <Link
                      target="_blank"
                      href={setting?.Facebook || "/"}
                      title="Follow on Facebook"
                      rel="noopener noreferrer nofollow"
                    >
                      <Image
                        width={36}
                        height={36}
                        src="/images/facebook.png"
                        alt=""
                      />
                    </Link>
                    <Link
                      target="_blank"
                      href={setting?.Instagram || "/"}
                      title="Follow on Instagram"
                      rel="noopener noreferrer nofollow"
                    >
                      <Image
                        width={36}
                        height={36}
                        src="/images/instagram.png"
                        alt=""
                      />
                    </Link>
                    <Link
                      target="_blank"
                      href={setting?.Tiktok || "/"}
                      title="Follow on Tiktok"
                      rel="noopener noreferrer nofollow"
                    >
                      <Image
                        width={36}
                        height={36}
                        src="/images/tiktok.png"
                        alt=""
                      />
                    </Link>
                    <Link
                      target="_blank"
                      href={setting?.Twitter || "/"}
                      title="Follow on Twitter"
                      rel="noopener noreferrer nofollow"
                    >
                      <Image
                        width={36}
                        height={36}
                        src="/images/twitter.png"
                        alt=""
                      />
                    </Link>
                    <Link
                      target="_blank"
                      href={setting?.Pinterest || "/"}
                      title="Follow on Pinterest"
                      rel="noopener noreferrer nofollow"
                    >
                      <Image
                        width={36}
                        height={36}
                        src="/images/pinterest.png"
                        alt=""
                      />
                    </Link>
                    <Link
                      target="_blank"
                      href={setting?.LinkedIn || "/"}
                      title="Follow on LinkedIn"
                      rel="noopener noreferrer nofollow"
                    >
                      <Image
                        width={36}
                        height={36}
                        src="/images/linkedin.png"
                        alt=""
                      />
                    </Link>
                    <Link
                      target="_blank"
                      href={setting?.Youtube || "/"}
                      title="Follow on Youtube"
                      rel="noopener noreferrer nofollow"
                    >
                      <Image
                        width={36}
                        height={36}
                        src="/images/youtube.png"
                        alt=""
                      />
                    </Link>
                    {/* <Link className="hover:text-main" href={`tel:${setting?.Phone}`}>
                      <h4 className="text-white px-7 py-2 bg-main mx-3 rounded-[5px] sm:hidden md:flex hover:bg-red-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={22}
                          height={22}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-phone mr-2"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        {setting?.Phone}
                      </h4>
                    </Link> */}
                  </div>
                </div>
              </div>
              {/* group chứng nhận + CHẤP NHẬN THANH TOÁN */}
              <div>
                {/* chứng nhận */}
                <div className="">
                  <p className="text-base pb-2 font-bold text-main">
                    CHỨNG NHẬN
                  </p>
                  <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
                    <div className="col-span-1">
                      {/* 2.1 */}
                      <div className="w-full">
                        <Link
                          target="_blank"
                          href={
                            setting?.MinistryOfIndustry ||
                            "http://online.gov.vn/Home/WebDetails/54220"
                          }
                          title="Đã thông báo với bộ công thương"
                          rel="noopener noreferrer nofollow"
                        >
                          <Image
                            src="/images/website-bao-voi-bo-cong-thuong_cong-ty-euro-travel.png"
                            alt={setting?.CompanyName}
                            width={170}
                            height={70}
                            className=""
                          />
                        </Link>
                        <Link
                          target="_blank"
                          href={
                            setting?.Compliance ||
                            "https://www.dmca.com/compliance/eurotravel.com.vn"
                          }
                          title="Follow on Youtube"
                          rel="noopener noreferrer nofollow"
                        >
                          <Image
                            src="/images/dmca-compliant-white-bg.png"
                            alt={setting?.CompanyName}
                            width={170}
                            height={50}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-span-2">
                      {/* 2.2 */}
                      <ul className="text-sm mb-4 text-black">
                        <li className="text-sm">
                          Giấy phép kinh doanh số: 0315217704
                        </li>
                        <li className="text-sm">Đăng ký: 10/08/2018</li>
                        <li className="text-sm">
                          Nơi cấp: Sở kế hoạch và đầu tư TP Hồ Chí Minh.
                        </li>
                        <li className="text-sm">
                          Giấy phép kinh doanh Lữ Hành Quốc Tế: <br /> Số{" "}
                          <span className="font-bold">
                            79-901/2018/TCDL-GP LHQT
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Chấp nhận thanh toán */}
                <div className="">
                  <div className="flex flex-row">
                    <p className="sm:text-sm md:text-base text-main font-bold lg:pt-5 pb-3">
                      CHẤP NHẬN THANH TOÁN
                    </p>
                  </div>
                  <div className="md:col-span-2 col-span-1 flex flex-row gap-2"></div>
                  <div className="md:col-span-2 col-span-1">
                    <Image
                      width="400"
                      height="67"
                      src="/images/payment-logo.png"
                      className="attachment-large size-large"
                      alt=""
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-transparent lg:py-4 py-6">
          <div className="mx-auto text-center flex items-center justify-center">
            <p className="mt-4 text-sm text-main  sm:mt-0">
              © 2023 <strong>{setting?.CompanyName}</strong>. Designed by{" "}
              <a
                href="https://cak-solution.com/"
                className="text-main underline font-bold italic"
              >
                CAK Solution
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
