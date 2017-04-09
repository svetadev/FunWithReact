import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';

import store from '../store';

import * as colors from '../utils/colors';

import App from './App';
import Info from './Info';
import IconButton from '../components/IconButton';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: colors.BLUE,
    borderBottomWidth: 0
  },
  title: {
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: '700'
  },
});

export default class Root extends Component {
  render () {
    return (
      <Router store={store}>
        <Scene
          key="root"
          navigationBarStyle={styles.navBar}
          titleStyle={styles.title}>
          <Scene
            key="app"
            component={App}
            title={"Fun With React".toUpperCase()}
            initial
          />
          <Scene
            key="info"
            component={Info}
            title="Last Pull Requests"
            renderBackButton={() => (
              <IconButton
                onPress={() => Actions.pop()}
                name='md-arrow-back'/>
            )}
          />
        </Scene>
      </Router>
    );
  }
}