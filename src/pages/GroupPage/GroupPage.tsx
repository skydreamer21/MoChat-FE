import GroupBanner from "../../components/Banner/GroupBanner";
import GroupBar from "../../components/Bar/GroupBar";
import Chatting from "../../components/List/Chatting";

import FlyingUfoEmoji from "../../assets/emojis/flying-ufo.png";
import ChatInput from "../../components/Input/ChatInput";

export default function GroupPage() {
  return (
    <>
      <div className="bg-background h-screen overflow-y-auto">
        <div className="bg-primary">
          <GroupBar
            groupName="그룹 이름"
            memberCount={20}
            profileSrc="https://i.pinimg.com/originals/4a/e0/5c/4ae05c0640fb805a546468a96a1a3705.jpg"
            isWhite={false}
          />
          <GroupBanner
            text="서브 채팅으로 이동"
            subtext="일정을 확인하고 서브 채팅에 참여하세요!"
            emojiSrc={FlyingUfoEmoji}
          />
        </div>
        <Chatting />
      </div>
      <ChatInput />
    </>
  );
}
