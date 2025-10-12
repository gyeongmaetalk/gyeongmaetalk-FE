import { api } from "~/lib/ky";
import type { PaginationResponse } from "~/models";
import type { PropertyListResponse } from "~/models/property";

export const getPropertyList = async (
  page: number
): Promise<PaginationResponse<PropertyListResponse>> => {
  const searchParams = new URLSearchParams({ page: page.toString(), size: "10" });
  return api.get("properties/list", { searchParams }).json();
};
