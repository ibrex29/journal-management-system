import * as React from 'react';
import { Box, Typography } from '@mui/material';

const ManuscriptGuidelines: React.FC = () => {
  const guidelines = [
    'Manuscript should be written in English and typed in 12 point font size using Times New Roman.',
    'The paper should not exceed twenty (20) pages, including figures and tables.',
    'Include a Title Page with the title of the article, authors’ contact details, and corresponding author’s email address.',
    'An Abstract Page should contain the title of the article, the abstract, and five or six keywords.',
    'Symbols and abbreviations should be defined where first mentioned.',
    'The manuscript should be organized under the following headings: Introduction, Theoretical Analysis, Materials and Methods, Results and Discussion, Conclusion, References.',
    'Use APA system (alphabetical listing) of referencing in the body of the manuscript.',
  ];

  return (
    <Box
      sx={{
        p: 3,
        border: '1px solid',
        borderColor: 'grey.300',
        borderRadius: 2,
        boxShadow: 2,
        bgcolor: 'background.paper',
        maxWidth: 600,
        mx: 'auto',
        maxHeight: '80vh', // Adjust the height as needed
        overflowY: 'auto', // Enable vertical scrolling
      }}
    >
      <Typography
        variant="h5"
        sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}
      >
        Manuscript Submission Guidelines
      </Typography>
      {guidelines.map((guideline, index) => (
        <Box key={index} sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="body1"
            sx={{ mr: 1, color: 'text.secondary', fontWeight: 'medium' }}
          >
            {index + 1}.
          </Typography>
          <Typography
            variant="body1"
            sx={{ flex: 1, color: 'text.primary' }}
          >
            {guideline}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ManuscriptGuidelines;
