'use client';
import $axios from '@/lib/axios/axios.instance';
import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';

const SellerList = () => {
  const { isPending, data, error } = useQuery({
    queryKey: ['seller-product-list'],
    queryFn: async () => {
      return await $axios.post('/product/seller/list', {
        page: 1,
        limit: 9,
        searchText: '',
      });
    },
  });
  console.log(data);

  const productList = data?.data?.productList || [];

  if (isPending) {
    return <CircularProgress />;
  }

  return (
    <>
      <div className="card-center">
        {productList.length ? (
          productList?.map((item) => {
            return <ProductCard key={item._id} {...item} />;
          })
        ) : (
          <p className="text-3xl bold text-red-500">No products</p>
        )}
      </div>
    </>
  );
};

export default SellerList;
