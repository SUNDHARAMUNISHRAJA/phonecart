import React from "react";
import { AppBar,Button,Grid,Stack,Toolbar,Card, Typography ,Box, List, ListItem,Divider} from "@mui/material";
//  import '../assets/css/UserHome.css';
import { Image, TimeToLeaveSharp } from "@mui/icons-material";
import {Link, NavLink, Route, Routes } from "react-router-dom";
import Switch  from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EmpSales from "./employsales";


class EmpHome extends React.Component
{
constructor(props)
{
  super(props);
  this.state={
    item:JSON.parse(localStorage.getItem("items")),
  }

render()
{ 
    const Rows=()=>
    {
    var arr1=this.state.item;
var arr=arr1[0].concat(arr1[1]);
    var row=arr.map((value,index)=>
    {
    return(<TableBody>

         <TableCell> {index+1}  </TableCell>
         <TableCell> {value[0]} </TableCell>
       <TableCell>{value[1]}</TableCell>
       
       <TableCell><Button sx={{backgroundColor:"#FF0055",color:"#FFF"}}>Edit</Button></TableCell>
       <TableCell><Button sx={{backgroundColor:"#FF5522",color:"#FFF"}}>Delete</Button></TableCell>
       </TableBody>);
    })
     return row;

    }
   
      
   
    return(
        <Grid container="flex"  style={{backgroundColor:"#FFF"}}>
    <AppBar style={{backgroundColor:"#00FFFF"}} >
        <Toolbar>
          <Typography variant="h3"sx={{flexGrow:1}} >SHOPCART</Typography>
          <Stack direction="row" spacing={3}>
            <Button color="inherit" sx={{fontSize:"20px",color:"#FFF"}}>Home</Button>
         {/* <NavLink to="/item">  <Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>Items</Button></NavLink>  */}
         <NavLink to="/emphome/sales"><Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>sold</Button></NavLink> 
        <NavLink to="/"><Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>Logout</Button></NavLink>    
          </Stack>
        </Toolbar>
    </AppBar>
    <Grid rowSpacing={3} container></Grid>
    <Box marginTop={"7%"} height={"auto"}>
    <Button sx={{backgroundColor:"#F70055",color:"#FFF",float:"right"}}>ADD</Button>
        <Typography variant="h4"  paddingTop={"40px"} marginTop={"5%"} >PRODUCTS</Typography>
   <Box width={"1000px"}>
   <TableContainer  >
    <Table  >
      <TableHead>
      <TableCell>Sno</TableCell>
        <TableCell>Product</TableCell>
        <TableCell>Price</TableCell>
        <TableCell>Edit</TableCell>
        <TableCell>Delete</TableCell>
     
      </TableHead>
  <Rows/>
    </Table>
    </TableContainer>
    </Box>
    </Box>
    </Grid>);
}
}
}
export default EmpHome;