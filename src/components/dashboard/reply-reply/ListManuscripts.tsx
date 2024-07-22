// ListManuscripts.tsx
import React from 'react';
import { Paper, List, ListItem, ListItemText, Divider } from '@mui/material';

interface Manuscript {
  id: string;
  title: string;
  abstract: string;
}

interface ListManuscriptsProps {
  manuscripts: Manuscript[];
  onSelectManuscript: (manuscript: Manuscript) => void;
}

export const ListManuscripts: React.FC<ListManuscriptsProps> = ({ manuscripts, onSelectManuscript }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, border: '1px solid #ddd' }}>
      <List>
        {manuscripts.map(manuscript => (
          <React.Fragment key={manuscript.id}>
            <ListItem button onClick={() => onSelectManuscript(manuscript)}>
              <ListItemText
                primary={manuscript.title}
                secondary={manuscript.abstract}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};
