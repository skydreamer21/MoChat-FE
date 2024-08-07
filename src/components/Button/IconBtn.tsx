import RightArrow from "../../assets/icons/right-arrow.svg?react";

interface ButtonProps {
  text: string;
  variant?: "primary" | "gray" | "white";
  icon?: React.ReactNode;
  onClick?: () => void;
}

const IconBtn = ({ text, variant = "primary", icon, onClick }: ButtonProps) => {
  const arrowColor = variant === "primary" ? "text-white" : "text-black-60";

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between flex-1 h-8 px-2 rounded-sm text-xs focus:outline-none ${
        variant === "primary"
          ? "bg-primary text-white"
          : variant === "gray"
            ? "bg-background text-black-12"
            : "bg-white text-black-12"
      }`}
    >
      {icon && <span className="w-6 h-6 mr-2">{icon}</span>}
      <span className="flex-grow text-left">{text}</span>
      <RightArrow className={`w-3 h-3 ml-2 fill-current ${arrowColor}`} />
    </button>
  );
};

export default IconBtn;
