export const FormatMoneyVND = (value: number): string => {
  if (value)
    return value.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  return "0";
};
