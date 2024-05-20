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
import { registerTourNew } from "@/actions/tour";
import { DecodeObject } from "@/utils/DecodeString";
import { format } from "date-fns";
import { useToast } from "../ui/use-toast";

const validateDate = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today;
};
const validatePhone = (phone: string) => {
  const regex = /^(\+84|0)(\d{9,10})$/;
  return regex.test(phone);
}
const regexEmail = /^(?:[^\s@]+@[^\s@]+\.[^\s@]+|[0-9]{10,11})$/;

const formSchema = z
  .object({
    name: z
      .string({
        required_error: "Nhập tên",
      })
      .trim()
      .min(1, {
        message: "Tên không được để trống.",
      }),
    phone: z
      .string({
        required_error: "Nhập số điện thoại",
      })
      .trim()
      .refine(validatePhone, {
        message: "Số điện thoại không đúng.",
      }),
    email: z
      .string()
      .trim()
      .optional(),
    address: z
      .string()
      .trim()
      .optional(),
    adult: z
      .coerce
      .number()
      .gte(1, { message: "Số lượng người lớn ít nhất là 1" }),
    child: z
      .coerce
      .number()
      .optional(),
    date: z
      .date()
      .refine(validateDate, {
        message: "Ngày không hợp lệ",
      }),
    description: z
      .string()
      .max(1000)
      .optional(),
  });

interface LoginFormProps extends React.ComponentProps<"form"> {
  setOpen: (open: boolean) => void;
  setSubmit: (isSubmit: boolean) => void;
  tourId: number;
}

export type LoginBodyType = z.TypeOf<typeof formSchema>;

export default function TourRegisterForm({
  className,
  setOpen,
  setSubmit,
  tourId,
}: LoginFormProps) {
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState<any>({});
  const { toast } = useToast();

  React.useEffect(() => {
    getUserLogin();
  }, [])
  const getUserLogin = () => {
    try {
      const userEmp = DecodeObject(window.localStorage.getItem("userLogin") || "");
      setUser(userEmp);
    } catch (error) { }
  };

  const form = useForm<LoginBodyType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      email: "",
      adult: 0,
      child: 0,
      date: new Date(),
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const params = {
        BookingTourId: 0,
        AdultNumber: values.adult,
        ChildNumber: values.child,
        Note: values.description,
        BookingOn: 1,
        TourId: tourId,
        CustomerId: user?.CustomerId,
        CustomerName: values.name,
        CustomerPhone: values.phone,
        CustomerEmail: values.email,
        CustomerAddress: values.address,
        AdultNumber: values.adult,
        ChildNumber: values.child,
        DateStart: values.date,
      };
      const response = await registerTourNew(params);
      if (response?.Status === "OK") {
        form.reset();
        setSubmit(true);
      } else {
        toast({
          title: "Lỗi xử lý đặt tour !",
          description: "Hệ thống đang gặp sự cố xử lý. Vui lòng liên hệ CSKH Euro Travel !",
          variant: "destructive"
        })
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Số điện thoại</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Số điện thoại"
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
                    type="number"
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
                    type="number"
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
                <FormLabel className="">Ngày khởi hành</FormLabel>

                <FormControl>
                  <SelectDate
                    value={field.value}
                    setValue={field.onChange}
                    className="w-full"
                    title=""
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
              Đặt tour
            </Button>
          </div>
        </form>
      </Form>
    </div>

  );
}
