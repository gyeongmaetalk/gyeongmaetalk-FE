import { http, HttpResponse } from "msw";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const handlers = [
  http.get(`${baseUrl}/reviews/1`, () => {
    return HttpResponse.json({
      id: "abc-123",
      firstName: "John",
      lastName: "Maverick",
    });
  }),
];
