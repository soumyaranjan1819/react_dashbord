import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { Box, Typography } from '@mui/material';
import { useColorTheme } from '../context/ThemeContext';

// Sample data (you can replace this with actual data)
const data = [
  { name: 'Jan', currentWeek: 10, previousWeek: 20 },
  { name: 'Feb', currentWeek: 15, previousWeek: 10 },
  { name: 'Mar', currentWeek: 12, previousWeek: 15 },
  { name: 'Apr', currentWeek: 22, previousWeek: 12 },
  { name: 'May', currentWeek: 17, previousWeek: 19 },
  { name: 'Jun', currentWeek: 28, previousWeek: 21 },
];

const RevenueChart = () => {
  const { theme } = useColorTheme(); 
  return (
    <Box sx={{
      marginTop:"24px",
      padding: '24px', 
      backgroundColor: theme === "dark"? 'rgba(255, 255, 255, 0.05)' :'rgba(247, 249, 251, 1)',
      borderRadius: '16px', 
      width: '90vw',
      maxWidth: '42.13vw', 
      minWidth: '650px', 
      height: 'auto', 
      boxSizing: 'border-box',
    }}>
      {/* Header Section */}
      <Box display="flex" alignItems="center" justifyContent="space-around" mb={2} >
        {/* Title */}
        <Typography variant="h6" fontWeight="600" color= {theme === "dark"? "rgba(255, 255, 255, 1)" : "rgba(28, 28, 28, 1)"}>
          Revenue
        </Typography>

        {/* Legend and Values */}
        <Box display="flex" alignItems="center" >
          <Box display="flex" alignItems="center" mr={3}>
            <Box
              component="span"
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: theme === "dark"? 'rgba(255,255,255,1)' : 'rgba(28, 28, 28, 1)',
                display: 'inline-block',
                marginRight: '8px',
              }}
            />
            <Typography variant="body2" fontWeight="500">
              Current Week <Typography component="span" fontWeight="700">$58,211</Typography>
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Box
              component="span"
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: 'rgba(168, 197, 218, 1)',
                display: 'inline-block',
                marginRight: '8px',
              }}
            />
            <Typography variant="body2" fontWeight="500">
              Previous Week <Typography component="span" fontWeight="700">$68,768</Typography>
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Chart Section */}
      <Box style={{ width: '100%', height: 300 }} >
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid horizontal={true} vertical={false} stroke="#e0e0e0" />
            
            <XAxis 
              dataKey="name" 
              tick={{ 
                fontSize: 12, 
                fontWeight: 400, 
                fontFamily: 'Inter', 
                fill: 'rgba(28, 28, 28, 0.4)', 
                textAnchor: 'end' 
              }} 
            />
            
            <YAxis 
              tickFormatter={(value) => `${value}M`}
              ticks={[0, 10, 20, 30]}
              domain={[0, 30]}
              axisLine={false}
              tick={{ 
                fontSize: 12, 
                fontWeight: 400, 
                fontFamily: 'Inter', 
                fill: theme === "dark"? 'rgba(255,255,255,0.4)' : 'rgba(28, 28, 28, 0.4)', 
                textAnchor: 'end'
              }}
            />
            
            <Tooltip 
              contentStyle={{
                fontSize: '12px',
                fontFamily: 'Inter',
                color: 'rgba(28, 28, 28, 0.6)' 
              }}
            />
            
            <Line
              type="monotone"
              dataKey="currentWeek"
              stroke="rgba(168, 197, 218, 1)"
              strokeWidth={2}
              dot={false} 
              animationDuration={1500} 
              animationEasing="ease-out" 
            />
            
            <Line
              type="monotone"
              dataKey="previousWeek"
              stroke= {theme === "dark"? "rgba(255, 255, 255, 1)" : "rgba(28, 28, 28, 1)"}
              strokeWidth={2}
              strokeDasharray="3 4 5 2"
              dot={false} 
              animationDuration={1500} 
              animationEasing="ease-out" 
            />
            
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}

export default RevenueChart;
