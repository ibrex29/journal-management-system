import * as React from 'react';
import { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button, TextField, MenuItem, Select } from '@mui/material';

interface Message {
  id: number;
  comments: string;
  recommendation: string;
}

const dummyMessages: Message[] = [
  { id: 1, comments: "The manuscript is well-structured but requires minor revisions in the introduction section.", recommendation: "MINOR_REVISIONS" },
  { id: 2, comments: "Please address the comments on the methodology and re-submit.", recommendation: "MAJOR_REVISIONS" },
  { id: 3, comments: "Excellent work, ready for publication.", recommendation: "APPROVED" }
];

const ReviewerMessagesComponent: React.FC = () => {
  const [selectedMessageId, setSelectedMessageId] = useState<number | null>(dummyMessages[0].id);
  const [reply, setReply] = useState<string>('');

  const handleReplyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReply(event.target.value);
  };

  const handleSendReply = () => {
    // Handle sending reply logic here
    console.log('Reply:', reply);
    setReply('');
  };

  const selectedMessage = dummyMessages.find(message => message.id === selectedMessageId);

  return (
    <Box sx={{ p: 2, border: '1px solid', borderColor: 'grey.300', borderRadius: 2, height: '100%', overflow: 'auto' }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        Reviewer Messages
      </Typography>
      <List>
        {dummyMessages.map((message) => (
          <ListItem
            key={message.id}
            button
            selected={message.id === selectedMessageId}
            onClick={() => setSelectedMessageId(message.id)}
          >
            <ListItemText
              primary={`Recommendation: ${message.recommendation}`}
              secondary={message.comments}
            />
          </ListItem>
        ))}
      </List>
      {selectedMessage && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Selected Message
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Comments: {selectedMessage.comments}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Recommendation: {selectedMessage.recommendation}
          </Typography>
          <Box component="form" sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Reply"
              variant="outlined"
              multiline
              rows={4}
              value={reply}
              onChange={handleReplyChange}
              fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleSendReply}>
              Send Reply
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ReviewerMessagesComponent;
