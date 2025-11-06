import { useRef, ChangeEvent } from "react";
import * as S from "./style"
import imageIcon from "@/assets/icons/picture.png";

interface ImageUploadProps {
  image: File | null;
  onImageChange: (file: File | null) => void;
  placeholder?: string;
}

const ImageUpload = ({
  image,
  onImageChange,
  placeholder = "이미지를 첨부해 주세요",
}: ImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageChange(file);
    }
  };

  const getImagePreview = () => {
    if (image) {
      return URL.createObjectURL(image);
    }
    return null;
  };

  const imagePreview = getImagePreview();

  return (
    <S.ImageUploadContainer onClick={handleClick}>
      {imagePreview ? (
        <S.PreviewImage src={imagePreview} alt="Preview" />
      ) : (
        <>
          <S.ImageIcon>
            <img src={imageIcon} alt="이미지 아이콘" />
          </S.ImageIcon>
          <S.ImageText>{placeholder}</S.ImageText>
        </>
      )}
      <S.HiddenFileInput
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
      />
    </S.ImageUploadContainer>
  );
};

export default ImageUpload;
