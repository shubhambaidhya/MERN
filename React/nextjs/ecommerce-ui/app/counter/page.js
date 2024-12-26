'use client';
import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
const Counter = () => {
  const [count, setCount] = useState(100);
  const [wishUser, setWishUser] = useState(false);
  useEffect(() => {
    if (count === 110) {
      setWishUser(true);
    }
  }, [count]);
  return (
    <div>
      <Typography variant="h3">{count}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          let newCount = count + 1;
          setCount(newCount);
        }}
      >
        add
      </Button>
      {wishUser && <p className="text-5xl">Merry Christmas</p>}
    </div>
  );
};

export default Counter;
