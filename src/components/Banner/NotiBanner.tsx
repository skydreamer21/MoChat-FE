interface NotiBannerProps {
  text: string;
  highlightText: string;
  emojiSrc: string;
}

const NotiBanner = ({ text, highlightText, emojiSrc }: NotiBannerProps) => {
  const parts = text.split(highlightText);

  return (
    <div className="relative flex items-center justify-between px-4 py-2 mx-4 my-2 bg-white rounded-sm">
      <span className="text-sm font-semibold">
        {parts[0]}
        <span className="text-primary">{highlightText}</span>
        {parts[1]}
      </span>
      <img
        src={emojiSrc}
        alt="emoji"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10"
      />
    </div>
  );
};

export default NotiBanner;
