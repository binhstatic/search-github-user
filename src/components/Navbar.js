import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <img
        src='https://lh3.googleusercontent.com/a/AGNmyxYJW9acTgudRYPATC1t-0169xIY8-HZX0W77iui0g=s96-c'
        alt='logo'
      />
      <h4>
        welcome, <strong>văn bình</strong>
      </h4>
      <button>logout</button>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  padding: 1.5rem;
  background: var(--clr-white);
  margin-bottom: 4rem;

  h4 {
    font-weight: 400;
    margin-bottom: 0;
  }

  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }

  button {
    background: transparent;
    border: transparent;
    cursor: pointer;
    font-size: 1.2rem;
    color: var(--clr-grey-5);
    letter-spacing: var(--spacing);
    text-transform: capitalize;
  }
`;

export default Navbar;
