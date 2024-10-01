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
import { data } from '../data';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
