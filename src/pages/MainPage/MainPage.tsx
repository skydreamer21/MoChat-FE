import NotiBanner from "../../components/Banner/NotiBanner";
import HeadBar from "../../components/Bar/HeadBar";
import NavBar from "../../components/Bar/NavBar";
import IconBtn from "../../components/Button/IconBtn";
import TitleBar from "../../components/Bar/TitleBar";
import GroupItem from "../../components/Item/GroupItem";

import PartyingFaceEmoji from "../../assets/emojis/partying-face.png";
import TicketIcon from "../../assets/icons/ticket.svg?react";
import PeopleIcon from "../../assets/icons/people.svg?react";

const groups = [
  {
    groupName: "무엇이든 축하하는 그룹",
    memberCnt: "20",
    coverImg:
      "https://i.pinimg.com/564x/aa/a8/c8/aaa8c83eedd7e0321ee132f4e357d5aa.jpg",
  },
  {
    groupName: "겨울에만 만나는 모임",
    memberCnt: "72",
    coverImg:
      "https://i.pinimg.com/564x/e2/75/e5/e275e53b1b69f79fcc5fdbab697e9692.jpg",
  },
  {
    groupName: "그룹 이름이 매우매우 길때 어떡함",
    memberCnt: "99",
    coverImg: "https://via.placeholder.com/156",
  },
  {
    groupName: "그룹 이름",
    memberCnt: "29",
  },
];

export default function MainPage() {
  return (
    <>
      <div className="bg-white h-screen overflow-y-auto">
        <div className="bg-background">
          <HeadBar pagename="홈" isWhite={false} />
          <NotiBanner
            text="이제 모챗에서 참여할 일정의 채팅만 확인하세요!"
            highlightText="모챗"
            emojiSrc={PartyingFaceEmoji}
          />
          <div className="flex gap-4 mx-4 mt-4 pb-4">
            <IconBtn text="초대코드 입력" icon={<TicketIcon />} />
            <IconBtn text="새 그룹 생성" variant="gray" icon={<PeopleIcon />} />
          </div>
        </div>
        <div>
          <TitleBar pagename="나의 그룹" />
          <div className="grid grid-cols-2 gap-4 mb-2 mx-4 pb-28">
            {groups.length > 0 ? (
              groups.map((group, index) => (
                <GroupItem
                  key={index}
                  groupName={group.groupName}
                  memberCnt={group.memberCnt}
                  coverImg={group.coverImg}
                />
              ))
            ) : (
              <div className="col-span-2 text-center text-gray-dark mt-12">
                가입한 그룹이 없습니다.
              </div>
            )}
          </div>
        </div>
      </div>
      <NavBar />
    </>
  );
}
