import GroupBar from "../../components/Bar/GroupBar";
import TitleBar from "../../components/Bar/TitleBar";
import IconBtn from "../../components/Button/IconBtn";

import ThunderIcon from "../../assets/icons/thunder.svg?react";
import EyesIcon from "../../assets/icons/eyes.svg?react";
import DatePicker from "../../components/Input/DatePicker";

export default function SubchatPage() {
  const handleDate = (startDate: string, endDate: string) => {
    console.log("새 일정 생성:", { startDate, endDate });
  };

  return (
    <>
      <div className="bg-background h-screen overflow-y-auto">
        <div className="bg-primary">
          <GroupBar
            groupName="그룹 이름"
            memberCount={20}
            profileSrc="https://i.pinimg.com/originals/4a/e0/5c/4ae05c0640fb805a546468a96a1a3705.jpg"
          />
          <div className="text-white">
            <TitleBar pagename="서브 채팅" isWhite={false} />
            <div className="flex gap-4 mx-4 pb-4">
              <IconBtn
                text="새 서브 채팅 생성"
                variant="gray"
                icon={<ThunderIcon />}
              />
              <IconBtn text="불참 일정 확인" icon={<EyesIcon />} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
