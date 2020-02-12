import React, {Component} from 'react';
import {Text} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header>
          <Text>Holaaaaaa</Text>
        </Header>
        <Text>buscador</Text>
        <Text>categorias</Text>
        <Text>sugerencias</Text>
      </Home>
    );
  }
}
