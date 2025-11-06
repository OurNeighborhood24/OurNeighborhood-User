import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0 16px 0;
  gap: 16px;
  position: sticky;
  top: 0;
  background: #ffffff;
  z-index: 100;
  border-bottom: 1px solid #f0f0f0;
  margin: 0 -20px 20px -20px;
  padding-left: 20px;
  padding-right: 20px;

  padding-top: calc(20px + env(safe-area-inset-top));

  @media (max-width: 480px) {
    padding: 16px 16px 12px 16px;
    margin: 0 -16px 16px -16px;
    gap: 12px;
    padding-top: calc(16px + env(safe-area-inset-top));
  }

  @media (max-width: 360px) {
    padding: 12px 12px 8px 12px;
    margin: 0 -12px 12px -12px;
    gap: 8px;
    padding-top: calc(12px + env(safe-area-inset-top));
  }
`;

export const BackButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:active {
    background: #e9ecef;
    transform: scale(0.95);
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }
`;

export const Title = styled.h1<{ $centered?: boolean }>`
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #333;
  margin: 0;

  /* 긴 제목 처리 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${(props) =>
    props.$centered &&
    `
    text-align: center;
    flex: 1;
    padding-right: 40px; /* BackButton 너비만큼 중앙 정렬 */
  `}

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 22px;
    ${(props) =>
      props.$centered &&
      `
      padding-right: 36px;
    `}
  }
`;
