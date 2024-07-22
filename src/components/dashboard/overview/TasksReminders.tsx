// src/components/dashboard/overview/TaskReminders.tsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Event as EventIcon, Assignment as AssignmentIcon } from '@mui/icons-material';

interface TaskRemindersProps {
  tasks: Array<{ icon: React.ReactNode; text: string }>;
}

export const TaskReminders: React.FC<TaskRemindersProps> = ({ tasks }) => {
  return (
    <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 1, p: 2, mb: 3 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Task Reminders</Typography>
      <List>
        {tasks.map((task, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemIcon>{task.icon}</ListItemIcon>
              <ListItemText primary={task.text} />
            </ListItem>
            {index < tasks.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};
