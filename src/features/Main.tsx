import { Grid, Box, Typography } from "@mui/material";
import Navbar from "../components/NavBar";
import Cards from "../components/Cards";
import BarChart from "../components/BarChart";
import DonutChart from "../components/DoughnutChart";
import ProductTable from "../components/Table";
import RevenueChart from "../components/RevenueChart";
import RevenueMap from "../components/RevenueMap";
// import RevenueMap from "../components/RevenueMap";

const Main = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          overflow:"auto",
          height: "1000px",
          margin: "0 0 0 28px",
        }}
      >
        <Grid
          container
          sx={{
            width: "90%",
            height: "70px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} md={5}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              eCommerce
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {/* Cards and BarChart in a single row */}
          <Grid item xs={12} md={5.5}>
            <Cards />
          </Grid>
          <Grid item xs={12} md={6}>
            <BarChart />
          </Grid>
        </Grid>

        <Grid container spacing={50}>
          <Grid item xs={12} md={6}>
            <RevenueChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <RevenueMap />
          </Grid>
        </Grid>

        <Grid container spacing={50}>
          {/* donut and table in a single row */}
          <Grid item xs={12} md={6}>
            <ProductTable />
          </Grid>
          <Grid item xs={12} md={6}>
            <DonutChart />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Main;
