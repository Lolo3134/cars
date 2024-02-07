import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL_USERS, REGISTER, VERIFY_EMAIL } from 'app/providers/store/endpoints';
import { Method } from 'app/providers/store/types';
import {
  RegistrationApiProps,
  RegistrationApiResponse,
  VerifyApiProps
} from 'app/providers/store/api/registration/registration.types';
import { BaseQueryArg } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

export const registerApi = createApi({
  reducerPath: 'registerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_USERS,
  }),
  endpoints: builder => ({
    register: builder.mutation<RegistrationApiResponse, RegistrationApiProps>({
      query: ({ email, password }) => ({
        url: REGISTER,
        body: { email, password },
        method: Method.Post,
      }),
    }),
    verify: builder.mutation<RegistrationApiResponse, VerifyApiProps>({
      query: ({ email, verify_code })=> ({
        url: VERIFY_EMAIL,
        body: { email, verify_code },
        method: Method.Post,
      }),
    }),
  }),
});

export const { useRegisterMutation, useVerifyMutation } = registerApi;