"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { register } from "@/actions/user";
import envConfig from "../../../config";
import useGlobalState from "@/hooks/useGlobalState";
import { Combobox } from "@/components/combobox";
import { SelectComp } from "@/components/select-comp";
import { SelectDate } from "@/components/select-date";

const formSchema = z.object({
  start: z.string().min(1, {
    message: "Vui lòng chọn.",
  }),
  end: z.string().min(1, {
    message: "Vui lòng chọn.",
  }),
  date: z.date().min(new Date(), {
    message: "Ngày không hợp lệ.",
  }),
});

//   .strict();
interface LoginFormProps extends React.ComponentProps<"form"> {
  setOpen: (open: boolean) => void;
  setIsLogin: (isLogin: boolean) => void;
}

export type LoginBodyType = z.TypeOf<typeof formSchema>;

export default function SearchFrom({
  className,
  setOpen,
  setIsLogin,
}: LoginFormProps) {
  const [globalState, dispatch] = useGlobalState();
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const startPlaceOptions = [
    { value: "Hà Nội", label: "Hà Nội" },
    { value: "Hồ Chí Minh", label: "Hồ Chí Minh" },
  ];

  const endPlaceOptions = [
    { value: "Pháp", label: "Pháp" },
    { value: "Thụy Sĩ", label: "Thụy Sĩ" },
    { value: "Đức", label: "Đức" },
    { value: "Ý", label: "Ý" },
    { value: "Hà Lan", label: "Hà Lan" },
    { value: "Bỉ", label: "Bỉ" },
    { value: "Áo", label: "Áo" },
    { value: "Hungary", label: "Hungary" },
    { value: "Séc", label: "Séc" },
    { value: "Hy Lạp", label: "Hy Lạp" },
    { value: "Bồ Đào Nha", label: "Bồ Đào Nha" },
    { value: "Tây Ban Nha", label: "Tây Ban Nha" },
    { value: "Đan Mạch", label: "Đan Mạch" },
    { value: "Thụy Điển", label: "Thụy Điển" },
    { value: "Na Uy", label: "Na Uy" },
    { value: "Phần Lan", label: "Phần Lan" },
    { value: "Mỹ", label: "Mỹ" },
    { value: "Canada", label: "Canada" },
    { value: "Mexico", label: "Mexico" },
    { value: "Brazil", label: "Brazil" },
    { value: "Cuba", label: "Cuba" },
    { value: "Úc", label: "Úc" },
    { value: "New Zealand", label: "New Zealand" },
    { value: "Nhật Bản", label: "Nhật Bản" },
    { value: "Hàn Quốc", label: "Hàn Quốc" },
    { value: "Singapore", label: "Singapore" },
    { value: "Trung Quốc", label: "Trung Quốc" },
    { value: "Dubai", label: "Dubai" },
    { value: "Ấn Độ", label: "Ấn Độ" },
    { value: "Ai Cập", label: "Ai Cập" },
    { value: "Nam Phi", label: "Nam Phi" },
    { value: "Morocco", label: "Morocco" },
  ];

  const form = useForm<LoginBodyType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      start: "",
      end: "",
      date: new Date(),
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "grid md:grid-cols-4 gap-4 md:py-4 items-center md:justify-end",
          className
        )}
        noValidate
      >
        <FormField
          control={form.control}
          name="start"
          render={({ field }) => (
            <FormItem className="flex flex-col h-full justify-end">
              <FormLabel className="font-bold text-base">
                Nơi khởi hành
              </FormLabel>
              <FormControl>{/* <SelectComp value {...field} /> */}</FormControl>
              <FormMessage />
              <Combobox
                value={field.value}
                setValue={field.onChange}
                options={startPlaceOptions}
                title="Chọn nơi khởi hành"
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="end"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full  h-full justify-end">
              <FormLabel className="font-bold text-base">Điểm đến</FormLabel>
              <FormControl>{/* <SelectComp value {...field} /> */}</FormControl>
              <FormMessage />
              <Combobox
                value={field.value}
                setValue={field.onChange}
                options={endPlaceOptions}
                title="Chọn điếm đến"
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full  h-full justify-end">
              <FormLabel className="font-bold text-base">
                Ngày khởi hành
              </FormLabel>
              <FormMessage />

              <FormControl>
                <SelectDate
                  value={field.value}
                  setValue={field.onChange}
                  className="w-full"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex flex-col justify-end h-full">
          {" "}
          <Button type="submit" className="w-full bg-main text-base ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search mr-2"
            >
              <circle cx={11} cy={11} r={8} />
              <path d="m21 21-4.3-4.3" />
            </svg>
            Tìm kiếm
          </Button>
        </div>
      </form>
    </Form>
  );
}
