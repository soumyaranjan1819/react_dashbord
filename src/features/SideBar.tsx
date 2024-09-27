
import { Box } from '@mui/material';
import UserProfile from '../components/UserProfile';
import PageSwitcher from '../components/Favourite';
import Dashboard from '../components/Dashboard';
import Pages from '../components/Pages';
const Sidebar = () => {
  return (
    <Box
      sx={{
        width: '180px', 
        height: '100%',
        borderRight: '1px solid rgba(28, 28, 28, 0.1)',
        padding: '20px 16px', 
        gap: '16px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', 
        border: "1px solid blue"
      }}
    >
      
      <UserProfile />
      <PageSwitcher/>
      <Dashboard/>
      <Pages/>
    </Box>
  );
};

export default Sidebar;
