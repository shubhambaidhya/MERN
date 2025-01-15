import { getCartList } from '@/lib/routes/cart.routes';
import { useQuery } from '@tanstack/react-query';

const useCartList = () => {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ['cart-list'],
    queryFn: getCartList(),
  });

  return { res: data, isPending, error, isError };
};

export default useCartList;
