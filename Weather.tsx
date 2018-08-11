import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';
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
    let zip = event.nativeEvent.text;
    OpenWeatherMap.fetchForecast(zip).then(forecast => {
      console.log(forecast);
      this.setState({ forecast: forecast });
    });
  }

  render() {
    let content = null;
    if (this.state.forecast !== null) {
      content = (
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
        />
      )
    }
    return (
      <ImageBackground source={require("./assets/imgs/flowers.png")} resizeMode="cover" style={styles.backdrop} >
        <View style={styles.overlay}>
          <View style={styles.row}>
            <Text style={styles.mainText}>
              Current weather for 
            </Text>
            <View style={styles.zipContainer}>
              <TextInput style={[styles.zipCode, styles.mainText]} onSubmitEditing={this._handleTextChange} underlineColorAndroid="transparent"/>
              {/* <TextInput style={{ color:"white", flex: 1, width: 100, paddingLeft: 12, borderBottomColor: "#DDDDDD" }} onSubmitEditing={this._handleTextChange} underlineColorAndroid="transparent"/> */}
            </View>
          </View>
          {content}
        </View>
      </ImageBackground>
    )
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
  },
  backdrop: {
    flex: 1,
    flexDirection: "column",
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: "#000000",
    opacity: 0.5,
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 30,
  },
  zipContainer: {
    height: 26,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3,
  },
  zipCode: {
    flex: 1,
    flexBasis: 1,
    width: 50,
    height: 26,
  },
  mainText: {
    fontSize: baseFontSize, color: "#FFFFFF"
  },
});
