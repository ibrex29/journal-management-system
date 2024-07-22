'use client';

import * as React from 'react';
import { Container, Typography } from '@mui/material';
import AuthorGuidelines from '@/components/dashboard/author/AuthorGuidelines';

export default function Page(): React.JSX.Element {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <AuthorGuidelines />
    </Container>
  );
}
