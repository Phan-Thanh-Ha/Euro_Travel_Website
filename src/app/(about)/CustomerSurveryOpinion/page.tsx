"use client";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../../../components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { DatePicker } from "@/components/ui/date-picker";
import React from "react";
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
          <Input type="email" placeholder="Email" />
          <CardDescription>
            {"Hành trình du khách đã trải nghiệm"}
          </CardDescription>
          <Input type="email" placeholder="Email" />
          <CardDescription>{"Hướng dẩn viên"}</CardDescription>
          <Input type="email" placeholder="Email" />
          <CardDescription>{"Ngày khởi hành"}</CardDescription>

          <DatePicker
            title="Chọn ngày khởi hành"
            initialDate={new Date()}
            buttonClassName="w-full"
            onSelect={(day) => {
              console.log(day);
              if (day) {
                setDate(day);
              }
            }}
          />
          <div className="w-full h-0.5 bg-gray-200 my-4 mt-50"></div>
          <CardTitle className="text-black-500 text-center font-sans text-1xl mb-10">
            {"I/ KHẢO SÁT TỪ DU KHÁCH"}
          </CardTitle>
        </CardHeader>
      </Card>
    </>
  );
}
