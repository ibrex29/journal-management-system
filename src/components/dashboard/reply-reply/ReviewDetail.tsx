// ReviewDetail.tsx
import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Stack } from '@mui/material';

interface Review {
  reviewId: string;
  manuscriptId: string;
  comments: string;
  recommendation: string;
  timestamp: string;
}

export const ReviewDetail: React.FC<{ review: Review }> = ({ review }) => {
  const [replyContents, setReplyContents] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleReplyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReplyContents(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (replyContents) {
      // Handle submission of reply and file upload
      console.log('Reply submitted:', replyContents);
      if (file) {
        console.log('File uploaded:', file);
      }
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, border: '1px solid #ddd' }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Review Details
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
        Subject: {review.comments.substring(0, 50)}...
      </Typography>
      <Typography variant="body1" sx={{ marginY: 2 }}>
        {review.comments}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
        Recommendation: {review.recommendation}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Timestamp: {new Date(review.timestamp).toLocaleString()}
      </Typography>

      <Typography variant="h6" sx={{ marginY: 2 }}>
        Reply to Review
      </Typography>
      <Stack spacing={2}>
        <TextField
          label="Your Reply"
          multiline
          rows={4}
          variant="outlined"
          value={replyContents}
          onChange={handleReplyChange}
          fullWidth
          sx={{ borderRadius: 1, border: '1px solid #ddd' }}
        />
        <Button variant="contained" component="label">
          Upload File
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        {file && <Typography variant="body2">Selected file: {file.name}</Typography>}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit Reply
        </Button>
      </Stack>
    </Paper>
  );
};
