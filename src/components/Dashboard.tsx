// Dashboard.tsx
import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  SvgIcon,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "../assets/icons/dashboardIcon.svg";
import DarkDashboardIcon from "../assets/icons/ChartPieSlice_D.svg";
import ShoppingCartIcon from "../assets/icons/shoppingCart.svg";
import DarkShoppingCartIcon from "../assets/icons/ShoppingBagOpen_D.svg";
import ProjectIcon from "../assets/icons/projectIcon.svg";
import DarkProjectIcon from "../assets/icons/FolderNotch_D.svg";
import BookIcon from "../assets/icons/bookIcon.svg";
import DarkBookIcon from "../assets/icons/Notebook_D.svg";
import { useColorTheme } from "../context/ThemeContext";
import { useOrderVisibility } from "../context/OrdersVisibilityContext"; // Import visibility context

const Dashboard = () => {
  const { theme } = useColorTheme();
  const { showOrderList, hideOrderList } = useOrderVisibility(); // Updated to use show and hide methods
  const [selectedTab, setSelectedTab] = useState("default");

  const tabs = [
    { id: "default", label: "Default", icon: DashboardIcon, iconDark: DarkDashboardIcon },
    { id: "ecommerce", label: "eCommerce", icon: ShoppingCartIcon, iconDark:DarkShoppingCartIcon },
    { id: "projects", label: "Projects", icon: ProjectIcon , iconDark: DarkProjectIcon},
    { id: "courses", label: "Online Courses", icon: BookIcon, iconDark: DarkBookIcon },
  ];

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId);
    if (tabId === "ecommerce") {
      showOrderList(); // Show OrderListTable
    } else {
      hideOrderList(); // Hide OrderListTable
    }
  };

  return (
    <Box
      sx={{
        width: "180px",
        height: "auto",
      }}
    >
      <Box
        sx={{
          height: "28px",
          paddingLeft: "12px",
        }}
      >
        <Typography
          variant="h6"
          color={
            theme === "dark"
              ? "rgba(255, 255, 255, 0.4)"
              : "rgba(28, 28, 28, 0.4)"
          }
          sx={{
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          Dashboards
        </Typography>
      </Box>

      {/* Tab List */}
      <List>
        {tabs.map((tab) => (
          <ListItem
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            sx={{
              width: "180px",
              display: "flex",
              alignItems: "center",
              borderRadius: "8px",
              padding: "0 8px 4px 0",
              marginBottom: "8px",
              cursor: "pointer",
              backgroundColor:
                selectedTab === tab.id
                  ? theme === "dark"
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(28, 28, 28, 0.1)"
                  : "transparent",

              "&:hover": {
                backgroundColor:
                  theme === "dark"
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(28, 28, 28, 0.1)",
              },
            }}
          >
            {/* Selected tab indicator */}
            {selectedTab === tab.id && (
              <Box
                sx={{
                  width: "4px",
                  height: "24px",
                  backgroundColor:
                    theme === "dark"
                      ? "rgba(255, 255, 255)"
                      : "rgba(28, 28, 28, 1)",
                  borderRadius: "8px",
                  marginRight: "20px",
                }}
              />
            )}

            {/* Chevron icon for unselected tabs */}
            {selectedTab !== tab.id && (
              <SvgIcon
                component={ChevronRightIcon}
                sx={{ color: theme === "dark" ? "rgba(255, 255, 255, 0.2)" :"rgba(28, 28, 28, 0.2)" }}
              />
            )}
            {/* Icon and Text */}
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <img
                src={theme === "dark" ? tab.iconDark : tab.icon}
                alt={`${tab.label} icon`}
                style={{ width: "24px", height: "24px" }}
              />
            </ListItemIcon>
            <ListItemText
              primary={tab.label}
              primaryTypographyProps={{
                fontSize: "14px",
                color:
                  theme === "dark"
                    ? "rgba(255, 255, 255, 1)"
                    : "rgba(28, 28, 28, 1)",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Dashboard;
