import { useNavigate } from "react-router-dom";
import * as S from "./style";
import logoImage from "@/assets/logo/logo.png";
import homeIcon from "@/assets/icons/home.png";
import mailboxIcon from "@/assets/icons/mailbox.png";
import aboutIcon from "@/assets/icons/about.png";
import cursorIcon from "@/assets/icons/cursor.png";

const Main = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.LogoImage src={logoImage} alt="우리동네24 로고" />

      <S.MapButton onClick={() => navigate("/map")}>
        <S.IconWrapper>
          <S.Icon src={homeIcon} alt="지도" />
        </S.IconWrapper>
        <S.ButtonTitle>지도</S.ButtonTitle>
        <S.ButtonDescription>
          지도에서 신고 접수된 곳을 볼 수 있어요!
        </S.ButtonDescription>
      </S.MapButton>

      <S.ButtonRow>
        <S.MyPageButton onClick={() => navigate("/history")}>
          <S.IconWrapper>
            <S.Icon src={mailboxIcon} alt="마이페이지" />
          </S.IconWrapper>
          <S.ButtonTitle>마이페이지</S.ButtonTitle>
          <S.ButtonDescription>
            내가 신고한 내역을
            <br />
            확인할 수 있어요!
          </S.ButtonDescription>
        </S.MyPageButton>

        <S.NoticeButton onClick={() => navigate("/notice")}>
          <S.IconWrapper>
            <S.Icon src={aboutIcon} alt="공지사항" />
          </S.IconWrapper>
          <S.ButtonTitle>공지사항</S.ButtonTitle>
          <S.ButtonDescription>
            어떤 공지사항이
            <br />
            있는지 확인해보세요!
          </S.ButtonDescription>
        </S.NoticeButton>
      </S.ButtonRow>

      <S.ReportButton onClick={() => navigate("/report")}>
        <S.IconWrapper>
          <S.Icon src={cursorIcon} alt="신고하기" />
        </S.IconWrapper>
        <S.ButtonTitle>신고하기</S.ButtonTitle>
        <S.ButtonDescription>
          알리고 싶은 일이 있다면 신고하세요!
        </S.ButtonDescription>
      </S.ReportButton>
    </S.Container>
  );
};

export default Main;
