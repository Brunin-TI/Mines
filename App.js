import React, {Component} from 'react'
import {Plattform, StyleSheet, View, Text} from 'react-native'
import params from './src/params'
import Field from './src/components/Field'


export default class App extends Component {
  render() {
    return (
      <View>
        <Text> Iniciando o Mines! </Text>
        <Text>Tamanho da grade:
        {params.getColumnsAmount()}x{params.getColumnsAmount()}</Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1}/>
        <Field opened nearMines={2}/>
        <Field opened nearMines={3}/>
        <Field opened nearMines={6}/>
        <Field mined />
        <Field opened mined />
        <Field opened mined exploded />
        <Field flagged />
        <Field flagged opened />
        
      </View>
    );
  }
}


