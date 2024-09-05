import { useState, useRef } from "react";
import PicIcon from "../../assets/icons/pic.svg?react";
import SendIcon from "../../assets/icons/send.svg?react";

export default function ChatInput() {
  const [inputValue, setInputValue] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      console.log("보낸 메시지:", inputValue);
      setInputValue("");
    }
  };

  const handlePicIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      console.log("첨부된 파일:", file.name);
      // 파일 처리 로직 추가 (예: 업로드)
    }
  };

  return (
    <div className="fixed bottom-0 w-full shadow-nav px-4 pt-2.5 pb-6 bg-white flex items-center">
      <div className="relative flex-1">
        <input
          type="text"
          className="w-full rounded-full px-4 py-2 text-sm bg-gray-light caret-primary focus:outline-none"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
          spellCheck={false}
        />
        <PicIcon
          className="w-6 h-6 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={handlePicIconClick}
        />
      </div>

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      <button onClick={handleSendMessage} className="ml-2">
        <SendIcon
          className={`w-6 h-6 ${inputValue.trim() ? "text-primary" : "text-black-84"}`}
        />
      </button>
    </div>
  );
}
