import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';

import Repo from './Repo';

const style = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 12
  },
  list: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default class ReposList extends Component {
  renderItem = ({ item }) => (
    <Repo
      name={item.full_name}
      stars={item.stargazers_count}
      watchers={item.watchers}
      issues={item.open_issues}
      avatar={item.owner.avatar_url} />
  );

  render() {
    const { repos } = this.props;

    return (
      <FlatList
        contentContainerStyle={style.list}
        style={style.root}
        data={repos}
        renderItem={this.renderItem}
        keyExtractor={item => item.id} />
    );
  }
}

ReposList.propTypes = {
  repos: React.PropTypes.array
};