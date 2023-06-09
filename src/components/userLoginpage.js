import { Box, Card, Divider, FormGroup, FormLabel, Grid, TextField,Typography ,InputAdornment,IconButton, Button} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../assets/css/body.css';
import '../assets/js/localstorage.js'
import { useDispatch } from "react-redux";
import { login } from "../features/userslice";


function Login()
{
    const [showPassword, setShowPassword] = React.useState(false);
    const [name, setname] = React.useState('');
    const [password, setpassword] = React.useState('');
    const [Register, setRegister] = React.useState(JSON.parse(localStorage.getItem("Registertable")));
    const [change,setchange]=useState(localStorage.getItem("check"));
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const  Handleclick=()=>
    {
      setchange("1");
    }
    const dispatch=useDispatch();
    const navigate=useNavigate();

  const handlesubmit=(e)=>
  {
  e.preventDefault();
 
  var check=Register.find((n)=>
      {
        console.log(n[0]+"==="+name);
         return  n[0]===name && n[2]===password;
      })

      alert(check);
      if(check==null)
      {
        alert("please enter a valid username/password")
      }else 
      {
        e.preventDefault();
        dispatch(login({
          name:name,
          password:password,
          LoggedIn:true,
        })
        );
        navigate("home");
      }

//  
  }

    return(
       <div>
        {/* <p>{change}</p> */}
           <Link to="/phonecart" ><Button style={{backgroundColor:"#FFF",borderRadius:"5px",padding:"5px",color:"#000" }}>Home</Button></Link> 
        <Grid marginLeft={"32%"} marginTop={"100px"}height={"400px"} width={"400px"}> 
          
  <center>
               <Card>
            <Box > 
             
       <Typography variant="h3" component="h2" padding={"30px"}  color={"#15f4ee"} borderColor={"#000"}>
       WELCOME USER !! 
           </Typography>
           <Divider></Divider>
                <FormGroup >
                    <Grid spacing={2} rowSpacing={5} paddingTop={"20px"}> 
                  
                <TextField type="text" label="username" onChange={(e)=>setname(e.target.value)}></TextField>
                 </Grid>
                 <Grid  paddingTop={"20px"}>
                 <TextField 
            type={showPassword ? 'text' : 'password'} label="password" onChange={(e)=>setpassword(e.target.value)}>
                 <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                </IconButton>
              </InputAdornment>
                 </TextField>
                 </Grid>
                 <Grid paddingTop={"20px"}>
             {/* <Link to="home"> */}
              <Button style={{backgroundColor:"#00FFFF",borderRadius:"4px",color:"#000"}} onClick={(e)=>handlesubmit(e)} >LOGIN</Button>
              {/* </Link>     */}
                 </Grid>
                 <p>Still not registered with us ? <Link to="phonecart/register">Click me</Link></p>
                </FormGroup>
                </Box>
        </Card>
        {/* <Button onClick={Handleclick}>click</Button> */}
      </center>
   
        </Grid>
      {/* <p>{name}</p>
      <p>{password}</p> */}
        </div>

    );
    } 

    function Logincheck()
    {
    
    }

export default Login;