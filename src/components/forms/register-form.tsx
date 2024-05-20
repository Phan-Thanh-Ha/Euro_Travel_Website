import { registerCustomer } from "@/actions/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { toast } from "@/components/ui/use-toast"


const validName = (name: string) => {
  const regexName = /^[a-zA-Z\s]{2,}$/;
  return regexName.test(name);
}
const validatePhone = (phone: string) => {
  const regex = /^(\+84|0)(\d{9,10})$/;
  return regex.test(phone);
}
const formSchema = z
  .object({
    customer: z
      .string({
        required_error: "Tên không để trống",
      })
      .trim()
      .refine(validName, {
        message: "Tên ít nhất 2 ký tự.",
      })
    ,
    email: z
      .string({
        required_error: "Email không để trống.",
      })
      .trim()
      .email("email không đúng định dạng."),
    phone: z
      .string({
        required_error: "Số điện thoại không để trống.",
      })
      .trim()
      .refine(validatePhone, {
        message: "Số điện thoại không hợp lệ.",
      }),
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
  })
  .refine((data) => data.email || data.phone, {
    message: "Nhập email hoặc số điện thoại",
    path: ["phone"],
  });

export type BodyType = z.TypeOf<typeof formSchema>;
interface FormProps extends React.ComponentProps<"form"> {
  setOpen: (open: boolean) => void;
  setIsLogin: (isLogin: boolean) => void;
  className?: string;
}

export default function CustomerRegisterForm({ setOpen, setIsLogin, className }: FormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorApi, setErrorApi] = useState("");
  const { push } = useRouter();
  const form = useForm<BodyType>({
    resolver: zodResolver(formSchema)
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (values) {
        setErrorApi("");
        const params = {
          CustomerName: values.customer || "",
          CustomerPhone: values.phone,
          CustomerEmail: values.email,
          CustomerPassword: values.password,
        }
        const response = await registerCustomer(params);
        if (response[0]?.Status === "OK") {

          toast({
            title: "Đăng ký thành công",
          })
          window.location.href = "/login";
          /* return push("/login"); */
        }
        if (response[0]?.Status === "NOTOK") {
          setErrorApi(response[0]?.ResultMessage);
        }
      }
    } catch (error) { }
  };
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
            name="customer"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm md:text-base" htmlFor="customer">Họ tên</FormLabel>
                <FormControl
                >
                  <Input
                    placeholder="Họ tên"
                    className="focus-visible:border-main focus-visible:ring-main"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <div className="h-[18px] overflow-hidden">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm md:text-base" htmlFor="phone">Số điện thoại</FormLabel>
                <FormControl
                >
                  <Input
                    placeholder="Số điện thoại"
                    className="focus-visible:border-main focus-visible:ring-main"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <div className="h-[18px] overflow-hidden">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm md:text-base" htmlFor="email">Email</FormLabel>
                <FormControl
                >
                  <Input
                    placeholder="Email"
                    className="focus-visible:border-main focus-visible:ring-main"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <div className="h-[18px] overflow-hidden">
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
                      className="focus-visible:border-main focus-visible:ring-main pr-10" // Thêm padding phải để tránh che biểu tượng
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
                  <FormLabel className="text-base" htmlFor="password">Xác nhận mật khẩu</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Xác nhận mật khẩu"
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
          <div className="flex justify-center items-center mt-4">
            <Button
              type="submit"
              size="lg"
              className="w-full py-4 text-base"
            >
              Đăng ký thành viên
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
  );
}