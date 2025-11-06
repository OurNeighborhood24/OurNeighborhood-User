import styled from "styled-components";

export const FormSection = styled.div`
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 18px;
  }

  @media (max-width: 360px) {
    margin-bottom: 16px;
  }
`;

export const FormLabel = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: black;
  margin-bottom: 12px;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 10px;
  }

  @media (max-width: 360px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 8px;
  }
`;
