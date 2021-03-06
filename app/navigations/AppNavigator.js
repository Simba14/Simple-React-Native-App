'use strict'
import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components'
import {
  StyleSheet
} from 'react-native';

import PeopleIndexScreen from '../screens/PeopleIndexScreen'
import PersonShowScreen from '../screens/PersonShowScreen'

export default class AppNavigator extends Component {

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
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene}
        />
    );
  }
 }

const styles = StyleSheet.create({

  navigatorStyles: {

  }
});

module.exports = AppNavigator
