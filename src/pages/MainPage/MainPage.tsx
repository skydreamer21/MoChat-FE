import NotiBanner from "../../components/Banner/NotiBanner";
import HeadBar from "../../components/Bar/HeadBar";
import NavBar from "../../components/Bar/NavBar";
import partyingFaceEmoji from "../../assets/emojis/partying-face.png";

export default function MainPage() {
  return (
    <>
      <div className="bg-background h-full">
        <HeadBar pagename="홈" isWhite={false}></HeadBar>
        <NotiBanner
          text="이제 모챗에서 참여할 일정의 채팅만 확인하세요!"
          highlightText="모챗"
          emojiSrc={partyingFaceEmoji}
        />
      </div>
      <NavBar />
    </>
  );
}
