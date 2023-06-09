import React, { useState } from "react";
import { AppBar,Button,Grid,Stack,Toolbar,Card, Typography ,Box, List, ListItem,Divider} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userslice";
import { Connect } from "react-redux";
import { current } from "@reduxjs/toolkit";
function UserHome1()
{
    const [cart,setcart]=useState(JSON.parse(localStorage.getItem("cart")));
    const [items,setitems]=useState(JSON.parse(localStorage.getItem("items")));
    const [carr,setcarr]=useState(['','','']);
    const [date,setdate]=useState('');
   const user=useSelector(selectUser);
 console.log(user.name);
 var dt = new Date();
 var day = dt.getDate();
 var month = dt.getMonth() + 1;
 var year = dt.getFullYear();
 if (day < 10) {
   day = '0' + day;
 }
 if (month < 10) {
   month = `0${month}`;
 }

 var date1 = `${year}-${month}-${day}`;



 console.log(date1);
 
 const CartAdd=(e,category,price)=>
 {
const id=Math.random();
setcarr([user.name,e,price,date1,category, id,"cart"]);
cart.push(carr);
setcart(cart);
localStorage.setItem("cart",JSON.stringify(cart));
 }
   const Img=()=>
   {
   var lst=items[0].map((value,index)=>
    {
        var img='../images/' + value[0] +'.jpg';
        return(<Grid rowSpacing={3} paddingTop={"30px"} paddingLeft={"20px"}>
        <Card >
            <Box width={"200px"} textAlign={"center"}>
        <img src={img} width={"100%"} height={"100px"}></img>
        <Typography variant="h6"> {value[0]}</Typography>
        <Divider/>
        <List>
<ListItem>Ram : 16GB</ListItem>
<ListItem>Rom : 168GB</ListItem>
<ListItem>Screen : 6.1'</ListItem>
        </List>
        <Divider/>
        <Typography variant="h6">Rs.{value[1]}</Typography>
        <Divider/>
        <Typography sx={{backgroundColor:"#00FFFF"}} variant="h6">
        <Button sx={{backgroundColor:"#00FFFF",width:"100%",color:"#000",fontSize:"18px"}} >ADD CART</Button></Typography>
         </Box>
        </Card>

     </Grid>)
    })
    return lst;
   }
   const LapImg=()=>
   {
  var lst=items[1].map((value,index)=>
    {
        var img='../images/' + value[0] +'.jpg';
        return(<Grid rowSpacing={3} paddingTop={"30px"} paddingLeft={"20px"}>
        <Card >
            <Box width={"200px"} textAlign={"center"}>
        <img src={img} width={"100%"} height={"100px"}></img>
        <Typography variant="h6"> {value[0]}</Typography>
        <Divider/>
        <List>
<ListItem>Ram : 16GB</ListItem>
<ListItem>Rom : 1 TB</ListItem>
<ListItem>Screen : 17.5'</ListItem>
<ListItem>Processor : {value[2]}</ListItem>
        </List>
        <Divider/>
        <Typography variant="h6">RS.{value[1]}</Typography>
        <Divider/>
        <Typography  sx={{backgroundColor:"#00FFFF"}}   variant="h6">
            <Button sx={{backgroundColor:"#00FFFF",width:"100%",color:"#000",fontSize:"18px"}} value={value[0]} onClick={(e)=>CartAdd(e.target.value,"laptop",value[1] )}>ADD CART</Button></Typography>
         </Box>
        </Card>

     </Grid>)
    })
    return lst;
   }




    return(
        <Grid container="flex"  style={{backgroundColor:"#FFF"}}>
    <AppBar style={{backgroundColor:"#00FFFF"}} >
        <Toolbar>
          <Typography variant="h3"sx={{flexGrow:1}} >SHOPCART</Typography>
          <Stack direction="row" spacing={3}>
            <Button color="inherit" sx={{fontSize:"20px",color:"#FFF"}}>Home</Button>
         <Link to="cart" state={{cart:cart}} >  <Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>Cart</Button></Link>
         <Link to="orders"><Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>Orders</Button></Link>
        <Link to="/"><Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>Logout</Button></Link>
          </Stack>
        </Toolbar>
    </AppBar>
    <Box marginTop={"7%"}>
    <Typography variant="h4">Welcome {user.name}</Typography>
        <Typography variant="h5">Smart Phones</Typography>
        <Grid rowSpacing={3} container>

         <Img/>

         </Grid>
    <Typography variant="h5"  paddingTop={"40px"} >Laptops</Typography>
    <Grid container rowSpacing={5}  paddingTop={"30px"} paddingBottom={"30px"}>
    <LapImg/>
         </Grid>
    </Box>
    {/* <p>{carr}</p>
    <p>{cart}</p> */}
    </Grid>);

}
export default UserHome1;