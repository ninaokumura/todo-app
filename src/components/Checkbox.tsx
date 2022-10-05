import checkIcon from "../assets/images/icon-check.svg";
// Implicit props definition using JSX.IntrinsicElements for generic components

import clsx from "clsx";

type Props = JSX.IntrinsicElements["input"];

const Checkbox = ({ className, type, ...props }: Props) => {
  return (
    <label className="cursor-pointer">
      <input type="checkbox" {...props} className="opacity-0" />
      <div
        className={clsx(
          "dark:border-dark:text-dark-grayish-blue flex h-[22px] w-[22px] items-center justify-center rounded-full border border-dark-grayish-blue focus:border-4",
          {
            "border-none bg-gradient-to-br from-check-gradient1 to-check-gradient2":
              props.checked,
          },

          className
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="9"
          className={clsx(
            "stroke-very-light-gray dark:stroke-very-dark-desaturated-blue",
            {
              "dark:stroke-very-light-gray": props.checked,
            }
          )}
        >
          <path fill="none" stroke-width="2" d="M1 4.304L3.696 7l6-6" />
        </svg>
      </div>
    </label>
  );
};

export default Checkbox;
