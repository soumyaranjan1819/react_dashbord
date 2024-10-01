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
import { useColorTheme } from "../context/ThemeContext";

interface PaginatedTableProps {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
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
  const { theme } = useColorTheme();

  // Handle "Select All" functionality
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allOrderIds = orders.map((order) => order.id);
      setSelectedOrders(allOrderIds);
    } else {
      setSelectedOrders([]);
    }
  };

  const areAllSelected =
    orders.length > 0 && selectedOrders.length === orders.length;

  // Handle deleting a single row
  const handleDeleteRow = (id: string) => {
    const updatedOrders = orders.filter((order) => order.id !== id); // Filter out the deleted row
    setOrders(updatedOrders); // Update the orders state
    setSelectedOrders(selectedOrders.filter((orderId) => orderId !== id)); // Remove from selectedOrders if selected
  };
  return (
    <Box>
      {/* Table Actions */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={2}
        sx={{
          backgroundColor:
            theme === "dark"
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(247, 249, 251, 1)",
          padding: "8px",
          borderRadius: "8px",
        }}
      >
        <Box display="flex" alignItems="center">
          <IconButton
            sx={{
              color:
                theme === "dark"
                  ? "rgba(255, 255, 255, 1)"
                  : "rgba(28, 28, 28, 1)",
            }}
          >
            <Add />
          </IconButton>
          <IconButton
            sx={{
              color:
                theme === "dark"
                  ? "rgba(255, 255, 255, 1)"
                  : "rgba(28, 28, 28, 1)",
            }}
          >
            <FilterList />
          </IconButton>
          <IconButton
            sx={{
              color:
                theme === "dark"
                  ? "rgba(255, 255, 255, 1)"
                  : "rgba(28, 28, 28, 1)",
            }}
          >
            <SwapVert />
          </IconButton>
        </Box>

        <Box display="flex" alignItems="center" ml="auto">
          {selectedOrders.length > 1 && (
            <IconButton
              onClick={handleDeleteSelected}
              sx={{
                color:
                  theme === "dark"
                    ? "rgba(255, 255, 255, 1)"
                    : "rgba(28, 28, 28, 1)",
                marginRight: "16px",
              }}
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
              border: `1px solid ${
                theme === "dark"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(28, 28, 28, 0.2)"
              }`,
              borderRadius: "8px",
              backgroundColor:
                theme === "dark"
                  ? "rgba(28, 28, 28, 0.2)"
                  : "rgba(255, 255, 255, 0.1)",
            }}
          >
            <IconButton>
              <SearchIcon
                sx={{
                  color:
                    theme === "dark"
                      ? "rgba(255, 255, 255, 0.4)"
                      : "rgba(28, 28, 28, 1)",
                }}
              />
            </IconButton>
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                color:
                  theme === "dark"
                    ? "rgba(255, 255, 255, 0.4)"
                    : "rgba(28, 28, 28, 1)",
              }}
              placeholder="Search"
            />
          </Paper>
        </Box>
      </Box>

      {/* Table */}
      <TableContainer component={Paper} elevation={0}>
        <Table>
          <TableHead
            sx={{
              backgroundColor:
                theme === "dark" ? "rgba(28, 28, 28, 0.95)" : "inherit", 
              width: "100%"
            }}
          >
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
                    color:
                      theme === "dark"
                        ? "rgba(198, 199, 248, 1)"
                        : "rgba(28, 28, 28, 1)",
                    "&.Mui-checked": {
                      color:
                        theme === "dark"
                          ? "rgba(198, 199, 248, 1)"
                          : "rgba(28, 28, 28, 1)",
                    },
                    "&.MuiCheckbox-indeterminate": {
                      color:
                        theme === "dark"
                          ? "rgba(198, 199, 248, 1)"
                          : "rgba(28, 28, 28, 1)",
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
              <TableCell sx={{ visibility: "hidden" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order: Order) => (
              <PaginatedTableRow
                key={order.id}
                order={order}
                selectedOrders={selectedOrders}
                setSelectedOrders={setSelectedOrders}
                handleDeleteRow={handleDeleteRow}
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
