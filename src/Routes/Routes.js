import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import CourseCardDetails from "../Components/CourseCardDetails/CourseCardDetails";
import Courses from "../Components/Courses/Courses";
import Details from "../Components/Details/Details";
import Errorpage from "../Components/ErrorPage/Errorpage";
import FAQ from "../Components/FAQ/FAQ";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Sidebar from "../Components/Sidebar/Sidebar";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: async () => { return fetch('https://assignment-code-academy-server.vercel.app/courses') },
                element: <Courses></Courses>
            },
            {
                path: '/details',
                loader: async () => { return fetch(`https://assignment-code-academy-server.vercel.app/courses`) },
                element: <Details></Details>
            },
            {
                path: '/details/:id',
                loader: async ({ params }) => { return fetch(`https://assignment-code-academy-server.vercel.app/courses/${params.id}`) },
                element: <Details></Details>
            },
            {
                path: '/details/:id',
                loader: async ({ params }) => { return fetch(`https://assignment-code-academy-server.vercel.app/courses/${params.id}`) },
                element: <CourseCardDetails></CourseCardDetails>
            },
            {
                path: '/details/:id',
                loader: async ({ params }) => { return fetch(`https://assignment-code-academy-server.vercel.app/courses/${params.id}`) },
                element: <Sidebar></Sidebar>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])