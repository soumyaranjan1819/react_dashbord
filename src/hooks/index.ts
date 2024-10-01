import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
// import { OrderVisibilityContext } from "../context/OrdersVisibilityContext";

// Custom hook to use the SidebarContext
export const useSidebar = () => useContext(SidebarContext);