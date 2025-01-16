'use client';
import $axios from '@/lib/axios/axios.instance';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Button,
  Checkbox,
  Chip,
  IconButton,
  LinearProgress,
  Typography,
} from '@mui/material';
import { Box, Stack } from '@mui/system';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useState } from 'react';

const CartItemCard = (props) => {
  const [count, setCount] = useState(props.orderedQuantity);

  const increaseCount = () => setCount((prevCount) => prevCount + 1);
  const decreaseCount = () =>
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  const cartItemId = props._id;
  const queryClient = useQueryClient();
  //delete single cart item
  const { isPending, mutate } = useMutation({
    mutationKey: ['delete-cart-item'],
    mutationFn: async () => {
      return await $axios.delete(`/cart/item/delete/${cartItemId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['cart-list']);
    },
  });

  return (
    <Box>
      {isPending && <LinearProgress />}
      <div className="flex flex-col md:flex-row shadow-lg shadow-purple-500   mx-auto w-[700px] my-4 p-6 rounded-lg bg-white">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={props?.productDetails?.image || '/iphone14.jpg'}
            alt={props?.productDetails?.name}
            width={350}
            height={350}
            style={{
              objectFit: 'contain',
              maxHeight: '100%',
              maxWidth: '100%',
            }}
          />
        </div>

        <div className="flex flex-col justify-center items-start gap-8 w-1/2 ml-8">
          <Typography
            variant="h4"
            fontWeight="bold"
            color="secondary"
            sx={{ textTransform: 'capitalize' }}
          >
            {props?.productDetails?.name}
          </Typography>
          <Chip
            label={props?.productDetails?.brand}
            color="secondary"
            sx={{ fontSize: '0.875rem', width: 100 }}
          />
          <Typography
            variant="body1"
            color="text.secondary"
            textTransform="capitalize"
          >
            Category: <strong>{props?.productDetails?.category}</strong>
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Price: <strong>${props?.productDetails?.price}</strong>
          </Typography>
          <Stack
            direction="row"
            justifyContent="start"
            alignItems="center"
            gap={2}
          >
            <Typography variant="body1" color="text.secondary">
              Free Shipping
            </Typography>
            <Checkbox
              color="success"
              checked={props?.productDetails?.freeShipping}
            />
          </Stack>
          <div className="flex justify-center items-center gap-4">
            <IconButton
              color="success"
              size="medium"
              onClick={increaseCount}
              aria-label="Increase quantity"
            >
              <AddIcon />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
              {count}
            </Typography>
            <IconButton
              color="error"
              size="medium"
              onClick={decreaseCount}
              aria-label="Decrease quantity"
              disabled={count === 1}
            >
              <RemoveIcon />
            </IconButton>
          </div>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              mutate();
            }}
          >
            Remove item
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default CartItemCard;
