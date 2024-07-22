// import React, { useState } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   TextField,
//   Select,
//   MenuItem,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import axios from 'axios';

// const StyledDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialog-paper': {
//     padding: theme.spacing(3),
//     width: '80%',
//     maxWidth: '800px',
//     borderRadius: theme.shape.borderRadius,
//     boxShadow: theme.shadows[5],
//   },
// }));

// const DialogTitleStyled = styled(DialogTitle)(({ theme }) => ({
//   padding: theme.spacing(2),
//   backgroundColor: theme.palette.secondary.main,
//   color: theme.palette.secondary.contrastText,
//   borderBottom: `1px solid ${theme.palette.divider}`,
// }));

// const DialogContentStyled = styled(DialogContent)(({ theme }) => ({
//   padding: theme.spacing(2),
// }));

// const DialogActionsStyled = styled(DialogActions)(({ theme }) => ({
//   padding: theme.spacing(2),
//   justifyContent: 'space-between',
// }));

// interface Manuscript {
//   id: string;
//   title: string;
//   abstract: string;
// }

// interface ReviewDialogProps {
//   open: boolean;
//   manuscript: Manuscript;
//   onClose: () => void;
// }

// const reviewOptions = [
//   { value: 'ACCEPT', label: 'Accept' },
//   { value: 'MINOR_REVISIONS', label: 'Minor Revisions' },
//   { value: 'MAJOR_REVISIONS', label: 'Major Revisions' },
//   { value: 'REJECT', label: 'Reject' },
// ];

// export const ReviewDialog: React.FC<ReviewDialogProps> = ({ open, manuscript, onClose }) => {
//   const [comments, setComments] = useState<string>('');
//   const [recommendation, setRecommendation] = useState<string>('');

//   const handleSubmitReview = () => {
//     axios.post('http://localhost:5000/api/v1/reviewer/create-review', {
//       manuscriptId: manuscript.id,
//       comments,
//       recommendation
//     })
//       .then(() => {
//         console.log(`Review submitted for manuscript ${manuscript.id}`);
//         onClose();
//       })
//       .catch(error => {
//         console.error('Error submitting review:', error);
//       });
//   };

//   const handleCommentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setComments(event.target.value);
//   };

//   const handleRecommendationChange = (event: React.ChangeEvent<{ value: unknown }>) => {
//     setRecommendation(event.target.value as string);
//   };

//   return (
//     <StyledDialog open={open} onClose={onClose}>
//       <DialogTitleStyled>{manuscript.title}</DialogTitleStyled>
//       <DialogContentStyled>
//         <TextField
//           label="Comments"
//           multiline
//           rows={4}
//           value={comments}
//           onChange={handleCommentsChange}
//           fullWidth
//           margin="normal"
//         />
//         <Select
//           value={recommendation}
//           onChange={handleRecommendationChange}
//           displayEmpty
//           fullWidth
//           margin="normal"
//         >
//           <MenuItem value="" disabled>
//             Select Recommendation
//           </MenuItem>
//           {reviewOptions.map(option => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </Select>
//       </DialogContentStyled>
//       <DialogActionsStyled>
//         <Button onClick={onClose} color="primary">
//           Cancel
//         </Button>
//         <Button
//           onClick={handleSubmitReview}
//           color="secondary"
//           disabled={!comments || !recommendation}
//         >
//           Submit Review
//         </Button>
//       </DialogActionsStyled>
//     </StyledDialog>
//   );
// };
