
import { Box } from '@mui/material';
import UserProfile from '../components/UserProfile';
import PageSwitcher from '../components/PageSwitcher';
import Dashboard from '../components/Dashboard';
import Pages from '../components/Pages';
import { useColorTheme } from '../context/ThemeContext';

const LeftSidebar = () => {
  const { theme } = useColorTheme(); 
  return (
    <Box
      sx={{
        width: '180px', 
        height: '100%',
        borderRight: theme === "dark" ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(28, 28, 28, 0.1)",
        padding: '20px 16px', 
        gap: '16px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', 
      }}
    >
      
      <UserProfile />
      <PageSwitcher/>
      <Dashboard/>
      <Pages/>
    </Box>
  );
};

export default LeftSidebar;
