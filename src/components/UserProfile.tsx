import { Box, Avatar, Typography } from '@mui/material';
import icon from '../assets/icons/userIcon.svg'; 
import { useColorTheme } from "../context/ThemeContext";

const UserProfile = () => {
  const { theme } = useColorTheme(); 
    return (
      <Box
        display="flex"
        alignItems="center"
        sx={{
          width: '100%', 
          height: '32px', 
          gap: '8px',
        }}
      >
        {/* Avatar */}
        <Avatar
          alt="User Profile"
          src={icon}
          sx={{
            pl: 1,
            width: 24,
            height: 24,
          }}
        />
  
        {/* Username */}
        <Typography
        sx={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          fontSize: '14px', 
          lineHeight: '20px', 
          color: theme === "dark" ? "rgba(255, 255, 255, 1)" : "rgba(28, 28, 28, 1)" 
        }}
      >
        ByeWind
      </Typography>
      </Box>
    );
  };
  
export default UserProfile;
