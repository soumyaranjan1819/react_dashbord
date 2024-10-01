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
import DarkSideBarIcon from "../assets/icons/Sidebar_D.svg";

import StarIcon from "../assets/icons/Star.svg";
import DarkStarIcon from "../assets/icons/Star_D.svg";

import SearchIcon from "../assets/icons/Search.svg";
import DarkSearchIcon from "../assets/icons/Search_D.svg";

import BrightIcon from "../assets/icons/Sun.svg";
import DarkBrightIcon from "../assets/icons/Sun_D.svg";

import ReplayIcon from "../assets/icons/ClockCounterClockwise.svg";
import DarkReplayIcon from "../assets/icons/ClockCounterClockwise_D.svg";

import NotificationsIcon from "../assets/icons/Bell.svg";
import DarkNotificationsIcon from "../assets/icons/Bell_D.svg";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useTheme } from "@mui/material/styles";
import { useColorTheme } from "../context/ThemeContext";
import { useSidebar } from "../hooks"; 

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const { theme, toggleTheme } = useColorTheme(); 
  const muiTheme = useTheme(); 
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const { toggleLeftSidebar, toggleRightSidebar } = useSidebar();

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      className={theme === "dark" ? "dark" : "light"} 
      sx={{
        backgroundColor: theme === "dark" ? "#282828" : "#fff",
        color: theme === "dark" ? "#fff" : "#282828",
        boxShadow: "none",
        borderBottom:
          theme === "dark"
            ? "1px solid rgba(255, 255, 255, 0.1)"
            : "1px solid rgba(28, 28, 28, 0.1)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left section: Menu, Star, and Breadcrumbs */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Menu icon to toggle the LeftSidebar */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleLeftSidebar}
          >
            <img
              src={theme === "dark" ? DarkSideBarIcon : SideBarIcon}
              alt="Sidebar Icon"
              width="24"
              height="24"
            />
          </IconButton>

          {/* Star icon */}
          <IconButton color="inherit">
            <img
              src={theme === "dark" ? DarkStarIcon : StarIcon}
              alt="Star Icon"
              width="24"
              height="24"
            />
          </IconButton>

          {/* Breadcrumbs: Show only for tablets and larger devices */}
          {!isMobile && (
            <Breadcrumbs
              separator="/"
              aria-label="breadcrumb"
              sx={{
                color:
                  theme === "dark"
                    ? "rgba(255, 255, 255, 0.6)"
                    : "rgba(28, 28, 28, 0.6)",
              }}
            >
              <Link underline="hover" color="inherit" href="#">
                <Typography
                  color={theme === "dark" ? "white" : "black"}
                  variant="body2"
                >
                  Dashboards
                </Typography>
              </Link>
              <Typography
                color={theme === "dark" ? "white" : "black"}
                variant="body2"
              >
                Default
              </Typography>
            </Breadcrumbs>
          )}
        </Box>

        {/* Right section: Search bar and icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Box
            className={theme === "dark" ? "lightdark" : ""} 
            sx={{
              backgroundColor: theme === "dark" ? "#323232" : "#f5f5f5",
              padding: "4px 8px",
              display: "flex",
              alignItems: "center",
              borderRadius: "8px",
              width: isMobile ? "auto" : "200px", 
            }}
          >
            {isMobile ? ( // Show only search icon for mobile devices
              <IconButton color="inherit">
                <img
                  src={theme === "dark" ? DarkSearchIcon : SearchIcon}
                  alt="Search Icon"
                  width="24"
                  height="24"
                />
              </IconButton>
            ) : (
              <>
                <img
                  src={theme === "dark" ? DarkSearchIcon : SearchIcon}
                  alt="Search Icon"
                  width="16"
                  height="16"
                />
                <InputBase
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                  sx={{
                    marginLeft: 1,
                    color:
                      theme === "dark"
                        ? "rgba(255, 255, 255, 0.6)"
                        : "rgba(28, 28, 28, 0.4)",
                    fontSize: "14px",
                  }}
                />
              </>
            )}
          </Box>

          {/* Icons: Hidden on medium and smaller screens (md and below) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "16px" }}>
            <IconButton color="inherit" onClick={toggleTheme}>
              <img
                src={theme === "dark" ? DarkBrightIcon : BrightIcon}
                alt="Brightness Icon"
                width="24"
                height="24"
              />
            </IconButton>
            <IconButton color="inherit">
              <img
                src={theme === "dark" ? DarkReplayIcon : ReplayIcon}
                alt="Replay Icon"
                width="24"
                height="24"
              />
            </IconButton>
            <IconButton color="inherit">
              <img
                src={
                  theme === "dark" ? DarkNotificationsIcon : NotificationsIcon
                }
                alt="Notifications Icon"
                width="24"
                height="24"
              />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="right-sidebar"
              onClick={toggleRightSidebar}
            >
              <img
                src={theme === "dark" ? DarkSideBarIcon : SideBarIcon}
                alt="Right Sidebar Icon"
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
                src={theme === "dark" ? DarkBrightIcon : BrightIcon}
                alt="Brightness Icon"
                width="24"
                height="24"
              />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <img
                src={theme === "dark" ? DarkReplayIcon : ReplayIcon}
                alt="Replay Icon"
                width="24"
                height="24"
              />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <img
                src={
                  theme === "dark" ? DarkNotificationsIcon : NotificationsIcon
                }
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
