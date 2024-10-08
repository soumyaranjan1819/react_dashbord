import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { useColorTheme } from "../context/ThemeContext";

// Define the data type for each row
interface Product {
  name: string;
  price: string;
  quantity: number;
  amount: string;
}

// Sample data
const productData: Product[] = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];

// Table component
const ProductTable: React.FC = () => {
  const { theme } = useColorTheme();

  return (
    <Box
      sx={{
        marginTop: "24px",
        padding: "24px",
        backgroundColor:
          theme === "dark"
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(247, 249, 251, 1)",
        borderRadius: "16px",
        width: "90vw",
        maxWidth: "42.13vw",
        minWidth: "650px",
        height: "auto",
        boxSizing: "border-box",
      }}
    >
      {/* Table title */}
      <Typography
        variant="body1"
        sx={{
          fontWeight: "600",
          marginBottom: "16px",
          color:
            theme === "dark" ? "rgba(255, 255, 255, 1)" : "rgba(28, 28, 28, 1)",
        }}
      >
        Top Selling Products
      </Typography>

      {/* Table container */}
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none", backgroundColor: "transparent" }}
      >
        <Table
          sx={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: "0 10px",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color:
                    theme === "dark"
                      ? "rgba(255, 255, 255, 0.4)"
                      : "rgba(28, 28, 28, 0.4)",
                }}
              >
                Name
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color:
                    theme === "dark"
                      ? "rgba(255, 255, 255, 0.4)"
                      : "rgba(28, 28, 28, 0.4)",
                }}
              >
                Price
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color:
                    theme === "dark"
                      ? "rgba(255, 255, 255, 0.4)"
                      : "rgba(28, 28, 28, 0.4)",
                }}
              >
                Quantity
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color:
                    theme === "dark"
                      ? "rgba(255, 255, 255, 0.4)"
                      : "rgba(28, 28, 28, 0.4)",
                }}
              >
                Amount
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productData.map((product) => (
              <TableRow
                key={product.name}
                sx={{
                  "& .MuiTableCell-root": {
                    borderBottom: "none",
                    color:
                      theme === "dark"
                        ? "rgba(255, 255, 255, 1)"
                        : "rgba(28, 28, 28, 0.9)", 
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.quantity}</TableCell>
                <TableCell align="right">{product.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductTable;
