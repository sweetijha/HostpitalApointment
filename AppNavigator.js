import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/Login';
const AppNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
          header: null,
        },
      },
});
const App = createAppContainer(AppNavigator);
export default App;
