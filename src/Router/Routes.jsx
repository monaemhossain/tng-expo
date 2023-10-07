import { createBrowserRouter } from "react-router-dom";
import Banner from "../Components/Header/Banner/Banner";
import Root from "./Root";

  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Banner></Banner>
        }
      ]
    },
  ]);

export default Routes;