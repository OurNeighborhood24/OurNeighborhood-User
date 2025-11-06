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
  padding: 62px 0 57px 0;
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
`;

export const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const NoticeItem = styled.div`
  width: 293px;
  height: 100px;
  background-color: #f6f6f6;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
  }
`;

export const NoticeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const NoticeCategory = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  color: #888888;
`;

export const NoticeDate = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #888888;
`;

export const NoticeTitle = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: black;
  margin-top: 8px;
`;
