import clsx from "clsx";
import React, { SyntheticEvent } from "react";

// Explicit prop definition
type Props = {
  onChange: (evt: SyntheticEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
  value?: string;
  className?: string;
};

const Input = ({
  onChange,
  name,
  placeholder,
  value = "",
  className = "",
}: Props) => {
  return (
    <input
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      value={value}
      className={clsx("w-full focus:outline-none", className)}
    />
  );
};

export default Input;
