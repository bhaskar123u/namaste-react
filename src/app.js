import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; // we need routing configuration
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import RestaurantMenuCard from "./components/RestaurantMenuCard";

// lazy loading
const Instamart = lazy(() => import("./components/Instamart"));

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
        path: "/instamart",
        element: (
          <Suspense fallback={
            <h1>loading from suspense...</h1>
          }>
            <Instamart />
          </Suspense>
        ),
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
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
