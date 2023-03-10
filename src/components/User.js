import React, { useContext } from 'react';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import { FiTwitter } from 'react-icons/fi';
import Card from './Card';
import { GithubContext } from '../context/context';

const User = () => {
  const { githubUser } = useContext(GithubContext);

  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
    login,
  } = githubUser;

  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          {twitter_username ? (
            <p>
              <FiTwitter /> {twitter_username}
            </p>
          ) : (
            <p>{login}</p>
          )}
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p className='bio'>{bio}</p>
      <div className='links'>
        {company && (
          <p>
            <MdBusiness /> {company}
          </p>
        )}
        <p>
          <MdLocationOn />
          {location || 'earth'}
        </p>
        {blog && (
          <a href={`https://${blog}`}>
            <MdLink />
            {blog}
          </a>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(Card)`
  padding: 1.5rem 2rem;

  &::before {
    content: 'user';
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
