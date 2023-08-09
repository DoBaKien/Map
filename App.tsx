import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Map from './src/screen/map';
import RealmEx from './src/screen/realm';
import Home from './src';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}></Stack.Screen>
        <Stack.Screen
          name="Map"
          component={Map}
          options={{
            headerShown: false,
          }}></Stack.Screen>
        <Stack.Screen
          name="Realm"
          component={RealmEx}
          options={{
            headerShown: false,
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
