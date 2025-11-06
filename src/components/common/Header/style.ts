import styled from "styled-components";

export const HeaderContainer = styled.div`
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

  &:hover {
    opacity: 0.7;
  }
`;

export const Title = styled.h1<{ $centered?: boolean }>`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: black;
  margin: 0;
  ${(props) =>
    props.$centered &&
    `
    text-align: center;
    flex: 1;
  `}
`;
