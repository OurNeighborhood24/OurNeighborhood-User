import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import * as S from "../../Notice/NoticeDetail/style"

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
    <S.Container>
      <S.HeaderBar>
        <S.BackButton onClick={handleBack}>
          <BsChevronLeft />
        </S.BackButton>
        <S.Title>{noticeDetail.title}</S.Title>
      </S.HeaderBar>

      <S.NoticeContentBox>
        <S.NoticeContent>{noticeDetail.content}</S.NoticeContent>
      </S.NoticeContentBox>

      <S.NoticeDate>{noticeDetail.date}</S.NoticeDate>
    </S.Container>
  );
};

export default ReportDetail;
