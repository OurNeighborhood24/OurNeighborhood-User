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
  padding: 62px 0 44px 0;
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

export const ReportList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 20px;
`;

export const ReportItem = styled.div`
  width: 293px;
  height: 100px;
  background-color: #f6f6f6;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #eeeeee;
  }
`;

export const ReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ReportCategory = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  color: #888888;
`;

export const ReportStatus = styled.div<{
  status: "unconfirmed" | "processing" | "completed" | "confirmed";
}>`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => {
    switch (props.status) {
      case "unconfirmed":
        return "#DB2C36";
      case "processing":
        return "black";
      case "completed":
        return "#1860F0";
      case "confirmed":
        return "black";
      default:
        return "black";
    }
  }};
`;

export const ReportContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 8px;
`;

export const ReportTitle = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: black;
`;

export const ReportDate = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #888888;
`;
