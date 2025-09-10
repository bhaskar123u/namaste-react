import { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AppStore from "./common/AppStore";
import MyContext from "./common/MyContext";
import About from "./components/About";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import Playground from "./components/Playground";
import RestaurantMenuCard from "./components/RestaurantMenuCard";
import TestComponent from "./components/TestComponent";

// const Playground = lazy(() => import("./components/Playground"));

// Create the enhanced component once
const PlaygroundWrappedComponent = Playground(TestComponent);

const AppLayout = () => {
  // lifting the state up, this component is part of body and it will be set from action event of a button in header.
  const [modalOn, setModalOn] = useState(false);
  const [loggedInUserName, setLoggedInUserName] = useState(null);
  const [pendingPath, setPendingPath] = useState(null);

  return (
    <Provider store={AppStore}>
      <MyContext.Provider
        value={{
          modalOn,
          setModalOn,
          loggedInUserName,
          setLoggedInUserName,
          pendingPath,
          setPendingPath,
        }}
      >
        <div className="page">
          <div className="container">
            <Header />
            <Outlet />
          </div>
        </div>
      </MyContext.Provider>
    </Provider>
  );
};

// routes list config
const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/playground",
        element: (
          <Suspense fallback={<h1>loading from suspense...</h1>}>
            <PlaygroundWrappedComponent firstName="Bhaskar" lastName="Sharan" />
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
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
];

const basename = process.env.NODE_ENV === "production" ? "/namaste-react" : "/";

const router = createBrowserRouter(routes, { basename });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
