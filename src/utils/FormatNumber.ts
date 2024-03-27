export const FormatNumber = (
  num: number | string | null | undefined
): string => {
  if (num === null || num === "" || typeof num === "undefined") num = "";
  if (num === "") return num;
  let val: string;
  if (typeof num === "string") {
    val = num.replaceAll(",", "");
  } else {
    val = num.toString();
  }
  let datatam = parseInt(val)
    .toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  return datatam.replaceAll(".", ",");
};
