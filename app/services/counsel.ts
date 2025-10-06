import { api } from "~/lib/ky";
import type { BaseResponse } from "~/models";
import type { MatchCounselRequest, MatchCounselResponse } from "~/models/counsel";

export const matchCounsel = async (
  props: MatchCounselRequest
): Promise<BaseResponse<MatchCounselResponse>> => {
  return api.post("counsels/matches", { json: props }).json();
};

export const getAvailableTimes = async (props: {
  counseldorId: number;
  date: string;
}): Promise<BaseResponse<string[]>> => {
  return api
    .get(`counsels/${props.counseldorId}/times`, { searchParams: { date: props.date } })
    .json();
};
