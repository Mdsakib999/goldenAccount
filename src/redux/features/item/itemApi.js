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
    postItem: build.mutation({
      query: (data) => ({
        url: "/item",
        method: "POST",
        body: data,
      }),
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
    getItemByCategory: build.query({
      query: (category) => ({
        url: `/items?category=${category}`,
        method: "GET",
      }),
    }),
    searchItem: build.query({
      query: (text) => ({
        url: `/searchData?search=${text}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetItemQuery,
  useUpdateItemMutation,
  useDeleteItemMutation,
  useGetItemByCategoryQuery,
  useSearchItemQuery,
  usePostItemMutation,
} = itemApi;
