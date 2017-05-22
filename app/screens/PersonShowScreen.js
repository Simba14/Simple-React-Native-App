'use strict'
import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components'
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
      <ViewContainer style={{backgroundColor: "dodgerblue"}}>
        <StatusBarBackground style={{backgroundColor: 'mistyrose'}}/>

        <TouchableOpacity onPress={() => this.props.navigator.pop() }>
          <Icon name="times" size={30}/>
        </TouchableOpacity>

        <Text style={{marginTop:20, fontSize: 20, marginLeft: 25}}>{'Tenant Information'}</Text>
        <Text style={styles.personName}>{`${_.capitalize(this.props.person.firstName)} ${_.capitalize(this.props.person.lastName)}`}</Text>
        <Text style={styles.personName}>Room Number: {this.props.person.roomNumber}</Text>
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
    marginTop: 10
  }
});

module.exports = PersonShowScreen
