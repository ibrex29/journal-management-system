// src/dummyData.ts

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
      uploadFiles: 'http://example.com/uploads/revised-manuscript.pdf'
    },
    {
      reviewId: 'reply2',
      manuscriptId: 'manuscript1',
      subject: 'Re: Minor Revisions Required',
      contents: 'We have made the minor revisions as suggested.',
      uploadFiles: 'http://example.com/uploads/revised-manuscript-v2.pdf'
    },
    {
      reviewId: 'reply3',
      manuscriptId: 'manuscript2',
      subject: 'Re: Your Review Feedback',
      contents: 'Thank you for the feedback. The following changes were implemented...',
      uploadFiles: 'http://example.com/uploads/revised-manuscript-manuscript2.pdf'
    }
  ];
  