import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from './screen/Home';
import Inbox from './screen/Inbox';
import Settings from './screen/Settings';
import Appointments from './screen/Appointments';

const stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Inbox" component={Inbox} />
        <stack.Screen name="Settings" component={Settings} />
        <stack.Screen name="Appointments" component={Appointments} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
