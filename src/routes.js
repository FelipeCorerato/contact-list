import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import About from './screens/About';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    About: {
        screen: About
    }
  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);

