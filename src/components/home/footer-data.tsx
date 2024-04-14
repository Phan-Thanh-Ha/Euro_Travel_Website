import Image from "next/image";
import Link from "next/link";
import EmailRegisterForm from "../forms/email-resgister-form";
import { handleDataSetting } from "@/utils/handleDataSetting";

export default async function FooterData({ dataSetting = [] }) {
  let setting = await handleDataSetting(dataSetting);
  return (
    <>
      <div className="container lg:py-4 py-4">
        <div className="grid md:grid-cols-7 grid-cols-1 md:gap-10 gap-2">
          <div className="text-center md:col-span-2 col-span-1">
            <Link
              className={`flex overflow-hidden rounded-t-lg justify-center p-3`}
              href={`/`}
            >
              <Image
                className="h-14 md:h-24"
                src={setting?.Logo || ""}
                alt={setting?.CompanyName}
                width={170}
                height={100}
              />
            </Link>
          </div>
          <div className="text-blue-default font-bold py-2 md:col-span-2 col-span-1 lg:pt-8">
            Đăng ký Email để nhận thông tin sớm nhất từ EuroTravel
          </div>
          <div className=" md:col-span-3 col-span-1 md:pt-10">
            <EmailRegisterForm />
          </div>
        </div>
      </div>
      <div className="container lg:py-4 py-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-7">
          <div className="md:col-span-2 col-span-1">
            <p className="text-xl font-bold text-main">THÔNG TIN DOANH NGHIỆP</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                Giấy phép kinh doanh số:
                <span className="md:flex-1 font-bold">0315217704</span>
              </li>
              <li>Đăng ký: 10/08/2018</li>
              <li>Nơi cấp: Sở kế hoạch và đầu tư TP Hồ Chí Minh.</li>
              <li>Giấy phép kinh doanh Lữ Hành Quốc Tế số: <span className="font-bold">79-901/2018/TCDL-GP LHQT</span></li>
            </ul>
          </div>
          <div className="md:col-span-3 col-span-1">
            <p className="text-xl font-bold text-main">THÔNG TIN LIÊN HỆ</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                Trụ sở chính: {setting?.AddressMain}
              </li>
              <li>
                Văn phòng Hà Nội:  {setting?.Address}
              </li>
              <li>
                Điện thoại: <Link className="text-blue-default-50" href={`tel:${setting?.Phone}`}>{setting?.Phone}</Link>
              </li>
              <li>
                Hotline: <Link className="text-blue-default-50" href={`tel:${setting?.Hotline}`}>{setting?.Hotline}</Link>
              </li>
              <li>Email: <Link className="text-blue-default-50" href={`mailto:${setting?.Email}`}>{setting?.Email}</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2 col-span-1">
            <p className="text-xl font-bold text-main">VỀ CHÚNG TÔI</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  className="transition text-blue-default-50 hover:text-main"
                  href="/gioi-thieu"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  className="transition text-blue-default-50 hover:text-main"
                  href="/chinh-sach-bao-mat"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link
                  className="transition text-blue-default-50 hover:text-main"
                  href={`/chinh-sach-hoan-huy-dich-vu`}
                >
                  Chính sách hoàn hủy dịch vụ
                </Link>
              </li>
              <li>
                <Link
                  className="transition text-blue-default-50 hover:text-main"
                  href={`/dieu-khoan-dich-vu`}
                >
                  Điều khoản dịch vụ
                </Link>
              </li>
              <li>
                <Link
                  className="transition text-blue-default-50 hover:text-main"
                  href="/phuong-thuc-thanh-toan"
                >
                  Phương thức thanh toán
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container lg:py-4 py-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-7">
          <div className="md:col-span-2 col-span-1 flex flex-row gap-0.5">
            <span className="text-sm mt-2">Mạng xã hội:</span>
            <Link target="_blank" href={setting?.Facebook || "/"} title="Follow on Facebook" rel="noopener noreferrer nofollow">
              <Image width={30} height={30} src="/images/facebook.png" alt="" />
            </Link>
            <Link target="_blank" href={setting?.Instagram || "/"} title="Follow on Instagram" rel="noopener noreferrer nofollow">
              <Image width={30} height={30} src="/images/instagram.png" alt="" />
            </Link>
            <Link target="_blank" href={setting?.Tiktok || "/"} title="Follow on Tiktok" rel="noopener noreferrer nofollow">
              <Image width={30} height={30} src="/images/tiktok.png" alt="" />
            </Link>
            <Link target="_blank" href={setting?.Twitter || "/"} title="Follow on Twitter" rel="noopener noreferrer nofollow">
              <Image width={30} height={30} src="/images/twitter.png" alt="" />
            </Link>
            <Link target="_blank" href={setting?.Pinterest || "/"} title="Follow on Pinterest" rel="noopener noreferrer nofollow">
              <Image width={30} height={30} src="/images/pinterest.png" alt="" />
            </Link>
            <Link target="_blank" href={setting?.LinkedIn || "/"} title="Follow on LinkedIn" rel="noopener noreferrer nofollow">
              <Image width={30} height={30} src="/images/linkedin.png" alt="" />
            </Link>
            <Link target="_blank" href={setting?.Youtube || "/"} title="Follow on Youtube" rel="noopener noreferrer nofollow">
              <Image width={30} height={30} src="/images/youtube.png" alt="" />
            </Link>
          </div>
          <div className="md:col-span-3 col-span-1 flex flex-row w-full gap-3">
            <Link target="_blank" href={setting?.MinistryOfIndustry || "http://online.gov.vn/Home/WebDetails/54220"} title="Đã thông báo với bộ công thương" rel="noopener noreferrer nofollow">
              <Image
                src="/images/website-bao-voi-bo-cong-thuong_cong-ty-euro-travel.png"
                alt={setting?.CompanyName}
                width={170}
                height={70}
                className="-mt-2"
              />
            </Link>
            <Link target="_blank" href={setting?.Compliance || "https://www.dmca.com/compliance/eurotravel.com.vn"} title="Follow on Youtube" rel="noopener noreferrer nofollow">
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
            <Image width="400" height="67" src="/images/payment-logo.png" className="attachment-large size-large" alt="" decoding="async" />
          </div>
        </div>
      </div>
      <div className="bg-main lg:py-4 py-4">
        <div className="container mx-auto text-center flex items-center justify-center">
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
    </>
  );
}