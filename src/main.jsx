import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import MainBody from './components/layout/MainBody';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Login from './components/shared/Login/Login';
import Register from './components/shared/Register/Register';
import Home from './components/Home/Home';
import ErrorPage from './components/shared/ErrorPage/ErrorPage';
import ChefDetail from './components/Chefs/ChefDetail';
import AuthProvider from './components/providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import Terms from './components/Terms/Terms';
import ComingSoon from './components/About/ComingSoon';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainBody></MainBody>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/terms",
        element: <Terms></Terms>
      },
      {
        path: "/coming",
        element: <ComingSoon></ComingSoon>
      },
      {
        path: "/chef/:chefId",
        element: <PrivateRoute><ChefDetail></ChefDetail></PrivateRoute>,
        loader: ({ params }) => fetch('https://recipe-maker-server-khalid-ibne-hussain.vercel.app/chef_data')
      },

    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  // </React.StrictMode>,
)
