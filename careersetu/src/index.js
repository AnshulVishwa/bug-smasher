import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import FormBackend from './Components/form';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoadingPage from './Components/loadingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoadingPage />
  },
  {
    path : "/home",
    element : <FormBackend />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
