import checkIcon from "../assets/images/icon-check.svg";
// Implicit props definition using JSX.IntrinsicElements for generic components

import clsx from "clsx";

type Props = JSX.IntrinsicElements["input"];

const Checkbox = ({ className, type, ...props }: Props) => {
  return (
    <label role="button">
      <input type="checkbox" {...props} className="opacity-0" />
      <div
        className={clsx(
          "flex h-5 w-5 items-center justify-center rounded-full border border-very-light-grayish-blue",
          {
            "border-none bg-gradient-to-br from-check-gradient1 to-check-gradient2":
              props.checked,
          },
          className
        )}
      >
        <img src={checkIcon} alt="check icon" />
      </div>
    </label>
  );
};

export default Checkbox;
