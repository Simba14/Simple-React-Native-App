'use strict'
import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components'
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS
} from 'react-native';
import AppNavigator from './app/navigations/AppNavigator'

export default class Scratch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: "tab1"
    }
  }
  render() {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === "tab1"}
          title={`TAB 1`}>
          <AppNavigator
          initialRoute={{ident: "PeopleIndex"}} />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === "tab2"}
          title={`TAB 2`}>
          <AppNavigator
            initialRoute={{ident: "PersonShow",
                           person: {firstName: "jordan", lastName: "leigh", roomNumber: 30}}} />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
 }

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Scratch', () => Scratch);
