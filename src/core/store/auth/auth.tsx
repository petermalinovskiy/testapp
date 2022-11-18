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
        baseUrl: 'http://ci2.dextechnology.com:8000/api/',
        prepareHeaders: (headers, { getState }) => {
            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.query<UserResponse, LoginRequest>({
            query: (credentials) => ({
                url: '/User/Authorization',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const { useLoginQuery } = api;
