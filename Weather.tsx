import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Forecast from './Forecast';
import OpenWeatherMap from './services/OpenWeatherMap';

export default class Weather extends Component {

  state = {
    zip: '',
    forecast: {
      main: '',
      description: '',
      temp: '',
    },
  }

  // _handleTextChange = (event: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
  _handleTextChange = (event: any) => {
    console.log('_handleTextChange evnet: ', event);
    let zip = event.nativeEvent.text;
    OpenWeatherMap.fetchForecast(zip).then(forecast => {
      console.log(forecast);
      this.setState({ forecast: forecast });
    });
  }

  test = () => {
    console.log('test!!');
    let zip = "10001";
    OpenWeatherMap.fetchForecast(zip).then(forecast => {
      console.log(forecast);
      this.setState({ forecast: forecast });
    });
  }

  render() {
    let content = null;
    if(this.state.forecast !== null) {
      content = (
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
        />
      )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You input {this.state.zip}
        </Text>
        {content}
        <TextInput style={styles.input} onSubmitEditing={this._handleTextChange} />
        <Button title="TEST" onPress={this.test} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666666',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40,
  },
});
