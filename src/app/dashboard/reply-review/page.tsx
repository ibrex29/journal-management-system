'use client';

import React from 'react';
import { Container, Box } from '@mui/material';
import AuthorReplyComponent from '@/components/dashboard/reply-reply/AuthorReplyComponent';

const AuthorReplyPage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <AuthorReplyComponent />
      </Box>
    </Container>
  );
};

export default AuthorReplyPage;
