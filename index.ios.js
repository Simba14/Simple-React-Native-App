'use strict'
import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components'
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import AppNavigator from './app/navigations/AppNavigator'

export default class Scratch extends Component {

  render() {
    return (
      <AppNavigator />
    );
  }
 }

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Scratch', () => Scratch);
