import React, { Component } from 'react';
import {
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';

import { fetchRepos, searchRepo } from '../actions';

import * as colors from '../utils/colors';

import Layout from '../components/Layout';
import SearchInput from '../components/SearchInput';
import ReposList from '../components/ReposList';

class App extends Component {
  componentDidMount() {
    this.props.fetchRepos(this.props.repoName);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.repoName !== nextProps.repoName) {
       this.props.fetchRepos(this.props.repoName);
    }
  }

  handleRepoSearch = (repoName) => {
    this.props.searchRepo(repoName);
  };

  render() {
    const { repos, isFetching } = this.props;

    return (
      <Layout>
        <SearchInput onChange={this.handleRepoSearch} />
        {
          isFetching
            ? <ActivityIndicator size='large' color={colors.WHITE} />
            : <ReposList repos={repos} />
        }
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
    repos: state.repos.items,
    isFetching: state.repos.isFetching,
    repoName: state.repoName
});

export default connect(
  mapStateToProps,
  { fetchRepos, searchRepo }
)(App);

App.propTypes = {
  repos: React.PropTypes.array,
  isFetching: React.PropTypes.bool
};