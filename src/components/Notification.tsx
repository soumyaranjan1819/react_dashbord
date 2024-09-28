import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import { notificationsData } from "../data/index"; 

const NotificationList = () => {
  return (
    <Box sx={{
        width: "240px", 
        height: "auto",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
      }}>
      <Typography
        variant="h6"
        ml={2}
        sx={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}
      >
        Notifications
      </Typography>
      <List>
        {notificationsData.map((notification) => (
          <ListItem
            key={notification.id}
            sx={{ padding: "8px 0 0 8px", alignItems: "flex-start" }}
          >
            <ListItemAvatar>
              <Avatar
                sx={{ width: "40px", height: "40px", backgroundColor: "#fff" }}
              >
                <img
                  src={notification.icon}
                  alt={notification.icon}
                  style={{ width: "24px", height: "24px" }}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    // marginBottom: "4px",
                  }}
                >
                  {notification.message.length > 24
                    ? `${notification.message.substring(0, 24)}...`
                    : notification.message}
                </Typography>
              }
              secondary={
                <Typography
                  variant="caption"
                  sx={{ fontSize: "12px", color: "rgba(28, 28, 28, 0.6)" }}
                >
                  {notification.time}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NotificationList;
