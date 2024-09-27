import { Grid } from '@mui/material';
import SideBar from "./features/SideBar";
import Main from "./features/Main";
import "./App.css";
import { useState } from 'react';

function App() {
  const [leftSidebarOpen, setLeftSidebarOpen]= useState(true)
  const [rightSidebarOpen, setRightSidebarOpen]= useState(true)
  return (
    <Grid container >
      <Grid item  >
        <SideBar/>
      </Grid>

       <Grid item xs={leftSidebarOpen && rightSidebarOpen? 8 : leftSidebarOpen || rightSidebarOpen ? 10 : 12}>
        <Main/>
      </Grid>
      
      {/*<Grid item xs={1.3} >
        <SideBar/>
      </Grid> */}
      
    </Grid>
  );
}

export default App;
