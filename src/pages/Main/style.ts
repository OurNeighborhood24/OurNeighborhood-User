import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  position: relative;
  width: 100%;
  max-width: 428px;
  min-height: 100vh;
  min-height: 100dvh;
  margin: 0 auto;
  padding: 20px 50px;

  padding-top: calc(65px + env(safe-area-inset-top));
  padding-bottom: calc(20px + env(safe-area-inset-bottom));

  @media (max-width: 480px) {
    padding: 16px 40px;
    padding-top: calc(55px + env(safe-area-inset-top));
    padding-bottom: calc(16px + env(safe-area-inset-bottom));
  }

  @media (max-width: 360px) {
    padding: 12px 30px;
    padding-top: calc(45px + env(safe-area-inset-top));
    padding-bottom: calc(12px + env(safe-area-inset-bottom));
  }
`;

export const LogoImage = styled.img`
  position: absolute;
  left: 50%;
  top: 85px;
  transform: translateX(-50%);
  width: 202px;
  height: 39px;
  object-fit: contain;

  @media (max-width: 480px) {
    top: 70px;
    width: 180px;
    height: 35px;
  }

  @media (max-width: 360px) {
    top: 60px;
    width: 160px;
    height: 30px;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 13px;
  position: absolute;
  left: 50px;
  top: 366px;
  width: 293px;

  @media (max-width: 480px) {
    left: 40px;
    top: 315px;
    width: calc(100% - 80px);
    gap: 10px;
  }

  @media (max-width: 360px) {
    left: 30px;
    top: 275px;
    width: calc(100% - 60px);
    gap: 8px;
  }
`;

export const MainButton = styled.button`
  background-color: #eeeeee;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 20px 24px;
  -webkit-tap-highlight-color: transparent;
  position: relative;

  &:active {
    background-color: #ddd;
    transform: scale(0.98);
  }

  @media (max-width: 480px) {
    border-radius: 10px;
    padding: 18px 20px;
    gap: 3px;
  }

  @media (max-width: 360px) {
    border-radius: 8px;
    padding: 16px 16px;
    gap: 2px;
  }
`;

export const MapButton = styled(MainButton)`
  position: absolute;
  left: 50px;
  top: 158px;
  width: 293px;
  height: 188px;

  @media (max-width: 480px) {
    left: 40px;
    top: 135px;
    width: calc(100% - 80px);
    height: 160px;
  }

  @media (max-width: 360px) {
    left: 30px;
    top: 115px;
    width: calc(100% - 60px);
    height: 140px;
  }
`;

export const SideButton = styled(MainButton)`
  flex: 1;
  height: 230px;

  @media (max-width: 480px) {
    height: 200px;
  }

  @media (max-width: 360px) {
    height: 170px;
  }
`;

export const ReportButton = styled(MainButton)`
  position: absolute;
  left: 50px;
  top: 616px;
  width: 293px;
  height: 189px;

  @media (max-width: 480px) {
    left: 40px;
    top: 535px;
    width: calc(100% - 80px);
    height: 160px;
  }

  @media (max-width: 360px) {
    left: 30px;
    top: 465px;
    width: calc(100% - 60px);
    height: 140px;
  }
`;

export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;

  @media (max-width: 480px) {
    width: 56px;
    height: 56px;
    margin-bottom: 3px;
  }

  @media (max-width: 360px) {
    width: 48px;
    height: 48px;
    margin-bottom: 2px;
  }
`;

export const Icon = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 56px;
    height: 56px;
  }

  @media (max-width: 360px) {
    width: 48px;
    height: 48px;
  }
`;

export const ButtonTitle = styled.p`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  text-align: center;
  margin: 0 0 4px 0;

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 22px;
    margin: 0 0 3px 0;
  }

  @media (max-width: 360px) {
    font-size: 15px;
    line-height: 20px;
    margin: 0 0 2px 0;
  }
`;

export const ButtonDescription = styled.p`
  font-family: "Pretendard", sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  text-align: center;
  margin: 0;
  white-space: pre-line;

  @media (max-width: 480px) {
    font-size: 11px;
    line-height: 14px;
  }

  @media (max-width: 360px) {
    font-size: 10px;
    line-height: 13px;
  }
`;

export const MyPageButton = styled(SideButton)`
  width: 146px;

  @media (max-width: 480px) {
    width: calc(50% - 5px);
  }
`;

export const NoticeButton = styled(SideButton)`
  width: 137px;

  @media (max-width: 480px) {
    width: calc(50% - 5px);
  }
`;
