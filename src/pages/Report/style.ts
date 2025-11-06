import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  position: relative;
  padding: 0 20px;
  overflow-y: auto;
  max-width: 428px;
  margin: 0 auto;

  @media (max-width: 480px) {
    padding: 0 16px;
  }

  @media (max-width: 360px) {
    padding: 0 12px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0 32px 0;
  gap: 20px;

  @media (max-width: 480px) {
    padding: 32px 0 24px 0;
    gap: 16px;
  }

  @media (max-width: 360px) {
    padding: 24px 0 20px 0;
    gap: 12px;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: black;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:active {
    background-color: #f0f0f0;
    transform: scale(0.95);
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 6px;
  }

  @media (max-width: 360px) {
    font-size: 14px;
    padding: 4px;
  }
`;

export const HeaderTitle = styled.h1<{ $centered?: boolean }>`
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
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

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 22px;
  }

  @media (max-width: 360px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

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

export const FormLabel = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: black;
  margin-bottom: 16px;
`;

export const InputContainer = styled.div`
  width: 100%;
  background-color: #f6f6f6;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 12px 14px;
  }

  @media (max-width: 360px) {
    padding: 10px 12px;
  }
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
  width: 100%;
  height: 120px;
  background-color: #f6f6f6;
  border-radius: 12px;
  padding: 16px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    height: 110px;
    padding: 14px;
  }

  @media (max-width: 360px) {
    height: 100px;
    padding: 12px;
  }
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
  width: 100%;
  background-color: #f6f6f6;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #eeeeee;
  }

  @media (max-width: 480px) {
    padding: 12px 14px;
  }

  @media (max-width: 360px) {
    padding: 10px 12px;
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
  width: 100%;
  background-color: #007aff;
  border: none;
  border-radius: 12px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: white;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:active {
    background-color: #0051d5;
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 480px) {
    padding: 12px 18px;
    font-size: 15px;
    line-height: 20px;
    margin-top: 32px;
  }

  @media (max-width: 360px) {
    padding: 10px 16px;
    font-size: 14px;
    line-height: 18px;
    margin-top: 28px;
  }
`;

export const ImageUploadBox = styled.div`
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
`;

export const ImageText = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #666666;
  text-align: center;
`;

export const FormSection = styled.div`
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 18px;
  }

  @media (max-width: 360px) {
    margin-bottom: 16px;
  }
`;

export const Label = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: black;
  margin-bottom: 12px;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 10px;
  }

  @media (max-width: 360px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 8px;
  }
`;

export const InputBox = styled.div`
  width: 100%;
  background-color: #f6f6f6;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 12px 14px;
  }

  @media (max-width: 360px) {
    padding: 10px 12px;
  }
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
  width: 100%;
  height: 120px;
  background-color: #f6f6f6;
  border-radius: 12px;
  padding: 16px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    height: 110px;
    padding: 14px;
  }

  @media (max-width: 360px) {
    height: 100px;
    padding: 12px;
  }
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
  width: 100%;
  background-color: #f6f6f6;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #eeeeee;
  }

  @media (max-width: 480px) {
    padding: 12px 14px;
  }

  @media (max-width: 360px) {
    padding: 10px 12px;
  }
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
  width: 100%;
  background-color: #007aff;
  border: none;
  border-radius: 12px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  cursor: pointer;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:active {
    background-color: #0051d5;
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 480px) {
    padding: 12px 18px;
    margin-top: 32px;
  }

  @media (max-width: 360px) {
    padding: 10px 16px;
    margin-top: 28px;
  }
`;

export const SubmitButtonText = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: white;

  @media (max-width: 480px) {
    font-size: 15px;
    line-height: 20px;
  }

  @media (max-width: 360px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;
