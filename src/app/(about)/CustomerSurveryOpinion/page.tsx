"use client";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../../../components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
import React from "react";
import Radio from "@/components/radio-group-comp";
import {
  dataEuroTravelFrom,
  dataRating,
  dataYesNo,
} from "@/app/(about)/CustomerSurveryOpinion/data";
import { Button } from "@/components/ui/button";
export default function CustomerSurveryOpinion() {
  const [date, setDate] = React.useState<Date>(new Date());

  return (
    <>
      <Card className="container px-4 mx-auto mt-10">
        <CardHeader>
          <CardTitle className="text-red-500 text-center font-sans text-2xl mb-10">
            Bảng khảo sát về mức độ hài lòng của Du Khách sau mỗi chuyến đi
          </CardTitle>
          <CardDescription className="text-justify">
            {"Cảm ơn Quý Du Khách đã lựa chọn và đồng hành cùng "}
            <span className="text-red-500 font-bold">Euro</span>
            <span className="text-blue-500 font-bold">Travel</span>
            {" trong kỳ nghỉ quý báu của mình."}
          </CardDescription>
          <CardDescription className="text-justify">
            {
              "Nhằm tối ưu trải nghiệm của từng Du Khách trên từng Hành Trình là một trong những tiêu chí hàng đầu của "
            }
            <span className="text-red-500 font-bold">Euro</span>
            <span className="text-blue-500 font-bold">Travel.</span>
            {"Và để giúp "}
            <span className="text-red-500 font-bold">Euro</span>
            <span className="text-blue-500 font-bold">Travel.</span>
            {
              "làm tốt hơn nữa trong các sản phẩm du lịch chất lượng, Quý Du Khách hãy chia sẻ với "
            }
            <span className="text-red-500 font-bold">Euro</span>
            <span className="text-blue-500 font-bold">Travel.</span>
            {" những cảm nhận của riêng mình, để "}
            <span className="text-red-500 font-bold">Euro</span>
            <span className="text-blue-500 font-bold">Travel.</span>
            {
              " có thể tiếp tục cải thiện và mang đến cho bạn những trải nghiệm tuyệt vời hơn nữa!"
            }
          </CardDescription>
          <CardDescription className="text-justify">
            {
              "Toàn bộ câu trả lời và thông tin của bạn sẽ được giữ bí mật, và chỉ dùng với mục đích khảo sát."
            }
          </CardDescription>
          <CardTitle className="text-black-500 text-center font-sans text-1xl mb-10">
            {"THÔNG TIN DU KHÁCH & HÀNH TRÌNH"}
          </CardTitle>
          <CardDescription>{"Họ & tên Du Khách (bắt buộc)"}</CardDescription>
          <Input type="" placeholder="Quý khách vui lòng điền thông tin" />
          <CardDescription>{"Số điện thoại (bắt buộc)"}</CardDescription>
          <Input type="text" placeholder="Số điện thoại" />
          <CardDescription>
            {"Hành trình du khách đã trải nghiệm"}
          </CardDescription>
          <Input type="text" placeholder="Quý khách vui lòng điền thông tin" />
          <CardDescription>{"Hướng dẩn viên"}</CardDescription>
          <Input type="text" placeholder="Quý khách vui lòng điền thông tin" />
          <CardDescription>{"Ngày khởi hành"}</CardDescription>
          <DatePicker
            title="Chọn ngày khởi hành"
            initialDate={new Date()}
            buttonClassName="w-full"
            onSelect={(day) => {
              if (day) {
                setDate(day);
              }
            }}
          />
          <div className="w-full h-0.5 bg-gray-200 my-4 mt-50"></div>
          <CardTitle className="text-black-500 text-center font-sans text-1xl mb-10">
            {"I/ KHẢO SÁT TỪ DU KHÁCH"}
          </CardTitle>
          <CardDescription>
            {"1/ Quý Khách biết tới EuroTravel từ:"}
          </CardDescription>
          <Radio
            data={dataEuroTravelFrom}
            onSelect={(item) => {}}
            className="grid grid-cols-6 items-center gap-4"
          />
          <CardDescription>
            {
              "2/ Quý Khách có muốn nhận thông tin về các chương trình tour mới & ưu đãi từ EuroTravel hay không?"
            }
          </CardDescription>
          <Radio
            data={dataYesNo}
            onSelect={(item) => {}}
            className="grid grid-cols-6 items-center gap-4"
          />
          <div className="w-full h-0.5 bg-gray-200 my-4 mt-50"></div>
          <CardTitle className="text-black-500 text-center font-sans text-1xl mb-10">
            {"II/ ĐÁNH GIÁ TRẢI NGHIỆM DỊCH VỤ"}
          </CardTitle>
          <CardTitle>{"1/ Hệ thống khách sạn:"}</CardTitle>
          <CardDescription>
            {
              "a/ Chất lượng của các khách sạn tại EuroTravel cung cấp có làm Quý Khách hài lòng hay không? Chúng tôi rất trân quý về sự cảm nhận này:"
            }
          </CardDescription>
          <Radio
            data={dataRating}
            onSelect={(item) => {}}
            className="grid grid-cols-6 items-center gap-4"
          />
          <CardDescription>
            {
              "b/ Nếu có sự điều chỉnh, Quý Khách mong muốn điều chỉnh ở điểm nào?"
            }
          </CardDescription>
          <Input type="text" placeholder="Quý khách vui lòng góp ý" />
          {/* =========================== */}
          <CardTitle>{"2/ Hệ thống nhà hàng trên tour:"}</CardTitle>
          <CardDescription>
            {
              "a/ Quý Khách có trải nghiệm thế nào về ẩm thực cũng như chất lượng các bữa ăn và sự phục vụ của chuỗi nhà hàng trên tour mà EuroTravel cung cấp:"
            }
          </CardDescription>
          <Radio
            data={dataRating}
            onSelect={(item) => {}}
            className="grid grid-cols-6 items-center gap-4"
          />
          <CardDescription>
            {
              "b/ Nếu có sự điều chỉnh, Quý Khách mong muốn điều chỉnh ở điểm nào?"
            }
          </CardDescription>
          <Input type="text" placeholder="Quý khách vui lòng góp ý" />
          {/* =========================== */}
          <CardTitle>{"3/ Hành trình tham quan - di chuyển:"}</CardTitle>
          <CardDescription>
            {
              "a/ EuroTravel sẽ rất vui khi nhận được sự đánh giá của Quý Khách về hành trình tham quan và di chuyển trong suốt những ngày qua:"
            }
          </CardDescription>
          <Radio
            data={dataRating}
            onSelect={(item) => {}}
            className="grid grid-cols-6 items-center gap-4"
          />
          <CardDescription>
            {
              "b/ Nếu có sự điều chỉnh, Quý Khách mong muốn điều chỉnh ở điểm nào?"
            }
          </CardDescription>
          <Input type="text" placeholder="Quý khách vui lòng góp ý" />
          {/* =========================== */}
          <CardTitle>{"4/ Nhân viên Tư Vấn tại EuroTravel:"}</CardTitle>
          <CardDescription>
            {
              "a/ Những cảm nhận và trải nghiệm của Quý Khách trong quá trình tiếp xúc với nhân viên tư vấn sẽ giúp EuroTravel ngày một hoàn thiện hơn. Chúng tôi rất biết ơn vì điều đó:"
            }
          </CardDescription>
          <Radio
            data={dataRating}
            onSelect={(item) => {}}
            className="grid grid-cols-6 items-center gap-4"
          />
          <CardDescription>
            {
              "b/ Nếu có sự điều chỉnh, Quý Khách mong muốn điều chỉnh ở điểm nào?"
            }
          </CardDescription>
          <Input type="text" placeholder="Quý khách vui lòng góp ý" />
          {/* =========================== */}
          <CardTitle>{"5/ Hướng Dẫn Viên trên tour:"}</CardTitle>
          <CardDescription>
            {
              "a/ Những ngày trải nghiệm vừa qua, đội ngũ Hướng Dẫn Viên có làm Quý Khách hài lòng. EuroTravel rất mong nhận được sự góp ý chân thành nhất từ Quý Khách:"
            }
          </CardDescription>
          <Radio
            data={dataRating}
            onSelect={(item) => {}}
            className="grid grid-cols-6 items-center gap-4"
          />
          <CardDescription>
            {
              "b/ Nếu có sự điều chỉnh, Quý Khách mong muốn điều chỉnh ở điểm nào?"
            }
          </CardDescription>
          <Input type="text" placeholder="Quý khách vui lòng góp ý" />
          {/* =========================== */}
          <CardTitle>{"6/ Nhận xét chung:"}</CardTitle>
          <textarea
            style={{ height: "200px", border: "0.1px solid black" }}
          />{" "}
          <CardDescription>
            {
              "Mọi ý kiến nhận xét của Quý Khách gửi đến dẫu là lời khen, động viên hay góp ý, EuroTravel đều rất lấy vinh dự và trân quý. Qua đó, chúng tôi sẽ cam kết bảo mật toàn bộ thông tin này một cách tốt nhất và tất cả ý kiến của Quý Khách đều sẽ đến được với Ban Lãnh Đạo của công ty. Trong suốt chuyến đi, nếu có xảy ra sơ sót hoặc thay đổi bất tiện nào đó. EuroTravel rất mong Quý Khách Hàng thông cảm & hy vọng Quý Khách đã có được một chuyến đi tốt đẹp, tràn đầy kỷ niệm cùng EuroTravel."
            }
          </CardDescription>
          {/* =============== */}
          <CardTitle>{"7/ Mong muốn được gặp lại:"}</CardTitle>
          <CardDescription>
            {
              "a/ EuroTravel rất mong muốn được phục vụ Quý Khách trong những hành trình tiếp theo. Quý Khách đã có dự định sắp tới sẽ tham quan ở đâu không?"
            }
          </CardDescription>
          <Radio
            data={dataYesNo}
            onSelect={(item) => {}}
            className="grid grid-cols-6 items-center gap-4"
          />
          <CardDescription>
            {"Điểm đến dự định tiếp theo của Quý Khách là:"}
          </CardDescription>
          <Input type="text" placeholder="Quốc gia/ điểm đến dự định" />
          <CardDescription>
            {
              "b/ Những lời giới thiệu về EuroTravel tới người thân của Quý Khách là một niềm vinh hạnh với chúng tôi. Quý khách sẵn sàng chứ?"
            }
          </CardDescription>
          <Radio
            data={dataYesNo}
            onSelect={(item) => {}}
            className="grid grid-cols-6 items-center gap-4"
          />
          <Button
            style={{
              display: "block",
              margin: "0 auto",
              width: "30%",
              padding: "10px",
            }}
            onClick={() => {}}
          >
            Gửi ý kiến khảo sát
          </Button>
          <CardDescription>
            {
              "EuroTravel xin chân thành cảm ơn những góp ý chân thành của Quý Khách Hàng. Hẹn gặp lại Quý Khách trong các hành trình du lịch Chất Lượng của EuroTravel trong thời gian gần nhất. Trân trọng!"
            }
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
}
