import { Box, Typography, LinearProgress, Grid } from "@mui/material";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useColorTheme } from "../context/ThemeContext";

// Location data for cities with coordinates and revenue
const locationData = [
  { city: "New York", coordinates: [-74.006, 40.7128], revenue: 72 },
  { city: "San Francisco", coordinates: [-122.4194, 37.7749], revenue: 39 },
  { city: "Sydney", coordinates: [151.2093, -33.8688], revenue: 25 },
  { city: "Singapore", coordinates: [103.8198, 1.3521], revenue: 61 },
];

const maxRevenue = Math.max(...locationData.map((data) => data.revenue), 100);

const RevenueMap = () => {
  const { theme } = useColorTheme();

  return (
    <Box
      sx={{
        marginTop: "24px",
        marginLeft: "20px",
        backgroundColor:
          theme === "dark"
            ? " rgba(255, 255, 255, 0.05) "
            : "rgba(247, 249, 251, 1)",
        p: 2,
        borderRadius: "12px",
        width: "74%",
        maxHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h6"
        fontWeight="600"
        fontSize="14px"
        color={theme === "dark" ? "#FFFFFF" : "rgba(28, 28, 28, 1)"}
      >
        Revenue by Location
      </Typography>
      <ComposableMap
        projectionConfig={{ scale: 170 }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography="/public/feature.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: theme === "dark" ? "#687681" : "#A8C5DA",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
        {locationData.map(({ city, coordinates, revenue }) =>
          coordinates && coordinates.length === 2 ? (
            <Marker key={city} coordinates={coordinates as [number, number]}>
              <circle
                r={5}
                fill={theme === "dark" ? "#FFFFFF" : "#1C1C1C"}
                stroke={theme === "dark" ? "#000" : "#fff"}
                strokeWidth={2}
              />
              <text
                textAnchor="middle"
                y={15}
                style={{
                  fontFamily: "system-ui",
                  fill: theme === "dark" ? "#FFFFFF" : "#5D5A6D",
                  fontSize: "10px",
                }}
              >
                {city}: {revenue}K
              </text>
            </Marker>
          ) : null
        )}
      </ComposableMap>
      <Grid container spacing={0} sx={{ width: "100%", maxWidth: 300, mt: 2 }}>
        {locationData.map(({ city, revenue }) => (
          <Grid item xs={12} key={city} sx={{ marginBottom: "13px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "8px",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  color: theme === "dark" ? "#FFFFFF" : "#000",
                }}
              >
                {city}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  color: theme === "dark" ? "#B0B0B0" : "text.secondary",
                }}
              >
                {`${revenue}K`}
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={(revenue / maxRevenue) * 100}
              sx={{
                height: 4,
                borderRadius: 12,
                backgroundColor:
                  theme === "dark"
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(168, 197, 218, 0.5)",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: theme === "dark" ? "#4A90E2" : "#A8C5DA",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RevenueMap;
