'use client';
import $axios from '@/lib/axios/axios.instance';
import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const CartPage = () => {
  const { data, isPending } = useQuery({
    queryKey: ['get-product-details'],
    queryFn: async () => {
      return await $axios.get('/cart/list');
    },
  });
  return <Box>Add to Cart</Box>;
};

export default CartPage;
