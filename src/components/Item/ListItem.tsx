import CheckMark from "../../assets/icons/check_mark.svg?react";
import CrossMark from "../../assets/icons/cross_mark.svg?react";
import BookMark from "../../assets/icons/bookmark.svg?react";

interface ListItemProps {
  title: string;
  dateRange: string;
  showStatus?: boolean;
  attendCount?: number;
  notAttCount?: number;
  onClick?: () => void;
}

const ListItem = ({
  title,
  dateRange,
  showStatus = true,
  attendCount,
  notAttCount,
  onClick,
}: ListItemProps) => {
  return (
    <div
      className="flex items-center justify-between px-5 py-1"
      onClick={onClick}
    >
      <div>
        <p className="font-medium text-black-20">{title}</p>
        {showStatus && (
          <div className="flex items-center gap-1 pt-1">
            <BookMark className="w-4 h-4" />
            <p className="text-sm text-black-84">{dateRange}</p>
          </div>
        )}
      </div>

      {showStatus ? (
        <div className="flex gap-3.5">
          <div className="flex items-center gap-1 text-green">
            <CheckMark className="w-4 h-4" />
            <span>{attendCount}</span>
          </div>
          <div className="flex items-center gap-1 text-red">
            <CrossMark className="w-4 h-4" />
            <span>{notAttCount}</span>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-sm text-black-84">{dateRange}</p>
        </div>
      )}
    </div>
  );
};

export default ListItem;
