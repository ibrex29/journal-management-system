import React, { useState } from 'react';
import { Paper, List, ListItem, ListItemText, Divider, Pagination, Typography } from '@mui/material';

interface Review {
  reviewId: string;
  manuscriptId: string;
  comments: string;
  recommendation: string;
  timestamp: string;
}

interface ListReviewsProps {
  reviews: Review[];
  onSelectReview: (review: Review) => void;
}

const itemsPerPage = 3;

export const ListReviews: React.FC<ListReviewsProps> = ({ reviews, onSelectReview }) => {
  const [page, setPage] = useState(1);

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Calculate the reviews to display for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedReviews = reviews.slice(startIndex, endIndex);

  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, border: '1px solid #ddd' }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Reviews
      </Typography>
      <List>
        {paginatedReviews.length > 0 ? (
          paginatedReviews.map(review => (
            <React.Fragment key={review.reviewId}>
              <ListItem button onClick={() => onSelectReview(review)}>
                <ListItemText
                  primary={review.comments}
                  secondary={`Recommendation: ${review.recommendation}`}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))
        ) : (
          <Typography variant="body2" sx={{ padding: 2 }}>
            No reviews available.
          </Typography>
        )}
      </List>
      <Pagination
        count={Math.ceil(reviews.length / itemsPerPage)}
        page={page}
        onChange={handleChangePage}
        sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}
      />
    </Paper>
  );
};
