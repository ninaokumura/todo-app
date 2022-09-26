import React from "react";

type Props = {
  onChange: (str: string) => void;
  placeholder: string;
  name: string;
  value?: string;
};

export default function Input({
  onChange,
  name,
  placeholder,
  value = "",
}: Props) {
  return (
    <input
      onChange={event => onChange(event.target.value)}
      name={name}
      placeholder={placeholder}
      value={value}
      className="w-full rounded border bg-very-light-gray p-2.5 text-sm sm:p-4"
    />
  );
}
