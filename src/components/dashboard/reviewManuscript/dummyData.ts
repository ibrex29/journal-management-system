
const yesterdayTimestamp = '2024-07-19T08:00:00Z';

export const dummyManuscripts = [
    {
      id: 'manuscript1',
      title: 'Exploring the Universe',
      abstract: 'A comprehensive study on the latest findings in astrophysics.'
    },
    {
      id: 'manuscript2',
      title: 'Advancements in Quantum Computing',
      abstract: 'An in-depth analysis of recent advancements in quantum computing technology.'
    }
  ];
  
  export const dummyReviews = [
    {
      reviewId: 'reply1',
      manuscriptId: 'manuscript1',
      subject: 'Re: Your Review Comments',
      contents: 'Thank you for your comments. Here are the revisions made...',
      uploadFiles: 'https://slujst.com.ng/wp-content/uploads/2023/10/SPJST151_pp-46_56.pdf',
      timestamp: '2024-07-19T10:00:00Z'
    },
    {
      reviewId: 'reply2',
      manuscriptId: 'manuscript1',
      subject: 'Re: Minor Revisions Required',
      contents: 'We have made the minor revisions as suggested.',
      uploadFiles: 'https://slujst.com.ng/wp-content/uploads/2023/10/SPJST151_pp-46_56.pdf',
      timestamp: '2024-07-20T15:00:00Z'
    },
    {
      reviewId: 'reply3',
      manuscriptId: 'manuscript2',
      subject: 'Re: Your Review Feedback',
      contents: 'Thank you for the feedback. The following changes were implemented...',
      uploadFiles: 'https://slujst.com.ng/wp-content/uploads/2023/10/SPJST151_pp-46_56.pdf',
      timestamp: '2024-07-21T09:00:00Z'
    },
    // New dummy review
    {
      reviewId: 'review3',
      manuscriptId: 'manuscript1',
      subject: 'Initial Review Feedback',
      contents: 'The manuscript is well-written but needs more details in the methodology section.',
      uploadFiles: '',
      timestamp: '2024-07-18T08:00:00Z'
    },
    // New dummy reply

    {
        reviewId: 'review3',
        manuscriptId: 'manuscript1',
        subject: 'Review Feedback',
        contents: 'The manuscript is well-not well but needs more details in the methodology section.',
        uploadFiles: '',
        timestamp: yesterdayTimestamp // Updated timestamp
      },
    {
      reviewId: 'reply4',
      manuscriptId: 'manuscript1',
      subject: 'Re: Initial Review Feedback',
      contents: 'The methodology section has been expanded with more details. Please review the updated version.',
      uploadFiles: 'https://slujst.com.ng/wp-content/uploads/2023/10/SPJST151_pp-46_56.pdf',
      timestamp: '2024-07-18T08:10:00Z'
    }
  ];
  