export const baseReponse = (results: unknown) => ({
  isSuccess: true,
  code: 200,
  message: "success",
  results,
});

export const paginationResponse = (results: unknown) => ({
  ...baseReponse(results),
  page: 0,
  totalPages: 1,
  totalElements: 1,
  isFirst: true,
  isLast: true,
});

export const errorResponse = ({
  code,
  message,
  error,
}: {
  code: number;
  message: string;
  error?: string;
}) => ({
  isSuccess: false,
  code,
  message,
  error,
});
