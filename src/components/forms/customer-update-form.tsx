"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { date, z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { SelectDate } from "@/components/select-date";
import { DecodeObject } from "@/utils/DecodeString";
import { getUserLogin } from "@/utils/GetUserLogin";
import { format } from "date-fns";

const formSchema = z.object({
  name: z.string().min(1, { message: "Tên không được để trống." }).nonempty("Tên không được để trống."),
  phone: z.string().min(10, { message: "Số điện thoại không được để trống." }).or(
    z.string().regex(/^[0-9]{10,11}$/, "Số điện thoại không đúng định dạng.")
  ),
  email: z.string().email("Email không hợp lệ.").nonempty("Email không được để trống."),
  date: date().optional(),
  gender: z.enum(["Nam", "Nữ", "Chưa cập nhật"]).default("Chưa cập nhật")
});

interface CustomerUpdateInfoProps extends React.ComponentProps<"form"> {
  setOpen: (open: boolean) => void;
  setIsLogin: (isLogin: boolean) => void;
  initialData: {
    name: string;
    phone: string;
    email: string;
    birth: Date;
    gender: "Nam" | "Nữ";
  };
  typeLogin: number;
}
interface User {
  name?: string;
  phone?: string;
  email?: string;
  birth?: string;
  gender?: number;
}

export type CustomerInfoBodyType = z.TypeOf<typeof formSchema>;

export default function FormCustomerUpdateInfo({
  className,
  setOpen,
  setIsLogin,
  initialData,
  typeLogin,
}: CustomerUpdateInfoProps) {
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState(initialData);
  const [isEdit, setEdit] = React.useState(false);
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const us = getUserLogin();
    setUser(us);
    const dataUs = {
      name: us?.CustomerName || '',
      phone: us?.Phone || '',
      email: us?.Email || '',
      birth: us?.Birth || '',
      gender: us?.Gender === 1 ? "Nữ" : (us?.Gender === 2 ? "Nam" : "Chưa cập nhật"),
    };

    if (us) {
      setFormData(dataUs);
    }
  }, [initialData]);

  const form = useForm<CustomerInfoBodyType>({
    resolver: zodResolver(formSchema),
    defaultValues: formData,
  });


  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);

    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("", className)}
        noValidate
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div className={`flex justify-between items-center pb-2 ${!isEdit && "border-b-[1px] mt-4"}`}>
                <span className="text-base">Tên khách hàng</span>
                <span className="tetx-two uppercase text-base font-bold">{formData?.name}</span>
              </div>
              {
                isEdit
                &&
                <div>
                  <FormControl>
                    <Input
                      placeholder="Họ và tên"
                      className="focus-visible:border-main focus-visible:ring-main"
                      type="name"
                      {...field}
                    />
                  </FormControl>
                  <div className="h-[18px] overflow-hidden">
                    <FormMessage />
                  </div>
                </div>
              }
            </FormItem>
          )}
        />
        {/* số dt */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <div className={`flex justify-between items-center pb-2 ${!isEdit && "border-b-[1px] mt-4"}`}>
                <span className="text-base">Số điện thoại</span>
                <span className="tetx-two text-base font-bold">{formData?.phone || "Chưa cập nhật"}</span>
              </div>
              {
                isEdit
                &&
                <div>
                  <FormControl>
                    <Input
                      placeholder="Số điện thoại"
                      className="focus-visible:border-main focus-visible:ring-main"
                      type="phone"
                      {...field}
                    />
                  </FormControl>
                  <div className="h-[18px] overflow-hidden">
                    <FormMessage />
                  </div>
                </div>
              }
            </FormItem>
          )}
        />
        {/* email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className={`flex justify-between items-center pb-2 ${!isEdit && "border-b-[1px] mt-4"}`}>
                <span className="text-base">Email</span>
                <span className="tetx-two text-base font-bold">{formData?.email || "Chưa cập nhật"}</span>
              </div>
              {isEdit
                &&
                <div>
                  <FormControl>
                    <Input
                      placeholder="Địa chỉ email"
                      className="focus-visible:border-main focus-visible:ring-main"
                      type="text"
                      {...field}
                    />
                  </FormControl>

                </div>
              }
            </FormItem>
          )}
        />
        {/* ngày sinh */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full  h-full justify-end col-span-2">
              <div className={`flex justify-between items-center pb-2 ${!isEdit && "border-b-[1px] mt-4"}`}>
                <span className="text-base">Ngày sinh</span>
                <span className="tetx-two text-base font-bold">{formData?.birth ? format(formData?.birth, "MM-dd-yyyy") : "Chưa cập nhật"}</span>
              </div>
              {
                isEdit &&
                <div>
                  <FormControl>
                    <SelectDate
                      value={field.value}
                      setValue={field.onChange}
                      className="w-full"
                      title=""
                    />
                  </FormControl>
                </div>
              }
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="mt-3">
              <div className={`flex justify-between items-center pb-2 ${!isEdit && "border-b-[1px] mt-4"}`}>
                <span className="text-base">Giới tính</span>
                <span className="tetx-two text-base font-bold">{formData?.gender || "Chưa cập nhật"}</span>
              </div>
              {isEdit &&
                <div>
                  <FormControl>
                    <div className="flex items-center space-x-4">
                      <label>
                        <input
                          type="radio"
                          {...field}
                          value="Nam"
                          checked={field.value === "Nam"}
                          onChange={() => field.onChange("Nam")}
                        />
                        Nam
                      </label>
                      <label>
                        <input
                          type="radio"
                          {...field}
                          value="Nữ"
                          checked={field.value === "Nữ"}
                          onChange={() => field.onChange("Nữ")}
                        />
                        Nữ
                      </label>
                    </div>
                  </FormControl>
                  <div className="h-[18px] overflow-hidden">
                    <FormMessage />
                  </div>
                </div>
              }
            </FormItem>
          )}
        />
        <div className=" flex items-center justify-center gap-4 col-span-2 mt-10">
          <Button
            type="button"
            size={"lg"}
            className="bg-transparent bg-blue-200 rounded-lg hover:bg-blue-100 font-bold text-two"
            onClick={() => setEdit(!isEdit)}
          >
            Chỉnh sửa
          </Button>
          {isEdit &&
            <Button
              type="submit"
              size={"lg"}
              className=""
            >
              Cập nhật thông tin
            </Button>}
        </div>
      </form>
    </Form>
  );
}
