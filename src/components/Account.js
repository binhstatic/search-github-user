import React from 'react';
import styled from 'styled-components';
import Followers from './Followers';
import User from './User';

const Account = () => {
  return (
    <Wrapper>
      <User />
      <Followers />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Account;
