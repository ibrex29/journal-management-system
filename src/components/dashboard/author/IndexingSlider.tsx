import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define the logo images with paths relative to the public directory
const logos = [
  '/indexing/google-sc.png',
  '/indexing/crossref.png',
  '/indexing/researchgate.png',
  '/indexing/academia.png',
  '/indexing/SLU.webp',
];

export default function IndexingSlider(): React.JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <Box sx={{ mt: 4, px: 2 }}>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 1,
              m: 1,
              borderRadius: 2,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              backgroundColor: '#fff',
            }}
          >
            <img
              src={logo}
              alt={`Logo ${index}`}
              style={{
                maxHeight: '80px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
