import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import PaginatedTable from "./PaginatedTable";
import { orders as initialOrders } from "../data";
import { Order } from "../types";
import { useColorTheme } from "../context/ThemeContext";

const OrderList: React.FC = () => {
  const { theme } = useColorTheme();
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]); // Store selected order IDs
  const [orders, setOrders] = useState<Order[]>(initialOrders); // Track current orders

  // Handle deleting multiple rows
  const handleDeleteSelected = () => {
    setOrders(orders.filter((order) => !selectedOrders.includes(order.id)));
    setSelectedOrders([]);
  };

  return (
    <Box sx={{ padding: 3, background: theme === "dark" ? "dark" : "" }}>
      {/* Table Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography
          variant="h6"
          color={
            theme === "dark"
              ? "rgba(255, 255, 255, 1)"
              : "rgba(28, 28, 28, 1)"
          }
          sx={{ fontWeight: 600 }}
        >
          Order List
        </Typography>
      </Box>

      {/* Pass state and handlers down to the table */}
      <PaginatedTable
        orders={orders}
        setOrders={setOrders}
        selectedOrders={selectedOrders}
        setSelectedOrders={setSelectedOrders}
        handleDeleteSelected={handleDeleteSelected}
      />
    </Box>
  );
};

export default OrderList;
