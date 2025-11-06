import styled from "styled-components";

export const PrimaryButtonStyle = styled.button<{ $fullWidth?: boolean }>`
  ${(props) => (props.$fullWidth ? "width: 100%;" : "width: auto;")}
  background-color: #007aff;
  border: none;
  border-radius: 12px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: white;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;

  &:active {
    background-color: #0051d5;
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 480px) {
    padding: 12px 18px;
    font-size: 15px;
    line-height: 20px;
  }

  @media (max-width: 360px) {
    padding: 10px 16px;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const SecondaryButtonStyle = styled.button<{ $fullWidth?: boolean }>`
  ${(props) => (props.$fullWidth ? "width: 100%;" : "width: auto;")}
  background-color: transparent;
  border: 1px solid #007aff;
  border-radius: 12px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #007aff;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;

  &:active {
    background-color: #f0f7ff;
    transform: scale(0.98);
  }

  &:disabled {
    border-color: #cccccc;
    color: #cccccc;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 480px) {
    padding: 12px 18px;
    font-size: 15px;
    line-height: 20px;
  }

  @media (max-width: 360px) {
    padding: 10px 16px;
    font-size: 14px;
    line-height: 18px;
  }
`;
