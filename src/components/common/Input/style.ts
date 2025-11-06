import styled from "styled-components";

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
