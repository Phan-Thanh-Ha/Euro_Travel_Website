import { Breadcrum } from "@/components/home/bread-crumb";
import Image from "next/image";

export default async function Contact() {
  return (
    <>
      <div className="container px-4 mx-auto mt-3 mb-7">
        <Breadcrum
          items={[
            { href: "/", title: "Home" },
            { title: "Liên hệ", isCurrentPage: true },
          ]}
        />
        <div className="mt-5">
          <div className="mt-5">
            <h1>
              <b className="text-2xl font-bold text-main py-1">Liên hệ</b>
            </h1>
          </div>
          <div className="mt-4">
            <p className="md:text-xl sm:text-sm text-[#2d2d2d]">
              Để đáp ứng được các yêu cầu và các ý kiến đóng góp của quý vị một
              cách nhanh chóng xin vui lòng liên hệ:
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mt-1">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 flex-1 mt-5 ">
            <h2 className="mb-2 md:text-xl sm:text-sm font-bold text-main">1/ LIÊN HỆ TRỰC TIẾP VỚI EUROTRAVEL:</h2>
            <ul>
              <li className="mb-1 p-2 pl-4 sm:text-base lg:text-lg">
                <h2>
                  <strong>Tổng đài:</strong> 1800 1021 – 028 7109 1616
                </h2>
              </li>
              <li className="mb-1 p-2 pl-4 sm:text-base lg:text-lg">
                <h2>
                  <strong>Trụ sở chính :</strong> 352 – 354 – 356 Lê Văn Sỹ,
                  Phường 2, Quận Tân Bình, TP.Hồ Chí Minh.
                </h2>
              </li>
              <li className="mb-1 p-2 pl-4 sm:text-base lg:text-lg">
                <h2>
                  <strong>Chi nhánh Hà Nội :</strong> Lầu 6 – Tòa Nhà Imperial
                  Suite, 71 phố Vạn Phúc, phường Liễu Giai, quận Ba Đình, TP. Hà
                  Nội.
                </h2>
              </li>
              <li className="mb-1 p-2 pl-4 sm:text-base lg:text-lg">
                <h2>
                  <strong>Email :</strong>
                  info@eurotravel.com.vn
                </h2>
              </li>
              <li className="mb-2 sm:text-sm md:text-xl mt-5">
                <p className="font-bold text-main">
                  {"2/ LIÊN HỆ GÓP Ý CHẤT LƯỢNG DỊCH VỤ SAU KHI ĐI TOUR "}
                  <strong>
                    <a href="/CustomerSurveryOpinion" className="text-blue-500">
                      TẠI ĐÂY
                    </a>
                  </strong>
                  {" HOẶC QUÉT MÃ QR CODE BÊN DƯỚI!"}
                </p>
                {/* Add QR code here */}
              </li>
              <Image
                width={270}
                height={270}
                src="/images/QR-CODE-CSKH.jpg"
                alt=""
                className="attachment-original size-original shadow-lg mx-auto rounded-lg"
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 23vw"
              />
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 flex-1 mt-5">
            <h3>
              <b className="text-xl font-bold text-main">
                BẢN ĐỒ ĐI TỚI EUROTRAVEL
              </b>
            </h3>
            <div className="border border-gray-50 rounded-lg overflow-hidden mt-5 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7838.35451892803!2d106.663899!3d10.797732000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529174c16d7dd%3A0x670834c61853b2db!2zRXVyb1RyYXZlbCAtIFRoxrDGoW5nIEhp4buHdSBDaHV5w6puIFRvdXIgVXkgVMOtbg!5e0!3m2!1svi!2sus!4v1711515053848!5m2!1svi!2sus"
                width="100%"
                height="580"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
