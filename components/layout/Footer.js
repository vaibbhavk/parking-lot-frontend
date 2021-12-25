import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#212121" }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit">
            <GitHubIcon />
          </IconButton>
          <Typography>&copy;Vaibhav Kesharwani</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
