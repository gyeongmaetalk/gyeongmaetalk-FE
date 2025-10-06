export interface MatchCounselRequest {
  purpose: string;
  area: string;
  serviceType: string;
  interest: string;
  participantType: string;
}

export interface MatchCounselResponse {
  counselorId: number;
  counselFormId: number;
  counselorName: string;
  score: number;
  reviewCount: number;
  description: string;
  experience: number;
  counselCount: number;
  license: string;
  specialization: string;
}

export interface AvailableTimesRequest {
  counseldorId: number;
  date: string;
}
