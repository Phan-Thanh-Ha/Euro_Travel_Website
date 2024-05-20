"use client";
import { loginCustomer } from "@/actions/user";
import { EncodeObject } from "@/utils/DecodeString";
import React, { BaseSyntheticEvent, useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  phone: z
    .string()
    .min(1, {
      message: "Nhập email hoặc số điện thoại.",
    })
    .regex(/^(?:[^\s@]+@[^\s@]+\.[^\s@]+|[0-9]{10,11})$/, "Số điện thoại hoặc email không đúng.")
    .nonempty("Nhập email hoặc số điện thoại."),
  password: z
    .string()
    .min(4, {
      message: "Nhập mật khẩu.",
    })
});
export type BodyType = z.TypeOf<typeof formSchema>;

interface FormProps extends React.ComponentProps<"form"> {
  setOpen: (open: boolean) => void;
  setIsLogin: (isLogin: boolean) => void;
  className?: string;
}

export default function CustomerLoginForm({ setOpen, setIsLogin, className }: FormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [errorApi, setErrorApi] = useState("");
  const router = useRouter()
  const form = useForm<BodyType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (values) {
        const params = {
          Email: values.phone,
          Password: values.password,
        };
        const response = await loginCustomer(params);
        if (response[0]?.State === 0) {
          setErrorApi("");
          window.localStorage.setItem("userLogin", EncodeObject(response[0]));
          /* return router.push("/"); */
          toast({
            title: "Đăng nhập thành công !",
          })
          window.location.href = "/";
        }
        if (response.Status === "NOTOK") {
          setErrorApi(response.ReturnMess);

        }
      }
    } catch (error) {

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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base" htmlFor="phone">Email hoặc số điện thoại</FormLabel>
                <FormControl
                >
                  <Input
                    placeholder="Email hoặc số điện thoại"
                    className="focus-visible:border-main focus-visible:ring-main"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <div className="h-[17px] overflow-hidden">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative">
                <div>
                  <FormLabel className="text-base" htmlFor="password">Mật khẩu</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Mật khẩu"
                      className="focus-visible:border-main focus-visible:ring-main pr-10"
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                  </FormControl>
                  <div className="h-[17px] overflow-hidden">
                    <FormMessage />
                  </div>
                </div>
                <div className="absolute inset-y-0 right-3 flex items-center justify-center">
                  <button type="button" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="red"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-eye"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                    ) : (
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
                        className="lucide lucide-eye-off"
                      >
                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                        <line x1={2} x2={22} y1={2} y2={22} />
                      </svg>

                    )}
                  </button>
                </div>
              </FormItem>
            )}
          />
          <div className="flex justify-center items-center mt-4 mb-1">
            <Button
              type="submit"
              size="lg"
              className="w-full py-4 text-base"
            >
              Đăng nhập
            </Button>
          </div>
          <div className="h-[18px] md:h-[18px] overflow-hidden">
            {errorApi && (
              <p className="text-main texxt-sm  text-sm text-center">
                {errorApi}
              </p>
            )}
          </div>
        </form>
      </Form>
    </div>
  )

}