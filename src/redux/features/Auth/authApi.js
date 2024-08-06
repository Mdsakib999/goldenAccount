import { baseApi } from "../../Apis/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (data) => ({
        url: "/adminLogin",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useUserLoginMutation } = authApi;
