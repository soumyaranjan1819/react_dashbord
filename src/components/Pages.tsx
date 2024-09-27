import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
  SvgIcon,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import UserProfileIcon from "../assets/icons/userProfile.svg";
import AccountIcon from "../assets/icons/account.svg";
import CorporateIcon from "../assets/icons/corporate.svg";
import BlogIcon from "../assets/icons/blog.svg";
import SocialIcon from "../assets/icons/social.svg";

const Pages = () => {
  const [open, setOpen] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpen(open === id ? null : id);
  };

  const pages = [
    {
      id: "userProfile",
      label: "User Profile",
      icon: UserProfileIcon,
      subItems: ["Overview", "Projects", "Campaigns", "Documents", "Followers"],
    },
    { id: "account", label: "Account", icon: AccountIcon, subItems: [] },
    { id: "corporate", label: "Corporate", icon: CorporateIcon, subItems: [] },
    { id: "blog", label: "Blog", icon: BlogIcon, subItems: [] },
    { id: "social", label: "Social", icon: SocialIcon, subItems: [] },
  ];

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
          sx={{
            color: "rgba(28, 28, 28, 0.4)",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          Pages
        </Typography>
      </Box>

      {/* Pages List */}
      <List>
        {pages.map((page) => (
          <Box
            key={page.id}
            onClick={() => handleToggle(page.id)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer"
            //   paddingLeft: "4px",
            }}
          >
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "4px",
              }}
            >
              <SvgIcon
                component={open === page.id ? ExpandMoreIcon : ChevronRightIcon}
                sx={{ color: "rgba(28, 28, 28, 0.2)" }}
              />
              <ListItemIcon sx={{ minWidth: "32px" }}>
                <img
                  src={page.icon}
                  alt={`${page.label} icon`}
                  style={{ width: "24px", height: "24px" }}
                />
              </ListItemIcon>
              <ListItemText
                primary={page.label}
                primaryTypographyProps={{
                  fontSize: "14px",
                }}
              />
            </ListItem>

            <Collapse in={open === page.id} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {page.subItems.length > 0 &&
                  page.subItems.map((subItem) => (
                    <ListItem
                      key={subItem}
                      sx={{ paddingLeft: "40px", paddingY: "4px" }}
                    >
                      <ListItemText
                        primary={subItem}
                        primaryTypographyProps={{
                          fontSize: "14px",
                          color: "#1C1C1C",
                        }}
                      />
                    </ListItem>
                  ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default Pages;
