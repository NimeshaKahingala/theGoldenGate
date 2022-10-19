import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import TermsAndConditions  from './pages/TermsAndConditions';
import Documents from './pages/Documents';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "aboutUs",
    element: <AboutUs />,
  },
  {
    path: "ContactUs",
    element: <ContactUs />,
  },
  {
    path: "Documents",
    element: <Documents />,
  },
  {
    path: "TermsAndConditions",
    element: <TermsAndConditions />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
