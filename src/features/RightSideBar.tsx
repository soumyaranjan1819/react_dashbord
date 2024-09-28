import { Box } from '@mui/material';
import Notifications from '../components/Notification';
import Activities from '../components/Activities';
import Contacts from '../components/Contacts';

const RightSideBar = () => {
  return (
    <Box
      sx={{
        width: '280px',
        padding: '20px',
        gap: '24px',
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '1px solid rgba(28, 28, 28, 0.1)', 
        position: 'fixed', 
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
