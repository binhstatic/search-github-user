import React, { useContext } from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import Card from './Card';

const Followers = () => {
  const { followers, searchGithubUser } = useContext(GithubContext);

  return (
    <Wrapper>
      <div className='followers'>
        {followers.map((follower, index) => {
          const { avatar_url: img, html_url, login } = follower;
          return (
            <article key={index}>
              <img src={img} alt={login} />
              <div>
                <h4
                  onClick={() => {
                    searchGithubUser(login);
                  }}
                >
                  {login}
                </h4>
                <a href={html_url}>{html_url}</a>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(Card)`
  &::before {
    content: 'followers';
  }

  .followers {
    overflow: scroll;
    height: 260px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 1.25rem 1rem;
    padding: 1rem 2rem;
  }

  article {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;

    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }

    h4 {
      margin-bottom: 0;
      cursor: pointer;
    }

    a {
      color: var(--clr-grey-5);
    }
  }
`;

export default Followers;
