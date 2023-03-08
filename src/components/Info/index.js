import React from 'react';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import Item from './Item';

const FakeItems = [
  {
    id: 1,
    icon: <GoRepo className='icon' />,
    label: 'repos',
    value: 244,
    color: 'pink',
  },
  {
    id: 2,
    icon: <FiUsers className='icon' />,
    label: 'followers',
    value: 123,
    color: 'green',
  },
  {
    id: 3,
    icon: <FiUserPlus className='icon' />,
    label: 'following',
    value: 1,
    color: 'purple',
  },
  {
    id: 4,
    icon: <GoGist className='icon' />,
    label: 'gists',
    value: 0,
    color: 'yellow',
  },
];

const Info = () => {
  return (
    <section className='section'>
      <Wrapper className='section-center'>
        {FakeItems.map((item) => (
          <Item {...item} />
        ))}
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
`;

export default Info;
