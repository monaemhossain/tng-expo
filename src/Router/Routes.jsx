import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import Services from "../Components/Services/Services";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ServiceDetails from "../Components/Services/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('eventData.json'),
        },
        {
          path: '/services',
          element: <Services></Services>,
          loader: () => fetch('eventData.json'),
        },
        {
          path: '/service-details',
          element: <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        },
        {
          path: '/gallery',
          element: <Gallery></Gallery>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/sign-up',
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);

export default Routes;