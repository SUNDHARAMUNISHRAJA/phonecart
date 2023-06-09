import logo from './logo.svg';
import './App.css';
import { Box, Button, Card, Divider, Grid,Link,Typography} from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/userLoginpage';
import EmpLogin from './components/employloginpage';
import Register from './components/Registerpage';
import EmpRegister from './components/employregister';
import UserHome from './components/userhomepage';
import UserCart from './components/usercart';
import UserOrder from './components/userorder';
import EmpHome from './components/emploeehome';
import EmpSales from './components/employsales';
import UserHome1 from './components/userhomepage2';
import UserCart1 from './components/usercart2';
import UserOrder1 from './components/userorder2';


function App()
{
  
  const router = createBrowserRouter([
    {
       path:"phonecart",
       element:<Home/>
    },
    {
      path:"phonecart/login",
      element:<Login/>
    },
    {
      path:"phonecart/emplogin",
      element:<EmpLogin/>
    },
    {
      path:"phonecart/login/register",
      element:<Register/>
    },
    {
      path:"phonecart/emplogin/empregister",
      element:<EmpRegister/>
    }
    //,
    // {
    //   path:"login/Home",
    //   element:<UserHome/>
    // }
    ,
    {
      path:"phonecart/login/Home",
      element:<UserHome1/>    }
    ,
    {
      path:"phonecart/login/Home/cart",
      element:<UserCart1/>
    }
      ,
    {
      path:"phonecart/login/Home/orders",
      element:<UserOrder1/>
    }  
    // ,
    // {
    //   path:"login/Home/cart",
    //   element:<UserCart/>
    // }
    // ,
    // {
    //   path:"login/Home/orders",
    //   element:<UserOrder/>
    // }  
    ,
    {
      path:"phonecart/emplogin/emphome",
      element:<EmpHome/>
    }
    ,
    {
      path:"phonecart/emphome/sales",
      element:<EmpSales/>
    }
  
  ]);
  return (
    <RouterProvider router={router}/>
     )
   
}

export default App;
