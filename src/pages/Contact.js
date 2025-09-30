// // // // import TextField from '@mui/material/TextField';
// // // // import { Typography,Box } from '@mui/material';
// // // // function Contact(){

// // // //     return(
// // // //         <>
// // // //           <Box sx={{ mt: 10, textAlign: "center" }}>
// // // //         <Typography variant="h4" gutterBottom>
// // // //           Projects
// // // //         </Typography>
// // // //         </Box>
// // // //         <Box sx={{justifyItems:'center'}}>
// // // //         <form>
// // // //         <label>Name:</label>
// // // //            <TextField id="outlined-basic" label="enter Name" variant="outlined" /><br></br>
// // // //            <label style={{padding:2}}>E-mail:</label>
// // // //            <TextField id="outlined-basic" label="entere-mail" variant="outlined" /><br></br>
// // // //            <label style={{padding:2}}>Comments:</label>
// // // //            <TextField id="outlined-basic" label="feedback" variant="outlined" /><br></br>
// // // //            </form>
// // // //            </Box>
// // // //         </>
// // // //     )
// // // // }
// // // // export default Contact;
// // // import TextField from "@mui/material/TextField";
// // // import { Typography, Box, Button } from "@mui/material";
// // // import { useState } from "react";

// // import TextField from "@mui/material/TextField";
// // import { Typography, Box, Button } from "@mui/material";
// // import { useState } from "react";

// // function Contact() {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [comments, setComments] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault(); // prevent page reload
// //     console.log("Name:", name);
// //     console.log("Email:", email);
// //     console.log("Comments:", comments);
// //     setComments('');
// //     setEmail('')
// //     setName('')
// //   };

// //   return (
// //     <>
// //       {/* Heading */}
// //       <Box sx={{ mt: 10, textAlign: "center" }}>
// //         <Typography variant="h4" gutterBottom>
// //           Contact Me
// //         </Typography>
// //       </Box>

// //       {/* Form */}
// //       <Box
// //         component="form"
// //         onSubmit={handleSubmit}
// //         sx={{
// //           display: "flex",
// //           flexDirection: "column",
// //           maxWidth: 400,
// //           mx: "auto", // centers form horizontally
// //           gap: 2, // spacing between fields
// //         }}
// //       >
// //         <Box marginRight={20}>
// //         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15278.330757895346!2d81.72297650885419!3d16.797425150000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b9b1e55e8171%3A0x55cd8d802945571d!2sVelagaduru%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1759230290731!5m2!1sen!2sin" sx={{width:"600" ,height:"450",  allowfullscreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
// //         </Box>
// //         <TextField
// //           label="Name"
// //           variant="outlined"
// //           fullWidth
// //           required
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //         />

// //         <TextField
// //           label="Email"
// //           type="email"
// //           variant="outlined"
// //           fullWidth
// //           required
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />

// //         <TextField
// //           label="Comments"
// //           variant="outlined"
// //           multiline
// //           rows={4}
// //           fullWidth
// //           value={comments}
// //           onChange={(e) => setComments(e.target.value)}
// //         />

// //         {/* Preview typed values */}
       

// //         <Button variant="contained" color="primary" type="submit">
// //           Submit
// //         </Button>
// //       </Box>
      
// //     </>
// //   );
// // }

// // // export default Contact;
//  import TextField from "@mui/material/TextField";
//  import { Typography, Box, Button } from "@mui/material";
// import { useState } from "react";
 

//  function Contact() {
  
// const[name,setname]=useState('')
// const[email,setemail]=useState('')
// const[comment,setComments]=useState('')
// function name1(e){
//     setname(e.target.value);
//     console.log('nameis set')
// }
 
   

//    return (
//      <>
//        {/* Heading */}
//        <Box sx={{ mt: 10, textAlign: "center" }}>
//          <Typography variant="h4" gutterBottom>
//            Contact Me
//          </Typography>
//      </Box>

// //       {/* Google Map */}/       <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
//          <iframe
//            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15278.330757895346!2d81.72297650885419!3d16.797425150000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b9b1e55e8171%3A0x55cd8d802945571d!2sVelagaduru%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1759230290731!5m2!1sen!2sin"
//            width="600"
//            height="450"
//            style={{ border: 0 }}
//        allowFullScreen=""
//            loading="lazy"           referrerPolicy="no-referrer-when-downgrade"
//            title="Google Map"
//          ></iframe>
//        </Box>

//        {/* Form */}
//        {/* <Box
//          component="form"
//          onSubmit={handleSubmit}
//          sx={{
//            display: "flex",
//            flexDirection: "column",
//            maxWidth: 400,
//            mx: "auto",
//            gap: 2,
//          }} */}
       
//         <Typography>{name}</Typography>
//          <TextField
//            label="Name"
//            variant="outlined"
           
//            required
//            onChange={name1}
          
//          />

//          <TextField
//            label="Email"
//            type="email"
//            variant="outlined"
          
//            required
          
//          />

//          <TextField
//            label="Comments"
//            variant="outlined"
//            multiline
//            rows={4}
          
         
//          />

//          <Button variant="contained" color="primary" type="submit">
//            send
//          </Button>
//        {/* </Box> */}
//      </>
//    );
//  }

//  export default Contact;import TextField from "@mui/material/TextField";
import { Typography, Box, Button,TextField } from "@mui/material";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Comments:", comments);

    // clear fields
    setName("");
    setEmail("");
    setComments("");
  };

  return (
    <>
      {/* Heading */}
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
      </Box>

      {/* Google Map */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15278.330757895346!2d81.72297650885419!3d16.797425150000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b9b1e55e8171%3A0x55cd8d802945571d!2sVelagaduru%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1759230290731!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </Box>

      {/* Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 400,
          mx: "auto",
          gap: 2,
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Comments"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />

        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </Box>
    </>
  );
}

export default Contact;

