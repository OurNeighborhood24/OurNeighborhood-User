import styled from "styled-components";

export const ImageUploadContainer = styled.div`
  width: 293px;
  height: 230px;
  background-color: #f6f6f6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 44px;
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
  }
`;

export const ImageIcon = styled.div`
  font-size: 40px;
  color: #666666;
  margin-bottom: 10px;
  img{
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
  border-radius: 5px;
`;
