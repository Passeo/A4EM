import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AuthPanel from "./pages/AuthPanel.tsx";
import SettingPage from "./pages/SettingPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/register",
        element : <AuthPanel/>
    },
    {
        path : "/login",
        element : <AuthPanel/>
    },
    {
        path:"/settings",
        element:<SettingPage/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
