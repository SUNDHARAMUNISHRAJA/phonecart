import { Box, Card, Divider, FormGroup, FormLabel, Grid, TextField,Typography ,InputAdornment,IconButton, Button,  colors} from "@mui/material";
import React from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, NavLink } from "react-router-dom";
import '../assets/css/body.css'
function EmpRegister()

{

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    return(


        <div>
       <Link to="/" ><Button style={{backgroundColor:"#FFF",borderRadius:"5px",padding:"5px",color:"#000" }}>Home</Button></Link> 
        <Grid marginLeft={"32%"} marginTop={"10px"}height={"400px"} width={"400px"}> 
          
           <center>
               <Card>
            <Box > 
             
       <Typography variant="h4" component="h2" padding={"30px"}  color={"#15f4ee"} borderColor={"#000"} fontSize={"30px"}>
       LETS REGISTER NOW 
           </Typography>
           <Divider></Divider>
                <FormGroup>
                    <Grid   paddingTop={"20px"}> 
                <TextField type="text" label="username" InputLabelProps={{style:colors}}> </TextField>
                 </Grid>
                 <Grid  paddingTop={"20px"}> 
                <TextField type="text"  label="Employee_id"></TextField>
                 </Grid>
                 <Grid  paddingTop={"20px"}> 
                <TextField type="email"  label="email"></TextField>
                 </Grid>
                 <Grid  paddingTop={"20px"}> 
                <TextField type="password"  label="password"></TextField>
                 </Grid>
                 <Grid  paddingTop={"20px"}>
                 <TextField 
                  type={showPassword ? 'text' : 'password'} label="conformpassword">
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
                <Link to="emplogin/EmpHome"><Button style={{backgroundColor:"#00FFFF",borderRadius:"4px",color:"#000"}}>REGISTER</Button></Link> 
                 </Grid>
                 <p style={{cursor:"pointer"}}>Already registered with us <Link to="/phonecart/emplogin" >click me</Link>  </p>
                </FormGroup>
                </Box>
        </Card>
      </center>
   
        </Grid>
      
        </div>
    )

}
export default EmpRegister;