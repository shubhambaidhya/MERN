'use client';
import $axios from '@/lib/axios/axios.instance';
import { CircularProgress, Pagination } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';

const SellerList = () => {
  const [role, setRole] = useState('');
  useEffect(() => {
    setRole(window.localStorage.getItem('userRole'));
  });
  const [page, setPage] = useState(1);
  const { isPending, data, error } = useQuery({
    queryKey: ['seller-product-list', page],
    queryFn: async () => {
      return await $axios.post('/product/seller/list', {
        page: page,
        limit: 2,
        // searchText: '',
      });
    },
    enabled: role === 'seller',
  });
  console.log(data);

  const productList = data?.data?.productList || [];

  console.log(productList);

  if (isPending) {
    return <CircularProgress />;
  }

  return (
    <>
      <div className="card-center">
        {productList?.length ? (
          productList?.map((item) => {
            return <ProductCard key={item._id} {...item} />;
          })
        ) : (
          <p className="text-3xl bold text-red-500">No products</p>
        )}
      </div>
      <Pagination
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        page={page}
        count={5}
        color="secondary"
        className="my-12"
        size="large"
        onChange={(_, value) => {
          setPage(value);
        }}
      />
    </>
  );
};

export default SellerList;
