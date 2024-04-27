import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Home, { loadRooms } from "./Pages/Home/Home.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import Signin from "./Pages/Signin/Signin.jsx";
import Admin from "./Pages/Admin/Admin.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Rooms from "./components/Rooms/Rooms.jsx";
import AdminLogin from "./Pages/Admin/AdminLogin/AdminLogin.jsx";
import AdminSignup from "./Pages/Admin/AdminSignup/AdminSignup.jsx";
import PrivateRoute from "./route/PrivateRoute.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Employee from "./components/Employee/Employee.jsx";
import Booking, { loadRoom } from "./Pages/Booking/Booking.jsx";
import BookingDetails from "./Pages/Admin/BookingDetails/BookingDetails.jsx";
import AllRoom from "./Pages/AllRoom/AllRoom.jsx";
import UsersPrivateRoute from "./route/UsersPrivateRoute.jsx";
import SearchRooms from "./Pages/Search_rooms/SearchRooms.jsx";
import CartPage from "./Pages/CartPage/CartPage.jsx";
import CartPage2 from "./Pages/CartPage2/CartPage2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: loadRooms,
      },
      {
        path: "all-rooms",
        element: <AllRoom />,
        loader: loadRooms,
      },
      {
        path: "booking/:id/:name",
        element: (
          <UsersPrivateRoute>
            <Booking></Booking>
          </UsersPrivateRoute>
        ),
        loader: loadRoom,
      },
      {
        path: "search-rooms",
        element: <SearchRooms />,
      },
      {
        path: "booking/:id/:name/cart",
        element: <CartPage />,
        loader: loadRoom,
      },
      {
        path: "booking/:id/:name/cart/checkout",
        element: <CartPage2 />,
      },
    ],
  },
  {
    path: "sign-up",
    element: <Signup></Signup>,
  },
  {
    path: "sign-in",
    element: <Signin></Signin>,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Admin />
      </PrivateRoute>
    ),
    children: [
      {
        path: "admin",
        element: <Dashboard />,
      },
      {
        path: "rooms",
        element: <Rooms />,
      },
      {
        path: "employee",
        element: <Employee />,
      },
      {
        path: "booking-details",
        element: <BookingDetails />,
      },
    ],
  },
  {
    path: "admin-login",
    element: <AdminLogin />,
  },
  {
    path: "admin-register",
    element: <AdminSignup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
