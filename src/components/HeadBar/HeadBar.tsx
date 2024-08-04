import { useNavigate } from "react-router-dom";

import LeftArrow from "../../assets/icons/left-arrow.svg?react";
import SettingIcon from "../../assets/icons/setting.svg?react";

interface HeadBarProps {
  pagename: string;
  center?: boolean;
  backbtn?: boolean;
  setbtn?: boolean;
}

export default function HeadBar({
  pagename,
  center = false,
  backbtn = false,
  setbtn = false,
}: HeadBarProps) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
      <div className="bg-white relative flex items-center px-5 py-3">
        <div className="absolute left-4">
          {backbtn ? (
            <LeftArrow onClick={goBack} className="cursor-pointer" />
          ) : null}
        </div>

        <div className={`flex-1 ${center ? "text-center" : "text-left"}`}>
          <span className="text-lg font-semibold">{pagename}</span>
        </div>

        <div className="absolute right-4">
          {setbtn ? <SettingIcon className="cursor-pointer" /> : null}
        </div>
      </div>
    </div>
  );
}
