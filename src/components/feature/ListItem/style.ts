import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 293px;
  min-height: 100px;
  background-color: #f6f6f6;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 12px;

  &:hover {
    background-color: #eeeeee;
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`;

export const ItemCategory = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  color: #888888;
`;

export const ItemStatus = styled.div<{
  $statusColor?: string;
}>`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.$statusColor || "#343a40"};
`;

export const ItemDate = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #888888;
`;

export const ItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ItemTitle = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: black;
  flex: 1;

  /* 긴 제목 말줄임표 처리 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 8px;
`;
