'use client';

import $axios from '@/lib/axios/axios.instance';
import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

const cartPage = () => {
  const { data, isPending } = useQuery({
    queryKey: ['cart-list'],
    queryFn: async () => {
      return await $axios.post('/cart/list', {
        page: 1,
        limit: 10,
      });
    },
  });

  if (isPending) {
    return <CircularProgress />;
  }

  return <div>CartPage</div>;
};

export default cartPage;
