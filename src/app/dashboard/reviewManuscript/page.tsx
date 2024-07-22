'use client';

import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { ProcessManuscript } from '@/components/dashboard/reviewManuscript/ProcessManuscript';
import { TabPanel } from '@/components/tabpanel/TabPanel';
import { ReviewerManuscripts } from '@/components/dashboard/reviewManuscript/ReviewerManuscripts';


const MainComponent: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Reviewer Manuscripts" />
          <Tab label="Process Manuscript" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ReviewerManuscripts />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProcessManuscript />
      </TabPanel>
    </Box>
  );
};

export default MainComponent;
