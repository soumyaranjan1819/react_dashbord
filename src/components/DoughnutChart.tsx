import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Sample data for the donut chart
const data = {
  labels: ["Direct", "Affiliate", "Sponsored", "E-mail"],
  datasets: [
    {
      label: "Total Sales",
      data: [300.56, 135.18, 154.02, 48.96],
      backgroundColor: ["#000000", "#B5F1CC", "#A6D2FF", "#C6CBFF"],
      hoverOffset: 4, // Increase hover offset

      borderRadius: -10, // Rounded edges
      borderAlign: "center", // Ensure borders are aligned consistently
      spacing: 2, // Adds a bit of spacing between segments for better visibility of the rounded ends
    },
  ],
};

// Chart options
const options: ChartOptions<"doughnut"> = {
  cutout: "70%", // Cutout to create the donut effect
  plugins: {
    tooltip: {
      enabled: true,
      callbacks: {
        label: function (tooltipItem) {
          const label = tooltipItem.label || "";
          const value = tooltipItem.raw;

          const formattedValue =
            typeof value === "number" ? value.toFixed(2) : value;

          return `${label}: $${formattedValue}`;
        },
      },
    },
    legend: {
      display: false, // Disable default legend
    },
  },
};

// Donut chart component
const DonutChart = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#F4F9FF",
        borderRadius: "16px",
        width: "72%",
        p: 2,
        marginTop: "24px",
        gap: "16px",
      }}
    >
      {/* Title */}
      <Typography
        variant="body2"
        sx={{ fontWeight: "600", marginBottom: "16px", fontSize: "14px" }}
      >
        Total Sales
      </Typography>

      {/* Donut chart */}
      <Box
        sx={{
          width: "120px",
          height: "120px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Doughnut data={data} options={options} />
      </Box>

      {/* Dynamic Legend */}
      <List sx={{ width: "100%" }}>
        {data.labels.map((label, index) => (
          <ListItem key={label}>
            <ListItemIcon>
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: data.datasets[0].backgroundColor[index],
                  borderRadius: "50%",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={label}
              secondary={`$${data.datasets[0].data[index].toFixed(2)}`}
              primaryTypographyProps={{ fontSize: "12px", display: "flex" }}
              secondaryTypographyProps={{
                fontSize: "12px",
                marginLeft: "0.5em",
              }}
              sx={{
                "& .MuiListItemText-primary, & .MuiListItemText-secondary": {
                  display: "flex",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DonutChart;
