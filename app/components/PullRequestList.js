import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';

import PullRequestInfo from './PullRequestInfo';

const style = StyleSheet.create({
  root: {
    flex: 1
  }
});

export default class PullRequestList extends Component {
  renderItem = ({ item }) => (
    <PullRequestInfo
      title={item.title}
      author={item.user.login}
      status={item.state}
      number={item.number} />
  );

  render() {
    const { pulls } = this.props;

    return (
      <FlatList
        style={style.root}
        data={pulls}
        keyExtractor={item => item.id}
        renderItem={this.renderItem} />
    );
  }
}

PullRequestList.propTypes = {
  pulls: React.PropTypes.array
};