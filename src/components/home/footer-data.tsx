import Image from "next/image";
import Link from "next/link";
import EmailRegisterForm from "../forms/email-resgister-form";
import { handleDataSetting } from "@/utils/handleDataSetting";

export default async function FooterData({ dataSetting = [] }: any) {
  let setting: any = await handleDataSetting(dataSetting);
  return (
    <>
      <div className="w-full bg-red-50 rounded-t-[20px] pt-4">
        <div className="container px-4">
          <div className="">
            <div className="lg:py-4 py-4">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-7">
                <div className="md:col-span-2 col-span-1">
                  <p className="text-xl font-bold text-main ">
                    THÔNG TIN DOANH NGHIỆP
                  </p>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li>
                      <div className="flex justify-center">
                        <Link href={"/"}>
                          <Image
                            className="object-cover"
                            src={setting?.Logo || null}
                            width={150}
                            height={150}
                            alt={setting?.CompanyName}
                          />
                        </Link>
                      </div>
                    </li>
                    <li className="text-base">
                      Giấy phép kinh doanh số: 0315217704
                    </li>
                    <li className="text-base">Đăng ký: 10/08/2018</li>
                    <li className="text-base">
                      Nơi cấp: Sở kế hoạch và đầu tư TP Hồ Chí Minh.
                    </li>
                    <li className="text-base">
                      Giấy phép kinh doanh Lữ Hành Quốc Tế số:{" "}
                      <span className="font-bold">
                        79-901/2018/TCDL-GP LHQT
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-5 col-span-1">
                  <div className="">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-7">
                      <div className="md:col-span-4 col-span-1">
                        <p className="text-xl font-bold text-main">
                          THÔNG TIN LIÊN HỆ
                        </p>
                        <ul className="mt-4 space-y-3 text-sm">
                          <li className="text-base">
                            Trụ sở chính: {setting?.AddressMain}
                          </li>
                          <li className="text-base">
                            Văn phòng Hà Nội: {setting?.Address}
                          </li>
                          <li className="text-base">
                            Điện thoại:{" "}
                            <Link
                              className="text-blue-default-50"
                              href={`tel:${setting?.Phone}`}
                            >
                              {setting?.Phone}
                            </Link>
                          </li>
                          <li className="text-base">
                            Hotline:{" "}
                            <Link
                              className="text-blue-default-50"
                              href={`tel:${setting?.Hotline}`}
                            >
                              {setting?.Hotline}
                            </Link>
                          </li>
                          <li className="text-base">
                            Email:{" "}
                            <Link
                              className="text-blue-default-50"
                              href={`mailto:${setting?.Email}`}
                            >
                              {setting?.Email}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="md:col-span-3 col-span-1">
                        <p className="text-xl font-bold text-main">
                          VỀ CHÚNG TÔI
                        </p>
                        <ul className="mt-4 space-y-3 text-sm">
                          <li>
                            <Link
                              className="transition text-blue-default-50 hover:text-main text-base"
                              href="/gioi-thieu"
                            >
                              Giới thiệu
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="transition text-blue-default-50 hover:text-main text-base"
                              href="/chinh-sach-bao-mat"
                            >
                              Chính sách bảo mật
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="transition text-blue-default-50 hover:text-main text-base"
                              href={`/chinh-sach-hoan-huy-dich-vu`}
                            >
                              Chính sách hoàn hủy dịch vụ
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="transition text-blue-default-50 hover:text-main text-base"
                              href={`/dieu-khoan-dich-vu`}
                            >
                              Điều khoản dịch vụ
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="transition text-blue-default-50 hover:text-main text-base"
                              href="/phuong-thuc-thanh-toan"
                            >
                              Phương thức thanh toán
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:pt-12 sm:pt-5">
                      <div className="mr-3 flex flex-row">
                        <p className="sm:text-base md:text-xl text-main font-bold">
                          Đăng ký Email để nhận thông tin sớm nhất từ EuroTravel
                        </p>
                      </div>
                      <div className="flex">
                        <div className="sm:w-full md:w-5/6">
                          <EmailRegisterForm />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:py-4 py-4 ">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-7">
                <div className="md:col-span-2 col-span-1 flex flex-row gap-2 mb-0">
                  <Link
                    target="_blank"
                    href={setting?.Facebook || "/"}
                    title="Follow on Facebook"
                    rel="noopener noreferrer nofollow"
                  >
                    <Image
                      width={30}
                      height={30}
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
                      width={30}
                      height={30}
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
                      width={30}
                      height={30}
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
                      width={30}
                      height={30}
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
                      width={30}
                      height={30}
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
                      width={30}
                      height={30}
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
                      width={30}
                      height={30}
                      src="/images/youtube.png"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="md:col-span-3 col-span-1 flex flex-row w-full gap-3">
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
                      className="-mt-2"
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
                <div className="md:col-span-2 col-span-1">
                  <h4 className="font-bold text-main">Chấp nhận thanh toán</h4>
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
        <div className="bg-main lg:py-4 py-4">
          <div className="mx-auto text-center flex items-center justify-center">
            <p className="mt-4 text-sm text-white  sm:mt-0">
              © 2023 <strong>{setting?.CompanyName}</strong>. Designed by{" "}
              <a
                href="https://cak-solution.com/"
                className="text-white underline font-bold italic"
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
