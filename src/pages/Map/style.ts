import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  color: #333;
`;

export const ErrorOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  text-align: center;

  div {
    font-family: "Pretendard", sans-serif;
    font-size: 14px;
    color: #666;
    margin-bottom: 12px;
  }

  button {
    background: #007aff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-family: "Pretendard", sans-serif;
    font-size: 12px;

    &:active {
      background: #0051d5;
    }
  }
`;

export const MapControls = styled.div`
  position: absolute;
  top: 120px;
  right: 16px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 480px) {
    top: 100px;
    right: 12px;
  }
`;

export const LocationButton = styled.button`
  width: 44px;
  height: 44px;
  background: #007aff;
  border: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 122, 255, 0.3);
  transition: all 0.2s ease;
  color: white;
  -webkit-tap-highlight-color: transparent;

  &:active {
    background: #0051d5;
    transform: scale(0.95);
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

export const ZoomControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ZoomButton = styled.button`
  width: 44px;
  height: 44px;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #333;
  -webkit-tap-highlight-color: transparent;

  &:active {
    background: #f0f0f0;
  }

  &:first-child {
    border-bottom: 1px solid #f0f0f0;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

export const Legend = styled.div`
  position: absolute;
  bottom: 20px;
  left: 16px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  max-width: 200px;

  @media (max-width: 480px) {
    left: 12px;
    bottom: 16px;
  }
`;

export const LegendTitle = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: #333;
  margin-bottom: 8px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const LegendColor = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const LegendText = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 10px;
  color: #666;
`;

export const WarningOverlay = styled.div`
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  background: #ff4444;
  color: white;
  padding: 14px 18px;
  border-radius: 14px;
  z-index: 50;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  animation: slideDown 0.3s ease-out, fadeOut 0.3s ease-in 6.7s;
  max-width: 320px;
  border: 2px solid rgba(255, 255, 255, 0.3);

  /* 안전/치안 경고 스타일 */
  &.safety {
    background: linear-gradient(135deg, #d32f2f, #f44336);
    animation: slideDown 0.3s ease-out, safetyPulse 2s infinite,
      fadeOut 0.3s ease-in 6.7s;
    border: 2px solid #ffeb3b;
  }

  div:last-child {
    div:first-child {
      font-family: "Pretendard", sans-serif;
      font-weight: 700;
      font-size: 14px;
      margin-bottom: 4px;
      line-height: 1.2;
    }

    div:last-child {
      font-family: "Pretendard", sans-serif;
      font-size: 12px;
      opacity: 0.95;
      line-height: 1.3;
    }
  }

  @keyframes slideDown {
    from {
      transform: translateX(-50%) translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes safetyPulse {
    0%,
    100% {
      box-shadow: 0 8px 25px rgba(211, 47, 47, 0.5);
      transform: translateX(-50%) scale(1);
    }
    50% {
      box-shadow: 0 12px 35px rgba(211, 47, 47, 0.8);
      transform: translateX(-50%) scale(1.02);
    }
  }

  @media (max-width: 480px) {
    top: 100px;
    left: 16px;
    right: 16px;
    transform: none;
  }
`;
