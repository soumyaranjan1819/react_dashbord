import React from "react";
import {
  Box,
  Paper,
  IconButton,
  InputBase,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Pagination,
  Checkbox,
  TableBody,
} from "@mui/material";
import {
  Search as SearchIcon,
  FilterList,
  Add,
  SwapVert,
  DeleteOutlined,
} from "@mui/icons-material";
import PaginatedTableRow from "./PaginatedTableRow";
import { Order } from "../types";

interface PaginatedTableProps {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>; // Add setOrders to modify the orders state
  selectedOrders: string[];
  setSelectedOrders: React.Dispatch<React.SetStateAction<string[]>>;
  handleDeleteSelected: () => void;
}

const PaginatedTable: React.FC<PaginatedTableProps> = ({
  orders,
  setOrders,
  selectedOrders,
  setSelectedOrders,
  handleDeleteSelected,
}) => {
  // Handle "Select All" functionality
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allOrderIds = orders.map((order) => order.id);
      setSelectedOrders(allOrderIds);
    } else {
      setSelectedOrders([]);
    }
  };

  const areAllSelected = orders.length > 0 && selectedOrders.length === orders.length;

  // Handle deleting a single row
  const handleDeleteRow = (id: string) => {
    const updatedOrders = orders.filter((order) => order.id !== id); // Filter out the deleted row
    setOrders(updatedOrders); // Update the orders state
    setSelectedOrders(selectedOrders.filter((orderId) => orderId !== id)); // Remove from selectedOrders if selected
  };

  return (
    <Box>
      {/* Table Actions */}
      <Box display="flex" justifyContent="space-between" alignItems="center" my={2} sx={{ backgroundColor: "rgba(247, 249, 251, 1)", padding: "8px", borderRadius: "8px" }}>
        <Box display="flex" alignItems="center">
          <IconButton sx={{ color: "#1C1C1C" }}><Add /></IconButton>
          <IconButton sx={{ color: "#1C1C1C" }}><FilterList /></IconButton>
          <IconButton sx={{ color: "#1C1C1C" }}><SwapVert /></IconButton>
        </Box>

        <Box display="flex" alignItems="center" ml="auto">
          {/* Show delete icon only when more than 1 row is selected */}
          {selectedOrders.length > 1 && (
            <IconButton
              onClick={handleDeleteSelected}
              sx={{ color: "#1C1C1C", marginRight: "16px" }}
            >
              <DeleteOutlined />
            </IconButton>
          )}
          <Paper
            component="form"
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              width: 300,
              padding: "0 8px",
              border: "1px solid rgba(28, 28, 28, 0.2)", // Outline color
              borderRadius: "8px", // Border radius
            }}
          >
            <IconButton>
              <SearchIcon />
            </IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          </Paper>
        </Box>
      </Box>

      {/* Table */}
      <TableContainer component={Paper} elevation={0}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selectedOrders.length > 0 &&
                    selectedOrders.length < orders.length
                  }
                  checked={areAllSelected}
                  onChange={handleSelectAllClick}
                  sx={{
                    color: "#1C1C1C",
                    "&.Mui-checked": {
                      color: "#1C1C1C",
                    },
                    "&.MuiCheckbox-indeterminate": {
                      color: "#1C1C1C",
                    },
                    borderRadius: "8px",
                  }}
                />
              </TableCell>
              <TableCell>Order ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order: Order) => (
              <PaginatedTableRow
                key={order.id}
                order={order}
                selectedOrders={selectedOrders}
                setSelectedOrders={setSelectedOrders}
                handleDeleteRow={handleDeleteRow} // Pass delete handler for single row
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Pagination
          count={5}
          shape="rounded"
          sx={{
            "& .Mui-selected": {
              backgroundColor: "rgba(28, 28, 28, 0.05)",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default PaginatedTable;
