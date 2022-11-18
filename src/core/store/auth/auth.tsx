import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface UserResponse {
    sessionId: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://ci2.dextechnology.com:8000/api/User/Authorization',
        prepareHeaders: (headers, { getState }) => {
            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation<UserResponse, LoginRequest>({
            query: (credentials) => ({
                url: 'http://ci2.dextechnology.com:8000/api/User/Authorization',
                method: 'POST',
                body: credentials,
            }),
        }),
        protected: builder.mutation<{ message: string }, void>({
            query: () => 'protected',
        }),
    }),
});

export const { useLoginMutation, useProtectedMutation } = api;
