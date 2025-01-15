'use client';
import { Button, Typography } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/navigation';
const CartEmpty = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <Typography variant="h5">No product is added to cart. </Typography>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => {
          router.push('/');
        }}
      >
        Browse products
      </Button>
    </div>
  );
};

export default CartEmpty;
