import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  width: 393px;
  height: 852px;
  position: relative;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 62px;
  top: 86px;
  width: 269px;
  height: 53px;
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FormContainer = styled.div`
  position: absolute;
  left: 50px;
  top: 170px;
  width: 293px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`;

export const RegionInputContainer = styled(InputContainer)`
`;

export const Label = styled.label.withConfig({
  shouldForwardProp: (prop) => prop !== "isRegion",
})<{ isRegion?: boolean }>`
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  font-size: ${(props) => (props.isRegion ? "16px" : "14px")};
  line-height: ${(props) => (props.isRegion ? "24px" : "20px")};
  color: #222222;
`;

export const InputBox = styled.div`
  width: 100%;
  background-color: #f6f6f6;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  position: relative;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
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
  color: #000000;

  &::placeholder {
    color: #000000;
  }
`;

export const SelectInput = styled.select`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #888888;
  appearance: none;
  cursor: pointer;

  option {
    color: #000000;
    background-color: white;
  }
`;

export const SelectWrapper = styled(InputWrapper)`
  cursor: pointer;
`;

export const ArrowIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666666;
`;

export const PasswordToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #666666;
  font-size: 16px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;

export const ErrorMessage = styled.div`
  width: 100%;
  padding: 12px 16px;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  color: #dc2626;
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

export const SignUpButton = styled.button`
  width: 100%;
  background-color: #1860f0;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px 24px;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #1450d0;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;
