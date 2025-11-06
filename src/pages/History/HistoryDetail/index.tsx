import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useReportDetail } from "@/services/hooks";
import Layout from "@/components/common/Layout";
import Header from "@/components/common/Header";
import Answer from "@/components/feature/Answer";
import * as utils from "@/utils/utils";
import * as S from "./style";

const HistoryDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { reportDetail, loading, error, fetchReportDetail } = useReportDetail();

  useEffect(() => {
    if (id) {
      fetchReportDetail(Number(id));
    }
  }, [id, fetchReportDetail]);

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <Layout>
        <Header title="로딩 중..." centered={true} onBack={handleBack} />
        <div style={{ padding: "20px", textAlign: "center" }}>로딩 중...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Header title="오류" centered={true} onBack={handleBack} />
        <div style={{ padding: "20px", textAlign: "center" }}>{error}</div>
      </Layout>
    );
  }

  if (!reportDetail) {
    return (
      <Layout>
        <Header
          title="신고를 찾을 수 없음"
          centered={true}
          onBack={handleBack}
        />
        <div style={{ padding: "20px", textAlign: "center" }}>
          신고를 찾을 수 없습니다.
        </div>
      </Layout>
    );
  }

  const report = reportDetail.report;

  return (
    <Layout>
      <Header title={report.title} centered={true} onBack={handleBack} />

      {report.image_url && (
        <S.ReportImage
          src={report.image_url}
          alt="신고 이미지"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      )}

      <S.ReportContent>{report.description}</S.ReportContent>

      <S.ReportLocation>경북 경주시</S.ReportLocation>

      <S.ReportDate>{utils.formatDate(report.created_at)}</S.ReportDate>

      {reportDetail.answers && reportDetail.answers.length > 0 && (
        <div style={{ padding: "20px" }}>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "16px",
              color: "#333",
            }}
          >
            관리자 답변 ({reportDetail.answers.length})
          </div>
          {reportDetail.answers.map((answer) => (
            <Answer key={answer.report_answer_id} answer={answer} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default HistoryDetail;
