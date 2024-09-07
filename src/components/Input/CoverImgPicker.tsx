import { useState, ChangeEvent } from "react";

import AddPicIcon from "../../assets/icons/add-pic.svg?react";

const CoverImgPicker = () => {
  const [coverImg, setCoverImg] = useState<string | null>(null);

  const handleImgUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setCoverImg(objectURL);

      return () => URL.revokeObjectURL(objectURL); // 컴포넌트가 언마운트될 때 URL 객체 해제
    }
  };

  return (
    <div className="flex flex-col px-12">
      <label htmlFor="cover-img" className="cursor-pointer">
        <div className="relative aspect-square rounded-md border border-background shadow-lg shadow-background">
          {coverImg && (
            <img
              src={coverImg}
              alt="커버 사진 미리보기"
              className="w-full h-full object-cover rounded-md"
            />
          )}
          <AddPicIcon className="absolute bottom-4 right-4 w-10 h-10" />
        </div>
      </label>
      <input
        id="cover-img"
        type="file"
        accept="image/*"
        onChange={handleImgUpload}
        className="hidden"
      />
    </div>
  );
};

export default CoverImgPicker;
