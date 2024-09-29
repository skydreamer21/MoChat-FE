import { useState } from "react";
import HeadBar from "../../components/Bar/HeadBar";
import Button from "../../components/Button/Button";
import CoverImgPicker from "../../components/Input/CoverImgPicker";
import TextField from "../../components/Input/TextField";

export default function NewGroupPage() {
  const [groupName, setGroupName] = useState("");
  const isButtonDisabled = groupName.trim().length === 0;

  const handleNewGroup = () => {
    console.log("현재 입력된 그룹 이름:", groupName);
  };

  return (
    <>
      <div className="bg-white h-screen overflow-y-auto">
        <HeadBar pagename="새 그룹" center={true} backbtn={true} />
        <div className="grid gap-7 px-4 py-5">
          <CoverImgPicker />
          <TextField
            value={groupName}
            placeholder="새 그룹 이름"
            hasLabel={true}
            label="그룹 이름"
            maxLength={25}
            onChange={setGroupName}
          />
          <Button
            text="새 그룹 생성"
            variant={isButtonDisabled ? "disabled" : "primary"}
            onClick={handleNewGroup}
          />
        </div>
      </div>
    </>
  );
}
