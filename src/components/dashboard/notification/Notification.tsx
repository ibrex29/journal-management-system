import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material';
import { Bell as BellIcon } from '@phosphor-icons/react';

interface Notification {
  id: number;
  message: string;
  time: string;
  type: 'info' | 'warning' | 'success' | 'error';
}

const notifications: Notification[] = [
  { id: 1, message: 'New article published', time: '10 minutes ago', type: 'success' },
  { id: 2, message: 'Server maintenance at 2 AM', time: '1 hour ago', type: 'info' },
  { id: 3, message: 'Password change required', time: '1 day ago', type: 'warning' },
  { id: 4, message: 'Failed login attempt', time: '2 days ago', type: 'error' },
];

const NotificationIcon = ({ type }: { type: Notification['type'] }) => {
  switch (type) {
    case 'info':
      return <BellIcon style={{ color: '#2196f3' }} />;
    case 'warning':
      return <BellIcon style={{ color: '#ff9800' }} />;
    case 'success':
      return <BellIcon style={{ color: '#4caf50' }} />;
    case 'error':
      return <BellIcon style={{ color: '#f44336' }} />;
    default:
      return <BellIcon />;
  }
};

export const NotificationsPage: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>Notifications</Typography>
      <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <List>
            {notifications.map(notification => (
              <React.Fragment key={notification.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar>
                      <NotificationIcon type={notification.type} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={notification.message}
                    secondary={notification.time}
                  />
                </ListItem>
                <Divider component="li" />
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};
