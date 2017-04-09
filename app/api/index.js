import axios from 'axios';

const API_URL = 'https://api.github.com';
const API_TOKEN = 'fdd83349eaddc6a102419f86dca3743fd1a542d7';

export function getSearchRepos(repo)  {
  const params = {
    q: !repo ? 'created' : repo,
    access_token: API_TOKEN,
    sort: 'stars',
    order: 'desc'
  };

  return axios.get(`${API_URL}/search/repositories`, { params })
    .then(response => response.data);
}

export function getAdditionalInfo(fullRepoName)  {
  return axios.get(`${API_URL}/repos/${fullRepoName}/pulls?state=all`)
    .then(response => response.data);
}

export default {
  getSearchRepos,
  getAdditionalInfo
};