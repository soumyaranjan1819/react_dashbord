import { Grid } from '@mui/material';
import { statsData } from "../data/index"; 
import CardItem from "./card"; 

const StatsCards = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        maxWidth: '30vw', 
      }}
    >
      {statsData.map((item) => (
        <Grid
          item
          xs={12}
          sm={6}
          key={item.id}
        >
          <CardItem
            title={item.title}
            value={item.value}
            growth={item.growth}
            backgroundColor={item.backgroundColor}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsCards;
