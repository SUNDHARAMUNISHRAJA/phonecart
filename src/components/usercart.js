import React from "react";
import { AppBar,Button,Grid,Stack,Toolbar,Card, Typography ,Box, List, ListItem,Divider} from "@mui/material";
//  import '../assets/css/UserHome.css';
import { Image, TimeToLeaveSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";
class UserCart extends React.Component
{
render()
{
  
   const LapImg=()=>
   {
   var arr=[['Dell-Lattitude3420','75,000','MediaTech-G95pro']];
   var lst=arr.map((value,index)=>
    {   
        var img='../../images/'+ value[0]+'.jpg';
        console.log(img);
        return(
      
            <Box width={"900px"} height={"300px"} textAlign={"center"}>
                  <Card >
       <Grid container>
        <Grid item>
        <img src={img} width={"300px"} height={"300px"}></img>  
        </Grid>
           <Grid item width={"600px"} height={"300px"}>
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
        <Typography  variant="h6">
            <Button sx={{backgroundColor:"#00FFFF",width:"100%",color:"#000",fontSize:"18px"}} >BUY NOW</Button></Typography>
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
         <Link to="/login/home">  <Button color="inherit" sx={{fontSize:"20px",color:"#FFF"}}>Home</Button></Link> 
         <Link to="/login/home/cart"> <Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>Cart</Button></Link> 
         <Link to="/login/home/orders"> <Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>Orders</Button></Link> 
         <Link to="/">     <Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>Logout</Button></Link> 
          </Stack>
        </Toolbar>
    </AppBar>
    <Box marginTop={"7%"} marginBottom={"1px"} paddingBottom={"0px"} height={"500px"} >

        
    <Typography variant="h4"  paddingTop={"40px"} >CART</Typography>
   
    <LapImg/>
      
    </Box>
    </Grid>);
}
}
export default UserCart;