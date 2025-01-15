import $axios from '@/lib/axios/axios.instance';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useCartList = () => {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ['cart-list'],
    queryFn: async () => {
      return await $axios.post('/cart/list', {
        page: 1,
        limit: 10,
      });
    },
  });

  return { res: data, isPending, error, isError };
};

export default useCartList;
