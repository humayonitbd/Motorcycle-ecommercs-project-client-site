import { createBrowserRouter } from "react-router-dom";
import DatabaseLayout from "../../Layout/DatabaseLayout/DatabaseLayout";
import Main from "../../Layout/Main/Main";
import BlogPage from "../../Pages/BlogPage/BlogPage";
import Categoris from "../../Pages/Categoris/Categoris";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllSellar from "../../Pages/Dashboard/AllSellar/AllSellar";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import HomeMain from "../../Pages/Home/HomeMain/HomeMain";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import ErrorPage from "../../SharedPage/ErrorPage/ErrorPage";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {path:'/',
    errorElement: <ErrorPage></ErrorPage>,
     element:<Main></Main>, children:[
        {path:'/', element:<HomeMain></HomeMain>},
        {path:'/blog', element:<BlogPage></BlogPage>},
        {path:'/login', element:<Login></Login>},
        {path:'/register', element:<Register></Register>},
        {path:'/category/:id',
        loader: ({params}) =>fetch(`http://localhost:5000/category/${params.id}`),
         element:<PrivetRoute><Categoris></Categoris></PrivetRoute>}
    ]
},
    {
        path:'/dashboard',
        errorElement: <ErrorPage></ErrorPage>,
         element:<DatabaseLayout></DatabaseLayout>, children:[
            {path:'/dashboard', element:<PrivetRoute><MyOrders></MyOrders></PrivetRoute>},
            {path:'/dashboard/myorders', element:<MyOrders></MyOrders>},
            {path:'/dashboard/addProduct', element:<AddProduct></AddProduct>},
            {path:'/dashboard/allSellar', element:<AdminRoutes><AllSellar></AllSellar></AdminRoutes>},
            {path:'/dashboard/allUsers', element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>},
            {path:'/dashboard/myProduct', element:<MyProducts></MyProducts>}
        ]
    }
])

export default router;