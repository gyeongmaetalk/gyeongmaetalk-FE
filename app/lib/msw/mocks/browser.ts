import { setupWorker } from "msw/browser";

import { consultantReviewHandlers, reviewHandlers } from "./handlers/review";

export const worker = setupWorker(...consultantReviewHandlers, ...reviewHandlers);
