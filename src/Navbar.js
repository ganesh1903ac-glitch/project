import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
function Navbar() {
  return (
    <>
    <AppBar position="fixed" sx={{backgroundColor:'white'}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo / Name */}
        <Typography variant="h6" component="div" className="h1" sx={{ fontWeight: "bold",marginLeft:5 ,color:'black',fontSize:30}}>
         <Link style={{textDecoration:'none'}}><b>M</b>anjulatha</Link>
        </Typography>

        {/* Navigation Links */}
        <Box sx={{display:'flex', gap: 4,paddingRight:30,fontFamily:'serif',fontSize:20 }}>
          <Link style={{ textDecoration: "none", color: "blue", }} to="/home">
            Home
          </Link>
          <Link style={{ textDecoration: "none", color: "blue" }} to="/about">
            About
          </Link>
             <Link style={{ textDecoration: "none", color: "blue" }} to="/project">
            Projects
          </Link>
             <Link style={{ textDecoration: "none", color: "blue",  }} to="/contactdetails">
            Contactdetails
          </Link>
        </Box>
      </Toolbar>
    </AppBar>

  
    
    
       </>
      
  );
}

export default Navbar;
