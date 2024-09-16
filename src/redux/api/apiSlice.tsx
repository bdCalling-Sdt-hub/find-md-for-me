import { GetLocalStorage } from "@/util/LocalStorage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token = GetLocalStorage("findMdToken");
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://159.65.14.5:8000/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  endpoints: () => ({}),
});
export const baseUrl = "https://159.65.14.5:8000";
