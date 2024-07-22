'use client';

import React, { useState, useEffect } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { Manuscript } from '@/app/dashboard/manuscripts/types';
import { ManuscriptList } from '@/components/manuscripts/submittedManuscript';
import { TabPanel } from '@/components/tabpanel/TabPanel';

const DownloadSection = () => {
  const [value, setValue] = useState(0);
  const [submittedManuscripts, setSubmittedManuscripts] = useState<Manuscript[]>([]);
  const [assignedManuscripts, setAssignedManuscripts] = useState<Manuscript[]>([]);
  const [unassignedManuscripts, setUnassignedManuscripts] = useState<Manuscript[]>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const fetchSubmittedManuscripts = async () => {
    const response = await fetch('http://localhost:5000/api/v1/editor/submitted');
    const data = await response.json();
    setSubmittedManuscripts(data);
  };

  const fetchAssignedManuscripts = async () => {
    const response = await fetch('http://localhost:5000/api/v1/editor/assigned');
    const data = await response.json();
    setAssignedManuscripts(data);
  };

  const fetchUnassignedManuscripts = async () => {
    const response = await fetch('http://localhost:5000/api/v1/editor/unassigned');
    const data = await response.json();
    setUnassignedManuscripts(data);
  };

  useEffect(() => {
    fetchSubmittedManuscripts();
  }, []);

  useEffect(() => {
    if (value === 1) {
      fetchAssignedManuscripts();
    }
  }, [value]);

  useEffect(() => {
    if (value === 2) {
      fetchUnassignedManuscripts();
    }
  }, [value]);

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="download section tabs">
        <Tab label="Submitted" />
        <Tab label="Assigned" />
        <Tab label="Unassigned" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <ManuscriptList manuscripts={submittedManuscripts} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ManuscriptList manuscripts={assignedManuscripts} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ManuscriptList manuscripts={unassignedManuscripts} />
      </TabPanel>
    </Box>
  );
};

export default DownloadSection;
