import { combineReducers } from 'redux';

import {
  SEARCH_REPO,
  REQUEST_REPOS,
  RECEIVE_REPOS,
  REQUEST_INFO,
  RECEIVE_INFO
} from '../actions';

const repoName = ( state = '', action ) => {
  switch (action.type) {
    case SEARCH_REPO:
      return action.repoName;

    default:
      return state;
  }
};

const repos = ( state = { isFetching: false, items: [] }, action) => {
  switch (action.type) {
    case REQUEST_REPOS:
      return {
        ...state,
        isFetching: true,
      };

    case RECEIVE_REPOS:
      return {
        ...state,
        isFetching: false,
        items: action.repos
      };

    default:
      return state;
  }
};

const info = ( state = { isFetching: false, items: [] }, action) => {
  switch (action.type) {
    case REQUEST_INFO:
      return {
        ...state,
        isFetching: true,
      };

    case RECEIVE_INFO:
      return {
        ...state,
        isFetching: false,
        items: action.pulls
      };

    default:
      return state;
  }
};

export default combineReducers({ repos, repoName, info });