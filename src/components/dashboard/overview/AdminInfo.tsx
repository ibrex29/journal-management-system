import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface AdminInfoProps {
  title: string;
  content: string;
}

export const AdminInfo: React.FC<AdminInfoProps> = ({ title, content }) => {
  return (
    <Card sx={{ boxShadow: 2, p: 2, mb: 2, borderRadius: 2, border: '1px solid rgba(0, 0, 0, 0.12)' }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>{title}</Typography>
        <Typography variant="body2" color="textSecondary">{content}</Typography>
      </CardContent>
    </Card>
  );
};
