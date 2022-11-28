import * as React from 'react'
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


function CardDialog({ open, setOpen, content }) {
  return (
    <Dialog
      fullScreen
      open={open}
      TransitionComponent={Transition}
      TransitionProps={{ onEnter: addNavbarOffset, onExited: removeNavbarOffset }}
    >
      <AppBar color="white" sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setOpen(false)}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {content.title}
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setOpen(false)}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Dialog>
  )
}

export default CardDialog