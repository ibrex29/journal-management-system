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
                justifyContent: item.reviewId.startsWith('review') ? 'flex-end' : 'flex-start',
                mb: 1
              }}
            >
              <Box
                sx={{
                  maxWidth: '80%',
                  padding: 2,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: item.reviewId.startsWith('review') ? 'primary.main' : 'grey.300',
                  bgcolor: item.reviewId.startsWith('review') ? 'primary.light' : 'background.paper',
                  boxShadow: 2,
                  wordBreak: 'break-word'
                }}
              >
                <Typography variant="body2" color="textSecondary">
                  {/* {new Date(item.timestamp).toLocaleString()} */}
                </Typography>
                <Typography variant="h6" color="textPrimary" sx={{ fontWeight: 'bold' }}>
                  {item.subject}
                </Typography>
                <Typography variant="body1">
                  {item.contents}
                </Typography>
                {item.uploadFiles && (
                  <a href={item.uploadFiles} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: 8 }}>
                    View Attached File
                  </a>
                )}
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
