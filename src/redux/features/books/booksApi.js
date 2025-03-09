import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: '/api', // Use relative path to work with Vite proxy
    credentials: 'omit', // Don't send credentials for cross-origin requests
    prepareHeaders: (headers) => {
        headers.set('Accept', 'application/json');
        headers.set('Content-Type', 'application/json');
        return headers;
    }
})

const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery,
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        fetchAllBooks: builder.query({
            query: () => ({
                url: '/books',
                method: 'GET'
            }),
            transformResponse: (response) => {
                console.log('Raw API Response:', response);
                try {
                    return Array.isArray(response?.data) ? response.data : 
                           Array.isArray(response) ? response : [];
                } catch (error) {
                    console.error('Error transforming response:', error);
                    return [];
                }
            },
            transformErrorResponse: (error) => {
                console.error('API Error:', error);
                return {
                    status: error.status,
                    message: error.data?.message || 'Failed to fetch books'
                };
            },
            providesTags: ["Books"]
        }),
        fetchBookById: builder.query({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'GET'
            }),
            providesTags: (result, error, id) => [{ type: "Books", id }],
        }),
        addBook: builder.mutation({
            query: (newBook) => ({
                url: `/books/create-book`,
                method: "POST",
                body: newBook
            }),
            invalidatesTags: ["Books"]
        }),
        updateBook: builder.mutation({
            query: ({id, ...rest}) => ({
                url: `/books/edit/${id}`,
                method: "PUT",
                body: rest
            }),
            invalidatesTags: ["Books"]
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Books"]
        })
    })
})

export const { useFetchAllBooksQuery, useFetchBookByIdQuery, useAddBookMutation, useUpdateBookMutation, useDeleteBookMutation } = booksApi;
export default booksApi;