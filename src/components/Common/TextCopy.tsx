interface TextCopyProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

const TextCopy = ({ value, label, icon }: TextCopyProps) => {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(value).then(
      () => {
        console.log("코드가 클립보드에 복사되었습니다.");
      },
      () => {
        console.log("복사에 실패했습니다.");
      }
    );
  };

  return (
    <div className="text-black-20 px-1.5">
      <div className="flex justify-between">
        <label className="block font-semibold mb-2">{label}</label>
      </div>
      <div className="flex items-center border border-gray-light rounded-md px-3 py-2 bg-background">
        {icon && <span className="w-6 h-6 mr-3">{icon}</span>}
        <span className="flex-1 text-gray-dark">{value}</span>
        <button onClick={handleCopyClick} className="ml-3 text-primary">
          복사
        </button>
      </div>
    </div>
  );
};

export default TextCopy;
