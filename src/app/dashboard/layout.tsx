import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import GlobalStyles from '@mui/material/GlobalStyles';

import { MainNav } from '@/components/dashboard/layout/main-nav';
import { SideNav } from '@/components/dashboard/layout/side-nav';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            '--MainNav-height': '56px',
            '--MainNav-zIndex': 1000,
            '--SideNav-width': '280px',
            '--SideNav-zIndex': 1100,
            '--MobileNav-width': '320px',
            '--MobileNav-zIndex': 1100,
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            fontFamily: 'Roboto, Arial, sans-serif',
            backgroundColor: '#f4f4f9', // Light background color for better contrast
          },
        }}
      />
      <Box
        sx={{
          bgcolor: 'background.default',
          display: 'flex',
          minHeight: '100vh',
          overflow: 'hidden',
          flexDirection: 'row',
          position: 'relative',
          transition: 'margin-left 0.3s ease', // Ensure main content area transitions smoothly
        }}
      >
        <SideNav />
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            ml: { lg: 'var(--SideNav-width)' }, // Adjust margin based on sidebar width
            transition: 'margin-left 0.3s ease', // Smooth transition for sidebar toggle
            overflow: 'hidden', // Prevent scrollbars if needed
          }}
        >
          <MainNav />
          <Box
            component="main"
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              py: { xs: 2, sm: 3, md: 4 }, // Responsive padding
              px: { xs: 2, sm: 3, md: 4 },
              overflow: 'auto',
              bgcolor: '#ffffff', // White background for the main content area
              borderRadius: '8px', // Slight border-radius for a softer look
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Light shadow for depth
            }}
          >
            <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
              {children}
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
}
