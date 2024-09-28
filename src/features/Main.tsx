import { Grid, Box } from "@mui/material";
import Navbar from "../components/NavBar";
import Cards from "../components/Cards";
import BarChart from "../components/BarChart";
import DonutChart from "../components/DoughnutChart";
import ProductTable from "../components/Table";
import RevenueChart from "../components/RevenueChart";

const Main = () => {
  return (
    <>
      <Box sx={{
        // overflowY: "auto"
      }}>
        <Navbar />
        <Grid container spacing={10}>
          {/* Cards and BarChart in a single row */}
          <Grid item xs={12} md={6}>
            <Cards />
          </Grid>
          <Grid item xs={12} md={6}>
            <BarChart />
          </Grid>
        </Grid>

        <Grid container spacing={10}>
          {/* donut and table in a single row */}
          <Grid item xs={12} md={6}>
            <RevenueChart />
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <DonutChart />
          </Grid> */}
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
        <Grid container spacing={10}>
          {/* donut and table in a single row */}
          <Grid item xs={12} md={6}>
            <RevenueChart />
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <DonutChart />
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
};

export default Main;
