import React from 'react';
import Account from '../components/Account';
import Info from '../components/Info';
import Navbar from '../components/Navbar';
import Repos from '../components/Repos';
import Search from '../components/Search';

const Dashboard = () => {
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <Account />
      <Repos />
    </main>
  );
};

export default Dashboard;
