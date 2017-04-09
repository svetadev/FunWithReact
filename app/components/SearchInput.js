import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';

import * as colors from '../utils/colors';

const style = StyleSheet.create({
  root: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: colors.WHITE,
    margin: 12
  },
  input: {
    textAlign: 'center',
    flex: 1,
    color: colors.WHITE
  }
});

export default class SearchInput extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <View style={style.root}>
        <TextInput
          style={style.input}
          placeholder="Type here to search!"
          placeholderTextColor={colors.LIGHTGREY}
          onChangeText={onChange}
          value={value}
        />
      </View>
    );
  }
}

SearchInput.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
};