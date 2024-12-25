'use client';
import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(100);
  useEffect(() => {
    if (count === 110) {
      console.log('Merry Christmas');
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
    </div>
  );
};

export default Counter;
