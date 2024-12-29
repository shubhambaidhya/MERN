'use client';
import BuyerList from '@/components/BuyerList';
import SellerList from '@/components/SellerList';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [userRole, setUserRole] = useState(null);
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    setUserRole(window.localStorage.getItem('userRole'));
    setFirstName(window.localStorage.getItem('firstName'));
  }, []);
  const router = useRouter();
  return (
    <div>
      <p className="text-5xl bold underline">Welcome {firstName}</p>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          router.push('/add-product');
        }}
      >
        Add Product
      </Button>

      {userRole === 'buyer' ? <BuyerList /> : <SellerList />}
    </div>
  );
};

export default Home;
