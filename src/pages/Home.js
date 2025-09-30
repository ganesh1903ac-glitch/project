// // import { Typography } from "@mui/material";

// // function Home(){
// //     return(
// //         <>
// //       <img src="https://www.google.com/imgres?q=images%20photos&imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1580272%2Fpexels-photo-1580272.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-playmakerjoy-1580272.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2520girl%2F&docid=EPr-q9XY1mHs6M&tbnid=CPBYP-9mbgTQrM&vet=12ahUKEwjptYWl5v2PAxVkTGwGHauOFD8QM3oECA8QAA..i&w=3693&h=5540&hcb=2&ved=2ahUKEwjptYWl5v2PAxVkTGwGHauOFD8QM3oECA8QAA"/>

      
// //         </>
// //     )
// // }
// // export default Home;
// import { Box, Typography, Button } from "@mui/material";

// function Home() {
//   return (
//     <Box sx={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
//       {/* Background Image */}
      
       
//       <img 
//   src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/ade068cf-3e56-49ab-a778-78d62566be97.png" 
//   alt="Professional Frontend Developer Workspace"
//   style="width:100%; height:400px; object-fit:cover; border-radius:12px; box-shadow: 0 4px 24px rgba(0,0,0,0.2);"
// />



//       {/* Overlay Text */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           textAlign: "center",
//           color: "white",
//           backgroundColor: "rgba(0,0,0,0.4)",
//           p: 3,
//           borderRadius: 2,
//         }}
//       >
//         </Box>
//         </Box>
       
    
//   );
// }

// export default Home;


import { Box, Typography, Button } from "@mui/material";
import imag from './images/RESUME.pdf';

function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <img
        src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/ade068cf-3e56-49ab-a778-78d62566be97.png"
        alt="Professional Frontend Developer Workspace"
        style={{
          width: "100%",
          height: "80%",
          marginTop:'50',
          objectFit: "cover",
          borderRadius: "0px", // full-screen hero, no rounded corners
        }}
      />

      {/* Overlay Text */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.4)",
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Hi, I’m a Frontend Developer
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Building responsive, modern web apps with React
        </Typography>
        
    

<Button
  variant="contained"
  color="secondary"
  sx={{ mt: 3 }}
  component="a"
href={imag}   // path in public folder
  download             // this triggers download
>
  Download CV
</Button>

      </Box>
    </Box>
  );
}

export default Home;
