export interface PropertyListResponse {
  properties: {
    id: number;
    address: string;
    area: number;
    biddingDate: string;
    appraisedPrice: number;
    minPrice: number;
    images: string[];
  };
}

export interface PropertyDetailResponse {
  name: string;
  area: number;
  appraisedPrice: number;
  minPrice: number;
  address: string;
  caseNumber: string;
  caseTitle: string;
  courtName: string;
  registrationDate: string;
  commencementDate: string;
  status: string;
  scheduleInfos: {
    round: number;
    date: string;
    price: number;
    result: string;
  }[];
  debtor: string;
  creditor: string;
  owner: string;
  tenant: string;
  expertComment: string;
  images: string[];
}
