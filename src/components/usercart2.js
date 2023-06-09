import React from "react";
import { AppBar,Button,Grid,Stack,Toolbar,Card, Typography ,Box, List, ListItem,Divider} from "@mui/material";
//  import '../assets/css/UserHome.css';
import { Image, KeyboardReturn, TimeToLeaveSharp } from "@mui/icons-material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userslice";
import { Link } from "react-router-dom";
function UserCart1(props)
{
    const [cart,setcart]=useState(JSON.parse(localStorage.getItem("cart")));
    const user=useSelector(selectUser);
 // console.log(cart);
 // console.log(user.name+"hiiii");
function purchase(e)
 { 
 //   alert(e);
 var som=cart.map((n)=>
 {    
//alert(n[0]+"==="+user.name +"&&" + n[5]+"==="+e+               "                 jjjj");
alert(n[0]==user.name && n[5]==e);
    if(n[0]==user.name && n[5]==e)
    { 
        console.log("hi");
        //   n.pop();
        //   n.push("purchased"); 
      n.splice(6,1,"purchased");
     // alert(n);
       return n;
        //   return  [...n[6],"purchased"];
    }
   else{
        return n;
      }
 })
 setcart(som);
 localStorage.setItem("cart",JSON.stringify(som));
  console.log(som);
  console.log(cart);
 }

const LapImg=()=>
   {
    var arr=[['Dell-Lattitude3420','75,000','MediaTech-G95pro'],['Dell-Lattitude3420','15,000','MediaTech-G95pro']];
 var arr1=cart.filter((num)=>
{ return num[0]===user.name && num[6]==="cart";
}
 )
console.log(arr1);

   var lst=arr1.map((value,index)=>
    {   
        var img='../../images/'+ value[1]+'.jpg';
        console.log(img);
        return(
      
            <Box width={"900px"} paddingTop={"30px"} paddingBottom={"10px"} height={"300px"} textAlign={"center"}>
                  <Card >
       <Grid container>
        <Grid item>
        <img src={img} width={"300px"} height={"300px"}></img>  
        </Grid>
           <Grid item width={"600px"} height={"300px"}>
        <Typography variant="h6"> {value[1]}</Typography>
        <Divider/>
        <List>
<ListItem>Ram : 16GB</ListItem>
<ListItem>Rom : 1 TB</ListItem>
<ListItem>Screen : 17.5'</ListItem>
<ListItem>Processor : {value[2]}</ListItem>
        </List>
        <Divider/>
        <Typography variant="h6">RS.{value[2]}</Typography>
        <Divider/>
        <Typography  variant="h6">
            <Button sx={{backgroundColor:"#00FFFF",width:"100%",color:"#000",fontSize:"18px"}} value={value[5]} onClick={(e)=>purchase(e.target.value)} >BUY NOW</Button></Typography>
            </Grid>
            </Grid>
            </Card>
         </Box>
     )
    })
    return lst;
   }




    return(
        <Grid container="flex"  style={{backgroundColor:"#FFF"}}  paddingBottom={"0px"} >
    <AppBar style={{backgroundColor:"#00FFFF"}} >
        <Toolbar>
          <Typography variant="h3"sx={{flexGrow:1}} >SHOPCART</Typography>
          <Stack direction="row" spacing={3}>
         <Link to="/phonecart/login/home">  <Button color="inherit" sx={{fontSize:"20px",color:"#FFF"}}>Home</Button></Link> 
         <Link to="/phonecart/login/home/cart"> <Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>Cart</Button></Link> 
         <Link to="/phonecart/login/Home/orders" state={{username:user}} > <Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>Orders</Button></Link> 
         <Link to="/phonecart">     <Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>Logout</Button></Link> 
          </Stack>
        </Toolbar>
    </AppBar>
    <Box marginTop={"7%"} marginBottom={"1px"} paddingBottom={"0px"} height={"auto"} >

        
    <Typography variant="h4"  paddingTop={"40px"} >CART</Typography>
   
    <LapImg/>
      
    </Box>
    </Grid>);

}
export default UserCart1;