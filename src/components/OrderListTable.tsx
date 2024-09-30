import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Checkbox,
  IconButton,
  InputBase,
  Paper,
  Pagination,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Search as SearchIcon,
  FilterList,
  Add,
  SwapVert,
  MoreHoriz, 
  DeleteOutlined , 
} from "@mui/icons-material";
import { orders as initialOrders } from "../data";
import { Order } from "../types";

const OrderListTable: React.FC = () => {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]); // Store selected order IDs
  const [hoveredRow, setHoveredRow] = useState<string | null>(null); // Track hovered row
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null); // Menu anchor for 3-dot menu
  const [currentRow, setCurrentRow] = useState<string | null>(null); // Track the current row for which the menu is opened
  const [orders, setOrders] = useState<Order[]>(initialOrders); // Track current orders

  // Check if a specific row is selected
  const isSelected = (id: string) => selectedOrders.includes(id);

  // Handle clicking on a table row
  const handleRowClick = (id: string) => {
    if (isSelected(id)) {
      setSelectedOrders(selectedOrders.filter((orderId) => orderId !== id));
    } else {
      setSelectedOrders([...selectedOrders, id]);
    }
  };

  // Handle "Select All" functionality
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allOrderIds = orders.map((order) => order.id);
      setSelectedOrders(allOrderIds);
    } else {
      setSelectedOrders([]);
    }
  };

  // Handle checkbox change for individual rows
  const handleCheckboxClick = (event: React.MouseEvent, id: string) => {
    event.stopPropagation(); // Prevent row click from being triggered
    handleRowClick(id);
  };

  // Handle opening the 3-dot menu
  const handleMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>,
    rowId: string
  ) => {
    setMenuAnchor(event.currentTarget);
    setCurrentRow(rowId);
  };

  // Handle closing the 3-dot menu
  const handleMenuClose = () => {
    setMenuAnchor(null);
    setCurrentRow(null);
  };

  // Handle deleting a single row
  const handleDelete = () => {
    setOrders(orders.filter((order) => order.id !== currentRow));
    setSelectedOrders(selectedOrders.filter((orderId) => orderId !== currentRow));
    handleMenuClose();
  };

  // Handle deleting multiple rows
  const handleDeleteSelected = () => {
    setOrders(orders.filter((order) => !selectedOrders.includes(order.id)));
    setSelectedOrders([]);
  };

  // Check if all rows are selected
  const areAllSelected =
    orders.length > 0 && selectedOrders.length === orders.length;

  return (
    <Box sx={{ padding: 3 }}>
      {/* Table Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Order List
        </Typography>
      </Box>

      {/* Table Actions */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={2}
        sx={{ backgroundColor: "rgba(247, 249, 251, 1)", padding: "8px", borderRadius: "8px" }}
      >
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
              <DeleteOutlined/>
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
                  // Custom color for the "Select All" checkbox
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
            {orders.map((order: Order) => {
              const isItemSelected = isSelected(order.id);
              return (
                <TableRow
                  key={order.id}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#F7F9FB", // Background color on hover
                      "& .checkbox-hover": {
                        visibility: isItemSelected ? "visible" : "visible", // Checked checkbox always visible
                      },
                    },
                    backgroundColor: isItemSelected ? "#F7F9FB" : "inherit", // Background color when selected
                    cursor: "pointer", // Make row clickable
                  }}
                  onClick={() => handleRowClick(order.id)} // Click anywhere on row to select
                  onMouseEnter={() => setHoveredRow(order.id)} // Track hovered row
                  onMouseLeave={() => setHoveredRow(null)} // Remove hover effect when not hovering
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isItemSelected}
                      onClick={(event) => handleCheckboxClick(event, order.id)}
                      className="checkbox-hover"
                      sx={{
                        visibility: isItemSelected
                          ? "visible"
                          : hoveredRow === order.id
                          ? "visible"
                          : "hidden",
                        color: "#1C1C1C",
                        "&.Mui-checked": {
                          color: "#1C1C1C",
                        },
                        borderRadius: "8px",
                      }}
                    />
                  </TableCell>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <img
                        src={order.icon}
                        alt={order.user}
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          marginRight: 8,
                        }}
                      />
                      {order.user}
                    </Box>
                  </TableCell>
                  <TableCell>{order.project}</TableCell>
                  <TableCell>{order.address}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <Typography sx={{ color: order.statusColor }}>
                      {order.status}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      sx={{ visibility: hoveredRow === order.id ? "visible" : "hidden" }} // Show only on hover
                      onClick={(event) => handleMenuOpen(event, order.id)} // Allow row selection
                    >
                      <MoreHoriz />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Menu for 3-dot actions */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
      >
        <MenuItem >Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>

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

export default OrderListTable;
