import { fetchCountry } from "@/actions/setting";
import { Combobox } from "@/components/combobox";
import React, { useEffect, useState } from "react";

export default function SelectCountry({
  value = {},
  onChange = () => {},
  title = "",
  placeholder = "",
  className = "h-[80px] border-main ",
}) {
  const [option, setOption] = useState([]);
  useEffect(() => {
    optionsCountry();
  }, []);

  const optionsCountry = async () => {
    let res = await fetchCountry({ Id: 0 });
    let resN = res.map((x: any) => {
      return { ...x, value: x.Id, label: x.Name };
    });
    setOption(resN);
  };

  return (
    <Combobox
      value={value}
      setValue={onChange}
      options={option}
      title={title}
      placeholder={placeholder}
      className={className}
    />
  );
}
