import { GetLocalStorage } from "@/util/LocalStorage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token = GetLocalStorage("findMdToken");
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.10.14:8000/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  endpoints: () => ({}),
});
export const baseUrl = "http://192.168.10.14:8000";
