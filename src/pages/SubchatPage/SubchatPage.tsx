import { useNavigate } from "react-router-dom";
import GroupBar from "../../components/Bar/GroupBar";
import TitleBar from "../../components/Bar/TitleBar";
import IconBtn from "../../components/Button/IconBtn";
import ListItem from "../../components/Item/ListItem";

import ThunderIcon from "../../assets/icons/thunder.svg?react";
import EyesIcon from "../../assets/icons/eyes.svg?react";

const noResPlans = [
  { title: "새로운 일정 1", dateRange: "2024. 7. 28 ~ 2024. 7. 29" },
  { title: "새로운 일정임", dateRange: "2024. 8. 12" },
  { title: "진짜 새로운 일정 99 데이트로 하자", dateRange: "2024. 9. 9" },
];

const attendPlans = [
  {
    title: "일정 제목이 서브 채팅 이름",
    dateRange: "2024. 6. 30 ~ 2024. 12. 1",
    attendCount: 12,
    notAttCount: 3,
  },
  {
    title: "서브 채팅 이름이에요",
    dateRange: "2024. 7. 1",
    attendCount: 9,
    notAttCount: 7,
  },
  {
    title: "여름이니까 빠지 가실 분",
    dateRange: "2024. 7. 25",
    attendCount: 4,
    notAttCount: 9,
  },
];

export default function SubchatPage() {
  const navigate = useNavigate();

  const handleNewPlanClick = () => {
    console.log("새로운 등록 일정 === 새 서브 채팅 생성");
  };

  const handleNoResPlanClick = () => {
    // navigate("/subchat/nores");
    console.log("응답하지 않을 일정 리스트로 이동");
  };

  const handleAttendPlanClick = () => {
    // navigate("/subchat/attend");
    console.log("참석하는 일정 리스트로 이동");
  };

  const handleNotAttPlanClick = () => {
    console.log("참석하지 않는 일정 리스트로 이동");
  };

  const handleListItemClick = (title: string) => {
    console.log(`현재 선택한 일정의 타이틀: ${title}`);
  };

  return (
    <>
      <div className="bg-white h-screen overflow-y-auto">
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
                onClick={handleNewPlanClick}
              />
              <IconBtn
                text="불참 일정 확인"
                icon={<EyesIcon />}
                onClick={handleNotAttPlanClick}
              />
            </div>
          </div>
        </div>
        <div>
          <TitleBar
            pagename="무응답 일정"
            isLink={true}
            onClick={handleNoResPlanClick}
          />
          <div className="flex flex-col gap-3 pb-2">
            {noResPlans.map((plan, index) => (
              <ListItem
                key={index}
                title={plan.title}
                dateRange={plan.dateRange}
                showStatus={false}
                onClick={() => handleListItemClick(plan.title)}
              />
            ))}
          </div>

          <div className="my-5"></div>

          <TitleBar
            pagename="참여 일정"
            isLink={true}
            onClick={handleAttendPlanClick}
          />
          <div className="flex flex-col gap-3 pb-2">
            {attendPlans.map((plan, index) => (
              <ListItem
                key={index}
                title={plan.title}
                dateRange={plan.dateRange}
                attendCount={plan.attendCount}
                notAttCount={plan.notAttCount}
                onClick={() => handleListItemClick(plan.title)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
