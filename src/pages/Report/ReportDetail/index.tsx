import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "@/components/common/Layout";
import Header from "@/components/common/Header";
import * as S from "../../Notice/NoticeDetail/style";

interface NoticeDetail {
  id: number;
  title: string;
  content: string;
  date: string;
}

const ReportDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const noticeDetail: NoticeDetail = {
    id: Number(id),
    title: "",
    content: ``,
    date: "",
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <Header
        title={noticeDetail.title || "신고 상세"}
        centered={true}
        onBack={handleBack}
      />

      <S.NoticeContentBox>
        <S.NoticeContent>{noticeDetail.content}</S.NoticeContent>
      </S.NoticeContentBox>

      <S.NoticeDate>{noticeDetail.date}</S.NoticeDate>
    </Layout>
  );
};

export default ReportDetail;
