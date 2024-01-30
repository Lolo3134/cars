import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { BASE_URL_USERS, REGISTER } from 'app/providers/store/endpoints';
import { Method } from 'app/providers/store/types';
import { RegistrationApiProps, RegistrationApiResponse } from 'app/providers/store/api/registration/registration.types';

export const registerApi = createApi({
  reducerPath: 'registerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_USERS,
  }),
  endpoints: builder => ({
    register: builder.mutation<RegistrationApiResponse, RegistrationApiProps>({
      query: data => ({
        url: REGISTER,
        body: data,
        method: Method.Post,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerApi;