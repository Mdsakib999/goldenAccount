import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseNotSecureQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
});

export const baseNotSecureApi = createApi({
  reducerPath: "baseApi",
  baseNotSecureQuery,
  endpoints: () => ({}),
});
