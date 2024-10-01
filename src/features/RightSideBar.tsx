import { Box } from '@mui/material';
import Notifications from '../components/Notification';
import Activities from '../components/Activities';
import Contacts from '../components/Contacts';
import { useColorTheme } from '../context/ThemeContext';

const RightSideBar = () => {
  const { theme } = useColorTheme(); 
  return (
    <Box
      sx={{
        width: '280px',
        padding: '20px',
        gap: '24px',
        display: 'flex',
        flexDirection: 'column',
        borderLeft:  theme === "dark" ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(28, 28, 28, 0.1)",
        left: '1160px',
      }}
    >
      <Notifications />
      <Activities />
      <Contacts />
    </Box>
  );
};

export default RightSideBar;
