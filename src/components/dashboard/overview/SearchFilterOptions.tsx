import React from 'react';
import { Card, CardContent, Typography, TextField, Box, Button } from '@mui/material';

export const SearchFilterOptions: React.FC = () => {
  return (
    <Card sx={{ boxShadow: 2, p: 2, mb: 2, borderRadius: 2, border: '1px solid rgba(0, 0, 0, 0.12)' }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Search & Filter Options</Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField label="Search Manuscripts" variant="outlined" fullWidth />
          <TextField label="Search Users" variant="outlined" fullWidth />
        </Box>
        <Button variant="contained" color="primary">Search</Button>
      </CardContent>
    </Card>
  );
};
