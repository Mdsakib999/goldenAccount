import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./Apis/baseApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseNotSecureApi } from "./Apis/baseNotSecure";
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
setupListeners(store.dispatch);
