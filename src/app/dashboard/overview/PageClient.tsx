import React from 'react';
import { Box, Grid, Typography, Paper, Divider } from '@mui/material';
import { Assignment, AssignmentTurnedIn, Close, Done, Publish, Event, Assignment as AssignmentIcon } from '@mui/icons-material';
import { StatisticCard } from '@/components/dashboard/overview/StatisticCard';
import { TaskReminders } from '@/components/dashboard/overview/TasksReminders';

const tasks = [
  { icon: <Event style={{ color: '#1976d2' }} />, text: 'Review deadline approaching' },
  { icon: <AssignmentIcon style={{ color: '#388e3c' }} />, text: '5 manuscripts pending review assignment' },
];

const statistics = {
  totalSubmitted: 120,
  underReview: 30,
  rejected: 15,
  approved: 50,
  published: 25,
};

const Summary: React.FC = () => {
  return (
    <Box sx={{ p: 4, maxWidth: 1200, margin: 'auto' }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}>
         Summary
      </Typography>

      <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={2.4}>
        <StatisticCard
          title="Total Submitted"
          count={statistics.totalSubmitted}
          icon={<Assignment fontSize="large" sx={{ color: 'primary.main' }} />} // Color icon
        />
      </Grid>
      <Grid item xs={12} sm={4} md={2.4}>
        <StatisticCard
          title="Under Review"
          count={statistics.underReview}
          icon={<AssignmentTurnedIn fontSize="large" sx={{ color: 'warning.main' }} />} // Color icon
        />
      </Grid>
      <Grid item xs={12} sm={4} md={2.4}>
        <StatisticCard
          title="Rejected"
          count={statistics.rejected}
          icon={<Close fontSize="large" sx={{ color: 'error.main' }} />} // Color icon
        />
      </Grid>
      <Grid item xs={12} sm={4} md={2.4}>
        <StatisticCard
          title="Approved"
          count={statistics.approved}
          icon={<Done fontSize="large" sx={{ color: 'success.main' }} />} // Color icon
        />
      </Grid>
      <Grid item xs={12} sm={4} md={2.4}>
        <StatisticCard
          title="Published"
          count={statistics.published}
          icon={<Publish fontSize="large" sx={{ color: 'info.main' }} />} // Color icon
        />
      </Grid>
    </Grid>

      <Divider sx={{ my: 4 }} />

      {/* Task Reminders */}
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>Task Reminders</Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        <TaskReminders tasks={tasks} />
      </Paper>
    </Box>
  );
};

export default Summary;
