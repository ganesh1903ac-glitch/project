import { Box, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "gray",
        color: "white",
        py: 3,
        display: "flex",
        justifyContent: "center", // center horizontally
        alignItems: "center",     // center vertically
        gap: 3,                   // space between icons
        bottom: 0,
        width: "100%",
      }}
    >
      {/* GitHub Icon */}
      <Link
        href="https://github.com/ganesh1903ac-glitch/project/blob/main/README.md"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "white" }}
      >
        <GitHubIcon fontSize="large" />
      </Link>

      {/* LinkedIn Icon */}
      <Link
        href="https://www.linkedin.com/in/manju-madicharla-551697331/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "white" }}
      >
        <LinkedInIcon fontSize="large" />
      </Link>
    </Box>
  );
}

export default Footer;
