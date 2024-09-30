import { Box, Grid } from "@mui/material";
import LeftSidebar from "./features/LeftSideBar";
import Main from "./features/Main";
import { useState } from "react";
import RightSideBar from "./features/RightSideBar";
import { useColorTheme } from "./context/ThemeContext";
import OrderListTable from "./components/OrderListTable";
import "./App.css";
import './styles/themes.css';   //

function App() {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
  const { theme } = useColorTheme();  //
  return (
    <div style={{overflowY: "auto"}} className={theme}> 
      <Grid container>
        <Grid item>
          <LeftSidebar />
        </Grid>

        <Grid
          item
          xs={
            leftSidebarOpen && rightSidebarOpen
              ? 8
              : leftSidebarOpen || rightSidebarOpen
              ? 10
              : 12
          }
        >
          <Main/>
        </Grid>

        <Grid item xs={1.3} >
        <RightSideBar/>
      </Grid>
      </Grid>
    </div>
  );
}

export default App;
