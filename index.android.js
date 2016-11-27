/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Dimensions
} from 'react-native';
var fullwidth = Dimensions.get('window').width; //full width
export default class GithubFetchErrorInReactNative extends Component {

  constructor(props){
    super(props);

    this.state = {loading:true};
  }

  componentDidMount(){

  }

  loadGithub(){
    this.setState({...this.state, loading:true});
    fetch("https://github.com").then(
      response => {
        var headers = response.headers.map;
        var headersCount = Object.keys(headers).length
        this.setState({...this.state, headersCount, loading:false, headers: JSON.stringify(response.headers)});
      }
    )
  }
  render() {
    var headerInfo = (<Text>"Loading https://github.com "</Text>);
    if(!this.state.loading){
      headerInfo = (<View>
        <Text> Load completed:</Text>
        <Text> loaded headers count: {this.state.headersCount}</Text>
        </View>);
    }
    return (
      <View style={styles.container}>
      <View style={{flex:0.3,paddingTop:20}}>
        {headerInfo}
        <TouchableHighlight
        style={{height:50, margin: 20,  backgroundColor:'blue', width:200, alignItems:'center', justifyContent:'center'}}
        onPress={()=> {
          this.loadGithub();
        }}
        >
        <Text style={{color:'white'}}>{"Reload"}</Text>
        </TouchableHighlight>
        </View>
        <ScrollView style={{ flex:0.7, backgroundColor:'gray', width:fullwidth}}>
        <Text>{"Github index headers:"}</Text>
        <Text style={{margin:50}}>
        {this.state.headers}
        </Text>
        </ScrollView>
      </View>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GithubFetchErrorInReactNative', () => GithubFetchErrorInReactNative);
