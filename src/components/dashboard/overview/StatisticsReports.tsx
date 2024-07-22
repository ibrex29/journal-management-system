import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

export const StatisticsReports: React.FC = () => {
  return (
    <Card sx={{ boxShadow: 2, p: 2, mb: 2, borderRadius: 2, border: '1px solid rgba(0, 0, 0, 0.12)' }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Statistics & Reports</Typography>
        <Typography variant="body2" color="textSecondary">Access detailed reports and analytics for administrators and editors.</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>Export Data</Button>
      </CardContent>
    </Card>
  );
};
