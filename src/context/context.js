import React, { useEffect, useState } from 'react';

import mockUser from './mockDatas/mockUser';
import mockFollowers from './mockDatas/mockFollowers';
import mockRepos from './mockDatas/mockRepos';

const ROOT_URL = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubPovider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [followers, setFollowers] = useState(mockFollowers);
  const [repos, setRepos] = useState(mockRepos);

  return (
    <GithubContext.Provider value={{ githubUser, followers, repos }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubPovider, GithubContext };
