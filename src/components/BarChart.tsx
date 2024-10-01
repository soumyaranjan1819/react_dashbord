import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Box, Typography } from '@mui/material';
import { useColorTheme } from '../context/ThemeContext'; 

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Sample data
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Actuals',
      data: [18, 22, 19, 25, 17, 22], 
      backgroundColor: 'rgba(168, 197, 218, 1)',
      barThickness: 20, 
      borderRadius: { topRight: 0, topLeft: 0 },
    },
    {
      label: 'Projections',
      data: [22, 25, 23, 28, 19, 27],
      backgroundColor: 'rgba(168, 197, 218, 0.5)',
      barThickness: 20, 
      borderRadius: { topRight: 4, topLeft: 4 },
    },
  ],
};

const options: ChartOptions<'bar'> = {
  plugins: {
    legend: {
      position: 'bottom', 
      labels: {
        color: 'rgba(28, 28, 28, 0.4)', 
        boxWidth: 8, 
        font: {
          size: 8,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false, 
      },
      ticks: {
        color: '#1C1C1C', 
      },
    },
    y: {
      stacked: false, 
      beginAtZero: true, 
      max: 30, 
      ticks: {
        color: 'rgba(28, 28, 28, 0.4)', 
        stepSize: 10, 
        maxTicksLimit: 4, 
        callback: (value) => `${value}M`,
      },
      border: {
        display: false, 
      },
    },
  },
};

const Charts = () => {
  const { theme } = useColorTheme(); 
  return (
    <Box
      sx={{
        maxWidth: '30vw',
        height: '252px',
        backgroundColor: theme === "dark"? 'rgba(255, 255, 255, 0.05)' :'rgba(247, 249, 251, 1)',
        borderRadius: '16px',
        padding: '16px',
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: '600', marginBottom: '16px' }}>
        Projections vs Actuals
      </Typography>

      <Bar data={data} options={options} />
    </Box>
  );
};

export default Charts;
