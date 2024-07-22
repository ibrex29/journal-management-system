import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export const AnnouncementsNews: React.FC = () => {
  return (
    <Card sx={{ boxShadow: 2, p: 2, mb: 2, borderRadius: 2, border: '1px solid rgba(0, 0, 0, 0.12)' }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Announcements & News</Typography>
        <Typography variant="body2" color="textSecondary">Policy changes will be effective from next month.</Typography>
        <Typography variant="body2" color="textSecondary">Upcoming event: Annual Editors Meeting on Sept 15.</Typography>
        <Typography variant="body2" color="textSecondary">New feature: Collaborative review tools are now live.</Typography>
      </CardContent>
    </Card>
  );
};
