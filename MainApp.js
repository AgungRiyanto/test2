import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './src/screens/auth/Login';
import LandingPage from './src/screens/LandingPage';
import Home from './src/screens/Home';
import Menu from './src/screens/menu/Menu';

const Routing = createStackNavigator(
  {
    Main: {
      screen: LandingPage,
    },
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
    },
    Menu: {
      screen: Menu,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Main',
  },
);

export default createAppContainer(Routing);
