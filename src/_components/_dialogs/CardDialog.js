import * as React from 'react'
import Box from '@mui/material/Box';
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Collapse from '@mui/material/Collapse';
import CloseIcon from "@mui/icons-material/Close";

const addNavbarOffset = () => {
  document.documentElement.style.setProperty("--Navbar_right_offset", 17);
}

const removeNavbarOffset = () => {
  document.documentElement.style.setProperty("--Navbar_right_offset", 0);
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Collapse orientation="vertical" ref={ref} {...props} />;
});


export default function CardDialog({ open, setOpen, content }) {
  return (
    <Dialog
      fullScreen
      open={open}
      TransitionComponent={Transition}
      TransitionProps={{ onEnter: addNavbarOffset, onExited: removeNavbarOffset }}
    >
      <AppBar color="white" sx={{ position: "relative", height: "80px" }}>
        <Toolbar sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography sx={{ textShadow: "4px 4px rgb(0 173 181 / 30%)" }} variant="h4" component="div">
            {content ? content.title : "Specifics"}
          </Typography>
          <IconButton 
            sx={{ position: "absolute", right: "18px" }}
            edge="end"
            color="inherit"
            onClick={() => setOpen(false)}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {content && (
      <Box sx={{ 
        width: "100%", 
        height: "60vh", 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${content.banner})`, 
        backgroundRepeat: "none", 
        backgroundSize: "cover", 
        backgroundPosition: "center" }}></Box>
      )}
      
    </Dialog>
  )
}