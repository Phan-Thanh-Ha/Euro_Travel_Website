import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface RadioCompProps {
  data: {
    Id: number;
    Title: string;
  }[];
  onSelect: (item: { Id: number; Title: string }) => void;
  className?: string;
}

const RadioComp: React.FC<RadioCompProps> = ({ data, onSelect, className }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (value: string) => {
    setSelectedValue(value);
    const selectedItem = data.find((item) => item.Id.toString() === value);
    if (selectedItem) {
      onSelect(selectedItem);
    }
  };

  return (
    <RadioGroup
      value={selectedValue}
      onValueChange={handleChange}
      className={className}
    >
      {data.map((item) => (
        <label key={item.Id}>
          <RadioGroupItem value={item.Id.toString()} />
          <span>{item.Title}</span>
        </label>
      ))}
    </RadioGroup>
  );
};

export default RadioComp;
