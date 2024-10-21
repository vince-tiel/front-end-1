import clsx from "clsx";
import Image from "next/image";

interface Props {
  size?: "small" | "medium" | "large" | "extra-large";
  src: string;
  alt: string;
}

export const Avatar = ({ size = "medium", src, alt }: Props) => {
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
      sizeStyles = "w-[130px] h-[130px]";
      break;
  }

  return (
    <div className={clsx(sizeStyles, "bg-gray-400 rounded-full relative")}>
      <Image
        src={src ? src : "/assets/svg/barell.svg"}
        alt={alt}
        fill
        className="object-cover object-center rounded-full"
      />
    </div>
  );
};