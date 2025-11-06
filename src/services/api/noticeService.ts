import { customAxios } from "@/lib/customAxios";
import {
  CreateNoticeRequest,
  CreateNoticeResponse,
  NoticesListResponse,
  Notice,
} from "@/types";

export const noticeService = {
  getNotices: async (
    offset: number = 0,
    size: number = 15
  ): Promise<NoticesListResponse> => {
    const response = await customAxios.get<NoticesListResponse>(
      `/notifications?offset=${offset}&size=${size}`
    );
    return response.data;
  },

  getNoticeById: async (noticeId: number): Promise<Notice | null> => {
    try {
      const response = await noticeService.getNotices(0, 100); 
      const notice = response.items.find((n) => n.notification_id === noticeId);
      return notice || null;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  createNotice: async (
    noticeData: CreateNoticeRequest
  ): Promise<CreateNoticeResponse> => {
    const response = await customAxios.post<CreateNoticeResponse>(
      "/notifications",
      noticeData
    );
    return response.data;
  },

  updateNotice: async (
    noticeId: number,
    noticeData: Partial<CreateNoticeRequest>
  ) => {
    const response = await customAxios.patch(
      `/notifications/${noticeId}`,
      noticeData
    );
    return response.data;
  },

  deleteNotice: async (noticeId: number): Promise<void> => {
    await customAxios.delete(`/notifications/${noticeId}`);
  },
};
