declare global {
  interface Window {
    kakao: any;
  }
}

export interface KakaoMap {
  setCenter: (latlng: KakaoLatLng) => void;
  getLevel: () => number;
  setLevel: (level: number) => void;
  panTo: (latlng: KakaoLatLng) => void;
}

export interface KakaoLatLng {
  getLat: () => number;
  getLng: () => number;
}

export interface KakaoMarker {
  setMap: (map: KakaoMap | null) => void;
  getPosition: () => KakaoLatLng;
}

export interface MarkerData {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
  category: string;
  categoryId: number;
  reportId: number;
  description: string;
  imageUrl?: string;
  state: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "REJECTED";
  createdAt: string;
}

export interface CategoryColors {
  [key: number]: string;
}
