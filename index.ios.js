'use strict'
import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components'
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import PeopleIndexScreen from './app/screens/PeopleIndexScreen'
import PersonShowScreen from './app/screens/PersonShowScreen'

export default class Scratch extends Component {

  _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator } //allows global props to be injected into every screen

    switch(route.ident) { //selects the screen based on the route.ident passed in
      case "PeopleIndex":
        return (
          <PeopleIndexScreen
            {...globalNavigatorProps} />
        );
      case "PersonShow":
        return (
          <PersonShowScreen
            {...globalNavigatorProps}
            person={route.person} />
        )
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
