import { createBrowserRouter } from "react-router-dom";
import DatabaseLayout from "../../Layout/DatabaseLayout/DatabaseLayout";
import Main from "../../Layout/Main/Main";
import Categoris from "../../Pages/Categoris/Categoris";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import HomeMain from "../../Pages/Home/HomeMain/HomeMain";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
        {path:'/', element:<HomeMain></HomeMain>},
        {path:'/login', element:<Login></Login>},
        {path:'/register', element:<Register></Register>},
        {path:'/category/:id',
        loader: ({params}) =>fetch(`http://localhost:5000/category/${params.id}`),
         element:<PrivetRoute><Categoris></Categoris></PrivetRoute>}
    ]
},
    {
        path:'/dashboard', element:<DatabaseLayout></DatabaseLayout>, children:[
            {path:'/dashboard', element:<MyOrders></MyOrders>},
            {path:'/dashboard/myorders', element:<MyOrders></MyOrders>},
            {path:'/dashboard/addProduct', element:<AddProduct></AddProduct>}
        ]
    }
])

export default router;