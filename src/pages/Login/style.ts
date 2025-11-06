import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  max-width: 428px;
  min-height: 100vh;
  min-height: 100dvh;
  position: relative;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* Safe Area 지원 */
  padding-top: calc(20px + env(safe-area-inset-top));
  padding-bottom: calc(20px + env(safe-area-inset-bottom));

  @media (max-width: 480px) {
    padding: 16px;
    padding-top: calc(16px + env(safe-area-inset-top));
    padding-bottom: calc(16px + env(safe-area-inset-bottom));
  }

  @media (max-width: 360px) {
    padding: 12px;
    padding-top: calc(12px + env(safe-area-inset-top));
    padding-bottom: calc(12px + env(safe-area-inset-bottom));
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;

  @media (max-width: 480px) {
    margin-bottom: 40px;
  }

  @media (max-width: 360px) {
    margin-bottom: 30px;
  }
`;

export const LogoImage = styled.img`
  width: 280px;
  height: auto;
  max-width: 100%;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 240px;
  }

  @media (max-width: 360px) {
    width: 200px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 480px) {
    gap: 20px;
  }

  @media (max-width: 360px) {
    gap: 16px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #333;
  margin-left: 4px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const InputBox = styled.div`
  width: 100%;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  position: relative;
  transition: all 0.2s ease;

  &:focus-within {
    border-color: #007aff;
    background-color: #ffffff;
  }

  @media (max-width: 480px) {
    border-radius: 10px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 14px;
  }

  @media (max-width: 360px) {
    padding: 12px;
  }
`;

export const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #333;

  &::placeholder {
    color: #999;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const PasswordToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  font-size: 18px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:active {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 18px 24px;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  -webkit-tap-highlight-color: transparent;

  &:active:not(:disabled) {
    background-color: #0051d5;
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #c7c7cc;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 480px) {
    padding: 16px 20px;
    font-size: 16px;
    border-radius: 10px;
  }
`;

export const ErrorMessage = styled.div`
  width: 100%;
  padding: 14px 16px;
  background-color: #ffebee;
  border: 1px solid #ffcdd2;
  border-radius: 10px;
  color: #d32f2f;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;

  @media (max-width: 480px) {
    padding: 12px 14px;
    font-size: 13px;
  }
`;

export const SignupText = styled.p`
  width: 100%;
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #666;
  text-align: center;
  margin: 8px 0 0 0;

  .signup-link {
    color: #007aff;
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;
    -webkit-tap-highlight-color: transparent;

    &:active {
      opacity: 0.7;
    }
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
