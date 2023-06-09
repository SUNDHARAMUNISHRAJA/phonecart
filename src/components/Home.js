import { Box, Button, Card, Divider, Grid,Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import '../assets/css/body.css';
import '../assets/js/localstorage.js';
function Home() {
  return (

  
    <div >
      <Grid container spacing={4} center marginTop={"10%"} >
  
      <Grid item xs={5} marginLeft={"8%"} >
    <Card   >
      <Box height={"300px"}  >     
      
       <Typography variant="h3" component="h2" paddingTop={"20px"} paddingBottom={"10px"} paddingLeft={"40px"} color={"#15f4ee"} >
       WELCOME USER !! 
           </Typography>
       <Divider ></Divider> 
       <center>
        <br></br><br></br>
        <h5>LOOKING FOR LOGIN PAGE ..</h5>
        <Link to="login">
        <Button style={{backgroundColor:"#15f4ee",color:"#000"}} >Click Me </Button>
        </Link>

      </center>
      </Box>

      </Card>
  
      </Grid>          
      <Grid item xs={5} marginLeft={"20px"} >
      <Card   >
        <Box height={"300px"} >
        <Typography variant="h3" component="h2"paddingTop={"20px"} paddingBottom={"10px"}   paddingLeft={"20px" } color={"#15f4ee"} >
        WELCOME EMPLOY !! 
           </Typography>
 
       <Divider></Divider>
       <center>
        <br></br><br></br>
        <h5>LOOKING FOR LOGIN PAGE ..</h5>
        <Link  to="emplogin">    
        <Button style={{backgroundColor:"#15f4ee",color:"#000"}}>Click Me </Button>
        </Link>

      </center>
        </Box>
        </Card>
        </Grid>
      
        </Grid>
        </div>
  );
}

export default Home;
