import { Grid, Box } from '@mui/material';
import Navbar from "../components/NavBar"
import Cards from "../components/Cards"
import BarChart from "../components/BarChart"
// import DonutChart from "../components/DoughnutChart"

const Main = () => {
  return (
    <>
      <Box>
        <Navbar />
        <Grid container spacing={3}>
          {/* Cards and BarChart in a single row */}
          <Grid item xs={12} md={6}>
            <Cards />
          </Grid>
          <Grid item xs={12} md={6}>
            <BarChart />
          </Grid>
        </Grid>
        {/* DonutChart on a new row below */}
        {/* <Box mt={4}>
          <DonutChart />
        </Box> */}
      </Box>
    </>
  );
};

export default Main;