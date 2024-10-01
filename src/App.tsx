import { Grid } from "@mui/material";
import LeftSidebar from "./features/LeftSideBar";
import Main from "./features/Main";
import RightSideBar from "./features/RightSideBar";
import { useColorTheme } from "./context/ThemeContext";
import { SidebarProvider } from "./context/SidebarContext";
import { OrdersVisibilityProvider } from "./context/OrdersVisibilityContext";
import { useSidebar } from "./hooks";
import "./App.css";
import "./styles/themes.css";

const AppContent = () => {
  const { leftSidebarOpen, rightSidebarOpen } = useSidebar();
  const { theme } = useColorTheme();

  return (
    <div style={{ overflowY: "auto" }} className={theme}>
      <Grid container>
        {/* Left Sidebar */}
        {leftSidebarOpen && (
          <Grid item>
            <LeftSidebar />
          </Grid>
        )}

        {/* Main Content */}
        <Grid
          item
          xs={
            leftSidebarOpen && rightSidebarOpen
              ? 8
              : leftSidebarOpen
              ? 10
              : rightSidebarOpen
              ? 10.46
              : 12
          }
        >
          <Main />
        </Grid>

        {/* Right Sidebar */}
        {rightSidebarOpen && (
          <Grid item xs={1.3}>
            <RightSideBar />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

function App() {
  return (
    <SidebarProvider>
      <OrdersVisibilityProvider>
        <AppContent />
      </OrdersVisibilityProvider>
    </SidebarProvider>
  );
}

export default App;
