import clsx from "clsx";
import Image from "next/image";
import { Spinner } from "../spinner/spinner";

interface Props {
  size?: "small" | "medium" | "large" | "extra-large";
  src: string;
  alt: string;
  isLoading?: boolean;
}

export const Avatar = ({ size = "medium", src, alt, isLoading }: Props) => {
  let sizeStyles: string = "";

  switch (size) {
    case "small":
      sizeStyles = "w-[24px] h-[24px]";
      break;
    case "medium": //default
      sizeStyles = "w-[34px] h-[34px]";
      break;
    case "large":
      sizeStyles = "w-[50px] h-[50px]";
      break;
    case "extra-large":
      sizeStyles = "w-[94px] h-[94px]";
      break;
  }

  return (
    <div
      className={clsx(
        sizeStyles,
        isLoading && "flex items-center justify-center",
        "bg-gray-300 rounded-full relative overflow-hidden"
      )}
    >
      <div
        className={clsx(
          isLoading ? "opacity-40" : "opacity-0",
          "absolute z-10 w-full h-full bg-white animate"
        )}
      />
      <Image
        src={src ? src : "/assets/svg/barell.svg"}
        alt={alt}
        fill
        className={clsx(
          isLoading && "blur-[2px]",
          "object-cover object-center rounded-full animate"
        )}
      />
      {isLoading && <Spinner className="relative z-20" />}
    </div>
  );
};