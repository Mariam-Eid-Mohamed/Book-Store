import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Books,
  Cart,
  ChangePassword,
  ForgetPassword,
  Home,
  Login,
  NotFound,
  Register,
  ResetPassword,
} from "./pages";
import { AuthLayout, MasterLayout } from "./components";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },

        {
          path: "reset-Password",
          element: <ResetPassword />,
        },
        {
          path: "change-Password",
          element: <ChangePassword />,
        },
        {
          path: "forget-Password",
          element: <ForgetPassword />,
        },
      ],
    },
    {
      path: "dashboard",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "books",
          children: [
            { index: true, element: <Books /> },
            // {path:":bookId",element:<Book/>}
          ],
        },

        // {
        //   path: "categories",
        //   element: <Categories />,
        // },
        // {
        //   path: "profile",
        //   element: <Profile />,
        // },
        // {
        //   path: "confirmation",
        //   element: <OrderConfirmation />,
        // },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
