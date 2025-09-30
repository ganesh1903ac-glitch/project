//  import { Routes, Route } from "react-router-dom";
//  import Home from "./pages/Home";
//  import About from "./pages/About";
//  import Project from "./pages/Project";
//  import Contact from "./pages/Contact";
//  import Navbar from "./Navbar";
// import './App.css';
// import Props from "./Props";

// function App(){
//   return(
// <>
// <Box>
//   <Navbar></Navbar>
// <Routes>
//   <Route path="/home" element={<Home/>}/>
//   <Route path="/about" element={<About/>}/>
//   <Route path="/project" element={<Project/>}/>
//   <Route path="/contactdetails" element={<Contact/>}/>
// </Routes>  



// </>
//   )
  
  
  
// }
// export default App;
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Box sx={{ flex: 1, mt: 8 }}> {/* mt:8 to avoid fixed navbar overlap */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contactdetails" element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
