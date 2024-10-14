import RightArrow from "../../assets/icons/right-arrow.svg?react";

interface TitleBarProps {
  pagename: string;
  isWhite?: boolean;
  isLink?: boolean;
  onClick?: () => void;
}

const TitleBar = ({
  pagename,
  isWhite = true,
  isLink = false,
  onClick,
}: TitleBarProps) => {
  return (
    <div>
      <div
        className={`${isWhite && "bg-white"} relative flex items-center px-5 py-3`}
      >
        <div className="flex-1 text-left flex items-center cursor-pointer">
          <span className="font-bold" onClick={isLink ? onClick : undefined}>
            {pagename}
          </span>
          {isLink && (
            <RightArrow
              className="ml-2 w-3.5 h-3.5 text-black-60"
              onClick={onClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
