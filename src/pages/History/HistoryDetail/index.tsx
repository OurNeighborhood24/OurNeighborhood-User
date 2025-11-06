import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { useReportDetail } from "@/services/hooks";
import Answer from "@/components/feature/Answer";
import * as utils from "@/utils/utils";
import * as S from "./style"

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
      <S.Container>
        <S.HeaderBar>
          <S.BackButton onClick={handleBack}>
            <BsChevronLeft />
          </S.BackButton>
          <S.Title>로딩 중...</S.Title>
        </S.HeaderBar>
        <div style={{ padding: "20px", textAlign: "center" }}>로딩 중...</div>
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
        <div style={{ padding: "20px", textAlign: "center" }}>{error}</div>
      </S.Container>
    );
  }

  if (!reportDetail) {
    return (
      <S.Container>
        <S.HeaderBar>
          <S.BackButton onClick={handleBack}>
            <BsChevronLeft />
          </S.BackButton>
          <S.Title>신고를 찾을 수 없음</S.Title>
        </S.HeaderBar>
        <div style={{ padding: "20px", textAlign: "center" }}>
          신고를 찾을 수 없습니다.
        </div>
      </S.Container>
    );
  }

  const report = reportDetail.report;

  return (
    <S.Container>
      <S.HeaderBar>
        <S.BackButton onClick={handleBack}>
          <BsChevronLeft />
        </S.BackButton>
        <S.Title>{report.title}</S.Title>
      </S.HeaderBar>

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
    </S.Container>
  );
};

export default HistoryDetail;
