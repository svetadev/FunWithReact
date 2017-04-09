import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import * as colors from '../utils/colors';

const style = StyleSheet.create({
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: -6,
  },
});

export default class IconButton extends Component {
  render() {
    const { name, color = colors.WHITE, underlayColor = colors.LIGHT_OPACITY, onPress } = this.props;

    return (
      <TouchableHighlight
        underlayColor={underlayColor}
        style={style.iconButton}
        onPress={onPress}>
        <Icon name={name} color={color} size={24} style={{alignSelf: 'center'}} />
      </TouchableHighlight>
    );
  }
}

IconButton.propTypes = {
  name: React.PropTypes.string,
  color: React.PropTypes.string,
  underlayColor: React.PropTypes.string,
  onPress: React.PropTypes.func
};