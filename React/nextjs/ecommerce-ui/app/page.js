'use client';
import BuyerList from '@/components/BuyerList';
import SellerList from '@/components/SellerList';
import { red } from '@mui/material/colors';

const Home = () => {
  const userRole = localStorage.getItem('userRole');
  return (
    <div>
      <p className="text-5xl bold">
        Welcome {localStorage.getItem('firstName')}
      </p>

      {userRole === 'buyer' ? <BuyerList /> : <SellerList />}
    </div>
  );
};

export default Home;
