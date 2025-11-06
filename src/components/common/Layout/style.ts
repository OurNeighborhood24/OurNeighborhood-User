import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  max-width: 428px;
  min-height: 100vh;
  min-height: 100dvh; /* 동적 뷰포트 높이 */
  background-color: #ffffff;
  position: relative;
  margin: 0 auto;
  padding: 0 20px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  /* 모바일 반응형 */
  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0 16px;
  }

  @media (max-width: 360px) {
    padding: 0 12px;
  }

  /* Safe Area 지원 */
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`;
