import { setupWorker } from "msw/browser";

import { reviewHandlers } from "./handlers/review";

export const worker = setupWorker(...reviewHandlers);
