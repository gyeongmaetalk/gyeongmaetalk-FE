export const PURPOSE_OPTIONS = [
  {
    value: "live",
    label: "실거주를 위한 집을 사고 싶어요",
  },
  {
    value: "invest",
    label: "투자 목적이에요",
  },
  {
    value: "unknown",
    label: "아직 잘 모르겠어요",
  },
];

export const REGION_OPTIONS = [
  {
    value: "capital",
    label: "수도권",
  },
  {
    value: "province",
    label: "지방 광역시",
  },
  {
    value: "unknown",
    label: "아직 잘 모르겠어요",
  },
  {
    value: "custom",
    label: "직접 입력",
  },
];

export const SERVICE_OPTIONS = [
  {
    value: "document",
    label: "서류 준비",
  },
  {
    value: "all",
    label: "낙찰부터 명도까지 전반적으로 도와주세요",
  },
  {
    value: "strategy",
    label: "경매 전략 컨설팅을 받고 싶어요",
  },
  {
    value: "unknown",
    label: "잘 모르겠어요. 관련해서 설명을 듣고 싶어요",
  },
];

export const CATEGORY_OPTIONS = [
  {
    value: "building",
    label: "상가/빌딩 경매",
  },
  {
    value: "apartment",
    label: "아파트 경매",
  },
  {
    value: "land",
    label: "유치권/임차권 등 권리 분석",
  },
  {
    value: "post-auction",
    label: "낙찰 후 명도",
  },
  {
    value: "unknown",
    label: "아직 잘 모르겠어요",
  },
];

export const LAST_STEP_OPTIONS = [
  {
    value: "personal",
    label: "개인",
    options: [
      {
        value: "personal-business",
        label: "감면 목적 등으로\n개인 사업자로 진행을 고려 중이에요",
      },
      {
        value: "personal-business-no",
        label: "개인 사업자 진행은 계획이 없어요",
      },
    ],
  },
  {
    value: "company",
    label: "법인",
  },
  {
    value: "unknown",
    label: "아직 정하지 못했어요",
  },
];
