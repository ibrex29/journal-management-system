import React from 'react';
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';

export const Notifications: React.FC = () => {
  return (
    <Card sx={{ boxShadow: 2, p: 2, mb: 2, borderRadius: 2, border: '1px solid rgba(0, 0, 0, 0.12)' }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Notifications</Typography>
        <List>
          <ListItem>Pending review for manuscript #123</ListItem>
          <ListItem>New comment on manuscript #456</ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
