import React from 'react';
import {
    createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Details from '../Pages/Details/Details';
import BookList from '../Pages/BookList/BookList';
import Blogs from '../Pages/Blogs/Blogs';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                loader: () => fetch("doctors.json"),
                path: '/',
                Component: Home,
            },

            {
                path: '/bookList',
                loader: () => fetch("doctors.json"),
                Component: BookList

            },

            {
                path: '/details/:id',
                loader: () => fetch("doctors.json"),
                Component: Details,
            },

            {
                path: '/blogs',
                Component: Blogs
            }

        ]
    },
]);

