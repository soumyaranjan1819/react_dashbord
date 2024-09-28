import React from "react";
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { contactsData } from "../data/index"; // Assuming the contactsData is stored in data folder

const Contact: React.FC = () => {
  return (
    <Box
      sx={{
        width: "240px", 
        height: "auto", 
        padding: "16px",
        gap: "8px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Title */}
      <Typography
        sx={{ fontSize: "16px", fontWeight: "600" }}
      >
        Contacts
      </Typography>

      {/* Contact list */}
      <List sx={{ width: "100%" }}>
        {contactsData.map((contact) => (
          <ListItem
            key={contact.id}
            sx={{ padding: "8px 0" }}
          >
            <ListItemIcon sx={{ minWidth: "32px" }}>
              <img
                src={contact.icon}
                style={{ width: "24px", height: "24px" }}
              />
            </ListItemIcon>
            <ListItemText
              primary={contact.name}
              primaryTypographyProps={{ fontSize: "14px", fontWeight: "400" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Contact;
