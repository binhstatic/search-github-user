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
  const [request, setRequest] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const searchGithubUser = async (user) => {
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
    }
    setIsLoading(false);
  };

  useEffect(() => {
    searchGithubUser('binhstatic');
  }, []);

  return (
    <GithubContext.Provider
      value={{ githubUser, followers, repos, searchGithubUser }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubPovider, GithubContext };
