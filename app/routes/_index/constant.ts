import { type StatusMapType } from "./title-section";

export const HOME_SECTION_TITLES = {
  RESERVATION: "예정된 상담",
  A_TO_Z: "경매 입문자를 위한 A to Z",
  USER_REVIEWS: "이용자들의 생생한 후기",
  NEWS: "이번주 경매 뉴스",
  KEYWORDS: "인기 키워드",
  LOCAL_NEWS: "지역별 경매 소식",
};

export type Status = "notLoggedIn" | "reservation" | "notReservation";

export const statusMap: StatusMapType = {
  notLoggedIn: {
    title: "내게 맞는 경매 전략, \n",
    highlightText: "무료로 상담 ",
    titleAfter: "받아보세요",
    description: "검증된 경매 전문가와 1:1로 시작하세요.",
    hasButton: true,
    buttonText: "무료 상담 신청하기",
    buttonLink: "/login",
  },
  reservation: {
    highlightText: "신뢰할 수 있는 전문가와 \n",
    titleAfter: "경매를 시작하는 가장 쉬운 방법",
    description: "헷갈리고 복잡한 경매 절차, 혼자 고민하지 마세요",
    hasButton: false,
  },
  notReservation: {
    title: "검증된 전문가가 \n",
    highlightText: "직접 선별한 매물",
    titleAfter: "을 받아보세요",
    description: "수익률, 입지, 권리분석까지 고려해 드려요.",
    hasButton: true,
    buttonText: "매물 추천받기",
    buttonLink: "/consult/apply",
  },
};
