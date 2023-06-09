import React from "react";
import { AppBar,Button,Grid,Stack,Toolbar,Card, Typography ,Box, List, ListItem,Divider} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userslice";
import { Connect } from "react-redux";
class UserHome extends React.Component
{
   
render()
{
     const user=this.state;
     console.log(user);
   const Img=()=>
   {
   var arr=[['Realmef22','15,000'],['Redmi 8','12,000'],['Nokia AGX','48,000'],['one+9','39,000'],['samsunggalaxy','28,000'],['iphone12','1,28,000']];
   var lst=arr.map((value,index)=>
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
   var arr=[['Dell-Lattitude3420','75,000','MediaTech-G95pro'],['Dell-XPS17','1,12,000','Snapdragan-V24'],['Asus-vivobook','88,000','intel-G4-r434'],['Hp-15sfrs','1,39,000','Intel-Corei7-iuy789'],['Hp-pavillion','2,18,000','Intel-Corei11-vpro'],['Sony-vaio','1,66,000','E Series SVE1513BYNB ']];
   
   var lst=arr.map((value,index)=>
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
            <Button sx={{backgroundColor:"#00FFFF",width:"100%",color:"#000",fontSize:"18px"}} >ADD CART</Button></Typography>
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
         <Link to="cart">  <Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>Cart</Button></Link> 
         <Link to="orders"><Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>Orders</Button></Link> 
        <Link to="/"><Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>Logout</Button></Link>    
          </Stack>
        </Toolbar>
    </AppBar>
    <Box marginTop={"7%"}>
    <Typography variant="h4">Welcome</Typography>
        <Typography variant="h5">Smart Phones</Typography>
        <Grid rowSpacing={3} container>
        
         <Img/>

         </Grid>
    <Typography variant="h5"  paddingTop={"40px"} >Laptops</Typography>
    <Grid container rowSpacing={5}  paddingTop={"30px"} paddingBottom={"30px"}>
    <LapImg/>
         </Grid>
    </Box>
    </Grid>);
}
}
export default UserHome;