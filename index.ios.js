'use strict'
import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components'
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS
} from 'react-native';
import AppNavigator from './app/navigations/AppNavigator'
import Icon from 'react-native-vector-icons/FontAwesome'

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
        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === "tab1"}
          title={`TAB 1`}
          iconName='user'
          onPress={() => this.setState({selectedTab: "tab1"})}>
          <AppNavigator
          initialRoute={{ident: "PeopleIndex"}} />
        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === "tab2"}
          title={`TAB 2`}
          iconName='user'
          onPress={() => this.setState({selectedTab: "tab2"})}>
          <AppNavigator
            initialRoute={{ident: "PersonShow",
                           person: {firstName: "jordan", lastName: "leigh", roomNumber: 30}}} />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
 }

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Scratch', () => Scratch);
