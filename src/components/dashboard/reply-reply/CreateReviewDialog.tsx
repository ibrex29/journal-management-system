import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Stack, Typography } from '@mui/material';
import { Select, MenuItem } from '@mui/material';
import { dummyManuscripts } from './dummyData';

interface CreateReviewDialogProps {
  open: boolean;
  onClose: () => void;
}

export const CreateReviewDialog: React.FC<CreateReviewDialogProps> = ({ open, onClose }) => {
  const [manuscriptId, setManuscriptId] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [contents, setContents] = useState<string>('');
  const [uploadFiles, setUploadFiles] = useState<string>('');

  const handleSubmit = () => {
    // Handle review submission
    console.log({ manuscriptId, subject, contents, uploadFiles });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Create Review</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Select
            value={manuscriptId}
            onChange={(e) => setManuscriptId(e.target.value)}
            displayEmpty
            fullWidth
          >
            <MenuItem value="" disabled>Select Manuscript</MenuItem>
            {dummyManuscripts.map(manuscript => (
              <MenuItem key={manuscript.id} value={manuscript.id}>{manuscript.title}</MenuItem>
            ))}
          </Select>
          <TextField
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Review Content"
            value={contents}
            onChange={(e) => setContents(e.target.value)}
            fullWidth
            variant="outlined"
            multiline
            rows={4}
          />
          <TextField
            label="Upload Files URL (optional)"
            value={uploadFiles}
            onChange={(e) => setUploadFiles(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={handleSubmit} color="secondary">Submit Review</Button>
      </DialogActions>
    </Dialog>
  );
};
