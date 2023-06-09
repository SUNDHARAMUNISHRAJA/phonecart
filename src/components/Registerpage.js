import { Box, Card, Divider, FormGroup, FormLabel, Grid, TextField,Typography ,InputAdornment,IconButton, Button,  colors} from "@mui/material";
import React from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, NavLink, useNavigate } from "react-router-dom";
import '../assets/css/body.css';
import  '../assets/js/localstorage.js';


function Register()

{  const [name, setname] = React.useState('');
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [conformpassword, setconformpassword] = React.useState('');
  const [Rarray, setRarray] = React.useState(JSON.parse(localStorage.getItem("Registertable")));
  const [showPassword, setShowPassword] = React.useState(false);
 const handleClickShowPassword = () => setShowPassword((show) => !show);
 const navigate=useNavigate();
 const register=()=>
 {
   var rarr=[name,email,password];
  const found = Rarray.find(obj => {
    return obj[0] === name;
  });
   
   if(found==null)
   {
    Rarray.push(rarr);
    alert("registered");
    localStorage.setItem("Registertable",JSON.stringify(Rarray));
    navigate(-1);
   }
   else
   {  
    alert("username already taken");
   }
  }
    return(
        <div>
       <Link to="/phonecart" ><Button style={{backgroundColor:"#FFF",borderRadius:"5px",padding:"5px",color:"#000" }}>Home</Button></Link> 
        <Grid marginLeft={"32%"} marginTop={"20px"}height={"400px"} width={"400px"}> 
          
           <center>
               <Card>
            <Box > 
             
       <Typography variant="h4" component="h2" padding={"30px"}  color={"#15f4ee"} borderColor={"#000"} fontSize={"40px"}>
       LETS REGISTER NOW ..
           </Typography>
           <Divider></Divider>
                <FormGroup>
                    <Grid   paddingTop={"20px"}> 
                <TextField type="text" label="username" InputLabelProps={{style:colors}} onChange={(e)=>{setname(e.target.value)}}> </TextField>
                 </Grid>
                 <Grid  paddingTop={"20px"}> 
                <TextField type="email"  label="email" onChange={(e)=>{setemail(e.target.value)}}></TextField>
                 </Grid>
                 <Grid  paddingTop={"20px"}> 
                <TextField type="password"  label="password"onChange={(e)=>{setpassword(e.target.value)}}></TextField>
                 </Grid>
                 <Grid  paddingTop={"20px"}>
                 <TextField 
                  type={showPassword ? 'text' : 'password'} label="conformpassword" onChange={(e)=>{setconformpassword(e.target.value)}} >
                 <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
                 </TextField>
                 </Grid>
                 <Grid paddingTop={"20px"}>
                 <Button style={{backgroundColor:"#00FFFF",borderRadius:"4px",color:"#000"}} onClick={register}>REGISTER</Button>
                 </Grid>
                 <p style={{cursor:"pointer"}}>Already registered with us <Link to="/phonecart/login" >click me</Link>  </p>
                </FormGroup>
                </Box>
        </Card>
      </center>
   
        </Grid> 
        </div>
    )

}
export default Register;