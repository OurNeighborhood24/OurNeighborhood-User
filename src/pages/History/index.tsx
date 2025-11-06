import { useNavigate } from "react-router-dom";
import Layout from "@/components/common/Layout";
import Header from "@/components/common/Header";
import ListItem from "@/components/feature/ListItem";
import { useReportHistory } from "@/services/hooks";
import * as utils from "@/utils/utils";
import { Report } from "@/types";

const History = () => {
  const navigate = useNavigate();
  const { reports, loading, error } = useReportHistory();

  const handleBack = () => {
    navigate("/main");
  };

  const handleReportClick = (reportId: number) => {
    navigate(`/history/${reportId}`);
  };

  if (loading) {
    return (
      <Layout>
        <Header title="신고 내역 확인" onBack={handleBack} />
        <div style={{ padding: "20px", textAlign: "center" }}>로딩 중...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Header title="신고 내역 확인" onBack={handleBack} />
        <div style={{ padding: "20px", textAlign: "center", color: "red" }}>
          {error}
        </div>
      </Layout>
    );
  }

  if (reports.length === 0) {
    return (
      <Layout>
        <Header title="신고 내역 확인" onBack={handleBack} />
        <div style={{ padding: "20px", textAlign: "center" }}>
          신고 내역이 없습니다.
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header title="신고 내역 확인" onBack={handleBack} />

      <div style={{ padding: "16px 0" }}>
        {reports.map((report: Report) => (
          <ListItem
            key={report.report_id}
            title={report.title}
            category={report.category.category_name}
            date={utils.formatDate(report.created_at)}
            statusText={utils.getStatusText(report.state)}
            statusColor={utils.getStatusColor(report.state)}
            onClick={() => handleReportClick(report.report_id)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default History;
