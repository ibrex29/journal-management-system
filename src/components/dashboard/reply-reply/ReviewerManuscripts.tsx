import React, { useState } from 'react';
import { Stack, Typography, Button, Card, CardContent, CardActions, Pagination } from '@mui/material';
import { dummyManuscripts } from './dummyData';
import { ReviewRepliesDialog } from './ReviewRepliesDialog';
import { CreateReviewDialog } from './CreateReviewDialog';

export const ReviewerManuscripts: React.FC = () => {
  const [selectedManuscript, setSelectedManuscript] = useState<string | null>(null);
  const [openReviewRepliesDialog, setOpenReviewRepliesDialog] = useState<boolean>(false);
  const [openCreateReviewDialog, setOpenCreateReviewDialog] = useState<boolean>(false);

  const handleOpenReviewRepliesDialog = (manuscriptId: string) => {
    setSelectedManuscript(manuscriptId);
    setOpenReviewRepliesDialog(true);
  };

  const handleCloseReviewRepliesDialog = () => {
    setOpenReviewRepliesDialog(false);
    setSelectedManuscript(null);
  };

  const handleOpenCreateReviewDialog = () => {
    setOpenCreateReviewDialog(true);
  };

  const handleCloseCreateReviewDialog = () => {
    setOpenCreateReviewDialog(false);
  };

  return (
    <Stack spacing={3}>
      {dummyManuscripts.map((manuscript) => (
        <Card key={manuscript.id} variant="outlined">
          <CardContent>
            <Typography variant="h6" color="primary">
              {manuscript.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {manuscript.abstract}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => handleOpenReviewRepliesDialog(manuscript.id)}
            >
              View Reviews
            </Button>
            <Button
              size="small"
              color="secondary"
              onClick={handleOpenCreateReviewDialog}
            >
              Create Review
            </Button>
          </CardActions>
        </Card>
      ))}

      <Pagination count={10} page={1} onChange={() => {}} color="primary" />

      {/* Dialogs */}
      {selectedManuscript && (
        <ReviewRepliesDialog
          open={openReviewRepliesDialog}
          manuscriptId={selectedManuscript}
          onClose={handleCloseReviewRepliesDialog}
        />
      )}
      <CreateReviewDialog
        open={openCreateReviewDialog}
        onClose={handleCloseCreateReviewDialog}
      />
    </Stack>
  );
};
