// theme-context.tsx
import React, { createContext, useContext, ReactNode } from 'react';

interface ThemeContextType {
  theme: { colors: { primary: string; secondary: string; text: string } };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ theme: ThemeContextType; children: ReactNode }> = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
