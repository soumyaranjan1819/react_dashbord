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
