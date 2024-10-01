import { createContext, useState, ReactNode } from 'react';

interface SidebarContextType {
  leftSidebarOpen: boolean;
  rightSidebarOpen: boolean;
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextType>({
  leftSidebarOpen: true, 
  rightSidebarOpen: true, 
  toggleLeftSidebar: () => {},
  toggleRightSidebar: () => {},
});


export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);

  const toggleLeftSidebar = () => {
    setLeftSidebarOpen((prev) => !prev);
  };

  const toggleRightSidebar = () => {
    setRightSidebarOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider
      value={{ leftSidebarOpen, rightSidebarOpen, toggleLeftSidebar, toggleRightSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

