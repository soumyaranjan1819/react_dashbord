import { Grid, Box, Typography } from "@mui/material";
import Navbar from "../components/NavBar";
import Cards from "../components/StatsCards";
import BarChart from "../components/BarChart";
import DonutChart from "../components/DoughnutChart";
import ProductTable from "../components/Table";
import RevenueChart from "../components/RevenueChart";
import RevenueMap from "../components/RevenueMap";
import OrderListTable from "../components/OrderListTable";
import { useOrderVisibility } from "../context/OrdersVisibilityContext";

const Main = () => {
  const { isOrderListVisible } = useOrderVisibility();

  return (
    <>
      <>
        <Navbar />
      </>
      <Box
        sx={{
          overflow: "auto",
          height: "850px",
          margin: "0 0 0 28px",
        }}
      >
        {isOrderListVisible ? (
          <OrderListTable />
        ) : (
          <>
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
              <Grid item xs={12} md={6}>
                <ProductTable />
              </Grid>
              <Grid item xs={12} md={6}>
                <DonutChart />
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    </>
  );
};

export default Main;
