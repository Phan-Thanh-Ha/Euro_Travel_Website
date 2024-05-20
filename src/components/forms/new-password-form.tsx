import { forgotPasswordCustDataomer, registerCustomer } from "@/actions/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { toast } from "@/components/ui/use-toast"

const formSchema = z
  .object({
    password: z
      .string({
        required_error: "Mật khẩu không để trống",
      })
      .trim()
      .min(6, {
        message: "Mật khẩu ít nhất có 6 ký tự",
      })
      .max(100),
    confirmPassword: z
      .string({
        required_error: "Mật khẩu không để trống",
      })
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu và mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  });

export type BodyType = z.TypeOf<typeof formSchema>;
interface FormProps extends React.ComponentProps<"form"> {
  email: string;
}
export default function ForgotPasswordForm({ email }: FormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorApi, setErrorApi] = useState("");
  const { push } = useRouter();
  const form = useForm<BodyType>({
    resolver: zodResolver(formSchema)
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const params = {
        Email: email,
        Password: values.password,
      }
      const response = await forgotPasswordCustDataomer(params);
      if (response.Status === "OK") {
        setErrorApi("");
        toast({
          title: "Đổi mật khẩu thành công",
        })
        /* return push("/login"); */
        window.location.href = "/login";
      }
    } catch (error) {
      toast({
        title: "Lỗi xử lý ! Liên hệ CSKH euro Travel !",
      })
    }
  };
  return (
    <div className="mt-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex justify-center items-center">
            <FormLabel className="text-base text-center" htmlFor="email">Thay đổi mật khẩu</FormLabel>
          </div>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative">
                <div>
                  <FormLabel className="text-base" htmlFor="password">Mật khẩu mới</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nhập mật khẩu mới"
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="relative">
                <div>
                  <FormLabel className="text-base" htmlFor="password">Xác nhận mật khẩu mới</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nhập lại mật khẩu mới"
                      className="focus-visible:border-main focus-visible:ring-main pr-10"
                      type={showConfirmPassword ? "text" : "password"}
                      {...field}
                    />
                  </FormControl>
                  <div className="h-[17px] overflow-hidden">
                    <FormMessage />
                  </div>
                </div>
                <div className="absolute inset-y-0 right-3 flex items-center justify-center">
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? (

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
          <div className="flex justify-center items-center my-6">
            <Button
              type="submit"
              size="lg"
              className="py-4 text-base"
            >
              Đổi mật khẩu
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}