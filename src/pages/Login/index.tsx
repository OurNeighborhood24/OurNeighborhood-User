import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import logoImage from "@/assets/logo/logo.png";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useLogin } from "@/services/hooks";
import { useAuth } from "@/contexts/AuthContext";

interface LoginForm {
  user_id: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoading, error } = useLogin();
  const { setUser } = useAuth();

  const [formData, setFormData] = useState<LoginForm>({
    user_id: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.user_id || !formData.password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const response = await login({
        user_id: formData.user_id,
        password: formData.password,
      });

      // 로그인 성공시 사용자 정보 저장 (일단 기본값으로 설정)
      // 실제로는 API에서 사용자 정보를 받아와야 함
      setUser({
        user_id: 1,
        role: "USER",
        region: {
          region_id: 1,
          region_code: 11,
          region_name: "서울특별시",
        },
      });

      alert("로그인 성공!");
      navigate("/main");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const isFormValid = formData.user_id && formData.password;

  return (
    <S.Container>
      <S.LogoContainer>
        <S.LogoImage src={logoImage} alt="우리동네24 로고" />
      </S.LogoContainer>

      <S.FormContainer>
        <S.InputContainer>
          <S.Label htmlFor="user_id">아이디</S.Label>
          <S.InputBox>
            <S.InputWrapper>
              <S.Input
                id="user_id"
                name="user_id"
                type="text"
                placeholder="아이디를 입력해주세요"
                value={formData.user_id}
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
                autoComplete="current-password"
              />
              <S.PasswordToggle
                type="button"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
                style={{ opacity: formData.password ? 1 : 0 }}
              >
                {showPassword ? (
                  <BsEyeSlash style={{ width: "100px" }} />
                ) : (
                  <BsEye style={{ width: "100px" }} />
                )}
              </S.PasswordToggle>
            </S.InputWrapper>
          </S.InputBox>
        </S.InputContainer>

        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

        <S.LoginButton
          type="submit"
          disabled={!isFormValid || isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? "로그인 중..." : "로그인"}
        </S.LoginButton>

        <S.SignupText>
          아직 회원이 아니신가요?{" "}
          <span className="signup-link" onClick={handleSignupClick}>
            회원가입
          </span>
        </S.SignupText>
      </S.FormContainer>
    </S.Container>
  );
};

export default Login;
