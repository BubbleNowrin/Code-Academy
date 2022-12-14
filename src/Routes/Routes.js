import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Checkout from "../Components/Checkout/Checkout";
import CourseCardDetails from "../Components/CourseCardDetails/CourseCardDetails";
import Courses from "../Components/Courses/Courses";
import Details from "../Components/Details/Details";
import Errorpage from "../Components/ErrorPage/Errorpage";
import FAQ from "../Components/FAQ/FAQ";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Main from "../Layout/Main";
import PrivateRoutes from "./PrivateRoutes";

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
                path: '/checkout/:id',
                loader: async ({ params }) => { return fetch(`https://assignment-code-academy-server.vercel.app/courses/${params.id}`) },
                element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
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