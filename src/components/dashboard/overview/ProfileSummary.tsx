import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const ProfileSummary: React.FC = () => {
  return (
    <Card sx={{ boxShadow: 2, p: 2, mb: 2, borderRadius: 2, border: '1px solid rgba(0, 0, 0, 0.12)' }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Profile Summary</Typography>
        <Typography variant="body2" color="textSecondary">Name: John Doe</Typography>
        <Typography variant="body2" color="textSecondary">Role: Admin</Typography>
        <Typography variant="body2" color="textSecondary">Recent Activity: Submitted a new manuscript</Typography>
      </CardContent>
    </Card>
  );
};
