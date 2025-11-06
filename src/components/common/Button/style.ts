import styled from "styled-components";

export const PrimaryButtonStyle = styled.button<{ $fullWidth?: boolean }>`
  ${(props) => (props.$fullWidth ? "width: 293px;" : "width: auto;")}
  background-color: #1860f0;
  border: none;
  border-radius: 12px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: white;

  &:hover {
    background-color: #1550d8;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const SecondaryButtonStyle = styled.button<{ $fullWidth?: boolean }>`
  ${(props) => (props.$fullWidth ? "width: 293px;" : "width: auto;")}
  background-color: transparent;
  border: 1px solid #1860f0;
  border-radius: 12px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #1860f0;

  &:hover {
    background-color: #f0f7ff;
  }

  &:disabled {
    border-color: #cccccc;
    color: #cccccc;
    cursor: not-allowed;
  }
`;
