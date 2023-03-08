import React from 'react';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import Card from './Card';

const fakeUser = {
  avatar_url:
    'https://lh3.googleusercontent.com/a/AGNmyxYJW9acTgudRYPATC1t-0169xIY8-HZX0W77iui0g=s96-c',
  html_url: 'https://github.com/binhstatic',
  name: 'Văn Bình',
  company: 'Manabie',
  blog: 'binh.com',
  bio: 'Xin chao',
  location: 'Hồ Chí Minh, Việt Nam',
  twitter_username: 'binhstatic',
};

const User = () => {
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = fakeUser;

  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username || 'john doe'}</p>
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p className='bio'>{bio}</p>
      <div className='links'>
        <p>
          <MdBusiness /> {company}
        </p>
        <p>
          <MdLocationOn />
          {location || 'earth'}
        </p>
        <a href={`https://${blog}`}>
          <MdLink />
          {blog}
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(Card)`
  &::before {
    content: ' user';
  }

  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;

    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }

    h4 {
      margin-bottom: 0.25rem;
    }

    p {
      margin-bottom: 0;
    }

    a {
      color: var(--clr-primary-5);
      border: 1px solid var(--clr-primary-5);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;

      &:hover {
        background: var(--clr-primary-5);
        color: var(--clr-white);
      }
    }
  }

  .bio {
    color: var(--clr-grey-3);
  }

  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }

    a {
      color: var(--clr-primary-5);
      transition: var(--transition);

      svg {
        color: var(--clr-grey-5);
      }

      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`;

export default User;
