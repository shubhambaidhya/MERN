'use client';
import $axios from '@/lib/axios/axios.instance';
import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React from 'react';

const EditProductPage = () => {
  const params = useParams();
  const productId = params?.id;
  const { data, isPending } = useQuery({
    queryKey: ['get-product-details'],
    queryFn: async () => {
      return await $axios.get(`/product/detail/${productId}`);
    },
  });
  const productDetail = data?.data?.productDetail;
  console.log(productDetail);
  if (isPending) {
    <CircularProgress />;
  }
  return <div>Edit Product</div>;
};

export default EditProductPage;
