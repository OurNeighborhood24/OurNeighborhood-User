export interface Notice {
  notification_id: number;
  writer_id: number;
  title: string;
  content: string;
  created_at: string;
}

export interface NoticesListResponse {
  total: number;
  offset: number;
  size: number;
  items: Notice[];
}

export type NoticesResponse = Notice[];

export interface CreateNoticeRequest {
  title: string;
  content: string;
}

export interface CreateNoticeResponse {
  message: string;
  notice: Notice;
}