import { ReportFormData } from "@/types";

export const validateReportForm = (values: ReportFormData) => {
  const errors: Record<string, string> = {};

  if (!values.title.trim()) {
    errors.title = "제목을 입력해주세요.";
  } else if (values.title.length < 5) {
    errors.title = "제목은 5자 이상 입력해주세요.";
  } else if (values.title.length > 100) {
    errors.title = "제목은 100자 이하로 입력해주세요.";
  }

  if (!values.description.trim()) {
    errors.description = "상세 설명을 입력해주세요.";
  } else if (values.description.length < 10) {
    errors.description = "상세 설명은 10자 이상 입력해주세요.";
  } else if (values.description.length > 1000) {
    errors.description = "상세 설명은 1000자 이하로 입력해주세요.";
  }

  if (values.category_id === 0) {
    errors.category_id = "카테고리를 선택해주세요.";
  }

  if (values.latitude === 0 && values.longitude === 0) {
    errors.location = "위치 정보를 가져와주세요.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

export const validateImageFile = (file: File | null) => {
  if (!file) return { isValid: true, error: null };

  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

  if (file.size > maxSize) {
    return { isValid: false, error: "이미지 크기는 5MB 이하여야 합니다." };
  }

  if (!allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: "JPG, PNG, GIF 형식의 이미지만 업로드 가능합니다.",
    };
  }

  return { isValid: true, error: null };
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getStatusText = (status: string) => {
  const statusMap: Record<string, string> = {
    PENDING: "미확인",
    IN_PROGRESS: "처리 중",
    COMPLETED: "처리 완료",
    REJECTED: "반려",
    CHECKED: "확인",
    PROCESSING: "처리 중",
  };

  return statusMap[status] || "확인";
};

export const getStatusColor = (status: string) => {
  const colorMap: Record<string, string> = {
    PENDING: "#DB2C36",
    IN_PROGRESS: "#000", 
    COMPLETED: "#1860F0",
    REJECTED: "#DB2C36", 
    CHECKED: "#000", 
    PROCESSING: "#000", 
  };
  return colorMap[status] || "#343a40"; // 기본 검정색
};
