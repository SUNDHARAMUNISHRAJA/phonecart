import { Box, Card, Divider, FormGroup, FormLabel, Grid, TextField,Typography ,InputAdornment,IconButton, Button} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../assets/css/body.css'

function EmpLogin()
{
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    return(
       <div>  
         <Link to="/" ><Button style={{backgroundColor:"#FFF",borderRadius:"5px",padding:"5px",color:"#000" }}>Home</Button></Link> 
        <Grid marginLeft={"32%"} marginTop={"100px"}height={"400px"} width={"400px"}> 
  <center>
               <Card>
            <Box > 
             
       <Typography variant="h4" component="h2" padding={"30px"}  color={"#15f4ee"} borderColor={"#000"}>
       HEY ! HURRY UP IT'S ALREADY LATE 
           </Typography>
           <Divider></Divider>
                <FormGroup>
                    <Grid spacing={2} rowSpacing={5} paddingTop={"20px"}> 
                  
                <TextField type="text" label="username"></TextField>
                 </Grid>
                 <Grid  paddingTop={"20px"}>
                 <TextField 
            type={showPassword ? 'text' : 'password'} label="password">
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
                <Link to="emphome"><Button style={{backgroundColor:"#00FFFF",borderRadius:"4px",color:"#000"}}>LOGIN</Button></Link> 
                 </Grid>
                 <p>Still not registered with us ?<Link style={{cursor:"pointer"}} to="empregister">Click</Link></p>
                </FormGroup>
                </Box>
        </Card>
      </center>
   
        </Grid>
      
        </div>

    );
}
export default EmpLogin;