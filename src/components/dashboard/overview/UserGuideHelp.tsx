import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const UserGuideHelp: React.FC = () => {
  return (
    <Card sx={{ boxShadow: 2, p: 2, mb: 2, borderRadius: 2, border: '1px solid rgba(0, 0, 0, 0.12)' }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>User Guide & Help</Typography>
        <List>
          <ListItem>
            <ListItemButton component={RouterLink} to="/user-guide">User Guide</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={RouterLink} to="/faq">FAQ</ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={RouterLink} to="/support">Support</ListItemButton>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
