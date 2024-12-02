import Member from "../../assets/icons/member.svg?react";

interface GroupItemProps {
  groupName: string;
  memberCnt: string;
  coverImg?: string;
  onClick?: () => void;
}

const GroupItem = ({
  groupName,
  memberCnt,
  coverImg,
  onClick,
}: GroupItemProps) => {
  return (
    <div className="flex flex-col gap-1" onClick={onClick}>
      <div className="relative w-full aspect-square rounded-md border border-gray-light">
        {coverImg && (
          <img
            src={coverImg}
            alt={`${groupName} cover img`}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
          />
        )}
      </div>
      <div className="flex flex-col pt-1">
        <div className="text-sm text-black-20 font-semibold truncate">
          {groupName}
        </div>
        <div className="flex items-center gap-1 text-xs text-black-84">
          <Member />
          <span>{memberCnt}</span>
        </div>
      </div>
    </div>
  );
};

export default GroupItem;
