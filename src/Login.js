import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Login extends Component {
  render() {
    return(
        <Text>Welcom React!</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Login;