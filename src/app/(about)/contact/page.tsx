import Image from "next/image";

export default async function Contact() {
  //   const banner = await fetchBanner({
  //     GroupId: process.env.NEXT_PUBLIC_GROUPID,
  //   });
  return (
    <main className="container">
      <div className="grid min-h-screen md:grid-cols-2 grid-cols-1 items-center justify-top">
        <div className="text-left">
          <p>1/ LIÊN HỆ TRỰC TIẾP VỚI EUROTRAVEL:</p>
          <ul>
            <li>
              <strong>Tổng đài:</strong> 1800 1021 – 028 7109 1616
            </li>
            <li>
              <strong>Trụ sở chỉnh :</strong> 352 – 354 – 356 Lê Văn Sỹ, Phường
              2, Quận Tân Bình, TP.Hồ Chí Minh.
            </li>
            <li>
              <strong>Chi nhánh Hà Nội :</strong> Lầu 6 – Tòa Nhà Imperial
              Suite, 71 phố Vạn Phúc, phường Liễu Giai, quận Ba Đình, TP. Hà
              Nội.
            </li>
            <li>
              <strong>Email:</strong> info@eurotravel.com.vn
            </li>
          </ul>
          <p>
            2/{" "}
            <strong>
              LIÊN HỆ GÓP Ý CHẤT LƯỢNG DỊCH VỤ SAU KHI ĐI TOUR{" "}
              <a href="https://eurotravel.com.vn/khao-sat-y-kien-khach-hang-sau-khi-di-tour-cung-eurotravel/">
                TẠI ĐÂY
              </a>{" "}
              HOẶC QUÉT MÃ QR CODE BÊN DƯỚI!
            </strong>
          </p>
          <div
            className="img has-hover x md-x lg-x y md-y lg-y"
            id="image_1911013819"
          >
            <div className="img-inner dark">
              <Image
                width="1500"
                height="1500"
                src="/images/QR-CODE-CSKH.jpg"
                className="attachment-original size-original"
                alt=""
                sizes="(max-width: 1500px) 100vw, 1500px"
              />
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7838.35451892803!2d106.663899!3d10.797732000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529174c16d7dd%3A0x670834c61853b2db!2zRXVyb1RyYXZlbCAtIFRoxrDGoW5nIEhp4buHdSBDaHV5w6puIFRvdXIgVXkgVMOtbg!5e0!3m2!1svi!2sus!4v1711515053848!5m2!1svi!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
