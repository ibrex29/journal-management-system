import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, Button, FormControl, InputLabel, FormHelperText, CircularProgress } from '@mui/material';
import { dummyManuscripts } from './dummyData'; // Ensure this path is correct

interface Manuscript {
  id: string;
  title: string;
  abstract: string;
}

export const ProcessManuscript: React.FC = () => {
  const [selectedManuscript, setSelectedManuscript] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleManuscriptChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedManuscript(event.target.value as string);
    setError(null);
  };

  const handleStatusChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStatus(event.target.value as string);
    setError(null);
  };

  const handleSubmit = async () => {
    if (selectedManuscript && status) {
      setLoading(true);
      try {
        // Here you would typically handle the submission logic, such as sending a request to an API
        console.log(`Manuscript ID: ${selectedManuscript}, Status: ${status}`);
        // Simulate an API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setError(null);
      } catch (err) {
        setError('Failed to process manuscript. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      setError('Please select a manuscript and status.');
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 600, margin: 'auto', border: '1px solid #ddd', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>Process Manuscript</Typography>
      <FormControl fullWidth margin="normal" error={!!error}>
        <InputLabel id="manuscript-select-label">Select Manuscript</InputLabel>
        <Select
          labelId="manuscript-select-label"
          value={selectedManuscript}
          onChange={handleManuscriptChange}
          displayEmpty
          renderValue={(value) => value ? dummyManuscripts.find(manuscript => manuscript.id === value)?.title : 'Select Manuscript'}
        >
          <MenuItem value="" disabled>Select Manuscript</MenuItem>
          {dummyManuscripts.map((manuscript) => (
            <MenuItem key={manuscript.id} value={manuscript.id}>
              {manuscript.title}
            </MenuItem>
          ))}
        </Select>
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
      <FormControl fullWidth margin="normal" error={!!error}>
        <InputLabel id="status-select-label">Status</InputLabel>
        <Select
          labelId="status-select-label"
          value={status}
          onChange={handleStatusChange}
          displayEmpty
        >
          <MenuItem value="" disabled>Select Status</MenuItem>
          <MenuItem value="Accepted">Accepted</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
        </Select>
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={!selectedManuscript || !status || loading}
        sx={{ mt: 3, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
      >
        {loading ? <CircularProgress size={24} /> : 'Submit'}
      </Button>
    </Box>
  );
};
