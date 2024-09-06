interface ChatItemProps {
  sender: string;
  profileSrc: string;
  message: string;
  timestamp: string;
  isMine: boolean;
}

const ChatItem = ({
  sender,
  profileSrc,
  message,
  timestamp,
  isMine,
}: ChatItemProps) => {
  return (
    <div className={`flex ${isMine ? "justify-end" : "justify-start"} mb-4`}>
      {!isMine && (
        <div className="flex-shrink-0 mr-2">
          <img
            src={profileSrc}
            alt="profile img"
            className="w-7 h-7 rounded-full object-cover cursor-pointer"
          />
        </div>
      )}
      <div>
        {!isMine && <p className="text-sm mb-1">{sender}</p>}
        <div className={`flex ${isMine ? "flex-row-reverse" : ""} items-end`}>
          <div
            className={`inline-block text-sm bg-white max-w-[80%] px-4 py-2.5 rounded-b-lg ${isMine ? "rounded-tl-lg" : "rounded-tr-lg"}`}
          >
            {message}
          </div>
          <div className={`text-xs text-gray-dark ${isMine ? "mr-2" : "ml-2"}`}>
            {timestamp}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
