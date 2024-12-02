import { useNavigate } from "react-router-dom";
import HeadBar from "../../components/Bar/HeadBar";
import Button from "../../components/Button/Button";
import TextCopy from "../../components/Common/TextCopy";

import Confetti from "react-confetti";
import TicketIcon from "../../assets/icons/ticket.svg?react";

const group = {
  groupName: "괜찮지 않은 사람들",
  coverImg:
    "https://i.pinimg.com/564x/09/e9/b7/09e9b747ef510af806bb927a9eec708a.jpg",
  inviteCode: "CKDJF23DFG",
};

export default function GroupSuccessPage() {
  const navigate = useNavigate();

  const handleGroupStart = () => {
    console.log("시작 버튼 클릭");
    // navigate(`/group/${groupId}`);
    navigate("/");
  };

  return (
    <>
      <div className="h-screen overflow-y-auto">
        <HeadBar pagename={group.groupName} />
        <div className="grid gap-7 px-4 py-5">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={300}
            gravity={0.9}
            colors={["#FFDF6C", "#FFB646", "#FFF"]}
            wind={0.02}
            recycle={false}
          />

          <div className="relative mx-12 aspect-square rounded-md border border-background shadow-lg shadow-background">
            <img
              src={group.coverImg}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <TextCopy
            label="초대코드"
            value={group.inviteCode}
            icon={<TicketIcon />}
          />
          <Button text="프로필 설정하고 시작" onClick={handleGroupStart} />
        </div>
      </div>
    </>
  );
}
