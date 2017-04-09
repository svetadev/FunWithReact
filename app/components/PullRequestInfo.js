import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import * as colors from '../utils/colors';

const style = StyleSheet.create({
  item: {
    flex: 1,
    padding: 12,
    marginBottom: 2,
    backgroundColor: colors.LIGHT_OPACITY
  },
  text: {
    color: colors.WHITE,
    textShadowColor: colors.BLACK,
    textShadowRadius: 2,
    fontSize: 14,
    lineHeight: 20
  },
  title: {
    color: colors.GREEN,
    fontStyle: 'italic'
  }
});

export default class PullRequestInfo extends Component {
  render() {
    const { title, author, number, status } = this.props;

    return (
        <View
          style={style.item}>
          <Text style={style.text}>
            <Text style={style.title}>Number:</Text> {number}{'\n'}
            <Text style={style.title}>Author:</Text> {author}{'\n'}
            <Text style={style.title}>Title:</Text> {title}{'\n'}
            <Text style={style.title}>Status:</Text> {status}
          </Text>
        </View>
    );
  }
}

PullRequestInfo.propTypes = {
  title: React.PropTypes.string,
  author: React.PropTypes.string,
  number: React.PropTypes.number,
  status: React.PropTypes.string
};