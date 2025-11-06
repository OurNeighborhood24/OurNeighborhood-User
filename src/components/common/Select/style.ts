import styled from "styled-components";

export const SelectContainer = styled.div`
  width: 293px;
  background-color: #f6f6f6;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #eeeeee;
  }
`;

export const SelectText = styled.div<{ $hasValue?: boolean }>`
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.$hasValue ? "#000" : "#888888")};
`;

export const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  z-index: 10;
  margin-top: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const DropdownItem = styled.div<{ $isLast?: boolean }>`
  padding: 16px;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  border-bottom: ${(props) => (props.$isLast ? "none" : "1px solid #eeeeee")};

  &:hover {
    background-color: #f6f6f6;
  }

  &:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  &:last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;
