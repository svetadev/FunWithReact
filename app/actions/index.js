import api from '../api';

export const SEARCH_REPO = 'SEARCH_REPO';
export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';
export const REQUEST_INFO = 'REQUEST_INFO';
export const RECEIVE_INFO = 'RECEIVE_INFO';

export const searchRepo = repoName => ({
  type: SEARCH_REPO,
  repoName
});

export const requestRepos = (repoName) => ({
  type: REQUEST_REPOS,
  repoName
});

export const receiveRepos = (repoName, data) => ({
  type: RECEIVE_REPOS,
  repoName,
  repos: data.items
});

export const requestInfo = (fullRepoName) => ({
  type: REQUEST_INFO,
  fullRepoName
});

export const receiveInfo = (fullRepoName, data) => ({
  type: RECEIVE_INFO,
  fullRepoName,
  pulls: data
});

export const fetchRepos = repoName => dispatch => {
  dispatch(requestRepos(repoName));

  return api.getSearchRepos(repoName)
    .then(data => dispatch(receiveRepos(repoName, data)));
};

export const fetchAdditionalInfo = fullRepoName => dispatch => {
  dispatch(requestInfo(fullRepoName));

  return api.getAdditionalInfo(fullRepoName)
    .then(data => dispatch(receiveInfo(fullRepoName, data)));
};