import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';

interface StatisticCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
}

export const StatisticCard: React.FC<StatisticCardProps> = ({ title, count, icon }) => (
  <Card sx={{ boxShadow: 2, p: 2, mb: 2, borderRadius: 2, border: '1px solid rgba(0, 0, 0, 0.12)' }}>
    <CardContent>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          {icon}
        </Grid>
        <Grid item>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="h4">{count}</Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default StatisticCard;
