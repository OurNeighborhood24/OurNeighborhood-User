import { useNavigate, useParams } from "react-router-dom";
import { useNoticeDetail } from "@/services/hooks";
import Layout from "@/components/common/Layout";
import Header from "@/components/common/Header";
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
      <Layout>
        <Header title="로딩 중..." centered={true} onBack={handleBack} />
        <div style={{ padding: "20px", textAlign: "center" }}>
          공지사항을 불러오는 중...
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Header title="오류" centered={true} onBack={handleBack} />
        <div style={{ padding: "20px", textAlign: "center", color: "red" }}>
          {error}
        </div>
      </Layout>
    );
  }

  if (!notice) {
    return (
      <Layout>
        <Header
          title="공지사항을 찾을 수 없습니다"
          centered={true}
          onBack={handleBack}
        />
        <div style={{ padding: "20px", textAlign: "center", color: "#999" }}>
          해당 공지사항을 찾을 수 없습니다.
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header title={notice.title} centered={true} onBack={handleBack} />

      <S.NoticeContentBox>
        <S.NoticeContent>
          {notice.content.split("\\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < notice.content.split("\\n").length - 1 && <br />}
            </span>
          ))}
        </S.NoticeContent>
      </S.NoticeContentBox>
      <S.NoticeDate>{utils.formatDate(notice.created_at)}</S.NoticeDate>
    </Layout>
  );
};

export default NoticeDetail;
