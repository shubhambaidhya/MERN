'use client';
import CartItemCard from '@/components/CardItemCard';
import CartEmpty from '@/components/EmptyCart';
import { getCartList } from '@/lib/routes/cart.routes';
import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const CartPage = () => {
  const { data, isPending } = useQuery({
    queryKey: ['cart-list'],
    queryFn: () => getCartList(),
  });

  const cartData = data?.data?.cartData;
  if (isPending) {
    return <CircularProgress />;
  }

  if (cartData.length < 1) {
    return <CartEmpty />;
  }
  return (
    <div className=" flex justify-center items-center flex-wrap gap-4 mt-10">
      {cartData.map((item) => {
        return <CartItemCard key={item._id} {...item} />;
      })}
    </div>
  );
};

export default CartPage;
