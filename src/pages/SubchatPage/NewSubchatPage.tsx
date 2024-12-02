import { useState } from "react";
import HeadBar from "../../components/Bar/HeadBar";
import Button from "../../components/Button/Button";
import TextField from "../../components/Input/TextField";
import DatePicker from "../../components/Input/DatePicker";

export default function NewSubchatPage() {
  const [planTitle, setPlanTitle] = useState("");
  const isButtonDisabled = planTitle.trim().length === 0;

  const handleNewSubchaat = () => {
    console.log("현재 입력된 그룹 이름:", planTitle);
  };

  return (
    <>
      <div className="bg-white h-screen overflow-y-auto">
        <HeadBar pagename="새 서브채팅" center={true} backbtn={true} />
        <div className="grid gap-7 px-4 py-5">
          <TextField
            value={planTitle}
            placeholder="제목을 입력하세요"
            hasLabel={true}
            label="제목"
            maxLength={25}
            onChange={setPlanTitle}
          />
          <DatePicker />
          <Button
            text="새 일정 생성"
            variant={isButtonDisabled ? "disabled" : "primary"}
            onClick={handleNewSubchaat}
          />
        </div>
      </div>
    </>
  );
}
