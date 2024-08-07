import { api } from "../api/apiSlice";

const dashboardApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // document
    postDocument: builder.mutation({
      query: (value) => {
        return {
          url: "/upload-document",
          method: "POST",
          body: value,
        };
      },
    }),

    // agreement
    postAgreement: builder.mutation({
      query: (value) => {
        return {
          url: "/update-aggriment",
          method: "POST",
          body: value,
        };
      },
    }),

    // appointment
    postAppointment: builder.mutation({
      query: (value) => ({
        url: "/update-document-appoinment",
        method: "POST",
        body: value,
      }),
    }),

    // good faith exam
    getFaith: builder.query({
      query: () => "/faith",
    }),
    // EHR
    getEHR: builder.query({
      query: () => "/ehr",
    }),

    // get vendor in dropdown
    vendorData: builder.query({
      query: () => "/vendor",
    }),

    // post vendor confirm form
    postVendorForm: builder.mutation({
      query: (values) => {
        return {
          url: "/confirm-order",
          method: "POST",
          body: values,
        };
      },
    }),
    //  MY team

    // get team table data
    getTeam: builder.query({
      query: () => "/my-teame",
    }),

    // add team member
    createTeam: builder.mutation({
      query: (values) => {
        return {
          url: "/store-teme",
          method: "POST",
          body: values,
        };
      },
    }),

    // delete team member
    deleteTeam: builder.mutation({
      query: (id) => ({
        url: `/delete-teame/${id}`,
        method: "DELETE",
      }),
    }),

    // Billing
    postBilling: builder.mutation({
      query: (value) => {
        return {
          url: "/billing-send-mail",
          method: "POST",
          body: value,
        };
      },
    }),
  }),
});

export const {
  usePostDocumentMutation,
  usePostAgreementMutation,
  usePostAppointmentMutation,
  useGetFaithQuery,
  useGetEHRQuery,
  useVendorDataQuery,
  usePostVendorFormMutation,
  useGetTeamQuery,
  useCreateTeamMutation,
  useDeleteTeamMutation,
  usePostBillingMutation,
} = dashboardApi;
