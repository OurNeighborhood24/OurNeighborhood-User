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
  padding: 62px 0 49px 0;
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

export const ReportImage = styled.img`
  width: 293px;
  height: 162px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 18px;
`;

export const ReportContent = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: black;
  margin-bottom: 18px;
  white-space: pre-wrap;
  word-break: break-word;
`;

export const ReportLocation = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #666666;
  margin-bottom: 4px;
`;

export const ReportDate = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #888888;
`;
