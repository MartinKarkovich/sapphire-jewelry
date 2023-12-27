import { Navigate } from "react-router-dom";

import Home from "./Home/Home.jsx";
import Category from "./Category/Category";
import Details from "./Details/Details";

const pagesData = [
  // DEFAULT REDIRECT
  {
    path:"*",
    element: <Navigate to='/'/>,
    title: "unknown"
  },
  {
    path: "",
    element: <Home />,
    title: "home"
  },
  {
    path: "category/:category",
    element: <Category />,
    title: "category"
  },
  {
    path: "details/:id",
    element: <Details />,
    title: "details"
  }
];

export default pagesData;