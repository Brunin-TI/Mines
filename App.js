import React, {Component} from 'react'
import {Plattform, StyleSheet, View, Text} from 'react-native'
import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {
  render() {
    return (
      <View >
        <Text> Iniciando o Mines! </Text>
        <Text>Tamanho da grade:
        {params.getColumnsAmount()}x{params.getColumnsAmount()}</Text>
        <Field />
      </View>
    );
  }
}
