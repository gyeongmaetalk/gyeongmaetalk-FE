import { api } from "~/lib/ky";
import type { BaseResponse, PaginationResponse } from "~/models";
import type { PropertyDetailResponse, PropertyListResponse } from "~/models/property";

export const getPropertyList = async (
  page: number
): Promise<PaginationResponse<PropertyListResponse>> => {
  const searchParams = new URLSearchParams({ page: page.toString(), size: "10" });
  return api.get("properties/list", { searchParams }).json();
};

export const getPropertyDetail = async (
  id: string
): Promise<BaseResponse<PropertyDetailResponse>> => {
  return api.get(`properties/${id}`).json();
};
