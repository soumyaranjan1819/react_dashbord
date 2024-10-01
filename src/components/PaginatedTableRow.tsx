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
import { useColorTheme } from "../context/ThemeContext";

interface PaginatedTableRowProps {
  order: Order;
  selectedOrders: string[];
  setSelectedOrders: React.Dispatch<React.SetStateAction<string[]>>;
  handleDeleteRow: (id: string) => void;
}

const PaginatedTableRow: React.FC<PaginatedTableRowProps> = ({
  order,
  selectedOrders,
  setSelectedOrders,
  handleDeleteRow,
}) => {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const isSelected = selectedOrders.includes(order.id);

  const { theme } = useColorTheme();

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
    event.stopPropagation();
    handleRowClick(id);
  };

  // Handle 3-dot menu
  const handleMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>,
    _rowId: string
  ) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleDelete = () => {
    handleDeleteRow(order.id);
    handleMenuClose();
  };

  return (
    <TableRow
      sx={{
        "&:hover": {
          backgroundColor: theme === "dark" ? "rgba(28,28,28,0.90)" : "#F7F9FB",
        },
        backgroundColor: theme === "dark" ? "rgba(28,28,28,0.95)" : "#F7F9FB",
        cursor: "pointer",
        borderBottom: `1px solid ${
          theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "inherit"
        }`,
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
              color : theme === "dark"
                    ? "rgba(198, 199, 248, 1)"
                    : "rgba(28, 28, 28, 1)",
            "&.Mui-checked": {
              color:
                theme === "dark"
                  ? "rgba(198, 199, 248, 1)"
                  : "rgba(28, 28, 28, 1)",
            },
            borderRadius: "8px",
          }}
        />
      </TableCell>
      <TableCell
        sx={{
          color: theme === "dark" ? "#fff" : "inherit",
        }}
      >
        {order.id}
      </TableCell>
      <TableCell
        sx={{
          color: theme === "dark" ? "#fff" : "inherit",
        }}
      >
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
      <TableCell
        sx={{
          color: theme === "dark" ? "#fff" : "inherit",
        }}
      >
        {order.project}
      </TableCell>
      <TableCell
        sx={{
          color: theme === "dark" ? "#fff" : "inherit",
        }}
      >
        {order.address}
      </TableCell>
      <TableCell
        sx={{
          color: theme === "dark" ? "#fff" : "inherit",
        }}
      >
        {order.date}
      </TableCell>
      <TableCell>
        <Typography
          sx={{
            color:
              order.status === "Rejected"?
                theme === "dark"
                ? "rgba(255, 255, 255, 0.4)"
                : order.statusColor
                : order.statusColor,
          }}
        >
          {order.status}
        </Typography>
      </TableCell>
      <TableCell align="right">
        <IconButton
          sx={{ visibility: hoveredRow === order.id ? "visible" : "hidden" }}
          onClick={(event) => handleMenuOpen(event, order.id)}
        >
          <MoreHoriz sx={{ color: theme === "dark" ? "#ffffff" : "inherit"}}/>
        </IconButton>
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
          <MenuItem disabled>Edit</MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
};

export default PaginatedTableRow;
