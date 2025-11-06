import { useNavigate, useParams } from "react-router-dom";
import { useNoticeDetail } from "@/services/hooks";
import { BsChevronLeft } from "react-icons/bs";
import * as S from "./style";
import * as utils from "@/utils/utils";

const NoticeDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const noticeId = Number(id);

  const { notice, loading, error } = useNoticeDetail(noticeId);

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <S.Container>
        <S.HeaderBar>
          <S.BackButton onClick={handleBack}>
            <BsChevronLeft />
          </S.BackButton>
          <S.Title>로딩 중...</S.Title>
        </S.HeaderBar>
        <div style={{ padding: "20px", textAlign: "center" }}>
          공지사항을 불러오는 중...
        </div>
      </S.Container>
    );
  }

  if (error) {
    return (
      <S.Container>
        <S.HeaderBar>
          <S.BackButton onClick={handleBack}>
            <BsChevronLeft />
          </S.BackButton>
          <S.Title>오류</S.Title>
        </S.HeaderBar>
        <div style={{ padding: "20px", textAlign: "center", color: "red" }}>
          {error}
        </div>
      </S.Container>
    );
  }

  if (!notice) {
    return (
      <S.Container>
        <S.HeaderBar>
          <S.BackButton onClick={handleBack}>
            <BsChevronLeft />
          </S.BackButton>
          <S.Title>공지사항을 찾을 수 없습니다</S.Title>
        </S.HeaderBar>
        <div style={{ padding: "20px", textAlign: "center", color: "#999" }}>
          해당 공지사항을 찾을 수 없습니다.
        </div>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.HeaderBar>
        <S.BackButton onClick={handleBack}>
          <BsChevronLeft />
        </S.BackButton>
        <S.Title>{notice.title}</S.Title>
      </S.HeaderBar>
    
      <S.NoticeContentBox>
        <S.NoticeContent>{notice.content}</S.NoticeContent>
      </S.NoticeContentBox>
      <S.NoticeDate>{utils.formatDate(notice.created_at)}</S.NoticeDate>
    </S.Container>
  );
};

export default NoticeDetail;
