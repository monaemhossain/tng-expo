import { createBrowserRouter } from "react-router-dom";
import NavigationBar from "../Components/Header/Navbar/NavigationBar";

  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <NavigationBar></NavigationBar>,
    },
  ]);

export default Routes;