import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carApi = createApi({
  reducerPath: 'carApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://45.61.55.244:8000/v1/' }),
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => 'cars/',
    }),
    getCar: builder.query({
      query: (car_id) => `cars/${car_id}/`,
    }),
  }),
});

export const { useGetCarsQuery, useGetCarQuery } = carApi;
