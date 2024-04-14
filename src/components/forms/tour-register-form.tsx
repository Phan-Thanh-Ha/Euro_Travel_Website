"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { date, z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import useGlobalState from "@/hooks/useGlobalState";
import { SelectDate } from "@/components/select-date";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Tên không được để trống.",
    })
    .nonempty("Tên không được để trống."),
  phone: z
    .string()
    .min(10, {
      message: "không được để trống.",
    })
    .or(
      z.string().regex(/^[0-9]{10,11}$/, "Số điện thoại không đúng định dạng.")
    ),
  email: z
    .string()
    .email("Email không hợp lệ.")
    .nonempty("Email không được để trống."),
  address: z
    .string()
    .min(1, {
      message: "Địa chỉ không được để trống.",
    })
    .nonempty("Địa chỉ không được để trống."),
  adult: z.string().min(1, {
    message: "Số người lớn không được để trống.",
  }),
  child: z.string().min(1, {
    message: "Số trẻ em không được để trống.",
  }),
  date: date().optional(),
  description: z.string().optional(),
});

//   .strict();
interface LoginFormProps extends React.ComponentProps<"form"> {
  setOpen: (open: boolean) => void;
  setIsLogin: (isLogin: boolean) => void;
}

export type LoginBodyType = z.TypeOf<typeof formSchema>;

export default function TourRegisterForm({
  className,
  setOpen,
  setIsLogin,
}: LoginFormProps) {
  const [globalState, dispatch] = useGlobalState();
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const form = useForm<LoginBodyType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      email: "",
      adult: "",
      child: "",
      date: new Date(),
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      // const response = await register({
      //   CustomerId: 0,
      //   CustomerName: values.name,
      //   CustomerPhone: values.phone,
      //   CustomerEmail: values.email,
      //   Password: values.password,
      //   GroupId: envConfig.NEXT_PUBLIC_GROUPID,
      // });
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
        className={cn("grid grid-cols-2 items-start gap-4", className)}
        noValidate
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Họ và tên</FormLabel>
              <FormControl>
                <Input
                  placeholder="Họ và tên"
                  className="focus-visible:border-main focus-visible:ring-main"
                  type="name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Số điện thoại</FormLabel>
              <FormControl>
                <Input
                  placeholder="Số điện thoại"
                  className="focus-visible:border-main focus-visible:ring-main"
                  type="phone"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Địa chỉ email"
                  className="focus-visible:border-main focus-visible:ring-main"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="address">Địa chỉ</FormLabel>
              <FormControl>
                <Input
                  placeholder="Địa chỉ"
                  className="focus-visible:border-main focus-visible:ring-main"
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="adult"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="adult">Số người lớn </FormLabel>
              <FormControl>
                <Input
                  placeholder="Số lượng người lớn tham gia tour"
                  className="focus-visible:border-main focus-visible:ring-main"
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="child"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="child">Số trẻ em</FormLabel>
              <FormControl>
                <Input
                  placeholder="Số lượng trẻ em tham gia tour"
                  className="focus-visible:border-main focus-visible:ring-main"
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full  h-full justify-end col-span-2">
              <FormLabel className="font-bold">Ngày khởi hành</FormLabel>

              <FormControl>
                <SelectDate
                  value={field.value}
                  setValue={field.onChange}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel htmlFor="description">Thông tin thêm</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Nhập thông tin thêm nếu có"
                  className="focus-visible:border-main focus-visible:ring-main"
                  rows={5}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className=" flex items-center justify-center col-span-2 my-5">
          <Button
            type="submit"
            size={"lg"}
            className="w-fit py-5 px-24 md:px-56 font-bold text-base bg-main"
          >
            Đăng ký
          </Button>
        </div>
      </form>
    </Form>
  );
}
