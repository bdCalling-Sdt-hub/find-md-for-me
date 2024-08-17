import { api } from "@/redux/api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // login
    login: builder.mutation({
      query: (value) => {
        return {
          url: "/login",
          method: "POST",
          body: value,
        };
      },
    }),

    // forget password
    forgetpass: builder.mutation({
      query: (value) => {
        return {
          url: "/forget-password",
          method: "Post",
          body: value,
        };
      },
    }),

    // sent otp
    postOTP: builder.mutation({
      query: (value) => {
        return {
          url: "/email-verify",
          method: "POST",
          body: value,
        };
      },
    }),
    //  reset password
    resetPass: builder.mutation({
      query: (value) => {
        return {
          url: "/reset-password",
          method: "POST",
          body: value,
        };
      },
    }),

    // get user profile
    getProfile: builder.query({
      query: () => "/user",
    }),
    // post user profile info
    postProfile: builder.mutation({
      query: (values) => {
        // console.log(values);  
        return {
          url: "/profile-update/request",
          method: "POST",
          body: values,
        };
      },
    }),
    // change password
    changePass: builder.mutation({
      query: (values) => {
        return {
          url: "/update-password",
          method: "POST",
          body: values,
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useForgetpassMutation,
  usePostOTPMutation,
  useResetPassMutation,
  useGetProfileQuery,
  usePostProfileMutation,
  useChangePassMutation,
} = authApi;
