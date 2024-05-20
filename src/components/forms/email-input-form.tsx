"use client";
import { checkEmailCustomer, loginCustomer } from "@/actions/user";
import { EncodeObject } from "@/utils/DecodeString";
import React, { BaseSyntheticEvent, useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Nhập email xác thực.",
    })
    .email("Email không đúng định dạng"),
});
export type BodyType = z.TypeOf<typeof formSchema>;

interface FormProps extends React.ComponentProps<"form"> {
  setValue: (value: string) => void;
  setSubmit: (isSubmit: boolean) => void;
  setStep: (step: number) => void;
  className?: string;
}

export default function EmaliInputForm({ setValue, setSubmit, className, setStep }: FormProps) {
  const [errorApi, setErrorApi] = useState("");
  const form = useForm<BodyType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const params = {
        Email: values.email,
      }
      const response = await checkEmailCustomer(params);
      if (response?.Status === "OK") {
        setValue(values.email);
        setSubmit(true);
        setStep(2);
        toast({
          title: `Mã OTP đã được gửi tới email ${values.email} !`,
        })
      }
      if (response?.Status === "FALSE") {
        setErrorApi("Email chưa được đăng ký !");
      }
    } catch (error) {
      toast({
        title: "Lỗi xử lý ! Liên hệ CSKH euro Travel !",
      })
    }
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("", className)}
          noValidate
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-center items-center">
                  <FormLabel className="text-base text-center" htmlFor="email">Email</FormLabel>
                </div>
                <div className="flex justify-center items-center">
                  <FormDescription className="text-center">
                    Sử dụng email đã đăng ký để nhận mã OTP
                  </FormDescription>
                </div>
                <FormControl
                >
                  <Input
                    placeholder="Nhập email xác thực"
                    className="focus-visible:border-main focus-visible:ring-main text-center"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <div className="h-[17px] overflow-hidden flex justify-center items-center">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <div className="h-[18px] md:h-[18px]flex justify-center items-center overflow-hidden">
            {errorApi && (
              <p className="text-main texxt-sm  text-sm text-center">
                {errorApi}
              </p>
            )}
          </div>
          <div className="flex justify-center items-center my-6">
            <Button
              type="submit"
              size="lg"
              className="py-4 text-base"
            >
              Gửi OTP
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )

}