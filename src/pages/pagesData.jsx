import Home from "./Home/Home.jsx";
import Category from "./Category/Category";
import Details from "./Details/Details";

const pagesData = [
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
  },
];

export default pagesData;