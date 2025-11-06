import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  position: relative;
  padding: 0 50px;
  overflow-y: auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 62px 0 42px 0;
  gap: 28px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: black;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 0.7;
  }
`;

export const HeaderTitle = styled.h1<{ $centered?: boolean }>`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: black;
  margin: 0;
  ${(props) =>
    props.$centered &&
    `
    text-align: center;
    flex: 1;
  `}
`;

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

export const FormLabel = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: black;
  margin-bottom: 16px;
`;

export const InputContainer = styled.div`
  width: 293px;
  background-color: #f6f6f6;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledInput = styled.input`
  flex: 1;
  background: none;
  border: none;
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #666666;
  outline: none;

  &::placeholder {
    color: #666666;
  }
`;

export const TextAreaContainer = styled.div`
  width: 293px;
  height: 133px;
  background-color: #f6f6f6;
  border-radius: 12px;
  padding: 19px 16px;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #444444;
  outline: none;
  resize: none;

  &::placeholder {
    color: #444444;
  }
`;

export const SelectContainer = styled.div`
  width: 293px;
  background-color: #f6f6f6;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #eeeeee;
  }
`;


export const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  z-index: 10;
  margin-top: 4px;
`;

export const DropdownItem = styled.div<{ $isLast?: boolean }>`
  padding: 16px;
  cursor: pointer;
  border-bottom: ${(props) => (props.$isLast ? "none" : "1px solid #eeeeee")};

  &:hover {
    background-color: #f6f6f6;
  }
`;

export const PrimaryButton = styled.button`
  width: 293px;
  background-color: #1860f0;
  border: none;
  border-radius: 12px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 66px;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: white;

  &:hover {
    background-color: #1550d8;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const ImageUploadBox = styled.div`
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
`;

export const ImageIcon = styled.div`
  font-size: 40px;
  color: #666666;
  margin-bottom: 10px;
`;

export const ImageText = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #666666;
  text-align: center;
`;

export const FormSection = styled.div`
  margin-bottom: 24px;
`;

export const Label = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: black;
  margin-bottom: 16px;
`;

export const InputBox = styled.div`
  width: 293px;
  background-color: #f6f6f6;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  flex: 1;
  background: none;
  border: none;
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #666666;
  outline: none;

  &::placeholder {
    color: #666666;
  }
`;

export const TextAreaBox = styled.div`
  width: 293px;
  height: 133px;
  background-color: #f6f6f6;
  border-radius: 12px;
  padding: 19px 16px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #444444;
  outline: none;
  resize: none;

  &::placeholder {
    color: #444444;
  }
`;

export const SelectBox = styled.div`
  width: 293px;
  background-color: #f6f6f6;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const SelectText = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #888888;
`;

export const ArrowIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  width: 293px;
  background-color: #1860f0;
  border: none;
  border-radius: 12px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 66px;
  cursor: pointer;

  &:hover {
    background-color: #1550d8;
  }
`;

export const SubmitButtonText = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: white;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;