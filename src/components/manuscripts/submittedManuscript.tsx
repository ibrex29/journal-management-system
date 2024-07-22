import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Stack,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Pagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  CircularProgress,
  IconButton,
  TextField,
  SelectChangeEvent,
} from '@mui/material';
import { Manuscript } from '@/app/dashboard/manuscripts/types';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from '@mui/material/styles';
import axios from 'axios';

// Styled components
const StatusIcon = styled(IconButton)(({ theme }) => ({
  borderRadius: '50%',
  padding: theme.spacing(1),
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    padding: theme.spacing(3),
    width: '80%',
    maxWidth: '800px',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
  },
}));

const StatusText = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const ReviewerSelect = styled(Select)(({ theme }) => ({
  minWidth: 200,
}));

const DialogTitleStyled = styled(DialogTitle)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const DialogContentStyled = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(2),
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
}));

const DialogActionsStyled = styled(DialogActions)(({ theme }) => ({
  padding: theme.spacing(2),
  justifyContent: 'space-between',
}));

const FilterContainer = styled(Stack)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  gap: theme.spacing(2),
}));

const filterOptions = [
  { value: '', label: 'All' },
  { value: 'SUBMITTED', label: 'Submitted' },
  { value: 'UNDER_REVIEW', label: 'Under Review' },
  { value: 'ACCEPTED', label: 'Accepted' },
  { value: 'REJECTED', label: 'Rejected' },
  { value: 'PUBLISHED', label: 'Published' },
];

interface Reviewer {
  id: string;
  name: string;
}

interface ManuscriptListProps {
  manuscripts: Manuscript[];
  itemsPerPage?: number;
}

export const ManuscriptList: React.FC<ManuscriptListProps> = ({ manuscripts, itemsPerPage = 3 }) => {
  const [page, setPage] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedManuscript, setSelectedManuscript] = useState<Manuscript | null>(null);
  const [selectedReviewer, setSelectedReviewer] = useState<string>('');
  const [reviewers, setReviewers] = useState<Reviewer[]>([]);
  const [reviewDueDate, setReviewDueDate] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/editor')
      .then(response => {
        const fetchedReviewers = response.data.map((reviewer: any) => ({
          id: reviewer.id,
          name: `${reviewer.User.firstName} ${reviewer.User.lastName}`
        }));
        setReviewers(fetchedReviewers);
      })
      .catch(error => {
        console.error('Error fetching reviewers:', error);
      });
  }, []);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleOpenDialog = (manuscript: Manuscript) => {
    setSelectedManuscript(manuscript);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedManuscript(null);
    setSelectedReviewer('');
    setReviewDueDate('');
  };

  const handleAssignReviewer = () => {
    if (selectedManuscript && selectedReviewer && reviewDueDate) {
      axios.post('http://localhost:5000/api/v1/editor/assign-reviewer', {
        manuscriptId: selectedManuscript.id,
        reviewerId: selectedReviewer,
        reviewDueDate: reviewDueDate
      })
        .then(() => {
          console.log(`Reviewer ${selectedReviewer} assigned to manuscript ${selectedManuscript.id}`);
          handleCloseDialog();
        })
        .catch(error => {
          console.error('Error assigning reviewer:', error);
        });
    }
  };

  const handleReviewerChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedReviewer(event.target.value as string);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReviewDueDate(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleStatusChange = (event: SelectChangeEvent<unknown>) => {
    setFilterStatus(event.target.value as string);
  };

  const filteredManuscripts = manuscripts.filter(manuscript => {
    const matchesTitle = manuscript.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAuthor = manuscript.author?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === '' || manuscript.status === filterStatus;
    return (matchesTitle || matchesAuthor) && matchesStatus;
  });

  const paginatedManuscripts = filteredManuscripts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const pageCount = Math.ceil(filteredManuscripts.length / itemsPerPage);

  return (
    <Stack spacing={3}>
      <FilterContainer direction="row" spacing={2}>
        <TextField
          variant="outlined"
          placeholder="Search by title or author"
          size="small"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ flexGrow: 1 }}
        />
        <Select
          value={filterStatus}
          onChange={handleStatusChange}
          displayEmpty
          sx={{ minWidth: 150 }}
        >
          {filterOptions.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FilterContainer>

      {paginatedManuscripts.map((manuscript) => (
        <Card key={manuscript.id} variant="outlined">
          <CardContent>
            <Typography
              variant="h6"
              color="primary"
              sx={{ cursor: 'pointer', textAlign: 'justify' }}
              onClick={() => handleOpenDialog(manuscript)}
            >
              {manuscript.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph sx={{ textAlign: 'justify' }}>
              {manuscript.abstract}
            </Typography>
            <StatusText variant="caption" color="textSecondary">
              {manuscript.status === 'SUBMITTED' && <HourglassEmptyIcon color="warning" />}
              {manuscript.status === 'UNDER_REVIEW' && <CircularProgress size={20} color="info" />}
              {manuscript.status === 'ACCEPTED' && <CheckCircleIcon color="success" />}
              {manuscript.status === 'REJECTED' && <CancelIcon color="error" />}
              {manuscript.status === 'PUBLISHED' && <AddCircleIcon color="success" />}
              {manuscript.status}
            </StatusText>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => handleOpenDialog(manuscript)}
            >
              View Details
            </Button>
            {manuscript.status === 'SUBMITTED' && (
              <Button
                size="small"
                color="secondary"
                onClick={() => handleOpenDialog(manuscript)}
              >
                Assign Reviewer
              </Button>
            )}
          </CardActions>
        </Card>
      ))}
      <Pagination
        count={pageCount}
        page={page}
        onChange={handlePageChange}
        color="primary"
      />

      {/* Dialog for Manuscript Details */}
      <StyledDialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitleStyled>{selectedManuscript?.title}</DialogTitleStyled>
        <DialogContentStyled>
          <Typography variant="h6">Abstract</Typography>
          <Typography variant="body1" sx={{ textAlign: 'justify' }}>{selectedManuscript?.abstract}</Typography>
          <Typography variant="h6">Manuscript Link</Typography>
          <Typography variant="body1" sx={{ textAlign: 'justify' }}>
            <a href={selectedManuscript?.manuscriptLink} target="_blank" rel="noopener noreferrer">
              View Manuscript
            </a>
          </Typography>
          {selectedManuscript?.status === 'SUBMITTED' && (
            <>
              <Typography variant="h6">Assign Reviewer</Typography>
              <ReviewerSelect
                value={selectedReviewer}
                onChange={handleReviewerChange}
              >
                <MenuItem value="">Select Reviewer</MenuItem>
                {reviewers.map((reviewer) => (
                  <MenuItem key={reviewer.id} value={reviewer.id}>{reviewer.name}</MenuItem>
                ))}
              </ReviewerSelect>
              <TextField
                label="Review Due Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={reviewDueDate}
                onChange={handleDateChange}
                fullWidth
                margin="normal"
                sx={{ mt: 2 }}
              />
            </>
          )}
        </DialogContentStyled>
        <DialogActionsStyled>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
          {selectedManuscript?.status === 'SUBMITTED' && (
            <Button
              onClick={handleAssignReviewer}
              color="secondary"
              disabled={!selectedReviewer || !reviewDueDate}
            >
              Assign Reviewer
            </Button>
          )}
        </DialogActionsStyled>
      </StyledDialog>
    </Stack>
  );
};
