import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Stack, Box } from '@mui/material';
import { dummyReviews } from './dummyData';

interface ReviewRepliesDialogProps {
  open: boolean;
  manuscriptId: string;
  onClose: () => void;
}

export const ReviewRepliesDialog: React.FC<ReviewRepliesDialogProps> = ({ open, manuscriptId, onClose }) => {
  const reviewsAndReplies = dummyReviews.filter(item => item.manuscriptId === manuscriptId);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Review and Replies</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          {reviewsAndReplies.map((item) => (
            <Stack
              key={item.reviewId}
              direction="row"
              spacing={2}
              alignItems="flex-start"
              sx={{
                justifyContent: item.reviewId.startsWith('reply') ? 'flex-start' : 'flex-end',
                mb: 2
              }}
            >
              <Box
                sx={{
                  maxWidth: '75%',
                  padding: 2,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: item.reviewId.startsWith('reply') ? '#e0e0e0' : '#009688', // Color for replies and reviews
                  bgcolor: item.reviewId.startsWith('reply') ? '#f5f5f5' : '#e0f2f1', // Background color for replies and reviews
                  boxShadow: 2,
                  wordBreak: 'break-word',
                  position: 'relative'
                }}
              >
                <Typography variant="caption" color="textSecondary" sx={{ mb: 1 }}>
                  {new Date(item.timestamp).toLocaleString()}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  {item.subject}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {item.contents}
                </Typography>
                {item.uploadFiles && (
                  <a href={item.uploadFiles} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: 8, color: '#009688' }}>
                    View Attached File
                  </a>
                )}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: item.reviewId.startsWith('reply') ? 'transparent' : '#009688', // Dot color for reviews
                    border: '2px solid',
                    borderColor: '#009688',
                  }}
                />
              </Box>
            </Stack>
          ))}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
};
