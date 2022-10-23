import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings';
import { Actions } from '../screens/Actions';
import { Portfolio } from '../screens/Portfolio';
import { Prices } from '../screens/Prices';

const TabBarNavigation = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <TabBarNavigation.Navigator>
      <TabBarNavigation.Screen name='Home' component={Home} />
      <TabBarNavigation.Screen name='Portfolio' component={Portfolio} />
      <TabBarNavigation.Screen name='Actions' component={Actions} />
      <TabBarNavigation.Screen name='Prices' component={Prices} />
      <TabBarNavigation.Screen name='Settings' component={Settings} />
    </TabBarNavigation.Navigator>
  )
}

export function AppNavigation() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}