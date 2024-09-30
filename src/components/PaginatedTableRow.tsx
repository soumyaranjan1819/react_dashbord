import React, { useState } from "react";
import {
  TableRow,
  TableCell,
  IconButton,
  Checkbox,
  Box,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import { Order } from "../types";

interface PaginatedTableRowProps {
  order: Order;
  selectedOrders: string[];
  setSelectedOrders: React.Dispatch<React.SetStateAction<string[]>>;
  handleDeleteRow: (id: string) => void; // Add the delete handler
}

const PaginatedTableRow: React.FC<PaginatedTableRowProps> = ({
  order,
  selectedOrders,
  setSelectedOrders,
  handleDeleteRow, // Now it's part of the props
}) => {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null); // Track hovered row
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null); // Menu anchor for 3-dot menu

  const isSelected = selectedOrders.includes(order.id);

  // Handle clicking on a table row
  const handleRowClick = (id: string) => {
    if (isSelected) {
      setSelectedOrders(selectedOrders.filter((orderId) => orderId !== id));
    } else {
      setSelectedOrders([...selectedOrders, id]);
    }
  };

  // Handle checkbox click
  const handleCheckboxClick = (event: React.MouseEvent, id: string) => {
    event.stopPropagation(); // Prevent row click from being triggered
    handleRowClick(id);
  };

  // Handle 3-dot menu
  const handleMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>,
    _rowId: string // Accept the row ID (order.id)
  ) => {
    setMenuAnchor(event.currentTarget); // Set the anchor for the menu
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleDelete = () => {
    handleDeleteRow(order.id); // Call the delete handler passed from the parent
    handleMenuClose();
  };

  return (
    <TableRow
      sx={{
        "&:hover": {
          backgroundColor: "#F7F9FB",
        },
        backgroundColor: isSelected ? "#F7F9FB" : "inherit",
        cursor: "pointer",
      }}
      onClick={() => handleRowClick(order.id)}
      onMouseEnter={() => setHoveredRow(order.id)}
      onMouseLeave={() => setHoveredRow(null)}
    >
      <TableCell padding="checkbox">
        <Checkbox
          checked={isSelected}
          onClick={(event) => handleCheckboxClick(event, order.id)}
          sx={{
            visibility: isSelected
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
          sx={{ visibility: hoveredRow === order.id ? "visible" : "hidden" }}
          onClick={(event) => handleMenuOpen(event, order.id)} // Pass both event and order.id
        >
          <MoreHoriz />
        </IconButton>
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
          <MenuItem disabled >Edit</MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
};

export default PaginatedTableRow;
