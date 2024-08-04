interface ButtonProps {
  text: string;
  variant?: "primary" | "disabled" | "gray";
  onClick?: () => void;
}

const Button = ({ text, variant = "primary", onClick }: ButtonProps) => {
  const isDisabled = variant === "disabled";
  return (
    <button
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
      className={`flex-1 h-12 rounded-lg focus:outline-none ${
        variant === "primary"
          ? "bg-primary text-white"
          : variant === "disabled"
            ? "bg-gray-dark text-white cursor-not-allowed"
            : "bg-background text-black-84"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
