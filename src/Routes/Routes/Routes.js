import { createBrowserRouter } from "react-router-dom";
import DatabaseLayout from "../../Layout/DatabaseLayout/DatabaseLayout";
import Main from "../../Layout/Main/Main";
import BlogPage from "../../Pages/BlogPage/BlogPage";
import Categoris from "../../Pages/Categoris/Categoris";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllSellar from "../../Pages/Dashboard/AllSellar/AllSellar";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import DashboardHome from "../../Pages/Dashboard/DashboardHome/DashboardHome";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import PaymentPage from "../../Pages/Dashboard/PaymentPage/PaymentPage";
import WishlistProduct from "../../Pages/Dashboard/WishlistProduct/WishlistProduct";
import HomeMain from "../../Pages/Home/HomeMain/HomeMain";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import ErrorPage from "../../SharedPage/ErrorPage/ErrorPage";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import SellerRoutes from "../SellerRoutes/SellerRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      { path: "/", element: <HomeMain></HomeMain> },
      { path: "/blog", element: <BlogPage></BlogPage> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(
            `https://resale-market-server-taupe.vercel.app/category/${params.id}`
          ),
        element: (
          <PrivetRoute>
            <Categoris></Categoris>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage></ErrorPage>,
    element: <DatabaseLayout></DatabaseLayout>,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivetRoute>
            <DashboardHome></DashboardHome>
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/myorders",
        element: (
          <PrivetRoute>
            <MyOrders></MyOrders>
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(
            `https://resale-market-server-taupe.vercel.app/mybookedProducts/${params.id}`
          ),
        element: (
          <PrivetRoute>
            <PaymentPage></PaymentPage>
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <SellerRoutes>
            <AddProduct></AddProduct>
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/allSellar",
        element: (
          <AdminRoutes>
            <AllSellar></AllSellar>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/roportProduct",
        element: (
          <PrivetRoute>
            <WishlistProduct></WishlistProduct>
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/myProduct",
        element: (
          <SellerRoutes>
            <MyProducts></MyProducts>
          </SellerRoutes>
        ),
      },
    ],
  },
]);

export default router;
