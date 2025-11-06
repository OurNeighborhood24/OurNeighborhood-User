import styled from "styled-components";

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
