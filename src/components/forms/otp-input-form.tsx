"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { toast } from "@/components/ui/use-toast"
import { useState } from "react"
import { checkOTPEmailCustDataomer } from "@/actions/user"

interface FormProps extends React.ComponentProps<"form"> {
  setValue: (value: string) => void;
  setSubmit: (isSubmit: boolean) => void;
  otp?: string;
  setStep: (step: number) => void;
  className?: string;
}

const FormSchema = z.object({
  pin: z
    .string()
    .min(6, {
      message: "Nhập mã OTP có 6 ký tự số",
    })
    .nonempty("Vui lòng nhập mã OTP"),
})

export function OTPInputForm({ setValue, setSubmit, className, otp, setStep }: FormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  })
  const [errorOtp, setErrorOtp] = useState("");

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    setErrorOtp("")

    if (values) {
      try {
        const params = {
          Email: otp || "",
          OTP: values.pin,
        }
        const response = await checkOTPEmailCustDataomer(params);
        if (response.Status === "OK") {
          setSubmit(true);
          setStep(3);
          form.reset();
          toast({
            title: "Xác thực OTP thành công",
          })
        }
        if (response.Status === "FALSE") {
          setErrorOtp("Mã xác thực OTP không đúng !");
        }
      } catch (error) {
        toast({
          title: "Lỗi xử lý ! Liên hệ CSKH euro Travel !",
        })
      }
    }
  }
  return (
    <div className="w-full justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem className="">
                <div className="flex justify-center items-center">
                  <FormLabel className="text-base" htmlFor="pin">Xác thực OTP</FormLabel>
                </div>
                <div className="flex justify-center items-center">
                  <FormDescription className="text-center">
                    Mã OTP sẽ được gửi về theo số điện thoại đăng ký
                  </FormDescription>
                </div>
                <div className="flex justify-center items-center">
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                </div>
                <div className="h-[20px] overflow-hidden justify-center items-center">
                  <div className="inline">
                    <FormMessage className="text-center" />
                  </div>
                </div>
              </FormItem>
            )}
          />
          {
            errorOtp &&
            (
              <div className="h-[24px] overflow-hidden flex justify-center items-center w-full">
                <span className="text-sm text-main">{errorOtp}</span>
              </div>
            )
          }
          <div className="flex justify-center items-center my-6">
            <Button
              type="submit"
              size="lg"
              className="py-4 text-base">
              Xác thực
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
