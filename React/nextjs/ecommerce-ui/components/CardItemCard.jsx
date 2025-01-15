'use client';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, Checkbox, Chip, IconButton, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Image from 'next/image';
import { useState } from 'react';

const CartItemCard = (props) => {
  const [count, setCount] = useState(props.orderedQuantity);

  const increaseCount = () => setCount((prevCount) => prevCount + 1);
  const decreaseCount = () =>
    setCount((prevCount) => Math.max(prevCount - 1, 1));

  return (
    <div className="flex shadow-lg  w-[800px] justify-between gap-12 p-4 items-center">
      <div className="w-1/2">
        <Image
          src={props?.productDetails?.image || '/iphone14.jpg'}
          alt={props?.productDetails?.name}
          width={350}
          height={350}
          style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }}
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
        <Button variant="contained" color="error">
          Remove item
        </Button>
      </div>
    </div>
  );
};

export default CartItemCard;
