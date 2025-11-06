import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BsGeoAlt,
  BsZoomIn,
  BsZoomOut,
  BsExclamationTriangle,
} from "react-icons/bs";
import * as S from "./style";
import Layout from "@/components/common/Layout";
import Header from "@/components/common/Header";
import { useMapReports } from "@/services/hooks/useMap";
import {
  KakaoMap,
  KakaoMarker,
  MarkerData,
  CategoryColors,
} from "@/types/kakao";
import { ReportMapData } from "@/services/api/mapApi";

const Map = () => {
  const navigate = useNavigate();
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<KakaoMap | null>(null);
  const [markers, setMarkers] = useState<KakaoMarker[]>([]);
  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [showWarning, setShowWarning] = useState(false);
  const [warningType, setWarningType] = useState<"safety" | "general">(
    "general"
  );

  const { reports, loading, error, refetch } = useMapReports();

  const categoryColors: CategoryColors = {
    1: "#aeff6b", // 쓰레기/환경
    2: "#4ECDC4", // 공원녹지
    3: "#45B7D1", // 교통-불법주차
    4: "#96CEB4", // 도로/보도
    5: "#f71c04", // 안전/치안
    6: "#FF9FF3", // 소음
    7: "#54A0FF", // 기타
    8: "#5F27CD", // 시설물
  };

  const getCategoryDisplayName = (categoryName: string) => {
    const nameMap: { [key: string]: string } = {
      쓰레기: "쓰레기/환경",
      환경: "쓰레기/환경",
      공원녹지: "공원녹지",
      "교통-불법주차": "교통-불법주차",
      불법주차: "교통-불법주차",
      도로: "도로/보도",
      보도: "도로/보도",
      안전: "안전/치안",
      치안: "안전/치안",
      소음: "소음",
      기타: "기타",
      시설물: "시설물",
    };

    return nameMap[categoryName] || `${categoryName}`;
  };

  const loadKakaoMapScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (window.kakao && window.kakao.maps) {
        resolve();
        return;
      }

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://dapi.kakao.com/v2/maps/sdk.js?appkey=efaa692513762c579bbee53cf618d68d";
      script.async = true;

      script.onerror = (error) => {
        reject(new Error("카카오 지도 스크립트 로드 실패"));
      };

      document.head.appendChild(script);
    });
  };

  const initializeMap = async () => {
    try {
      if (!mapContainer.current) {
        return;
      }

      await loadKakaoMapScript();

      if (!window.kakao || !window.kakao.maps) {
        console.error("Kakao Maps SDK가 로드되지 않았습니다.");
        return;
      }

      const { kakao } = window;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({ lat: latitude, lng: longitude });

            const userCenter = new kakao.maps.LatLng(latitude, longitude);
            const mapOption = {
              center: userCenter,
              level: 5,
            };

            const newMap = new kakao.maps.Map(mapContainer.current, mapOption);
            setMap(newMap);

            refetch({
              latitude,
              longitude,
              radius: 1000,
              limit: 50,
            });
          },
          (error) => {
            const defaultCenter = new kakao.maps.LatLng(37.5665, 126.978);
            const mapOption = {
              center: defaultCenter,
              level: 7,
            };

            const newMap = new kakao.maps.Map(mapContainer.current, mapOption);
            setMap(newMap);

            refetch({
              latitude: 37.5665,
              longitude: 126.978,
              radius: 2000,
              limit: 50,
            });
          }
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const initMapAsync = async () => {
      try {
        await initializeMap();
      } catch (error) {
        console.error(error);
      }
    };

    setTimeout(initMapAsync, 500);
  }, []);

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("이 브라우저에서는 위치 서비스를 지원하지 않습니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });

        if (map && window.kakao) {
          const { kakao } = window;
          const currentLatLng = new kakao.maps.LatLng(latitude, longitude);
          map.setCenter(currentLatLng);
        }

        refetch({
          latitude,
          longitude,
          radius: 1000,
          limit: 50,
        });
      },
      (error) => {
        console.error(error);
        alert("위치 정보를 가져올 수 없습니다. 위치 서비스를 활성화해주세요.");
      }
    );
  };

  const checkDangerousArea = (
    userLat: number,
    userLng: number,
    reports: ReportMapData[]
  ) => {
    const radius = 300;
    const dangerThreshold = 2;

    const nearbyReports = reports.filter((report) => {
      if (report.latitude === 0 && report.longitude === 0) return false;

      const distance = getDistance(
        userLat,
        userLng,
        report.latitude,
        report.longitude
      );
      return distance <= radius;
    });

    const safetyReports = nearbyReports.filter((report) => {
      const categoryName = report.category.category_name.toLowerCase();
      return (
        categoryName.includes("안전") ||
        categoryName.includes("치안") ||
        report.category.category_id === 5
      );
    });

    let warningType: "safety" | "general" = "general";
    let shouldWarn = false;

    if (safetyReports.length >= 1) {
      warningType = "safety";
      shouldWarn = true;
    } else if (nearbyReports.length >= dangerThreshold) {
      warningType = "general";
      shouldWarn = true;
    }

    if (shouldWarn) {
      setWarningType(warningType);
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 7000);
    }
  };

  const getDistance = (
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number
  ) => {
    const R = 6371e3;
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lng2 - lng1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };

  // 신고 데이터를 지도에 마커로 표시
  useEffect(() => {
    if (!map || !window.kakao || !reports.length) return;

    const { kakao } = window;

    markers.forEach((marker) => marker.setMap(null));

    const newMarkers: KakaoMarker[] = [];

    reports.forEach((report: ReportMapData) => {
      if (report.latitude === 0 && report.longitude === 0) return; // 좌표가 없는 경우 스킵

      const markerPosition = new kakao.maps.LatLng(
        report.latitude,
        report.longitude
      );
      const categoryColor =
        categoryColors[report.category.category_id] || "#666666";

      const markerImageSrc = `data:image/svg+xml;base64,${btoa(`
        <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.383 0 0 5.383 0 12C0 20.25 12 32 12 32S24 20.25 24 12C24 5.383 18.617 0 12 0Z" fill="${categoryColor}"/>
          <circle cx="12" cy="12" r="6" fill="white"/>
        </svg>
      `)}`;

      const markerImageSize = new kakao.maps.Size(24, 32);
      const markerImageOption = { offset: new kakao.maps.Point(12, 32) };

      const markerImage = new kakao.maps.MarkerImage(
        markerImageSrc,
        markerImageSize,
        markerImageOption
      );

      const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });

      marker.setMap(map);
      newMarkers.push(marker);

      kakao.maps.event.addListener(marker, "click", () => {
        const formatDate = (dateString: string) => {
          const date = new Date(dateString);
          return date.toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
        };

        const getStateColor = (state: string) => {
          switch (state) {
            case "PENDING":
              return "#ff9800";
            case "IN_PROGRESS":
              return "#2196f3";
            case "COMPLETED":
              return "#4caf50";
            case "REJECTED":
              return "#f44336";
            default:
              return "#666666";
          }
        };

        const getStateText = (state: string) => {
          switch (state) {
            case "PENDING":
              return "대기중";
            case "IN_PROGRESS":
              return "처리중";
            case "COMPLETED":
              return "완료";
            case "REJECTED":
              return "반려";
            default:
              return state;
          }
        };

        const imageHtml = report.image_url
          ? `
          <div style="margin: 8px 0;">
            <img src="${report.image_url}" 
                 style="width: 100%; max-width: 200px; height: 120px; object-fit: cover; border-radius: 8px;" 
                 alt="신고 이미지"
                 onerror="this.style.display='none'">
          </div>
        `
          : "";

        const content = `
          <div style="padding: 12px; min-width: 220px; max-width: 280px; font-family: 'Pretendard', sans-serif; line-height: 1.4;">
            <div style="font-weight: 600; font-size: 15px; margin-bottom: 6px; color: #333;">
              ${report.title}
            </div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
              <span style="font-size: 12px; color: #666;">
                ${getCategoryDisplayName(report.category.category_name)}
              </span>
              <span style="background: ${getStateColor(
                report.state
              )}; color: white; padding: 2px 6px; border-radius: 4px; font-size: 10px;">
                ${getStateText(report.state)}
              </span>
            </div>
            ${imageHtml}
            <div style="font-size: 12px; color: #666; margin-bottom: 8px; line-height: 1.3;">
              ${
                report.description.length > 80
                  ? report.description.substring(0, 80) + "..."
                  : report.description
              }
            </div>
            <div style="font-size: 11px; color: #999; border-top: 1px solid #eee; padding-top: 6px;">
              ${formatDate(report.created_at)}
            </div>
          </div>
        `;

        const infoWindow = new kakao.maps.InfoWindow({
          content: content,
        });

        infoWindow.open(map, marker);
      });
    });

    setMarkers(newMarkers);

    if (currentPosition) {
      checkDangerousArea(currentPosition.lat, currentPosition.lng, reports);
    }
  }, [map, reports, currentPosition]);

  const handleLocationClick = () => {
    getCurrentLocation();
  };

  const handleZoomIn = () => {
    if (!map) return;
    const level = map.getLevel();
    map.setLevel(level - 1);
  };

  const handleZoomOut = () => {
    if (!map) return;
    const level = map.getLevel();
    map.setLevel(level + 1);
  };

  const handleBack = () => {
    navigate("/main");
  };

  return (
    <Layout>
      <S.Container>
        <Header title="지도" centered={true} onBack={handleBack} />

        {loading && (
          <S.LoadingOverlay>
            <div>지도 데이터를 불러오는 중...</div>
          </S.LoadingOverlay>
        )}

        {error && (
          <S.ErrorOverlay>
            <div>{error}</div>
            <button onClick={getCurrentLocation}>다시 시도</button>
          </S.ErrorOverlay>
        )}

        {showWarning && (
          <S.WarningOverlay className={warningType}>
            <BsExclamationTriangle size={22} />
            <div>
              {warningType === "safety" ? (
                <>
                  <div>위험! 즉시 주의하세요!</div>
                  <div>
                    이 지역에서 안전/치안 관련 신고가 발생했습니다. 주변을
                    살피고 안전한 곳으로 이동하세요.
                  </div>
                </>
              ) : (
                <>
                  <div>주의 필요 지역</div>
                  <div>
                    이 지역에 다수의 신고가 접수되었습니다. 주변 상황에
                    주의하세요.
                  </div>
                </>
              )}
            </div>
          </S.WarningOverlay>
        )}

        <S.MapContainer ref={mapContainer} />

        <S.MapControls>
          <S.LocationButton onClick={handleLocationClick} title="현재 위치">
            <BsGeoAlt size={18} />
          </S.LocationButton>

          <S.ZoomControls>
            <S.ZoomButton onClick={handleZoomIn} title="확대">
              <BsZoomIn size={16} />
            </S.ZoomButton>
            <S.ZoomButton onClick={handleZoomOut} title="축소">
              <BsZoomOut size={16} />
            </S.ZoomButton>
          </S.ZoomControls>
        </S.MapControls>

        <S.Legend>
          <S.LegendTitle>신고 카테고리</S.LegendTitle>
          {Object.entries(categoryColors).map(([categoryId, color]) => {
            const categoryNames = {
              "1": "쓰레기/환경",
              "2": "공원녹지",
              "3": "교통-불법주차",
              "4": "도로/보도",
              "5": "안전/치안",
              "6": "소음",
              "7": "기타",
              "8": "시설물",
            };

            return (
              <S.LegendItem key={categoryId}>
                <S.LegendColor style={{ backgroundColor: color }} />
                <S.LegendText>
                  {categoryNames[categoryId as keyof typeof categoryNames]}
                </S.LegendText>
              </S.LegendItem>
            );
          })}
        </S.Legend>
      </S.Container>
    </Layout>
  );
};

export default Map;
