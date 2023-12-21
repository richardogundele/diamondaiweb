import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { formatError } from './errorHandler';
// teacherconservation?email=ojo@gmail.com
// teacherconversation?email=mmu%40yahoo.com%27
// https://diamond-et14.onrender.com/
// Define a service using a base URL and expected endpoints
export const textApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://diamond-et14.onrender.com' }),
  endpoints: (builder) => ({
    sendText: builder.mutation({
      query({text, email, uri}) {
        return {
          url: `/${uri}?email=${email}&text=${text}`,
          method: "POST"
        };

      },
      transformErrorResponse: (response, meta, arg) => ({
        message: formatError(response),
        error: formatError(response),
      }),
      
     
    }),
    deleteChat: builder.mutation({
      query({ email, formatUriDelete}) {
        return {
          url: `/${formatUriDelete}?email=ojo@gmail.com`,
          method: "DELETE"
        };

      },
      transformErrorResponse: (response, meta, arg) => ({
        message: formatError(response),
        error: formatError(response),
      }),
      
     
    }),
    register: builder.mutation({
      query(email) {
        return {
          url: `/start?email=ojo@gmail.com`,
          method: "POST"
        };

      },
      transformErrorResponse: (response, meta, arg) => ({
        message: formatError(response),
        error: formatError(response),
      }),
    }),

    getMessage: builder.query({
      query: ({email, formatUriHistory}) => `/${formatUriHistory}?email=${email}`,
      transformErrorResponse: (response, meta, arg) => ({
        message: formatError(response),
        error: formatError(response),
      }),
    }),  


  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useSendTextMutation , useRegisterMutation, useGetMessageQuery, useDeleteChatMutation} = textApi