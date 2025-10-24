export interface ReadySubscribeResponse {
  subscriptionId: number;
  orderId: string;
  amount: number;
  orderName: string;
}

export interface ConfirmSubscriptionRequest {
  subscriptionId: string;
  paymentKey: string;
  orderId: string;
  amount: string;
}

export interface ConfirmSubscriptionResponse {
  status: string;
  paymentKey: string;
  orderId: string;
  totalAmount: number;
  failureReason: string;
}
