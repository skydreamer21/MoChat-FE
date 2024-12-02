import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NotiBanner from "../../components/Banner/NotiBanner";
import HeadBar from "../../components/Bar/HeadBar";
import NavBar from "../../components/Bar/NavBar";
import IconBtn from "../../components/Button/IconBtn";
import TitleBar from "../../components/Bar/TitleBar";
import GroupItem from "../../components/Item/GroupItem";

import PartyingFaceEmoji from "../../assets/emojis/partying-face.png";
import TicketIcon from "../../assets/icons/ticket.svg?react";
import PeopleIcon from "../../assets/icons/people.svg?react";
import OverlayModal from "../../components/Modal/OverlayModal";
import TextField from "../../components/Input/TextField";

const groups = [
  {
    groupId: 1,
    groupName: "무엇이든 축하하는 그룹",
    memberCnt: "20",
    coverImg:
      "https://i.pinimg.com/564x/aa/a8/c8/aaa8c83eedd7e0321ee132f4e357d5aa.jpg",
  },
  {
    groupId: 2,
    groupName: "겨울에만 만나는 모임",
    memberCnt: "72",
    coverImg:
      "https://i.pinimg.com/564x/e2/75/e5/e275e53b1b69f79fcc5fdbab697e9692.jpg",
  },
  {
    groupId: 3,
    groupName: "그룹 이름이 매우매우 길때 어떡함",
    memberCnt: "99",
    coverImg: "",
  },
  {
    groupId: 4,
    groupName: "그룹 이름",
    memberCnt: "29",
    coverImg: "",
  },
];

export default function MainPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inviteCode, setInviteCode] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleTicketBtnClick = () => {
    openModal();
  };

  const handleConfirmTicket = () => {
    console.log("입력된 초대 코드:", inviteCode);
    closeModal();
  };

  const handleNewGroupBtnClick = () => {
    navigate("group/post");
  };

  const handleGroupClick = (groupId: number) => {
    navigate(`/group/${groupId}`);
  };

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
            <IconBtn
              text="초대코드 입력"
              icon={<TicketIcon />}
              onClick={handleTicketBtnClick}
            />
            <IconBtn
              text="새 그룹 생성"
              variant="gray"
              icon={<PeopleIcon />}
              onClick={handleNewGroupBtnClick}
            />
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
                  onClick={() => handleGroupClick(group.groupId)}
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

      <OverlayModal
        title="초대코드 입력"
        isOpen={isModalOpen}
        onClose={closeModal}
        confirmText="입장"
        confirmDisabled={!inviteCode}
        onConfirm={handleConfirmTicket}
      >
        <TextField
          value={inviteCode}
          placeholder="초대코드"
          maxLength={10}
          onChange={setInviteCode}
        />
      </OverlayModal>
    </>
  );
}
