import { baseApi } from "../../Apis/baseApi";

const itemApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getItem: build.query({
      query: () => {
        return {
          url: "/item",
          method: "GET",
        };
      },
    }),
    updateItem: build.mutation({
      query: ({ id, payload }) => {
        return {
          url: `/item/${id}`,
          method: "PATCH",
          body: payload,
        };
      },
    }),
    deleteItem: build.mutation({
      query: ({ id }) => ({
        url: `/item/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetItemQuery, useUpdateItemMutation, useDeleteItemMutation } =
  itemApi;
