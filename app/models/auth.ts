import type { AuthProvider } from "~/constants/auth";

export interface UserResponse {
  memberId: number;
  accessToken: string;
  refreshToken: string;
  registered: boolean;
}

export interface SignupResponse {
  memberId: number;
}

export interface MyInfoResponse {
  name: string;
  loginType: AuthProvider;
  cellPhone: string;
  birth: string;
  auctionStatus: boolean;
}
