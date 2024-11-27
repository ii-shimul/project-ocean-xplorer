import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import CardDetails from "../pages/CardDetails";
import Home from "../components/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserProfile from "../pages/UserProfile";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "../pages/ResetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/userProfile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/resetPass",
        element: <ResetPassword></ResetPassword>,
      },
    ],
  },
]);
