'use client';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useMutation } from '@tanstack/react-query';
import $axios from '@/lib/axios/axios.instance';
import DeleteProductDialogue from './DeleteProductDialogue';
import { isSeller } from '@/utils/check.role';
import { useRouter } from 'next/navigation';

const ProductCard = (props) => {
  const router = useRouter();
  const productId = props._id;
  return (
    <Box
      sx={{
        width: '400px',

        boxShadow:
          ' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
      }}
    >
      <img
        src="data:image/jpeg;base64,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"
        alt="Phone image"
        height={400}
        width={400}
      />
      {/* <Image
        src={
          props.image || '/book-composition-with-open-book_23-2147690555.avif'
        }
        height={400}
        width={400}
        alt="Book image"
      /> */}
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
          {isSeller() && <DeleteProductDialogue productId={productId} />}

          <Button
            color="success"
            variant="contained"
            startIcon={<VisibilityOutlinedIcon />}
            onClick={() => {
              router.push(`/product/details/${productId}`);
            }}
          >
            View More
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
