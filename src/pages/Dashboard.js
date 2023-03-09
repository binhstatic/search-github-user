import React, { useContext } from 'react';
import Account from '../components/Account';
import Info from '../components/Info';
import Navbar from '../components/Navbar';
import Repos from '../components/Repos';
import Search from '../components/Search';
import { GithubContext } from '../context/context';
import loadingImage from '../images/preloader.gif';

const Dashboard = () => {
  const { isLoading } = useContext(GithubContext);

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} className='loading-img' alt='loading' />
      </main>
    );
  }

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
