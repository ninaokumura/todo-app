import clsx from "clsx";
import React, { SyntheticEvent } from "react";

// Explicit prop definition
type Props = {
  onChange: (evt: SyntheticEvent<HTMLInputElement>) => void;
  onKeyDown: (evt: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
  value?: string;
  className?: string;
};

const Input = ({
  onChange,
  onKeyDown,
  name,
  placeholder,
  value = "",
  className = "",
}: Props) => {
  return (
    <input
      onKeyDown={onKeyDown}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      value={value}
      className={clsx(
        "w-full px-10 focus:outline-none dark:bg-very-dark-desaturated-blue",
        className
      )}
    />
  );
};

export default Input;
