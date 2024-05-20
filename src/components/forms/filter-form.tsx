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
import { fetchFilterTour } from "@/actions/tour";
import { fetchCountry } from "@/actions/setting";
import { format } from "date-fns";
import SelectCountry from "@/components/select-country";

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

export type FilterType = z.TypeOf<typeof formSchema>;

export default function FilterTour({ className, setTour }: FilterForm) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const [country, setCountry] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      let res = await fetchCountry({ Id: 0 });
      setCountry(res);
    })();
  }, []);
  const startPlaceOptions = [
    { value: 1, label: "Hà Nội" },
    { value: 2, label: "Hồ Chí Minh" },
  ];

  const form = useForm<FilterType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      start: "",
      end: "",
      date: new Date(),
      price: [1, 200],
    },
  });
  const debounce = (func: Function, delay: number) => {
    let timer: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const handleFormChange = debounce(async (values: FilterType) => {
    try {
      setLoading(true);
      let start = startPlaceOptions.find((x) => x.label === values.start);
      let end = country.find((x: any) => x.Name === values.end);
      const response = await fetchFilterTour({
        StartPlace: start?.value,
        EndPlace: end?.Id,
        Day: "",
        PriceFrom: 0,
        PriceTo: 200000000,
        Date: format(values.date, "MM"),
      });
      setTour(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, 1000);

  React.useEffect(() => {
    const subscription = form.watch(handleFormChange);
    return () => {
      subscription.unsubscribe();
    };
  }, [form.watch, startPlaceOptions, country]);

  return (
    <Form {...form}>
      <form
        // onSubmit={form.handleSubmit(onSubmit)}
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
                title=""
                placeholder="Chọn nơi khởi hành"
                textSize="text-lg"
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
              <SelectCountry
                value={field.value}
                onChange={field.onChange}
                // options={endPlaceOptions}
                placeholder="Chọn điểm đến"
                className="textlg"
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
