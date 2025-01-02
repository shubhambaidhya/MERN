'use client';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const ProductCard = (props) => {
  return (
    <Box
      sx={{
        width: '400px',

        boxShadow:
          ' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
      }}
    >
      <Image
        src={
          props.image || '/book-composition-with-open-book_23-2147690555.avif'
        }
        height={400}
        width={400}
        alt="Book image"
      />
      <Box
        sx={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">{props.name}</Typography>
          <Chip label={props.brand} color="success" variant="outlined" />
          <Typography variant="h5">{props.price}</Typography>
        </Stack>

        <Typography sx={{ textAlign: 'justify' }}>
          {props.description}
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Button
            color="error"
            variant="contained"
            startIcon={<DeleteOutlineOutlinedIcon />}
          >
            Delete
          </Button>
          <Button
            color="success"
            variant="contained"
            startIcon={<VisibilityOutlinedIcon />}
          >
            View More
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
