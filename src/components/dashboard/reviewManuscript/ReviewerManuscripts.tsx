// 'use client';

// import React, { useState } from 'react';
// import { Card, CardContent, CardActions, Button, Typography, Stack } from '@mui/material';
// import { ReviewDialog } from './ReviewDialog';  // Make sure this is implemented
// import { ReviewRepliesDialog } from './ReviewRepliesDialog';  // Make sure this is implemented
// import { dummyManuscripts } from './dummyData';  // Ensure this data matches the structure

// interface Manuscript {
//   id: string;
//   title: string;
//   abstract: string;
// }

// export const ReviewerManuscripts: React.FC = () => {
//   const [manuscripts] = useState<Manuscript[]>(dummyManuscripts);
//   const [selectedManuscript, setSelectedManuscript] = useState<Manuscript | null>(null);
//   const [openReviewDialog, setOpenReviewDialog] = useState(false);
//   const [openRepliesDialog, setOpenRepliesDialog] = useState(false);

//   const handleOpenReviewDialog = (manuscript: Manuscript) => {
//     setSelectedManuscript(manuscript);
//     setOpenReviewDialog(true);
//   };

//   const handleCloseReviewDialog = () => {
//     setOpenReviewDialog(false);
//     setSelectedManuscript(null);
//   };

//   const handleOpenRepliesDialog = (manuscript: Manuscript) => {
//     setSelectedManuscript(manuscript);
//     setOpenRepliesDialog(true);
//   };

//   const handleCloseRepliesDialog = () => {
//     setOpenRepliesDialog(false);
//     setSelectedManuscript(null);
//   };

//   return (
//     <Stack spacing={3} sx={{ p: 3 }}>
//       <Typography variant="h4" color="primary">
//         Assigned Manuscripts
//       </Typography>
//       {manuscripts.map(manuscript => (
//         <Card key={manuscript.id} variant="outlined" sx={{ mb: 2 }}>
//           <CardContent>
//             <Typography
//               variant="h6"
//               color="primary"
//               sx={{ cursor: 'pointer', mb: 1 }}
//               onClick={() => handleOpenReviewDialog(manuscript)}
//             >
//               {manuscript.title}
//             </Typography>
//             <Typography variant="body2" color="textSecondary" paragraph>
//               {manuscript.abstract}
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button
//               size="small"
//               color="primary"
//               onClick={() => handleOpenReviewDialog(manuscript)}
//             >
//               Review
//             </Button>
//             <Button
//               size="small"
//               color="secondary"
//               onClick={() => handleOpenRepliesDialog(manuscript)}
//             >
//               View Replies
//             </Button>
//           </CardActions>
//         </Card>
//       ))}
//       {selectedManuscript && (
//         <>
//           <ReviewDialog
//             open={openReviewDialog}
//             manuscript={selectedManuscript}
//             onClose={handleCloseReviewDialog}
//           />
//           <ReviewRepliesDialog
//             open={openRepliesDialog}
//             manuscriptId={selectedManuscript.id}
//             onClose={handleCloseRepliesDialog}
//           />
//         </>
//       )}
//     </Stack>
//   );
// };
