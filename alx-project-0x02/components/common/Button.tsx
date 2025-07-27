import { type ButtonProps } from "@/interfaces";
import clsx from "clsx";

const Button = ({ size = "medium", shape = "rounded-md", children, onClick }: ButtonProps) => {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={clsx("bg-blue-600 text-white", sizeClasses[size], shape)}
    >
      {children}
    </button>
  );
};

export default Button;
