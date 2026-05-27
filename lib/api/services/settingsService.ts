import axiosClient from "../axios-client";

export interface Setting {
  id: string;
  key: string;
  group: string;
  value: any;
  isPublic: boolean;
}

export const settingsService = {
  getPublicSettings: async () => {
    try {
      // Backend returns { data: Setting[], grouped: Record<string, Record<string, any>> }
      return await axiosClient.get<any, { data: Setting[], grouped: Record<string, Record<string, any>> }>("/settings/public");
    } catch (error) {
      console.error("Failed to fetch settings:", error);
      throw error;
    }
  }
};
