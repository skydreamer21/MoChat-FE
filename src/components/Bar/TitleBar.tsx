interface TitleBarProps {
  pagename: string;
  isWhite?: boolean;
}

export default function TitleBar({ pagename, isWhite = true }: TitleBarProps) {
  return (
    <div>
      <div
        className={`${isWhite ? "bg-white" : "bg-background"} relative flex items-center px-5 py-3`}
      >
        <div className="flex-1 text-left">
          <span className="font-bold">{pagename}</span>
        </div>
      </div>
    </div>
  );
}
