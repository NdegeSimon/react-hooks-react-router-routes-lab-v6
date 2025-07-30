// src/routes.js
import Home from "./Home";
import Movie from "./Movie";
import Actors from "./Actors";
import Directors from "./Directors";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
];

export default routes;
