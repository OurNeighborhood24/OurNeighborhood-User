import { useNavigate } from "react-router-dom";
import * as S from "./style";
import logoImage from "@/assets/logo/logo.png";

const Main = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.LogoContainer>
        <S.LogoImage src={logoImage} alt="우리동네24 로고" />
      </S.LogoContainer>

      <S.ButtonContainer>
        <S.MapButton onClick={() => navigate("/map")}>
          <S.ButtonText>지도</S.ButtonText>
        </S.MapButton>

        <S.ButtonRow>
          <S.MyPageButton onClick={() => navigate("/history")}>
            <S.ButtonText>마이페이지</S.ButtonText>
          </S.MyPageButton>

          <S.NoticeButton onClick={() => navigate("/notice")}>
            <S.ButtonText>공지사항</S.ButtonText>
          </S.NoticeButton>
        </S.ButtonRow>

        <S.ReportButton onClick={() => navigate("/report")}>
          <S.ButtonText>신고하기</S.ButtonText>
        </S.ReportButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Main;
