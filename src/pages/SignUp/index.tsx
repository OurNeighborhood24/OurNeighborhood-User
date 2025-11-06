import { useState } from "react";
import { BsEye, BsEyeSlash, BsChevronDown } from "react-icons/bs";
import logoImage from "@/assets/logo/logo.png";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useRegister, useRegions } from "@/services/hooks";

interface SignUpForm {
  region_id: number | "";
  username: string;
  password: string;
  role: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const {
    regions,
    isLoading: regionsLoading,
    error: regionsError,
  } = useRegions();
  const {
    register,
    isLoading: registerLoading,
    error: registerError,
  } = useRegister();

  const [formData, setFormData] = useState<SignUpForm>({
    region_id: "",
    username: "",
    password: "",
    role: "USER", 
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "region_id" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.region_id || !formData.username || !formData.password) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    if (formData.password.length < 8) {
      alert("비밀번호는 8자 이상 입력해주세요.");
      return;
    }

    try {
      const registerData = {
        id: formData.username,
        password: formData.password,
        region_id: Number(formData.region_id),
        role: formData.role,
      };

      const response = await register(registerData);

      alert(
        `회원가입이 완료되었습니다! ${response.user.region.region_name}에서 환영합니다.`
      );
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const isFormValid =
    formData.region_id && formData.username && formData.password;
  const isLoading = registerLoading;

  if (regionsError) {
    return (
      <S.Container>
        <div>지역 정보를 불러오는데 실패했습니다: {regionsError}</div>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.LogoContainer>
        <S.LogoImage src={logoImage} alt="우리동네24 로고" />
      </S.LogoContainer>

      <S.FormContainer>
        <S.RegionInputContainer>
          <S.Label htmlFor="region_id" isRegion>
            지역정보
          </S.Label>
          <S.InputBox>
            <S.SelectWrapper>
              <S.SelectInput
                id="region_id"
                name="region_id"
                value={formData.region_id}
                onChange={handleInputChange}
                disabled={regionsLoading}
              >
                <option value="">
                  {regionsLoading
                    ? "지역 정보 로딩 중..."
                    : "지역 정보를 선택해주세요"}
                </option>
                {regions.map((region) => (
                  <option key={region.region_id} value={region.region_id}>
                    {region.region_name}
                  </option>
                ))}
              </S.SelectInput>
              <S.ArrowIcon>
                <BsChevronDown />
              </S.ArrowIcon>
            </S.SelectWrapper>
          </S.InputBox>
        </S.RegionInputContainer>

        <S.InputContainer>
          <S.Label htmlFor="username">아이디</S.Label>
          <S.InputBox>
            <S.InputWrapper>
              <S.Input
                id="username"
                name="username"
                type="text"
                placeholder="아이디를 입력해주세요"
                value={formData.username}
                onChange={handleInputChange}
                autoComplete="username"
              />
              <S.PasswordToggle type="button" style={{ opacity: 0 }}>
                <BsEye />
              </S.PasswordToggle>
            </S.InputWrapper>
          </S.InputBox>
        </S.InputContainer>

        <S.InputContainer>
          <S.Label htmlFor="password">비밀번호</S.Label>
          <S.InputBox>
            <S.InputWrapper>
              <S.Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호를 입력해주세요"
                value={formData.password}
                onChange={handleInputChange}
                autoComplete="new-password"
              />
              <S.PasswordToggle
                type="button"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
                style={{ opacity: formData.password ? 1 : 0 }}
              >
                {showPassword ? <BsEyeSlash /> : <BsEye />}
              </S.PasswordToggle>
            </S.InputWrapper>
          </S.InputBox>
        </S.InputContainer>

        {registerError && <S.ErrorMessage>{registerError}</S.ErrorMessage>}

        <S.SignUpButton
          type="submit"
          disabled={!isFormValid || isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? "가입 중..." : "회원가입 완료"}
        </S.SignUpButton>
      </S.FormContainer>
    </S.Container>
  );
};

export default SignUp;
