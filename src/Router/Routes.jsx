import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import Services from "../Components/Services/Services";
import Gallery from "../Pages/Gallery/Gallery";

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
        }      
      ]
    },
  ]);

export default Routes;