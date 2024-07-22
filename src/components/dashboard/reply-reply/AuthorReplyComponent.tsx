import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
  Switch,
  FormControlLabel,
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const dummyManuscripts = [
  { id: '1', title: 'Manuscript 1' },
  { id: '2', title: 'Manuscript 2' },
  { id: '3', title: 'Manuscript 3' },
];

const AuthorReplyComponent = () => {
  const [manuscripts] = useState(dummyManuscripts);
  const [selectedManuscript, setSelectedManuscript] = useState('');
  const [needReply, setNeedReply] = useState(false);
  const [subject, setSubject] = useState('');
  const [contents, setContents] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Clear the form after successful submission
      setSelectedManuscript('');
      setNeedReply(false);
      setSubject('');
      setContents('');
      setFile(null);
    }, 2000);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 600,
        mx: 'auto',
        p: 4,
        gap: 3,
        border: '1px solid',
        borderColor: 'grey.300',
        borderRadius: 3,
        boxShadow: 4,
        bgcolor: 'background.paper',
      }}
      noValidate
    >
      <Typography variant="h4" gutterBottom>
        Send Reply to Reviewer
      </Typography>

      {/* Manuscript Dropdown */}
      <FormControl fullWidth variant="outlined">
        <InputLabel id="manuscript-label">Manuscript</InputLabel>
        <Select
          labelId="manuscript-label"
          value={selectedManuscript}
          onChange={(e) => setSelectedManuscript(e.target.value)}
          label="Manuscript"
        >
          {manuscripts.map((manuscript) => (
            <MenuItem key={manuscript.id} value={manuscript.id}>
              {manuscript.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Need Reply Switch */}
      <FormControlLabel
        control={
          <Switch
            checked={needReply}
            onChange={(e) => setNeedReply(e.target.checked)}
            name="needReply"
          />
        }
        label="Need Reply"
      />

      {/* Subject Field */}
      <TextField
        label="Subject"
        variant="outlined"
        fullWidth
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      {/* Contents Field */}
      <TextField
        label="Contents"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={contents}
        onChange={(e) => setContents(e.target.value)}
      />

      {/* File Upload */}
      <Button
        variant="contained"
        component="label"
        startIcon={<UploadFileIcon />}
      >
        Upload File
        <input
          type="file"
          hidden
          onChange={(e) => {
            if (e.target.files) setFile(e.target.files[0]);
          }}
        />
      </Button>
      {file && <Typography variant="body2">{file.name}</Typography>}

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Send'}
      </Button>

      {/* Success Snackbar */}
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
      >
        <Alert onClose={() => setSuccess(false)} severity="success">
          Reply sent successfully!
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError('')}
      >
        <Alert onClose={() => setError('')} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AuthorReplyComponent;
