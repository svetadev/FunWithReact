import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View
} from 'react-native';

import * as constants from '../utils/constants';
import * as colors from '../utils/colors';

const style = StyleSheet.create({
  layout: {
    flex: 1,
    paddingTop: constants.NAV_BAR,
    backgroundColor: colors.DARK_BLUE
  },
});

export default class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <View style={style.layout}>
        <StatusBar barStyle='light-content' />
        {children}
      </View>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.node
};