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
import SelectCountry from "@/components/select-country";
import { fetchFilterTour } from "@/actions/tour";
import { fetchCountry } from "@/actions/setting";

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
interface SearchFormProps extends React.ComponentProps<"form"> {
  setOpen: (open: boolean) => void;
  setIsLogin: (isLogin: boolean) => void;
}

export type LoginBodyType = z.TypeOf<typeof formSchema>;

export default function SearchFrom({ className }: SearchFormProps) {
  const [globalState, dispatch] = useGlobalState();
  const [loading, setLoading] = React.useState(false);
  const [country, setCountry] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      let res = await fetchCountry({ Id: 0 });
      setCountry(res);
    })();
  }, []);
  const router = useRouter();
  const startPlaceOptions = [
    { value: 1, label: "Hà Nội" },
    { value: 2, label: "Hồ Chí Minh" },
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
      let start = startPlaceOptions.find((x) => x.label === values.start);
      let end = country.find((x) => x.Name === values.end);
      const response = await fetchFilterTour({
        StartPlace: start?.value,
        EndPlace: end?.Id,
        Day: 0,
        PriceFrom: 0,
        PriceTo: 200000000,
        // Date: values.date,
      });
      console.log(response);
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
              {/* <FormLabel className="font-bold text-base">
                Nơi khởi hành
              </FormLabel> */}
              <FormControl>{/* <SelectComp value {...field} /> */}</FormControl>
              <FormMessage />
              <Combobox
                value={field.value}
                setValue={field.onChange}
                options={startPlaceOptions}
                title="Nơi khởi hành"
                placeholder="Chọn nơi khởi hành"
                className="h-[80px] border-main "
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="end"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full  h-full justify-end">
              {/* <FormLabel className="font-bold text-base">Điểm đến</FormLabel> */}
              <FormControl>{/* <SelectComp value {...field} /> */}</FormControl>
              <FormMessage />
              <SelectCountry
                value={field.value}
                onChange={field.onChange}
                // options={endPlaceOptions}
                title="Điếm đến"
                placeholder="Chọn điểm đến"
                className="h-[80px] border-main "
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full  h-full justify-end">
              {/* <FormLabel className="font-bold text-base">
                Ngày khởi hành
              </FormLabel> */}
              <FormMessage />

              <FormControl>
                <SelectDate
                  value={field.value}
                  setValue={field.onChange}
                  className="w-full h-[80px] border-main "
                  title="Ngày khởi hành"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex flex-col justify-end h-full">
          {" "}
          <Button
            type="submit"
            className="w-full bg-main h-[50px] md:h-[80px] hover:bg-main text-xl "
          >
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
