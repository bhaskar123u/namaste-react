import ReactDOM from "react-dom/client";
import About from "./components/About";
import Body from "./components/Body";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // we need routing configuration
import RestaurantMenuCard from "./components/RestaurantMenuCard";


const AppLayout = () => {
  return (
    <div className="page">
      <div className="container">
        <Header />
        {/* if my path is "/" we will have <Header /> and then <Body />, if path is "/about" we will have <Header /> and <About />,
        if path is "/contact" we will have <Header /> and <Contact />, so we want the component according to the path*/}
        <Outlet />
      </div>
    </div>
  );
};

// list of object, each object defines a path and it's config.
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:resId", // :resId - dynamic
        element: <RestaurantMenuCard />,
        errorElement: <Error />
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
