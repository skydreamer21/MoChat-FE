import { useNavigate } from "react-router-dom";

import LeftArrow from "../../assets/icons/left-arrow.svg?react";
import SettingIcon from "../../assets/icons/setting.svg?react";
import MemberIcon from "../../assets/icons/member.svg?react"; // 나의 프로필 아이콘 추가

interface GroupBarProps {
  groupName: string;
  memberCount: number;
  profileSrc: string;
  isWhite?: boolean;
}

export default function GroupBar({
  groupName,
  memberCount,
  profileSrc,
  isWhite = true,
}: GroupBarProps) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const iconColor = isWhite ? "currentColor" : "white";

  return (
    <div>
      <div
        className={`${isWhite ? "bg-white" : "bg-primary text-white"} relative flex items-center px-5 py-3`}
      >
        <div className="flex items-center">
          <LeftArrow
            onClick={goBack}
            className="cursor-pointer mr-3"
            style={{ fill: iconColor }}
          />
        </div>

        <div className="flex-1 text-left">
          <span className="text-lg font-bold">{groupName}</span>
        </div>

        <div className="absolute right-4 flex items-center space-x-3">
          <div className="flex items-center space-x-1 opacity-40">
            <MemberIcon className="cursor-pointer" />
            <span className="text-sm font-semibold">{memberCount}</span>
          </div>
          <div className="">
            <img
              src={profileSrc}
              alt="profile img"
              className="w-6 h-6 rounded-full object-cover cursor-pointer border border-background"
            />
          </div>
          <SettingIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
