// app.js
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import RestaurantMenuCard from "./components/RestaurantMenuCard";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => (
  <div className="page">
    <div className="container">
      <Header />
      <Outlet />
    </div>
  </div>
);

// routes list unchanged
const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>loading from suspense...</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
      { path: "/about", element: <About />, errorElement: <Error /> },
      { path: "/contact", element: <Contact />, errorElement: <Error /> },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenuCard />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
];

// ✅ Use basename only in production (Parcel sets NODE_ENV)
const basename = process.env.NODE_ENV === "production" ? "/namaste-react" : "/";

const router = createBrowserRouter(routes, { basename });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
