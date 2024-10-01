// import React, { createContext, useState, useContext } from 'react';

// // Create the context
// const OrderVisibilityContext = createContext({
//   isOrderListVisible: false,
//   showOrderList: () => {},
//   hideOrderList: () => {},
// });

// // Custom hook to use the context
// export const useOrderVisibility = () => useContext(OrderVisibilityContext);

// // Provider component to wrap around the app
// export const OrderVisibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isOrderListVisible, setOrderListVisible] = useState(false);

//   const showOrderList = () => setOrderListVisible(true);
//   const hideOrderList = () => setOrderListVisible(false);

//   return (
//     <OrderVisibilityContext.Provider
//       value={{
//         isOrderListVisible,
//         showOrderList,
//         hideOrderList,
//       }}
//     >
//       {children}
//     </OrderVisibilityContext.Provider>
//   );
// };


// src/context/OrdersVisibilityContext.tsx
import React, { createContext, useContext, useState } from "react";

const OrdersVisibilityContext = createContext({
  isOrderListVisible: false,
  showOrderList: () => {},
  hideOrderList: () => {},
});

export const OrdersVisibilityProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOrderListVisible, setOrderListVisible] = useState(false);

  const showOrderList = () => setOrderListVisible(true);
  const hideOrderList = () => setOrderListVisible(false);

  return (
    <OrdersVisibilityContext.Provider value={{ isOrderListVisible, showOrderList, hideOrderList }}>
      {children}
    </OrdersVisibilityContext.Provider>
  );
};

export const useOrderVisibility = () => useContext(OrdersVisibilityContext);
