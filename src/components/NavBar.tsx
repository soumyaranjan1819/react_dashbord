import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  InputBase,
  Typography,
  Breadcrumbs,
  Link,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import SideBarIcon from "../assets/icons/Sidebar.svg";
import StarIcon from "../assets/icons/Star.svg";
import SearchIcon from "../assets/icons/Search.svg";
import BrightIcon from "../assets/icons/Sun.svg";
import ReplayIcon from "../assets/icons/ClockCounterClockwise.svg";
import NotificationsIcon from "../assets/icons/Bell.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert"; // 3 dot vertical menu
import { useTheme } from "@mui/material/styles"; // Hook to get the theme breakpoints
import { useColorTheme } from '../context/ThemeContext';

const Navbar = () => {
  // State for handling dropdown menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const { toggleTheme } = useColorTheme();
  const theme = useTheme(); // To access the theme breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // This will be true for screens less than 'sm'

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
        borderBottom: "1px solid rgba(28, 28, 28, 0.1)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left section: Menu, Star, and Breadcrumbs */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Menu icon */}
          <IconButton edge="start" color="inherit" aria-label="menu">
            <img src={SideBarIcon} alt="Sidebar Icon" width="24" height="24" />
          </IconButton>

          {/* Star icon */}
          <IconButton color="inherit">
            <img src={StarIcon} alt="Star Icon" width="24" height="24" />
          </IconButton>

          {/* Breadcrumbs: Show only for tablets and larger devices */}
          {!isMobile && (
            <Breadcrumbs
              separator="/"
              aria-label="breadcrumb"
              sx={{ color: "rgba(28, 28, 28, 0.6)" }}
            >
              <Link underline="hover" color="inherit" href="#">
                <Typography color="textSecondary" variant="body2">
                  Dashboards
                </Typography>
              </Link>
              <Typography color="black" variant="body2">
                Default
              </Typography>
            </Breadcrumbs>
          )}
        </Box>

        {/* Right section: Search bar and icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Search bar: Show full search bar on tablets and above, only search icon on mobile */}
          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              padding: "4px 8px",
              display: "flex",
              alignItems: "center",
              borderRadius: "8px",
              width: isMobile ? "auto" : "200px", // Full search bar for larger screens
            }}
          >
            {isMobile ? ( // Show only search icon for mobile devices
              <IconButton color="inherit">
                <img src={SearchIcon} alt="Search Icon" width="24" height="24" />
              </IconButton>
            ) : (
              <>
                <img src={SearchIcon} alt="Search Icon" width="16" height="16" />
                <InputBase
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                  sx={{
                    marginLeft: 1,
                    color: "rgba(28, 28, 28, 0.4)",
                    fontSize: "14px",
                  }}
                />
              </>
            )}
          </Box>

          {/* Icons: Hidden on medium and smaller screens (md and below) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "16px" }}>
            <IconButton color="inherit">
              <img
                src={BrightIcon}
                alt="Brightness Icon"
                width="24"
                height="24"
                onClick={toggleTheme}
              />
            </IconButton>
            <IconButton color="inherit">
              <img src={ReplayIcon} alt="Replay Icon" width="24" height="24" />
            </IconButton>
            <IconButton color="inherit">
              <img
                src={NotificationsIcon}
                alt="Notifications Icon"
                width="24"
                height="24"
              />
            </IconButton>
          </Box>

          {/* 3 Dot vertical menu for medium and smaller screens */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MoreVertIcon />
            </IconButton>
          </Box>

          {/* Dropdown Menu for hidden icons */}
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleMenuClose}>
              <img
                src={BrightIcon}
                alt="Brightness Icon"
                width="24"
                height="24"
              />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <img src={ReplayIcon} alt="Replay Icon" width="24" height="24" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <img
                src={NotificationsIcon}
                alt="Notifications Icon"
                width="24"
                height="24"
              />
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
