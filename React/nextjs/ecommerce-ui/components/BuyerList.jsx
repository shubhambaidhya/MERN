'use client';
import $axios from '@/lib/axios/axios.instance';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import { CircularProgress, Pagination } from '@mui/material';
import ProductCard from './ProductCard';
import { isBuyer } from '@/utils/check.role';

const BuyerList = () => {
  const [page, setPage] = useState(1);
  const { data, isPending, error } = useQuery({
    queryKey: ['buyer-product-list', page],
    queryFn: async () => {
      return await $axios.post('/product/buyer/list', {
        page: page,
        limit: 3,
      });
    },

    onError: (error) => {
      console.log(error);
    },
    enabled: isBuyer(),
  });

  const productList = data?.data?.productList || [];

  if (isPending) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <div className="flex justify-center items-center gap-8 flex-wrap">
        {productList?.length ? (
          productList?.map((item) => {
            return <ProductCard key={item._id} {...item} />;
          })
        ) : (
          <p className="text-3xl bold text-red-500">No products</p>
        )}
      </div>
      <div className="card-center">
        <Pagination
          page={page}
          count={6}
          color="secondary"
          className="my-12"
          size="large"
          onChange={(_, value) => {
            setPage(value);
          }}
        />
      </div>
    </>
  );
};

export default BuyerList;
