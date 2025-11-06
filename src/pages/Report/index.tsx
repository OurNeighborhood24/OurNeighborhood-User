import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/common/Layout";
import Header from "@/components/common/Header";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Select from "@/components/common/Select";
import ImageUpload from "@/components/feature/ImageUpload";
import FormField from "@/components/feature/FormField";
import { useReport, useCategories } from "@/services/hooks/useReport";
import { useGeolocation } from "@/services/hooks/useGeolocation";
import { useCategoryRecommendation } from "@/services/hooks/useCategoryRecommendation";
import { ReportFormData } from "@/types";
import * as utils from "@/utils/utils";

const Report = () => {
  const navigate = useNavigate();
  const { submitReport, loading, error } = useReport();
  const { categories, isLoading: categoriesLoading } = useCategories();
  const { getCurrentLocation } = useGeolocation();
  const {
    loading: recommendLoading,
    error: recommendError,
    recommendation,
    getRecommendation,
    clearRecommendation,
  } = useCategoryRecommendation();

  const [formData, setFormData] = useState<ReportFormData>({
    title: "",
    description: "",
    category_id: 0,
    latitude: 0,
    longitude: 0,
    address: "",
    image: null,
  });

  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [showRecommendation, setShowRecommendation] = useState(false);

  useEffect(() => {
    handleGetLocation();
  }, []);

  const handleGetLocation = async () => {
    setLocationLoading(true);
    setLocationError(null);

    try {
      const location = await getCurrentLocation();
      setFormData((prev) => ({
        ...prev,
        latitude: location.latitude,
        longitude: location.longitude,
        address: location.address || "위치 정보",
      }));
    } catch (error: any) {
      setLocationError(error.message);
    } finally {
      setLocationLoading(false);
    }
  };

  const handleInputChange = (field: keyof ReportFormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (field === "description") {
      clearRecommendation();
      setShowRecommendation(false);
    }
  };

  const handleGetCategoryRecommendation = async () => {
    if (!formData.description || formData.description.trim().length < 5) {
      alert("카테고리 추천을 받으려면 신고 내용을 최소 5자 이상 입력해주세요.");
      return;
    }

    const result = await getRecommendation(formData.description);
    if (result) {
      setShowRecommendation(true);

      const recommendedCategory = categories.find(
        (cat: any) => cat.category_name === result.category
      );

      if (recommendedCategory) {
        handleInputChange("category_id", recommendedCategory.category_id);
      }
    }
  };

  const handleImageChange = (file: File | null) => {
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const handleSubmit = async () => {
    const validation = utils.validateReportForm(formData);
    if (!validation.isValid) {
      const firstError = Object.values(validation.errors)[0];
      alert(firstError);
      return;
    }

    try {
      const result = await submitReport(formData);
      alert("신고가 성공적으로 접수되었습니다!");
      navigate("/main");
    } catch (error) {}
  };

  const handleBack = () => {
    navigate(-1);
  };

  const categoryOptions = categories.map((cat: any) => ({
    value: cat.category_id.toString(),
    label: cat.category_name,
  }));

  return (
    <Layout>
      <Header title="신고하기" centered={true} onBack={handleBack} />

      <ImageUpload
        image={formData.image}
        onImageChange={handleImageChange}
        placeholder="이미지를 첨부해 주세요"
      />

      <FormField label="위치 정보">
        {locationLoading ? (
          <Input
            value="위치 정보를 가져오는 중..."
            onChange={() => {}}
            disabled={true}
          />
        ) : formData.address ? (
          <div>
            <Input
              value={formData.address}
              onChange={(value) => handleInputChange("address", value)}
              placeholder="위치를 입력해 주세요"
            />
            <div style={{ marginTop: "8px" }}>
              <Button
                variant="secondary"
                onClick={handleGetLocation}
                disabled={locationLoading}
              >
                위치 정보 다시 가져오기
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <Input
              value=""
              onChange={(value) => handleInputChange("address", value)}
              placeholder="위치를 입력해 주세요"
            />
            <div style={{ marginTop: "8px" }}>
              <Button
                variant="secondary"
                onClick={handleGetLocation}
                disabled={locationLoading}
              >
                위치 정보 가져오기
              </Button>
            </div>
            {locationError && (
              <div
                style={{
                  marginTop: "8px",
                  fontSize: "12px",
                  color: "#c33",
                }}
              >
                {locationError}
              </div>
            )}
          </div>
        )}
      </FormField>

      <FormField label="신고 제목">
        <Input
          value={formData.title}
          onChange={(value) => handleInputChange("title", value)}
          placeholder="신고할 제목을 입력해 주세요."
        />
      </FormField>

      <FormField label="신고 내용">
        <Input
          value={formData.description}
          onChange={(value) => handleInputChange("description", value)}
          placeholder="신고할 내용을 입력해 주세요."
          type="textarea"
        />
        <div style={{ marginTop: "8px" }}>
          <Button
            variant="secondary"
            onClick={handleGetCategoryRecommendation}
            disabled={
              recommendLoading ||
              !formData.description ||
              formData.description.trim().length < 5
            }
          >
            {recommendLoading ? "분석 중..." : "AI 카테고리 추천받기"}
          </Button>
        </div>

        {showRecommendation && recommendation && (
          <div
            style={{
              marginTop: "12px",
              padding: "12px",
              backgroundColor: "#f0f9ff",
              border: "1px solid #bae6fd",
              borderRadius: "8px",
              fontSize: "14px",
            }}
          >
            <div
              style={{
                fontWeight: "600",
                color: "#0369a1",
                marginBottom: "6px",
              }}
            >
              추천 카테고리: {recommendation.category}
            </div>
            <div style={{ color: "#0c4a6e", fontSize: "13px" }}>
              {recommendation.reason}
            </div>
          </div>
        )}

        {recommendError && (
          <div
            style={{
              marginTop: "8px",
              padding: "12px",
              backgroundColor: "#fee",
              border: "1px solid #fca5a5",
              borderRadius: "8px",
              fontSize: "13px",
              color: "#c33",
            }}
          >
            {recommendError}
          </div>
        )}
      </FormField>

      <FormField label="카테고리 선택">
        <Select
          value={formData.category_id.toString()}
          onChange={(value) =>
            handleInputChange("category_id", parseInt(value))
          }
          options={[
            {
              value: "0",
              label: categoriesLoading
                ? "카테고리 로딩 중..."
                : "카테고리를 선택해주세요",
            },
            ...categoryOptions,
          ]}
          placeholder="카테고리를 선택해주세요"
        />
      </FormField>

      {error && (
        <div
          style={{
            margin: "16px",
            padding: "12px",
            backgroundColor: "#fee",
            color: "#c33",
            borderRadius: "8px",
            fontSize: "14px",
          }}
        >
          {error}
        </div>
      )}

      <div style={{ margin: "24px 16px" }}>
        <Button
          variant="primary"
          fullWidth={true}
          onClick={handleSubmit}
          disabled={loading || locationLoading}
        >
          {loading ? "제출 중..." : "제출"}
        </Button>
      </div>
    </Layout>
  );
};

export default Report;
