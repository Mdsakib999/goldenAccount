import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseNotSecureQuery = fetchBaseQuery({
  baseUrl: "https://server.exploitwise.com/",
});

export const baseNotSecureApi = createApi({
  reducerPath: "baseApi",
  baseNotSecureQuery,
  endpoints: () => ({}),
});
