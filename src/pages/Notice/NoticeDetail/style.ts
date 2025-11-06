import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  position: relative;
  padding: 0 50px;
  overflow-y: auto;
`;

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  padding: 62px 0 26px 0;
  gap: 28px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: black;
  cursor: pointer;
  padding: 0;
`;

export const Title = styled.h1`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: black;
  margin: 0;
  text-align: center;
  flex: 1;

  /* 긴 제목 말줄임표 처리 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NoticeContentBox = styled.div`
  width: 293px;
  background-color: #f6f6f6;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  min-height: 58px;
`;

export const NoticeContent = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: black;
  white-space: pre-wrap;
  word-break: break-word;
`;

export const NoticeDate = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #888888;
`;
