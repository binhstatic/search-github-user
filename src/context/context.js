import React, { useEffect, useState } from 'react';

import mockUser from './mockDatas/mockUser';
import mockFollowers from './mockDatas/mockFollowers';
import mockRepos from './mockDatas/mockRepos';
import axios from 'axios';

const ROOT_URL = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubPovider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [followers, setFollowers] = useState(mockFollowers);
  const [repos, setRepos] = useState(mockRepos);
  // request loading
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // error
  const [error, setError] = useState({ show: false, msg: '' });

  const searchGithubUser = async (user) => {
    setError({ show: false, msg: '' });
    setIsLoading(true);
    const response = await axios(`${ROOT_URL}/users/${user}`).catch((error) =>
      console.log(error)
    );
    if (response) {
      setGithubUser(response.data);
      const { login, followers_url } = response.data;

      await Promise.allSettled([
        axios(`${ROOT_URL}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ])
        .then((results) => {
          const [repos, followers] = results;
          const status = 'fulfilled';
          if (repos.status === status) {
            setRepos(repos.value.data);
          }
          if (followers.status === status) {
            setFollowers(followers.value.data);
          }
        })
        .catch((err) => console.log(err));
    } else {
      setError({ show: true, msg: 'there is no user with this username' });
    }
    checkRequests();
    setIsLoading(false);
  };

  useEffect(() => {
    searchGithubUser('binhstatic');
  }, []);

  const checkRequests = () => {
    axios(`${ROOT_URL}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          setError({
            show: true,
            msg: 'sorry, you have exceeded your hourly rate limit!',
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        followers,
        repos,
        isLoading,
        error,
        requests,
        searchGithubUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubPovider, GithubContext };
