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
import ShoppingCartIcon from "../assets/icons/shoppingCart.svg";
import ProjectIcon from "../assets/icons/projectIcon.svg";
import BookIcon from "../assets/icons/bookIcon.svg";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("default");

  const tabs = [
    { id: "default", label: "Default", icon: DashboardIcon },
    { id: "ecommerce", label: "eCommerce", icon: ShoppingCartIcon },
    { id: "projects", label: "Projects", icon: ProjectIcon },
    { id: "courses", label: "Online Courses", icon: BookIcon },
  ];

  return (
    <Box
      sx={{
        width: "180px",
        height: "auto"
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
          sx={{
            color: "rgba(28, 28, 28, 0.4)",
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
            onClick={() => setSelectedTab(tab.id)}
            sx={{
              width: "180px",
              display: "flex",
              alignItems: "center",
              borderRadius: "8px",
              padding: "0 8px 4px 0",
              marginBottom: "8px",
              cursor: "pointer",
              backgroundColor:
                selectedTab === tab.id ? "#f5f5f5" : "transparent",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            {/* Selected tab indicator */}
            {selectedTab === tab.id && (
              <Box
                sx={{
                  width: "4px",
                  height: "24px",
                  backgroundColor: "#000",
                  borderRadius: "8px",
                  marginRight: "20px"
                }}
              />
            )}

            {/* Chevron icon for unselected tabs */}
            {selectedTab !== tab.id && (
              <SvgIcon
                component={ChevronRightIcon}
                sx={{ color: "rgba(28, 28, 28, 0.2)" }}
              />
            )}
            {/* Icon and Text */}
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <img
                src={tab.icon}
                alt={`${tab.label} icon`}
                style={{ width: "24px", height: "24px" }}
              />
            </ListItemIcon>
            <ListItemText
              primary={tab.label}
              primaryTypographyProps={{
                fontSize: "14px",
                color: "rgba(28, 28, 28, 1)",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Dashboard;
