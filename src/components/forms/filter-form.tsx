"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
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

import { Combobox } from "@/components/combobox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Slider } from "@/components/ui/slider";

const formSchema = z.object({
  start: z.string().optional(),
  end: z.string().optional(),
  date: z.date().optional(),
  price: z.array(z.number()).optional(),
});

//   .strict();
interface FilterForm extends React.ComponentProps<"form"> {
  setOpen: (open: boolean) => void;
  setIsLogin: (isLogin: boolean) => void;
}

export type LoginBodyType = z.TypeOf<typeof formSchema>;

export default function FilterTour({
  className,
  setOpen,
  setIsLogin,
}: FilterForm) {
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
      price: [1, 200],
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
        className={cn("flex flex-col  !w-full h-full  gap-8", className)}
        noValidate
      >
        <FormField
          control={form.control}
          name="start"
          render={({ field }) => (
            <FormItem className="flex flex-col h-full justify-end">
              <FormLabel className="font-bold text-base text-blue-default">
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
              <FormLabel className="font-bold text-base text-blue-default">
                Điểm đến
              </FormLabel>
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
              <FormLabel className="font-bold text-base text-blue-default">
                Số ngày
              </FormLabel>
              <FormMessage />

              <FormControl>
                <ToggleGroup
                  type="multiple"
                  variant="outline"
                  className="grid grid-cols-2 gap-2"
                  onValueChange={(value) => {
                    console.log(value);
                  }}
                >
                  <ToggleGroupItem
                    value="1"
                    aria-label="Toggle bold"
                    className="data-[state=on]:bg-main data-[state=on]:text-white"
                  >
                    1-3 ngày
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="2"
                    aria-label="Toggle bold"
                    className="data-[state=on]:bg-main data-[state=on]:text-white"
                  >
                    4-7 ngày
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="3"
                    aria-label="Toggle italic"
                    className="data-[state=on]:bg-main data-[state=on]:text-white"
                  >
                    8-14 ngày
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="4"
                    aria-label="Toggle strikethrough "
                    className="data-[state=on]:bg-main data-[state=on]:text-white"
                  >
                    Trên 14 ngày
                  </ToggleGroupItem>
                </ToggleGroup>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full  h-full justify-end">
              <FormLabel className="font-bold text-base text-blue-default">
                Ngân sách
              </FormLabel>
              <FormMessage />

              <FormControl>
                <Slider
                  {...field}
                  value={field.value}
                  max={200}
                  min={1}
                  step={1}
                  onValueChange={(value) => {
                    field.onChange(value);
                  }}
                  className={cn("w-[100%] ", className)}
                  isMutil={true}
                />
              </FormControl>
              <span>{`${field.value[0]} triệu - ${field.value[1]} triệu`}</span>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="vehicle"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full  h-full justify-end">
              <FormLabel className="font-bold text-base text-blue-default">
                Phương tiện
              </FormLabel>
              <FormMessage />

              <FormControl>
                <ToggleGroup
                  type="multiple"
                  variant="outline"
                  className="grid grid-cols-2 gap-2"
                  onValueChange={(value) => {
                    console.log(value);
                  }}
                >
                  <ToggleGroupItem
                    value="1"
                    aria-label="Toggle bold"
                    className="data-[state=on]:bg-main data-[state=on]:text-white"
                  >
                    Máy bay
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="2"
                    aria-label="Toggle bold"
                    className="data-[state=on]:bg-main data-[state=on]:text-white"
                  >
                    Ô tô
                  </ToggleGroupItem>
                </ToggleGroup>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
