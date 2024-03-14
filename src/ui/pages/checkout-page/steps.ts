import {
  PaymentPage,
  ReviewPage,
  ShippingPage,
  SummaryPage,
} from "./sub-pages/index";

export const STEPS_CONFIG = [
  {
    name: "Summary",
    component: SummaryPage,
  },
  {
    name: "Shipping Info",
    component: ShippingPage,
  },
  {
    name: "Payment",
    component: PaymentPage,
  },
  {
    name: "Review ",
    component: ReviewPage,
  },
];
