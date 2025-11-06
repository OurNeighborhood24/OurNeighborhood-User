import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  width: 393px;
  height: 852px;
  position: relative;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 62px;
  top: 86px;
  width: 269px;
  height: 53px;
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  left: 50px;
  top: 242px;
  width: 293px;
  display: flex;
  flex-direction: column;
  gap: 11px; 
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 13px; 
`;

export const MainButton = styled.button`
  background-color: #3573f0;
  border: none;
  border-radius: 12px;
  padding: 16px 24px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(53, 115, 240, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const MapButton = styled(MainButton)`
  width: 293px;
  height: 126px;
`;

export const SideButton = styled(MainButton)`
  background-color: #1860f0;
  width: 146px;
  height: 158px;

  &:hover {
    background-color: #1450d0;
  }
`;

export const ReportButton = styled(MainButton)`
  width: 293px;
  height: 126px;
  margin-top: 11px; 
`;

export const ButtonText = styled.p`
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: white;
  text-align: center;
  margin: 0;
`;

export const MyPageButton = styled(SideButton)`
`;

export const NoticeButton = styled(SideButton)`
`;
