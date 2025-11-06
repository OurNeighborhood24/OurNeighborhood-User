import styled from "styled-components";

export const ImageUploadContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f6f6f6;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #eeeeee;
  }

  @media (max-width: 480px) {
    height: 180px;
    margin-bottom: 28px;
  }

  @media (max-width: 360px) {
    height: 160px;
    margin-bottom: 24px;
  }
`;

export const ImageIcon = styled.div`
  font-size: 40px;
  color: #666666;
  margin-bottom: 10px;
  img {
    width: 50px;
    height: auto;
  }
`;

export const ImageText = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #666666;
  text-align: center;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;
