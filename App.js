import { StackNavigator } from 'react-navigation';

import LoginPage from './src/pages/LoginPage';
import SeriesPage from './src/pages/SeriesPage';

export default StackNavigator({
  'Login': {
    screen: LoginPage,
    navigationOptions: {
      title: "Bem Vindo !"
    }
  },
  'Main':{
    screen: SeriesPage,
    
  }

},{
  navigationOptions: {
    title: "Séries",
    headerTintColor: "white",
    headerStyle:{
      backgroundColor: "#673AB7"
    },
    headerTitleStyle:{
      color: "white",
      fontSize: 25,
    }
  }
})