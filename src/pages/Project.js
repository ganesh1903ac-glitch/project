// import { Typography } from "@mui/material";

// function Project(){
//     return(
//         <>
//         <Typography>Project</Typography>

//         </>
//     )
// }export default Project;
import { Typography, Container, Box } from "@mui/material";

function Project() {
  return (
    <Container>
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here you can showcase your projects, case studies, or portfolio work.
        </Typography>
      </Box>
    </Container>
  );
}

export default Project;
