import * as React from 'react';
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
} from '@mui/material';

// Define the data type for each row
interface Product {
  name: string;
  price: string;
  quantity: number;
  amount: string;
}

// Sample data
const productData: Product[] = [
  { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
  { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
  { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
  { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
  { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' },
];

// Table component
const ProductTable: React.FC = () => {
  return (
    <Box
      sx={{
        padding: '24px', // Padding as per the layout
        backgroundColor: '#F4F9FF',
        borderRadius: '16px', // Border radius as per the layout
        width: '100%',
        maxWidth: '662px', // Max width as per the layout
        minWidth: '662px', // Min width as per the layout
        height: 'auto', // Hug content (auto height)
        boxSizing: 'border-box',
      }}
    >
      {/* Table title */}
      <Typography
        variant="body1"
        sx={{
          fontWeight: '600',
          marginBottom: '16px',
        }}
      >
        Top Selling Products
      </Typography>

      {/* Table container */}
      <TableContainer component={Paper} sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
        <Table sx={{ width: '100%' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px' }}>Name</TableCell>
              <TableCell align="right" sx={{ fontWeight: '600', fontSize: '14px' }}>
                Price
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: '600', fontSize: '14px' }}>
                Quantity
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: '600', fontSize: '14px' }}>
                Amount
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productData.map((product) => (
              <TableRow key={product.name}>
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
