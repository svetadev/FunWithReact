import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import * as constants from '../utils/constants';
import * as colors from '../utils/colors';

const style = StyleSheet.create({
  item: {
    width: constants.ITEM_SQUARE,
    height: constants.ITEM_SQUARE
  },
  image: {
    width: constants.ITEM_SQUARE,
    height: constants.ITEM_SQUARE,
    opacity: 0.24
  },
  info: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    padding: 12,
    justifyContent: 'space-between',
    backgroundColor: colors.DARK_OPACITY
  },
  infoHeader: {
    fontSize: 16,
    lineHeight: 20,
  },
  text: {
    color: colors.WHITE,
    textShadowColor: colors.BLACK,
    textShadowRadius: 2,
    fontSize: 14,
    lineHeight: 20
  },
  titleHeader: {
    color: colors.VIOLET,
    fontWeight: '600',
  },
  title: {
    color: colors.GREEN,
    fontStyle: 'italic',
  }
});

export default class Repo extends Component {
  render() {
    const { name, stars, watchers, issues, avatar } = this.props;

    return (
      <TouchableHighlight
        onPress={() => Actions.info({name})}
        underlayColor={colors.LIGHT_OPACITY}>
        <View style={style.item}>
          <Image
            resizeMode="cover"
            blurRadius={5}
            style={style.image}
            source={{uri: avatar}}>
          </Image>
          <View style={style.info}>
            <Text style={[style.text, style.infoHeader]}>
              <Text style={[style.title, style.titleHeader]}>Repository:</Text>{'\n'}{name}
            </Text>
            <Text style={style.text}>
              <Text style={style.title}>Stars:</Text> {stars}{'\n'}
              <Text style={style.title}>Watchers:</Text> {watchers}{'\n'}
              <Text style={style.title}>Open issues:</Text> {issues}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

Repo.propTypes = {
  name: React.PropTypes.string,
  stars: React.PropTypes.number,
  watchers: React.PropTypes.number,
  issues: React.PropTypes.number,
  avatar: React.PropTypes.string
};