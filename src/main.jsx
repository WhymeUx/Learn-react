import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/login.jsx';
import Register from './pages/register.jsx'
import ErrorPage from './pages/404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>hello</div>,
    errorElement: <ErrorPage/>
  },
  {
    path: 'login',
    element: <Login/>
  },
  {
    path: 'register',
    element: <Register/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
)
