// PublishArticle.tsx
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, FormControl, FormHelperText, CircularProgress } from '@mui/material';

export const PublishArticle: React.FC = () => {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (title && abstract && content) {
      setLoading(true);
      try {
        // Here you would typically handle the submission logic, such as sending a request to an API
        console.log(`Publishing Article: Title: ${title}, Abstract: ${abstract}, Content: ${content}`);
        // Simulate an API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setTitle('');
        setAbstract('');
        setContent('');
        setError(null);
      } catch (err) {
        setError('Failed to publish article. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      setError('Please fill out all fields.');
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 800, margin: 'auto', border: '1px solid #ddd', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>Publish New Article</Typography>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={!!error}
        helperText={error && 'Please enter a title'}
      />
      <TextField
        label="Abstract"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={3}
        value={abstract}
        onChange={(e) => setAbstract(e.target.value)}
        error={!!error}
        helperText={error && 'Please enter an abstract'}
      />
      <TextField
        label="Content"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={6}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        error={!!error}
        helperText={error && 'Please enter the content'}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={loading}
        sx={{ mt: 2 }}
      >
        {loading ? <CircularProgress size={24} /> : 'Publish'}
      </Button>
    </Box>
  );
};
