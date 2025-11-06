import styled from "styled-components";

export const AnswerContainer = styled.div`
  background-color: #fafafa;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  border-left: 3px solid #e0e0e0;
  font-family: "Pretendard", sans-serif;
`;

export const AnswerHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const UserIcon = styled.div`
  width: 36px;
  height: 36px;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: #777;
  font-size: 16px;
  flex-shrink: 0;
`;

export const UserInfo = styled.div`
  flex: 1;

  div:first-child {
    font-size: 14px;
    font-weight: 600;
    color: #333;
    margin-bottom: 2px;
  }
`;

export const AnswerContent = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  margin-left: 48px; /* UserIcon width + margin */
  word-break: break-word;
`;

export const AnswerDate = styled.div`
  font-size: 12px;
  color: #999;
`;
