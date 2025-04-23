import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
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
                loader: async () => {
                  const res = await fetch("/doctors.json");
                  if (!res.ok) {
                    throw new Response("Failed to load doctors", { status: 500 });
                  }
                  return res.json();
                },
                Component: BookList
            },

            {
                path: '/details/:id',
                loader: async ({ params }) => {
                    const res = await fetch("/doctors.json");
                    const doctors = await res.json();
                    const doctor = doctors.find(doc => doc.id === parseInt(params.id));

                    if (!doctor) {
                        throw new Response("Not Found", { status: 404 });
                    }

                    return doctor;
                },
                Component: Details,
            },

            {
                path: '/blogs',
                Component: Blogs
            }

        ]
    },
]);

