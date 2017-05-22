'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity
} from 'react-native';

import ViewContainer from '.././components/ViewContainer';
import StatusBarBackground from '.././components/StatusBarBackground';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PersonShowScreen extends Component {
  constructor(props) {
    super(props)
    }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground style={{backgroundColor: 'mistyrose'}}/>
        <Text style={{marginTop:100, fontSize: 20, marginLeft: 25}}>{'PERSON SHOW SCREEN'}</Text>
        <Text style={styles.personName}>{`${_.capitalize(this.props.person.firstName)} ${_.capitalize(this.props.person.lastName)}`}</Text>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  personName: {
    marginLeft: 25,
  }
});

module.exports = PersonShowScreen
