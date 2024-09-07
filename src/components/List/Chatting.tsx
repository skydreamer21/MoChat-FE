import ChatItem from "../Item/ChatItem";

const messages = [
  {
    sender: "사용자1",
    profileSrc:
      "https://i.pinimg.com/736x/28/1e/6e/281e6ebf88952cf8eee3f5e764a5b0be.jpg",
    message: "안녕하세요!",
    timestamp: "오전 9:41",
    isMine: false,
  },
  {
    sender: "사용자2",
    profileSrc:
      "https://i.pinimg.com/474x/0e/d6/9f/0ed69ff1138c245d2bf34f9d2d9d1afe.jpg",
    message: "반갑습니다.",
    timestamp: "오전 9:42",
    isMine: false,
  },
  {
    sender: "나",
    profileSrc: "",
    message: "안녕하세요!",
    timestamp: "오전 9:43",
    isMine: true,
  },
  {
    sender: "나",
    profileSrc: "",
    message: "채팅이 길어지면 어떡함 엄청 길면 어떡함 엄청 엄청 길수도 있잖아",
    timestamp: "오전 9:43",
    isMine: true,
  },
  // 더 많은 메시지
];

const Chatting = () => {
  return (
    <div className="p-4 text-black-20">
      {messages.map((msg, index) => (
        <ChatItem
          key={index}
          sender={msg.sender}
          profileSrc={msg.profileSrc}
          message={msg.message}
          timestamp={msg.timestamp}
          isMine={msg.isMine}
        />
      ))}
    </div>
  );
};

export default Chatting;
