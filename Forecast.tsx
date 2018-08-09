import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export interface ForecaseIProps {
  main: string;
  description: string;
  temp: string;
}

export default class Forecast extends Component<ForecaseIProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}> {this.props.main} </Text>
        <Text style={styles.mainText}> {this.props.description} </Text>
        <Text style={styles.bigText}> {this.props.temp} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        height: 130
    },
    mainText: {
        flex: 1,
        fontSize: 16,
        textAlign: "center",
        color: "#FFFFFF",
    },
    bigText: {
      flex: 2,
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      color: "#FFFFFF"
    }
});
