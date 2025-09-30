import { Typography, Grid,Box } from "@mui/material";
import imag from './images/DocScanner_PHTO_page-0001_optimized_10.jpg';

function About() {
  return (
    <>
      {/* Heading */}
      <Typography 
        sx={{ textAlign: 'center', fontSize: '48px', fontWeight: 600, marginBottom: 4 }} 
        variant="h4"
      >
        About Me
      </Typography>

      {/* Grid Container */}
      <Grid container spacing={2}  justifyContent="center" marginRight={20} fontFamily={'revert'}fontSize={20}boxShadow={1}>
        
        {/* Image */}
        <Grid item xs={12} md={3}>
          <img 
            src={imag} 
            alt="Profile"
            style={{
              width: '100%',
             marginRight:20,
              height: 300,
              borderRadius: '20%',
              objectFit: 'cover',
              transition: 'all 0.3s ease',
               display: 'block',
               margin: '0 auto',
              

            }}
          />
        </Grid>

        {/* Text blocks */}
        <Grid item xs={12} md={6} padding={5}   >
         <Typography  variant='h6'><li> Name:Manjulatha M</li></Typography><br></br>
         <Typography variant='h6'><li>Age:21</li></Typography><br></br>
         <Typography variant="h6"><li>Iam currently learning fullstack Developer in AET ACADEMY </li></Typography><br></br>
         <Typography variant="h6"><li>At  hyderabad and durination time is 6-months </li></Typography><br></br>
         <Typography variant="h6"><li>And theconologies are html,css,javascript mostly use reacts js library </li></Typography>
        
        
            </Grid>
           

      </Grid>
      <Typography 
        sx={{ textAlign: 'center', fontSize: '48px',color:'black', fontWeight: 600, marginBottom: 4 }} >
       <p> Skills</p>
       <Box >
        <Grid container spacing={2} marginLeft={5}>
          <Grid size={3}>
            <Typography variant="h5" sx={{fontWeight:600}}> HTML</Typography>
       <img src='https://icon2.cleanpng.com/20180320/vgw/avew9415g.webp' style={{height:200 ,transition: "transform 0.3s ease-in-out"}}/>
       </Grid>
         <Grid size={3}>
       
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsS33-WZKluLUMUsoTY89e6e7aty_8-6csDE6HAFUKh_Ei_PslIGBYppJj80YnUyI8AoE&usqp=CAU' style={{height:220 , }}>
       </img>
       </Grid>
<Grid size={3}>
  <Typography variant="h5" sx={{fontWeight:600}}>JS</Typography>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaw9YioYY4e6yV5V9ZtxZuizquWJTBaFp9FZ7LYvUNo2AXyzlh5quaeWx2jwKdWuE_sC4&usqp=CAU'/>
       </Grid>
       <Grid size={3}>
        <Typography variant="h5" sx={{fontWeight:600}}>Reacts JS</Typography>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF62sqxvwRlW8XUUXEoOvyeSYXxfdZPP2hXA&s'/>
       </Grid>
     </Grid>
     </Box>
     
     
     </Typography>
     
    </>
  );
}

export default About;

