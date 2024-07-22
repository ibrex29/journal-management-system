'use client';

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

import { createTheme } from '@/styles/theme/create-theme';

import EmotionCache from './emotion-cache';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps): React.JSX.Element {
  const theme = createTheme();

  return (
    <EmotionCache options={{ key: 'mui' }}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </EmotionCache>
  );
}
// 'use client';

// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
// import { createTheme } from '@/styles/theme/create-theme';
// import EmotionCache from './emotion-cache';

// export interface ThemeProviderProps {
//   children: React.ReactNode;
// }

// export function ThemeProvider({ children }: ThemeProviderProps): React.JSX.Element {
//   const theme = React.useMemo(() => createTheme(), []);

//   // Error boundary component
//   class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
//     constructor(props: { children: React.ReactNode }) {
//       super(props);
//       this.state = { hasError: false };
//     }

//     static getDerivedStateFromError() {
//       return { hasError: true };
//     }

//     componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
//       // Log error to an error reporting service
//       console.error('Error caught in ErrorBoundary:', error, errorInfo);
//     }

//     render() {
//       if (this.state.hasError) {
//         return <div>Something went wrong.</div>;
//       }

//       return this.props.children;
//     }
//   }

//   return (
//     <EmotionCache options={{ key: 'mui' }}>
//       <CssVarsProvider theme={theme}>
//         <CssBaseline />
//         <ErrorBoundary>
//           {children}
//         </ErrorBoundary>
//       </CssVarsProvider>
//     </EmotionCache>
//   );
// }
