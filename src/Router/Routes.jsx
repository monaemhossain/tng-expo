import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import Services from "../Components/Services/Services";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Login/Login";

  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/services',
          element: <Services></Services>
        },
        {
          path: '/gallery',
          element: <Gallery></Gallery>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
  ]);

export default Routes;