import { Box, Typography } from '@mui/material';
import React from 'react';
import ProductCard from './ProductCard';

const SellerList = () => {
  return (
    <div className="flex flex-row flex-wrap gap-8">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default SellerList;
