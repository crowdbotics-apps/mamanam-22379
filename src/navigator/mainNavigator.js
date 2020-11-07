import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps169146Navigator from '../features/Maps169146/navigator';
import ArticleList169125Navigator from '../features/ArticleList169125/navigator';
import ArticleList169124Navigator from '../features/ArticleList169124/navigator';
import ArticleList169123Navigator from '../features/ArticleList169123/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps169146: { screen: Maps169146Navigator },
ArticleList169125: { screen: ArticleList169125Navigator },
ArticleList169124: { screen: ArticleList169124Navigator },
ArticleList169123: { screen: ArticleList169123Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
