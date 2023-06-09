import React from "react";
import { AppBar,Button,Grid,Stack,Toolbar,Card, Typography ,Box, List, ListItem,Divider} from "@mui/material";
//  import '../assets/css/UserHome.css';
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userslice";
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function UserOrder1()
{const [cart,setcart]=useState(JSON.parse(localStorage.getItem("cart")));
const user=useSelector(selectUser);
   const Rows=()=>
   {
    var arr=[['Dell-Lattitude3420','75,000','MediaTech-G95pro'],['Dell-XPS17','1,12,000','Snapdragan-V24']];
    var sel=cart.filter((num)=>
    {
        return num[0]===user.name && num[6]==="purchased";
    })
    console.log(sel);
    var row=sel.map((value,index)=>
    {
     return( 
      <TableBody>
    <TableCell>{value[1]}</TableCell>
      <TableCell>{value[2]}</TableCell>
      <TableCell>{value[6]}</TableCell>
      <TableCell>{value[3]}</TableCell>
      </TableBody>);
    }
    )
    return row;
   }

    return(
        <Grid>
    <AppBar style={{backgroundColor:"#00FFFF"}} >
        <Toolbar>
          <Typography variant="h3"sx={{flexGrow:1}} >SHOPCART</Typography>
          <Stack direction="row" spacing={3}>
          <Link to="/phonecart/login/home">  <Button color="inherit" sx={{fontSize:"20px",color:"#FFF"}}>Home </Button></Link>
          <Link to="/phonecart/login/home/cart"><Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>Cart</Button></Link> 
          <Link to="/phonecart/login/home/orders">  <Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>Orders</Button></Link> 
            <Link to="/phonecart" >  <Button color="inherit"sx={{fontSize:"20px",color:"#FFF" }}>Logout</Button></Link>
          </Stack>
        </Toolbar>
    </AppBar>
   <Grid height={"600px"} sx={{backgroundColor:"#FFF"}}>
    <Typography variant="h4"  paddingTop={"40px"} marginTop={"5%"} >ORDERS</Typography>
    <Table>
      <TableHead>
        <TableCell>Product</TableCell>
        <TableCell>Price</TableCell>
        <TableCell>status</TableCell>
        <TableCell>Date</TableCell>
      </TableHead>
  <Rows/>
    </Table>
    </Grid>
    </Grid>
    );
}

export default UserOrder1;