import { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const PageSwitcher = () => {
  const [activeTab, setActiveTab] = useState("favorites");

  // Sample data for favorites and recent pages
  const favoritePages = ["Overview", "Projects"];
  const recentPages = ["Page 1", "Page 2"];

  return (
    <Box
      sx={{
        width: "180px",
      }}
    >
      {/* Tab section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between", 
          padding: "0 4px",
          height: "28px", 
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            width: "78px",
            height: "28px",
          }}
          onClick={() => setActiveTab("favorites")}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              color:
                activeTab === "favorites"
                  ? "rgba(28, 28, 28, 0.4)"
                  : "rgba(28, 28, 28, 0.2)",
            }}
          >
            Favorites
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            width: "78px",
            height: "28px",
          }}
          onClick={() => setActiveTab("recent")}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              color:
                activeTab === "recent"
                  ? "rgba(28, 28, 28, 0.4)"
                  : "rgba(28, 28, 28, 0.2)",
            }}
          >
            Recently
          </Typography>
        </Box>
      </Box>

      <List sx={{ padding: 0 }}>
        {(activeTab === "favorites" ? favoritePages : recentPages).map(
          (page, index) => (
            <ListItem
            key={index}
            sx={{
              padding: '0 16px', 
              display: 'flex',
              alignItems: 'center',
            }}
          >
              <ListItemIcon sx={{ minWidth: "auto", marginRight: "8px" }}>
                <CircleIcon sx={{ fontSize: "6px", color: "rgba(28, 28, 28, 0.2)" }} />
              </ListItemIcon>
              <ListItemText
                primary={page}
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#1C1C1C",
                }}
              />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
};

export default PageSwitcher;
