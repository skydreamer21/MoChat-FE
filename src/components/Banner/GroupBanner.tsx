import RightArrow from "../../assets/icons/right-arrow.svg?react";

interface GroupBannerProps {
  text: string;
  subtext?: string;
  emojiSrc: string;
  onClick?: () => void;
}

const GroupBanner = ({
  text,
  subtext,
  emojiSrc,
  onClick,
}: GroupBannerProps) => {
  return (
    <div onClick={onClick} className="px-4 pt-1 pb-3 cursor-pointer">
      <div className="relative flex items-center px-3 py-2 bg-white rounded-sm">
        <img src={emojiSrc} alt="emoji" className="w-9 h-9" />
        <div className="text-sm px-2 truncate">
          <div className="font-semibold">{text}</div>
          <span className="text-black-60">{subtext}</span>
        </div>
        <RightArrow className="absolute right-3 w-4 h-4 text-black-60" />
      </div>
    </div>
  );
};

export default GroupBanner;
