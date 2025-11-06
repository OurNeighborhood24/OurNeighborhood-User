import { useNavigate } from "react-router-dom";
import Layout from "@/components/common/Layout";
import Header from "@/components/common/Header";
import ListItem from "@/components/feature/ListItem";
import { useNotices } from "@/services/hooks";
import * as utils from "@/utils/utils";

const Notice = () => {
  const navigate = useNavigate();
  const { notices, loading, error } = useNotices();

  const handleBack = () => {
    navigate(-1);
  };

  const handleNoticeClick = (noticeId: number) => {
    navigate(`/notice/${noticeId}`);
  };

  if (loading) {
    return (
      <Layout>
        <Header title="서비스 공지" onBack={handleBack} />
        <div style={{ padding: "20px", textAlign: "center" }}>로딩 중...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Header title="서비스 공지" onBack={handleBack} />
        <div style={{ padding: "20px", textAlign: "center", color: "red" }}>
          {error}
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header title="서비스 공지" onBack={handleBack} />

      <div style={{ padding: "16px 0" }}>
        {notices.length === 0 ? (
          <div
            style={{ padding: "40px 20px", textAlign: "center", color: "#999" }}
          >
            등록된 공지사항이 없습니다.
          </div>
        ) : (
          notices.map((notice) => (
            <ListItem
              key={notice.notification_id}
              title={notice.title}
              category="공지"
              date={utils.formatDate(notice.created_at)}
              onClick={() => handleNoticeClick(notice.notification_id)}
            />
          ))
        )}
      </div>
    </Layout>
  );
};

export default Notice;
