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
import { useColorTheme } from "../context/ThemeContext";
import { salesData } from "../data";

ChartJS.register(ArcElement, Tooltip, Legend);

const options: ChartOptions<"doughnut"> = {
  cutout: "60%", 
  plugins: {
    tooltip: {
      enabled: true,
      callbacks: {
        label: function (tooltipItem) {
          const value = tooltipItem.raw;
          const formattedValue =
            typeof value === "number" ? value.toFixed(2) : value;
          return `${formattedValue}`;
        },
      },
    },
    legend: {
      display: false,
    },
  },
  elements: {
    arc: {
      borderRadius: 4,
      borderAlign: "center",
      spacing: 2,
    },
  },
};

const DonutChart = () => {
  const { theme } = useColorTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor:
          theme === "dark"
            ? " rgba(255, 255, 255, 0.05) "
            : "rgba(247, 249, 251, 1)",
        borderRadius: "16px",
        width: "74%",
        p: 2,
        marginTop: "24px",
        marginLeft: "20px",
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
          width: "150px", 
          height: "150px", 
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Doughnut data={salesData} options={options} />
      </Box>

      {/* Dynamic Legend */}
      <List sx={{ width: "100%" }}>
        {salesData.labels.map((label, index) => (
          <ListItem
            key={label}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 32px",
              marginBottom: "8px", 
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <ListItemIcon sx={{ minWidth: "unset" }}>
                <Box
                  sx={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: salesData.datasets[0].backgroundColor[index],
                    borderRadius: "50%",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  fontSize: "12px",
                  fontWeight: "600",
                  display: "inline",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              ${salesData.datasets[0].data[index].toFixed(2)}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DonutChart;
