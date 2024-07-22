import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';

const data = [
  { name: 'Jan', submissions: 30, reviews: 20, accepted: 15 },
  { name: 'Feb', submissions: 45, reviews: 35, accepted: 25 },
  { name: 'Mar', submissions: 50, reviews: 40, accepted: 30 },
  // Add more data points as needed
];

const PerformanceMetrics = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Submission Trends
        </Typography>
        <LineChart width={800} height={300} data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="submissions" stroke="#8884d8" />
          <Line type="monotone" dataKey="reviews" stroke="#82ca9d" />
          <Line type="monotone" dataKey="accepted" stroke="#ffc658" />
        </LineChart>
      </Paper>
    </Box>
  );
};

export default PerformanceMetrics;
