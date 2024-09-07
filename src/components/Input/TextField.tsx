interface TextFieldProps {
  value: string;
  placeholder: string;
  hasLabel?: boolean;
  label?: string;
  maxLength: number;
  onChange: (value: string) => void;
}

const TextField = ({
  value,
  placeholder,
  hasLabel = false,
  label,
  maxLength,
  onChange,
}: TextFieldProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= maxLength) {
      onChange(e.target.value); // 입력값이 변경되면 부모 컴포넌트로 전달
    }
  };

  return (
    <div className="text-black-20 px-1.5">
      {hasLabel && (
        <div className="flex justify-between">
          <label className="block font-semibold mb-2">{label}</label>
          <span className="text-black-84">
            {value.length > 0
              ? `${value.length}/${maxLength}`
              : `0/${maxLength}`}
          </span>
        </div>
      )}
      <div className="flex items-center">
        <input
          type="text"
          className="flex-1 px-3 py-2 border border-gray-light rounded-md focus:outline-none placeholder-black-84"
          value={value}
          onChange={handleInputChange}
          maxLength={maxLength}
          placeholder={placeholder}
          spellCheck={false}
        />
      </div>
    </div>
  );
};

export default TextField;
