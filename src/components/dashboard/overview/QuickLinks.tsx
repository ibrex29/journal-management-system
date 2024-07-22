import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const QuickLinks: React.FC = () => {
  return (
    <Card sx={{ boxShadow: 2, p: 2, mb: 2, borderRadius: 2, border: '1px solid rgba(0, 0, 0, 0.12)' }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Quick Links</Typography>
        <List>
          <ListItem>
            <ListItemButton component={RouterLink} to="/submit-manuscript">Submit Manuscript</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={RouterLink} to="/review-manuscripts">Review Manuscripts</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={RouterLink} to="/manage-users">Manage Users</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={RouterLink} to="/settings">Settings</ListItemButton>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
