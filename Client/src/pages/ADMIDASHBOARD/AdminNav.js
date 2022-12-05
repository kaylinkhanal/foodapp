import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { resetCredentials } from "../../reducersSlice/userSlice";
import { Link, useNavigate } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import LockIcon from '@mui/icons-material/Lock';
import AddFood from "../Food/AddFood";

const drawerWidth = 240;

/**
 * Injected by the documentation to work in an iframe.
 * You won't need it on your project.
 */

export default function AdminNav(props) {
  const { token } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(resetCredentials());
    navigate("/");
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      
      <Link to="/admin/dashboard">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <GridViewIcon />
              </ListItemIcon>
              <ListItemText  primary="DASHBOARD " />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/admin/foodlist">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <ListIcon />
              </ListItemIcon>
              <ListItemText primary="FOODS" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/admin">
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <ListIcon/>
              </ListItemIcon>
              <ListItemText primary="RESTAURANTS" />
            </ListItemButton>
          </ListItem>

        </Link>
      </List>
      <Divider />
      <List>
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <LockIcon  />
              </ListItemIcon>
              <ListItemText onClick={logout} primary="LOGOUT" />
            </ListItemButton>
          </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex"  }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography>
        </Typography>
      </Box>
    </Box>
  );
}
