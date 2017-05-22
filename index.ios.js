'use strict'
import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components'
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import PeopleIndexScreen from './app/screens/PeopleIndexScreen'

export default class Scratch extends Component {

  _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }

    switch(route.ident) {
      case "PeopleIndex":
        return (
          <PeopleIndexScreen
            {...globalNavigatorProps} />
        );
      default:
        return (
        <PeopleIndexScreen
          {...globalNavigatorProps} />
        );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ident: "PeopleIndex"}}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene} />
    );
  }
 }

const styles = StyleSheet.create({

  navigatorStyles: {

  }
});

AppRegistry.registerComponent('Scratch', () => Scratch);
