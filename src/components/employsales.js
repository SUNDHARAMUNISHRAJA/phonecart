import React from "react";
import { AppBar,Button,Grid,Stack,Toolbar,Card, Typography ,Box, List, ListItem,Divider} from "@mui/material";
import { Image, TimeToLeaveSharp } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
class EmpSales extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      item:JSON.parse(localStorage.getItem("items")),
      cart:JSON.parse(localStorage.getItem("cart")),
      p:0,
    }
  }

render()
{ 



    const Rows=()=>
    { var c=0
     var arr=[['Dell-Lattitude3420','75,000','MediaTech-G95pro'],['Dell-XPS17','1,12,000','Snapdragan-V24']];
     var arr1=this.state.item;
     var car=this.state.cart;
   var arrh=arr1[1].map((el)=>{
   var farr=car.filter((data)=>
    {
   //   alert(el[0]+"   - "+data[1]);
        return el[0]==data[1]; 
    })
    return farr;
   })
   
     
    this.setState({p:arr.length});
    // alert(arrh);
    // console.log(arrh);
  
     var row=arr1[1].map((value,index)=>
     {
        
          return( 
            <TableBody>
              <TableCell>{index+1}</TableCell>
          <TableCell>{value[0]}</TableCell>
            <TableCell>{value[1]}</TableCell>
            <TableCell>{value[2]}</TableCell>
            <TableCell>{this.state.p}</TableCell>
            </TableBody>);
        })   
        console.log(row);
        return row; 
    }
 
  
 
    return(
        <Grid container="flex"  style={{backgroundColor:"#FFF"}}>
    <AppBar style={{backgroundColor:"#00FFFF"}} >
        <Toolbar>
          <Typography variant="h3"sx={{flexGrow:1}} >SHOPCART</Typography>
          <Stack direction="row" spacing={3}>
          <Link to="/emplogin/emphome">      <Button color="inherit" sx={{fontSize:"20px",color:"#FFF"}}>Home</Button></Link> 
         {/* <Link to="/emphome">  <Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>Items</Button></Link>  */}
         <Link to=""><Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>sold</Button></Link> 
        <Link to="/"><Button color="inherit"sx={{fontSize:"20px",color:"#FFF"}}>Logout</Button></Link>    
          </Stack>
        </Toolbar>
    </AppBar>
    <Grid rowSpacing={3} container></Grid>
    <Box marginTop={"7%"} height={"500px"}>
    
        <Typography variant="h4"  paddingTop={"40px"} marginTop={"5%"} >PRODUCTS</Typography>
   <Box width={"1000px"}>
   <TableContainer  >
    <Table  >
      <TableHead>
      <TableCell>Sno</TableCell>
        <TableCell>Product</TableCell>
        <TableCell>Price</TableCell>
        <TableCell>specific</TableCell>
        <TableCell>date</TableCell>
      </TableHead>
  <Rows/>
    </Table>
    </TableContainer>
    </Box>
   
        
    </Box>
    </Grid>);
}
}
export default EmpSales;