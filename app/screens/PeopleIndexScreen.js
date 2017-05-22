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

const people = [
  {firstName: "jordan", lastName: "Leigh", roomNumber: 30},
  {firstName: "will", lastName: "Piers", roomNumber: 14},
  {firstName: "berkeley", lastName: "Wanner", roomNumber: 2}
]

export default class PeopleIndexScreen extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    }
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground style={{backgroundColor: 'mistyrose'}}/>
        <ListView
          style={{marginTop: 100}}
          dataSource={this.state.peopleDataSource}
          renderRow={(person) => { return this._renderPersonRow(person) }} />
      </ViewContainer>
    );
  }

  _renderPersonRow(person) {
    return (
      <TouchableOpacity style={styles.personRow} onPress={(event) => this._navigateToPersonShow(person) }>
        <Text style={styles.personName}>{`${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}`}</Text>
        <View style={{flex:1}} />
        <Icon name="chevron-right" style={styles.personMoreIcon} />
      </TouchableOpacity>
    );
  }

  _navigateToPersonShow(person) {
    this.props.navigator.push({
      ident: "PersonShow",
      person
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  personRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  personName: {
    marginLeft: 25
  },
  personMoreIcon: {
    color: "green",
    height: 20,
    width: 20,
    marginRight: 25
  }
});

module.exports = PeopleIndexScreen
