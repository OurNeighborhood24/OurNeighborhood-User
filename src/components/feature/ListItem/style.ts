import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  min-height: 110px;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 12px;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:active {
    background-color: #f8f9fa;
    transform: scale(0.98);
  }

  @media (max-width: 480px) {
    padding: 14px;
    min-height: 100px;
    border-radius: 10px;
  }

  @media (max-width: 360px) {
    padding: 12px;
    min-height: 90px;
    border-radius: 8px;
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    margin-bottom: 8px;
  }
`;

export const ItemCategory = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 6px;

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 3px 6px;
  }
`;

export const ItemStatus = styled.div<{
  $statusColor?: string;
}>`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.$statusColor || "#333"};
  padding: 4px 8px;

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 3px 6px;
  }
`;

export const ItemContent = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #333;
  margin-bottom: 12px;
  word-break: keep-all;
  overflow-wrap: break-word;

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
  }
`;

export const ItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const ItemDate = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #888;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const ItemTitle = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  color: #000;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 8px;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const ItemId = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #666;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;
