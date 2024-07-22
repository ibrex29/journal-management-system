import * as React from 'react';
import { Container, Grid } from '@mui/material';
import { ManuscriptSubmission } from '@/components/dashboard/online-submission/online-submission';
import ManuscriptGuidelines from '@/components/dashboard/online-submission/manuscript-guidelines';


const ManuscriptSubmissionPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <ManuscriptSubmission />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ManuscriptGuidelines />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ManuscriptSubmissionPage;
