import React from 'react';
import styled from 'styled-components';
import Followers from './Followers';
import User from './User';

const Account = () => {
  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <User />
        <Followers />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Account;
